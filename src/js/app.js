(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const dataset = dataSet[dataSetVersion];
  const catalog = dataset.characterData.map((item, id) => ({ ...item, id }));
  const definitions = dataset.options.find((o) => o.key === "group").sub;
  const groupPhotos = catalog.filter((i) => i.opts.group_label);
  const groups = definitions.map((g) => ({
    ...g,
    members: catalog.filter((i) => i.opts.group?.includes(g.key)),
    photo: groupPhotos.find((i) => i.opts.group_label.includes(g.key)),
  })).filter((g) => g.members.length);
  const favoriteOrder = [
    "NewJeans",
    "Aespa",
    "IVE",
    "Le Sserafim",
    "Twice",
    "Blackpink",
    "Red Velvet",
    "ITZY",
    "NMIXX",
    "ILLIT",
  ];
  groups.sort((a, b) => {
    const priority = (g) => {
      const i = favoriteOrder.findIndex((n) =>
        n.toLowerCase() === g.key.toLowerCase()
      );
      return i < 0 ? 99 : i;
    };
    return priority(a) - priority(b) || a.name.localeCompare(b.name);
  });
  let selected = new Set(),
    mode = "idols",
    generation = "all",
    session = null,
    sorter = null,
    view = "setup";
  const key = "bias-club-session-v1", lineupKey = "bias-club-lineup-v1";
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c]),
    );
  const shortName = (item) => {
    const group = item.opts.group?.[0];
    return group &&
        item.name.toLowerCase().startsWith(group.toLowerCase() + " ")
      ? item.name.slice(group.length + 1)
      : item.name;
  };
  const groupName = (item) => item.opts.group?.join(" · ") || "Group";
  const imageURL = (item) =>
    photoCache[item.img] ||
    (/^https?:/.test(item.img) ? item.img : imageRoot + item.img);
  const fallback = "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><rect width="180" height="180" fill="#fbe8f0"/><text x="90" y="112" text-anchor="middle" font-size="70" fill="#b84d79">♡</text></svg>',
    );
  document.addEventListener("error", (event) => {
    if (event.target.tagName === "IMG" && event.target.src !== fallback) {
      event.target.src = fallback;
      event.target.classList.add("fallback-image");
    }
  }, true);
  const photo = (item, cls = "") =>
    `<img src="${escape(imageURL(item))}" alt="${
      escape(item.name)
    }" loading="lazy" decoding="async" referrerpolicy="no-referrer" class="${cls}">`;
  function toast(message) {
    $("toast").textContent = message;
    $("toast").hidden = false;
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => $("toast").hidden = true, 3500);
  }
  function read(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }
  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      toast(
        "Storage is unavailable. Keep this tab open to retain your session.",
      );
    }
  }
  function idsFor(g) {
    return mode === "idols"
      ? g.members.map((i) => i.id)
      : g.photo
      ? [g.photo.id]
      : [];
  }
  function visibleGroups() {
    const query = $("search").value.trim().toLowerCase();
    return groups.filter((g) =>
      idsFor(g).length && (generation === "all" || (generation === "selected"
        ? idsFor(g).some((id) =>
          selected.has(id)
        )
        : g.gen?.includes(generation) || g.members.some((m) =>
          m.opts.gen?.includes(generation)
        ))) &&
      (!query || g.name.toLowerCase().includes(query) ||
        (mode === "idols" &&
          g.members.some((m) => m.name.toLowerCase().includes(query))))
    );
  }
  function renderGroups() {
    const opened = new Set(
      [...document.querySelectorAll("details[open]")].map((d) =>
        d.dataset.group
      ),
    );
    const visible = visibleGroups();
    $("group-count").textContent = `${visible.length} groups & soloists`;
    $("empty").hidden = !!visible.length;
    $("select-visible").disabled = !visible.length;
    $("groups").innerHTML = visible.map((g) => {
      const index = groups.indexOf(g),
        ids = idsFor(g),
        count = ids.filter((id) => selected.has(id)).length;
      const query = $("search").value.trim().toLowerCase();
      const matchedMember = query && !g.name.toLowerCase().includes(query);
      return `<article data-card="${index}" class="group-card ${
        count ? "has-selection" : ""
      }"><div class="group-cover">${
        photo(g.photo || g.members[0])
      }<label class="group-check"><input type="checkbox" data-group-check="${index}" aria-label="Select all ${
        escape(g.name)
      }" ${
        count === ids.length ? "checked" : ""
      }></label></div><div class="group-content"><div class="group-title"><strong>${
        escape(g.name)
      }</strong><span class="generation">${
        g.gen?.[0]?.replace("gen", "GEN ") || "SOLO"
      }</span></div>${
        mode === "idols"
          ? `<details data-group="${index}" ${
            opened.has(String(index)) || matchedMember ? "open" : ""
          }><summary>${count ? `${count} / ` : ""}${ids.length} member${
            ids.length === 1 ? "" : "s"
          }${count ? " selected" : ""}</summary><div class="members">${
            g.members.map((m) =>
              `<label><input type="checkbox" data-member="${m.id}" ${
                selected.has(m.id) ? "checked" : ""
              }>${escape(shortName(m))}</label>`
            ).join("")
          }</div></details>`
          : `<div class="fine">${count ? "Selected" : "Not selected"}</div>`
      }</div></article>`;
    }).join("");
    document.querySelectorAll("[data-group-check]").forEach((input) => {
      const ids = idsFor(groups[Number(input.dataset.groupCheck)]),
        count = ids.filter((id) => selected.has(id)).length;
      input.indeterminate = count > 0 && count < ids.length;
    });
  }
  function updateSelection() {
    const n = selected.size, bound = BiasSorter.bound(n);
    $("selection-count").textContent = n;
    $("selection-unit").textContent = mode;
    $("selected-groups").innerHTML = groups.filter((g) =>
      idsFor(g).some((id) => selected.has(id))
    ).map((g) =>
      `<button data-remove="${groups.indexOf(g)}" aria-label="Remove ${
        escape(g.name)
      }">${escape(g.name)} ×</button>`
    ).join("");
    $("estimate").textContent = n > 1 ? `up to ${bound}` : "—";
    $("duration").textContent = n > 1
      ? `~${Math.max(1, Math.ceil(bound * 3 / 60))} min`
      : "—";
    $("start").disabled = n < 2;
    $("clear").hidden = !n;
    $("start-hint").textContent = n < 2
      ? `Choose at least 2 ${mode} to start`
      : "Autosaves on this device";
    write(lineupKey, { mode, ids: [...selected] });
  }
  function refresh() {
    renderGroups();
    updateSelection();
  }
  $("groups").addEventListener("click", (event) => {
    // Native controls handle their own clicks, without toggling the whole group.
    if (event.target.closest("details, input, label, button, a")) return;
    event.target.closest("[data-card]")?.querySelector("[data-group-check]")
      ?.click();
  });
  $("groups").addEventListener("change", (event) => {
    const input = event.target;
    if (input.dataset.groupCheck !== undefined) {
      idsFor(groups[Number(input.dataset.groupCheck)]).forEach((id) =>
        input.checked ? selected.add(id) : selected.delete(id)
      );
    } else if (input.dataset.member) {
      input.checked
        ? selected.add(Number(input.dataset.member))
        : selected.delete(Number(input.dataset.member));
    }
    const focusSelector = input.dataset.member
      ? `[data-member="${input.dataset.member}"]`
      : `[data-group-check="${input.dataset.groupCheck}"]`;
    refresh();
    document.querySelector(focusSelector)?.focus({ preventScroll: true });
  });
  $("selected-groups").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove]");
    if (button) {
      idsFor(groups[Number(button.dataset.remove)]).forEach((id) =>
        selected.delete(id)
      );
      refresh();
    }
  });
  $("search").addEventListener("input", renderGroups);
  document.querySelectorAll("[data-gen]").forEach((button) =>
    button.onclick = () => {
      generation = button.dataset.gen;
      document.querySelectorAll("[data-gen]").forEach((b) =>
        b.setAttribute("aria-pressed", b === button)
      );
      renderGroups();
    }
  );
  document.querySelectorAll("[data-mode]").forEach((button) =>
    button.onclick = () => {
      if (mode === button.dataset.mode) return;
      const active = groups.filter((g) =>
        idsFor(g).some((id) => selected.has(id))
      );
      mode = button.dataset.mode;
      selected = new Set(active.flatMap(idsFor));
      document.querySelectorAll("[data-mode]").forEach((b) =>
        b.setAttribute("aria-pressed", b === button)
      );
      refresh();
    }
  );
  $("select-visible").onclick = () => {
    visibleGroups().flatMap(idsFor).forEach((id) => selected.add(id));
    refresh();
  };
  $("clear").onclick = () => {
    selected.clear();
    refresh();
  };
  function setView(next) {
    view = next;
    ["setup", "sorting", "results"].forEach((id) => $(id).hidden = id !== next);
    ["setup", "sort", "results"].forEach((id) => {
      const active = id === (next === "sorting" ? "sort" : next);
      if (active) $("step-" + id).setAttribute("aria-current", "step");
      else $("step-" + id).removeAttribute("aria-current");
    });
    window.scrollTo({ top: 0, behavior: "instant" });
    if (next !== "setup") $(next).focus({ preventScroll: true });
  }
  function save() {
    write(key, session);
  }
  function validSession(value) {
    return value && value.version === dataSetVersion &&
      ["idols", "groups"].includes(value.mode) && Array.isArray(value.ids) &&
      value.ids.length >= 2 && value.ids.length <= catalog.length &&
      new Set(value.ids).size === value.ids.length &&
      value.ids.every((id) => Number.isInteger(id) && catalog[id]) &&
      Array.isArray(value.choices) &&
      value.choices.length <= BiasSorter.bound(value.ids.length) &&
      value.choices.every((c) => ["left", "right", "tie"].includes(c));
  }
  function resume(value) {
    if (!validSession(value)) {
      toast("This session could not be loaded. Please start a new lineup.");
      return;
    }
    session = value;
    sorter = BiasSorter.replay(session.ids, session.choices);
    setView(sorter.result ? "results" : "sorting");
    renderBattle();
  }
  $("start").onclick = () => {
    if (selected.size < 2) return;
    const ids = [...selected];
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    session = {
      version: dataSetVersion,
      mode,
      ids,
      choices: [],
      started: Date.now(),
    };
    sorter = new BiasSorter(ids);
    save();
    setView("sorting");
    renderBattle();
  };
  function renderBattle() {
    if (sorter.result) {
      session.finished ||= Date.now();
      save();
      if (view !== "results") setView("results");
      renderResults();
      return;
    }
    const pair = sorter.pair();
    ["left", "right"].forEach((side, index) => {
      const item = catalog[pair[index]];
      $("pick-" + side).innerHTML = `${photo(item)}<strong>${
        escape(shortName(item))
      }</strong><small>${escape(groupName(item))}</small>`;
      $("pick-" + side).setAttribute("aria-label", `Choose ${item.name}`);
    });
    const bound = BiasSorter.bound(session.ids.length);
    $("battle-label").textContent = `MATCHUP ${
      session.choices.length + 1
    } · ${session.ids.length} ${session.mode.toUpperCase()}`;
    $("progress-label").textContent =
      `${session.choices.length} choices made · at most ${
        Math.max(0, bound - session.choices.length)
      } left`;
    $("progress").value = session.choices.length / bound * 100;
    $("progress").setAttribute(
      "aria-label",
      "Choices made relative to maximum matchups",
    );
    $("undo").disabled = !session.choices.length;
  }
  function choose(choice) {
    if (view !== "sorting" || sorter.result) return;
    session.choices.push(choice);
    sorter.choose(choice);
    save();
    renderBattle();
  }
  $("pick-left").onclick = () => choose("left");
  $("pick-right").onclick = () => choose("right");
  $("tie").onclick = () => choose("tie");
  $("undo").onclick = () => {
    if (!session.choices.length) return;
    session.choices.pop();
    delete session.finished;
    sorter = BiasSorter.replay(session.ids, session.choices);
    save();
    renderBattle();
  };
  $("pause").onclick = () => {
    save();
    $("resume-banner").hidden = false;
    setView("setup");
  };
  $("resume").onclick = () => resume(read(key));
  let ranked = [];
  function renderResults() {
    ranked = [];
    let rank = 1;
    sorter.result.forEach((bucket) => {
      bucket.forEach((id) => ranked.push({ id, rank }));
      rank += bucket.length;
    });
    $("result-meta").textContent =
      `${session.ids.length} ${session.mode} · ${session.choices.length} matchups`;
    const limit = Number($("result-images").value);
    const featured = ranked.slice(0, limit);
    const remaining = ranked.slice(limit);
    $("ranking").innerHTML =
      `<header class="ranking-heading"><h2>My ranking <span>♡</span></h2><span>${ranked.length} ${
        escape(session.mode)
      }</span></header>` +
      (featured.length
        ? `<div class="rank-highlights">${
          featured.map(({ id, rank }) => {
            const item = catalog[id];
            return `<div class="rank-highlight"><div class="rank-photo">${
              photo(item)
            }<span class="rank-badge">${rank}</span></div><strong>${
              escape(shortName(item))
            }</strong><small>${escape(groupName(item))}</small></div>`;
          }).join("")
        }</div>`
        : "") +
      (remaining.length
        ? `<div class="rank-list">${
          remaining.map(({ id, rank }) => {
            const item = catalog[id];
            return `<div class="rank-row"><span class="rank-number">${rank}</span><div><strong>${
              escape(shortName(item))
            }</strong><small>${escape(groupName(item))}</small></div></div>`;
          }).join("")
        }</div>`
        : "") +
      '<div class="ranking-credit">bias sorter ♡</div>';
  }
  $("result-images").onchange = renderResults;
  $("undo-final").onclick = () => {
    if (!session.choices.length) return;
    setView("sorting");
    $("undo").click();
  };
  $("new-lineup").onclick = () => {
    mode = session.mode;
    selected = new Set(session.ids);
    document.querySelectorAll("[data-mode]").forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.mode === mode)
    );
    history.replaceState(null, "", location.pathname);
    $("resume-banner").hidden = false;
    refresh();
    setView("setup");
  };
  function download(blob, filename) {
    const url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  $("text-export").onclick = () =>
    download(
      new Blob([
        "My bias list ♡\n\n" +
        ranked.map((r) => `${r.rank}. ${catalog[r.id].name}`).join("\n"),
      ], { type: "text/plain" }),
      "my-bias-list.txt",
    );
  $("share").onclick = async () => {
    const url = `${location.origin}${location.pathname}#ranking=${
      LZString.compressToEncodedURIComponent(JSON.stringify(session))
    }`;
    try {
      await navigator.clipboard.writeText(url);
      toast("Result link copied");
    } catch {
      window.prompt("Copy your result link:", url);
    }
  };
  $("download").onclick = async () => {
    $("download").disabled = true;
    $("download").textContent = "Saving image…";
    try {
      const canvas = await createRankingImage({
        entries: ranked.map(({ id, rank }) => ({
          rank,
          name: shortName(catalog[id]),
          group: groupName(catalog[id]),
          image: imageURL(catalog[id]),
        })),
        photoCount: Number($("result-images").value),
        mode: session.mode,
      });
      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );
      if (!blob) throw new Error("Image creation failed");
      download(blob, "my-bias-ranking.png");
      toast("Image saved");
    } catch {
      toast("Could not save the image. Try fewer photos or download text.");
    } finally {
      $("download").disabled = false;
      $("download").textContent = "Save image ↓";
    }
  };
  $("help").onclick = () => $("help-dialog").showModal();
  $("close-help").onclick = () => $("help-dialog").close();
  document.addEventListener("keydown", (event) => {
    if (
      $("help-dialog").open ||
      /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.ctrlKey ||
      event.metaKey || event.altKey || event.repeat
    ) return;
    if (view === "sorting") {
      const actions = {
        ArrowLeft: () => choose("left"),
        h: () => choose("left"),
        ArrowRight: () => choose("right"),
        l: () => choose("right"),
        ArrowUp: () => choose("tie"),
        k: () => choose("tie"),
        ArrowDown: () => $("undo").click(),
        j: () => $("undo").click(),
      };
      if (actions[event.key]) {
        event.preventDefault();
        actions[event.key]();
      }
    } else if (view === "setup" && event.key === "/") {
      event.preventDefault();
      $("search").focus();
    }
  });
  const previous = read(lineupKey);
  if (
    previous && ["idols", "groups"].includes(previous.mode) &&
    Array.isArray(previous.ids)
  ) {
    mode = previous.mode;
    selected = new Set(
      previous.ids.filter((id) =>
        Number.isInteger(id) && catalog[id] &&
        (mode === "idols"
          ? catalog[id].opts.group
          : catalog[id].opts.group_label)
      ),
    );
  }
  document.querySelectorAll("[data-mode]").forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.mode === mode)
  );
  $("resume-banner").hidden = !validSession(read(key));
  refresh();
  if (location.hash.startsWith("#ranking=")) {
    try {
      resume(
        JSON.parse(
          LZString.decompressFromEncodedURIComponent(location.hash.slice(9)),
        ),
      );
    } catch {
      toast("That result link could not be read. Your lineup is ready below.");
    }
  } else if (location.search.length > 1) {
    location.replace("legacy.html" + location.search);
  }
})();
