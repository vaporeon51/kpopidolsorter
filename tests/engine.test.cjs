const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const BiasSorter = vm.runInNewContext(
  fs.readFileSync("src/js/engine.js", "utf8") + ";BiasSorter",
  { module: { exports: {} } },
);
const equal = (a, b) =>
  assert.deepEqual(
    JSON.parse(JSON.stringify(a)),
    JSON.parse(JSON.stringify(b)),
  );
for (let n = 2; n <= 180; n++) {
  for (const ties of [false, true]) {
    const ids = Array.from({ length: n }, (_, i) => i).sort(() =>
      Math.random() - .5
    );
    const score = (id) => ties ? Math.floor(id / 4) : id;
    const sorter = new BiasSorter(ids), choices = [];
    while (!sorter.result) {
      const [a, b] = sorter.pair();
      const c = score(a) === score(b)
        ? "tie"
        : score(a) < score(b)
        ? "left"
        : "right";
      choices.push(c);
      sorter.choose(c);
      assert.ok(choices.length <= BiasSorter.bound(n));
    }
    equal(
      sorter.result.flat().slice().sort((a, b) => a - b),
      Array.from({ length: n }, (_, i) => i),
    );
    const scores = sorter.result.map((bucket) => {
      assert.ok(bucket.every((id) => score(id) === score(bucket[0])));
      return score(bucket[0]);
    });
    equal(scores, [...new Set(scores)].sort((a, b) => a - b));
    equal(BiasSorter.replay(ids, choices).result, sorter.result);
    const undo = BiasSorter.replay(ids, choices.slice(0, -1));
    assert.ok(undo.pair());
    undo.choose(choices.at(-1));
    equal(undo.result, sorter.result);
  }
}
const allTied = new BiasSorter([0, 1, 2, 3, 4]);
while (!allTied.result) allTied.choose("tie");
assert.equal(allTied.result.length, 1);
for (const path of ["src/js/app.js", "src/js/engine.js"]) {
  new vm.Script(fs.readFileSync(path, "utf8"));
}
const context = vm.createContext({});
vm.runInContext(
  fs.readFileSync("src/js/data.js", "utf8") +
    fs.readFileSync("src/js/data/2025-11-01.js", "utf8") +
    ";globalThis.catalog=dataSet[dataSetVersion]",
  context,
);
assert.ok(context.catalog.characterData.length > 0);
console.log(
  "Passed: 358 sorting scenarios, ties, comparison bounds, replay, undo, JavaScript syntax, catalog loading.",
);
