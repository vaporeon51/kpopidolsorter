const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
(async () => {
  for (const [count, photoCount] of [[4, 10], [30, 10], [30, 0], [1027, 10]]) {
    const drawn = [], labels = [];
    const ctx = {
      scale() {},
      fillRect() {},
      beginPath() {},
      moveTo() {},
      arcTo() {},
      closePath() {},
      lineTo() {},
      stroke() {},
      save() {},
      clip() {},
      restore() {},
      fill() {},
      drawImage(image) {
        drawn.push(image.src);
      },
      fillText(text) {
        labels.push(text);
      },
      measureText(text) {
        return { width: String(text).length * 7 };
      },
    };
    const canvas = { getContext: () => ctx };
    class Image {
      width = 640;
      height = 800;
      set src(value) {
        this._src = value;
        this.onload();
      }
      get src() {
        return this._src;
      }
    }
    const context = vm.createContext({
      document: { createElement: () => canvas },
      Image,
      setTimeout,
      clearTimeout,
    });
    vm.runInContext(fs.readFileSync("src/js/result-image.js", "utf8"), context);
    const entries = Array.from(
      { length: count },
      (_, i) => ({
        rank: i + 1,
        name: `Idol ${i}`,
        group: "Group",
        image: `photo-${i}.jpg`,
      }),
    );
    await context.createRankingImage({ entries, photoCount, mode: "idols" });
    assert.equal(drawn.length, Math.min(photoCount, count));
    entries.forEach((entry) =>
      assert.ok(labels.includes(entry.name), `Missing ${entry.name}`)
    );
    assert.ok(canvas.width * canvas.height <= 16000000);
    assert.ok(canvas.height <= 30000);
    assert.ok(labels.includes("bias sorter ♡"));
  }
  console.log(
    "Passed: image export includes all rankings, selected photos, branding, and bounded canvas dimensions.",
  );
})();
