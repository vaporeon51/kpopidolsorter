# KpopBiasSorter
A web based character sorter. Allows users to run through a manual merge sort of their favorite characters from a set.

The version in this repo is built for Kpop girl idols.

## Credits
 * [html2canvas](https://github.com/niklasvh/html2canvas/) for image generation.
 * [seedrandom](https://github.com/davidbau/seedrandom) for PRNG used in character array shuffling.
 * [lz-string](https://github.com/pieroxy/lz-string) for shareable link compression.
 * [SpinKit](http://tobiasahlin.com/spinkit/) for loading animation.
 * [thsort](http://mainyan.sakura.ne.jp/thsort.html) for the original inspiration.
 * [clay#6931](https://github.com/claybak/kpopggsorter/) for most of the code base.

This sorter is based on  [execfera/charasort](https://github.com/execfera/charasort). Please refer to their project if you want to learn how to implement your own sorter.

## Known Issues
 * Does not work with CloudFlare's Rocket Loader.
 * Breaks on older versions of IE and mobile Safari, due to various incompatibilities.

## bias sorter redesign

The default page is now a responsive pink sorter with searchable group cards,
individual member selection, generation filters, group ranking mode, comparison
estimates, device-local autosave, unlimited undo, ties, and result link/image/text
exports. The original page and saved URL format remain available in `legacy.html`.
All 1,027 existing catalog photos are cached under `src/assets/idols/` as
optimized JPEGs and served from the same origin. `src/js/photo-cache.js` maps
original image references to those assets; catalog identities and saved links
are unchanged. Missing future images fall back to their original URL and then
a heart placeholder. No database connection is needed at runtime.

Run locally with `python3 -m http.server 8080`, then open http://localhost:8080.
Build a static hosting directory with `python3 scripts/build.py`.

Run tests with Node (`node tests/engine.test.cjs` and `node tests/app.test.cjs`)
or Deno (`deno run --allow-read tests/engine.test.cjs` and
`deno run --allow-read tests/app.test.cjs`). The tests cover the merge-sort engine
and app flows in a simulated DOM; they do not substitute for browser layout tests.

The sorter merges buckets of tied entries, using O(n log n) comparisons rather
than comparing every pair. Selection estimates use the worst-case bound for the
actual bottom-up merge schedule. Progress expresses comparisons made against that
bound, so a session can finish early. Session saves contain the exact shuffled
lineup, catalog version, and choices; replay reconstructs sorting and undo state.

Cards toggle group selection when clicked outside member controls. Results default
to a top-10 portrait grid with remaining ranks in compact columns. PNG exports use
a fixed-width canvas layout so mobile and desktop downloads match. Run
`deno run --allow-read tests/result-image.test.cjs` to check export completeness
and canvas size limits.
