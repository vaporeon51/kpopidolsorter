const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const elements = new Map();
class Element {
  constructor(id) {
    this.id = id;
    this.dataset = {};
    this.value = "";
    this.hidden = false;
    this.handlers = {};
  }
  addEventListener(type, fn) {
    this.handlers[type] = fn;
  }
  setAttribute() {}
  removeAttribute() {}
  focus() {}
  click() {
    this.onclick?.();
  }
}
const html = fs.readFileSync("index.html", "utf8");
for (const match of html.matchAll(/id="([^"]+)"/g)) {
  elements.set(match[1], new Element(match[1]));
}
elements.get("result-images").value = "10";
const modes = ["idols", "groups"].map((mode) =>
  Object.assign(new Element(), { dataset: { mode } })
);
const gens = ["all", "gen2", "gen3", "gen4", "gen5", "selected"].map((gen) =>
  Object.assign(new Element(), { dataset: { gen } })
);
const storage = new Map();
const document = {
  getElementById: (id) => {
    assert.ok(elements.has(id), `Missing ${id}`);
    return elements.get(id);
  },
  querySelectorAll: (sel) =>
    sel === "[data-mode]" ? modes : sel === "[data-gen]" ? gens : [],
  querySelector: () => null,
  addEventListener() {},
};
const context = vm.createContext({
  document,
  localStorage: {
    getItem: (k) => storage.get(k),
    setItem: (k, v) => storage.set(k, v),
  },
  window: { scrollTo() {} },
  location: { hash: "", search: "", pathname: "/", origin: "http://localhost" },
  history: { replaceState() {} },
  setTimeout,
  clearTimeout,
  console,
});
for (
  const path of [
    "data.js",
    "data/2025-11-01.js",
    "engine.js",
    "photo-cache.js",
    "result-image.js",
    "app.js",
  ]
) {
  vm.runInContext(fs.readFileSync("src/js/" + path, "utf8"), context);
}
assert.match(elements.get("groups").innerHTML, /group-card/);
assert.doesNotMatch(
  elements.get("groups").innerHTML,
  /src="https:\/\/i\.imgur/,
);
const cache = vm.runInContext("photoCache", context);
const catalog = vm.runInContext(
  "dataSet[dataSetVersion].characterData",
  context,
);
for (const item of catalog) {
  assert.ok(cache[item.img], `Missing local photo: ${item.name}`);
  const image = fs.readFileSync(cache[item.img]);
  assert.equal(image[0], 0xff);
  assert.equal(image[1], 0xd8);
}

assert.equal(elements.get("start").disabled, true);
elements.get("search").value = "Aespa";
elements.get("search").handlers.input();
// Clicking the non-interactive card delegates to its native group checkbox.
const groupIndex =
  elements.get("groups").innerHTML.match(/data-group-check="(\d+)"/)[1];
const input = {
  dataset: { groupCheck: groupIndex },
  checked: false,
  click() {
    this.checked = !this.checked;
    elements.get("groups").handlers.change({ target: this });
  },
};
const cardTarget = {
  closest(selector) {
    return selector === "[data-card]" ? { querySelector: () => input } : null;
  },
};
elements.get("groups").handlers.click({ target: cardTarget });
assert.equal(Number(elements.get("selection-count").textContent), 4);
elements.get("groups").handlers.click({ target: { closest: () => ({}) } });
assert.equal(
  Number(elements.get("selection-count").textContent),
  4,
  "Member controls must not toggle the group",
);
elements.get("groups").handlers.click({ target: cardTarget });
assert.equal(Number(elements.get("selection-count").textContent), 0);
elements.get("select-visible").click();
assert.equal(Number(elements.get("selection-count").textContent), 4);
elements.get("start").click();
assert.equal(elements.get("sorting").hidden, false);
elements.get("pick-left").click();
elements.get("undo").click();
assert.match(elements.get("battle-label").textContent, /MATCHUP 1/);
elements.get("pause").click();
elements.get("resume").click();
// Finish deterministically, allowing the sort button to become inert at completion.
for (let i = 0; i < 10; i++) elements.get("pick-left").click();
assert.equal(elements.get("results").hidden, false);
assert.match(elements.get("ranking").innerHTML, /Karina/);
elements.get("undo-final").click();
assert.equal(elements.get("sorting").hidden, false);
elements.get("tie").click();
assert.equal(elements.get("results").hidden, false);
elements.get("new-lineup").click();
modes[1].click();
assert.equal(Number(elements.get("selection-count").textContent), 1);
assert.equal(elements.get("start").disabled, true);
elements.get("search").value = "";
elements.get("select-visible").click();
assert.ok(Number(elements.get("selection-count").textContent) > 100);
elements.get("clear").click();
assert.equal(Number(elements.get("selection-count").textContent), 0);
console.log(
  "Passed: app initialization, member selection, start, pick, undo, pause/resume, finish, final undo, group mode, clear.",
);

const session = {
  version: "2025-11-01",
  mode: "idols",
  ids: Array.from({ length: 20 }, (_, i) => i),
  choices: Array(19).fill("tie"),
};
storage.set("bias-club-session-v1", JSON.stringify(session));
elements.get("resume").click();
assert.equal(
  (elements.get("ranking").innerHTML.match(/class="rank-highlight"/g) || [])
    .length,
  10,
);
assert.equal(
  (elements.get("ranking").innerHTML.match(/class="rank-row"/g) || []).length,
  10,
);
assert.match(elements.get("ranking").innerHTML, /bias sorter/);
elements.get("result-images").value = "0";
elements.get("result-images").onchange();
assert.equal(
  (elements.get("ranking").innerHTML.match(/class="rank-row"/g) || []).length,
  20,
);
assert.doesNotMatch(
  elements.get("ranking").innerHTML,
  /class="rank-highlights"/,
);
console.log(
  "Passed: card toggling, independent controls, top-10 layout, compact list, photo toggle.",
);
