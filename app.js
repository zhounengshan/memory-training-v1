const STORAGE_KEY = "memory-system-v2";

const routes = [
  ["methods", "方法", "◫"],
  ["train", "训练", "◎"],
  ["solidify", "巩固", "↻"],
  ["challenge", "挑战", "◇"],
  ["profile", "我的", "☻"],
];

const methods = [
  {
    id: "image",
    name: "图像联想法",
    badge: "基础方法",
    unlock: "词语联想训练",
    visual: "association",
    why: "抽象文字不容易被大脑抓住，图像有颜色、形状、动作，更容易形成线索。",
    use: "词语、概念、数字编码、扑克牌编码、知识点。",
    principle: "把信息变成具体图像，再让图像发生夸张互动。",
    demo: ["老虎 + 冰箱", "一只老虎钻进冰箱，被冻得打喷嚏。", "反例：老虎在旁边，冰箱也在旁边。"],
    steps: ["找到具体物体", "放大、变形或拟人", "让两个物体发生动作", "加入声音、气味、触感", "闭眼复现画面"],
    mistakes: ["图像太普通", "只有名词，没有动作", "每次想象不一致", "没有和下一个信息连接"],
  },
  {
    id: "loci",
    name: "地点法 / 记忆宫殿",
    badge: "顺序核心",
    unlock: "地点路线训练",
    visual: "palace",
    why: "一堆图像会乱，熟悉空间可以提供稳定顺序。",
    use: "数字串、扑克牌、演讲、清单、文章结构。",
    principle: "把图像依次放进熟悉路线的固定地点，回忆时沿路线取回。",
    demo: ["37 91 08", "家门有山鸡，玄关挂球衣，沙发坐雪人。", "地点解决顺序问题，图像解决内容问题。"],
    steps: ["选择熟悉路线", "固定 10 个地点桩", "每个地点只放一个主图像", "让图像和地点互动", "顺序与倒序回忆"],
    mistakes: ["地点太相似", "路线会跳跃", "一个地点塞太多东西", "没有定期复走路线"],
  },
  {
    id: "number",
    name: "数字编码法",
    badge: "抽象转图像",
    unlock: "数字速记训练",
    visual: "digits",
    why: "数字本身没有画面。固定编码能让数字变成可看见、可放置的图像。",
    use: "电话、验证码、圆周率、随机数字、考试数据。",
    principle: "两位一组，把 00-99 固定为图像。之后看到数字立即出图像。",
    demo: ["379108", "37=山鸡，91=球衣，08=雪人，再依次放入地点。", "反例：反复默念三七九一零八。"],
    steps: ["两位一组切分", "给每组数字固定图像", "练到看到数字立刻出图", "把多组图像放进地点", "回忆时图像还原数字"],
    mistakes: ["编码每天变", "编码太抽象", "只背编码表不做回忆", "不记录反应慢的数字"],
  },
  {
    id: "cards",
    name: "扑克牌编码法",
    badge: "竞技入门",
    unlock: "扑克牌速记训练",
    visual: "cards",
    why: "扑克牌顺序多、相似度高，必须先把每张牌变成稳定图像。",
    use: "5 张牌、10 张牌、半副牌、整副牌记忆。",
    principle: "牌面先转编码图像，再放入地点路线。进阶可用 PAO：人物、动作、物品。",
    demo: ["红桃 5", "红桃=情绪/红色，5=鼓手，画面是鼓手抱着鼓槌站在家门。", "反例：只看牌面，努力记住红桃五这个词。"],
    steps: ["认识花色系统", "建立 52 张牌编码", "5 张牌放进 5 个地点", "遮住牌面主动回忆", "逐步增加到 10 张、半副牌"],
    mistakes: ["编码不固定", "只练单张不练顺序", "没有地点路线", "回忆时不按地点走"],
  },
  {
    id: "keyword",
    name: "关键词法",
    badge: "学习考试",
    unlock: "一行字速记训练",
    visual: "keyword",
    why: "文章和知识点信息太多，先抓结构和关键词，才能避免整段硬背。",
    use: "句子、段落、课本、演讲稿、知识点。",
    principle: "先提炼关键词，再把关键词变成图像或结构，最后主动复述。",
    demo: ["学习不是反复看资料，而是合上书以后能主动说出来。", "关键词：学习、反复看、合上书、主动说。", "关键词保留骨架，图像让骨架有回忆线索。"],
    steps: ["找主语、动作、结果", "删掉虚词", "保留 3-5 个关键词", "关键词变图像", "按原顺序复述"],
    mistakes: ["关键词太多", "只划线不回忆", "忽略结构", "只求逐字一致"],
  },
  {
    id: "recall",
    name: "主动回忆 + 间隔复习",
    badge: "长期保持",
    unlock: "错题巩固计划",
    visual: "recall",
    why: "看懂不等于记住。遮住材料主动回忆，才能发现真实漏洞。",
    use: "所有训练后的巩固。",
    principle: "先回忆，再对照，再隔一段时间复练。",
    demo: ["刚学完 4 位数字", "遮住数字，自己输入，再看哪里错。", "测试不是只用来评分，测试本身也是记忆强化。"],
    steps: ["遮住材料", "尽力回忆", "对照答案", "记录错误类型", "按间隔复习"],
    mistakes: ["边看边背", "错了不分析", "只练简单题", "一次通过后不复习"],
  },
];

const numberCodes = { "08": "雪人", "12": "婴儿", "26": "河流", "37": "山鸡", "43": "石山", "55": "火车", "68": "喇叭", "73": "旗山", "84": "巴士", "91": "球衣" };
const palace = ["家门", "玄关镜", "鞋柜", "沙发", "茶几", "电视", "窗台", "餐桌", "厨房", "冰箱"];
const wordPool = [
  "清晨的火车穿过山谷，孩子在窗边记下第一束阳光。",
  "学习不是反复看资料，而是合上书以后能主动说出来。",
  "演讲前先确定三个关键词，再把每个关键词放进熟悉的房间。",
  "把抽象知识变成画面，再用地点顺序把画面串起来。",
];
const suits = [["♠", "黑桃", "black"], ["♥", "红桃", "red"], ["♣", "梅花", "black"], ["♦", "方块", "red"]];
const ranks = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5"];

const tracks = [
  { id: "digits", method: "number", title: "数字速记", levels: ["4 位数字", "8 位数字", "12 位数字", "20 位数字"] },
  { id: "words", method: "keyword", title: "一行字速记", levels: ["1 行短句", "2 行材料", "4 行材料"] },
  { id: "cards", method: "cards", title: "扑克牌速记", levels: ["5 张牌", "10 张牌", "半副牌"] },
  { id: "image", method: "image", title: "图像联想", levels: ["2 词联想", "4 词串联", "8 词串联"] },
  { id: "loci", method: "loci", title: "地点路线", levels: ["10 点路线", "倒序提取", "随机抽点"] },
];

let state = loadState();
let tab = "methods";
let selectedMethod = "image";
let activeSession = null;
let timerId = null;

function loadState() {
  const base = { learned: ["image"], records: [], mistakes: [], challenges: [] };
  try {
    return { ...base, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return base;
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function app() {
  document.querySelector("#app").innerHTML = `
    <main class="phone-frame">
      <section class="screen">${screens[tab]()}</section>
      <nav class="tabs">${routes.map(([id, label, icon]) => `<button class="tab ${tab === id ? "active" : ""}" data-tab="${id}"><span>${icon}</span>${label}</button>`).join("")}</nav>
    </main>`;
  bind();
  startCountdown();
}

const screens = {
  methods() {
    const method = methods.find((item) => item.id === selectedMethod);
    return `
      <header class="topbar"><div><p class="eyebrow">第一步</p><h1>学习记忆法</h1></div></header>
      <section class="method-picker">${methods.map((item) => `<button class="${item.id === selectedMethod ? "active" : ""}" data-method-select="${item.id}">${item.name}<span>${item.badge}</span></button>`).join("")}</section>
      <section class="lesson-hero">${visual(method.visual)}<div><span class="pill">${method.badge}</span><h2>${method.name}</h2><p>${method.why}</p></div></section>
      <section class="section grid">
        <div class="card"><h2>为什么有效</h2><p>${method.principle}</p><p class="small">适合：${method.use}</p></div>
        <div class="card demo-card"><h2>标准示范</h2><strong>${method.demo[0]}</strong><p>${method.demo[1]}</p><p class="small">${method.demo[2]}</p></div>
        <div class="card"><h2>拆步教案</h2><div class="step-list">${method.steps.map((s, i) => `<div><span>${i + 1}</span>${s}</div>`).join("")}</div></div>
        <div class="card"><h2>常见错误</h2><div class="bullet-list">${method.mistakes.map((s) => `<span>${s}</span>`).join("")}</div></div>
      </section>
      <button class="primary wide" data-learn-method="${method.id}">我理解了，解锁训练</button>
    `;
  },
  train() {
    if (activeSession) return sessionView();
    return `
      <header class="topbar"><div><p class="eyebrow">第二步</p><h1>对应训练</h1></div></header>
      <section class="grid">${tracks.map((track) => {
        const method = methods.find((item) => item.id === track.method);
        const locked = !state.learned.includes(track.method);
        return `<div class="course-card ${locked ? "locked" : ""}">
          <div class="goal-title"><span>${track.title}</span><span class="tag">${locked ? "先学方法" : method.name}</span></div>
          <p class="small">${locked ? `学习「${method.name}」后解锁。` : "先看方法提示，再看素材，遮挡后主动回忆。"}</p>
          ${locked ? `<button class="secondary wide" data-open-method="${method.id}">去学习「${method.name}」</button>` : ""}
          <div class="level-strip">${track.levels.map((level, i) => `<button data-start-session="${track.id}" data-level="${i}" ${locked ? "disabled" : ""}><strong>L${i + 1}</strong><span>${level}</span></button>`).join("")}</div>
        </div>`;
      }).join("")}</section>
    `;
  },
  solidify() {
    const weak = state.mistakes.slice(0, 6);
    return `
      <header class="topbar"><div><p class="eyebrow">第三步</p><h1>巩固提升</h1></div></header>
      <section class="card advice-card"><div><h2>今日复习计划</h2><p>优先复练错题、慢反应编码和未达标等级。目标是把“练过”变成“稳定掌握”。</p></div><button class="primary" data-tab-jump="train">去复练</button></section>
      <section class="section"><h2>薄弱项</h2><div class="grid">${weak.length ? weak.map((m) => `<div class="record-item"><strong>${m.title}</strong><p class="small">你答：${m.answer || "未作答"}，正确：${m.expected}</p><p class="small">${m.tip}</p></div>`).join("") : `<div class="empty"><strong>暂无薄弱项</strong><p class="small">完成训练后，这里会自动生成复习内容。</p></div>`}</div></section>
      <section class="section"><h2>间隔复习</h2><div class="timeline"><div class="card">今天：复练错题</div><div class="card">明天：复测同等级</div><div class="card">第 3 天：升级或回炉</div><div class="card">第 7 天：挑战认证</div></div></section>
    `;
  },
  challenge() {
    return `<header class="topbar"><div><p class="eyebrow">第四步</p><h1>能力挑战</h1></div></header>
      <section class="grid">${tracks.slice(0, 3).map((track) => `<button class="challenge-card" data-start-session="${track.id}" data-level="${Math.min(1, track.levels.length - 1)}"><div class="goal-title"><span>${track.title}认证</span><span class="tag">限时</span></div><p class="small">挑战不是学习入口，而是验证你是否真正掌握。</p></button>`).join("")}</section>`;
  },
  profile() {
    const avg = state.records.length ? Math.round(state.records.reduce((s, r) => s + r.score, 0) / state.records.length) : 0;
    return `
      <header class="topbar"><div><p class="eyebrow">成长档案</p><h1>我的能力</h1></div></header>
      <section class="grid two"><div class="card metric-card"><span class="small">已学方法</span><strong>${state.learned.length}</strong></div><div class="card metric-card"><span class="small">平均达成</span><strong>${avg}%</strong></div><div class="card metric-card"><span class="small">训练次数</span><strong>${state.records.length}</strong></div><div class="card metric-card"><span class="small">待巩固</span><strong>${state.mistakes.length}</strong></div></section>
      <section class="section"><h2>最近记录</h2><div class="record-list">${state.records.length ? state.records.slice(0, 8).map((r) => `<div class="record-item"><div class="goal-title"><span>${r.title}</span><span class="tag">${r.score}%</span></div><p class="small">${r.date}</p></div>`).join("") : `<div class="empty">还没有训练记录</div>`}</div></section>
    `;
  },
};

function sessionView() {
  const track = tracks.find((item) => item.id === activeSession.track);
  const levelName = track.levels[activeSession.level];
  if (activeSession.stage === "learn") {
    const method = methods.find((item) => item.id === track.method);
    return `<header class="topbar"><div><p class="eyebrow">${track.title}</p><h1>${levelName}</h1></div><button class="secondary" data-exit-session>退出</button></header>
      <section class="card"><h2>本关先学什么</h2><p>${method.principle}</p><div class="step-list">${method.steps.slice(0, 4).map((s, i) => `<div><span>${i + 1}</span>${s}</div>`).join("")}</div></section>
      <button class="primary wide" data-stage="observe">进入素材观察</button>`;
  }
  if (activeSession.stage === "observe") {
    return `<header class="topbar"><div><p class="eyebrow">观察素材</p><h1>${levelName}</h1></div><button class="secondary" data-exit-session>退出</button></header>
      ${timerView("记忆倒计时")}
      <section class="guided-material">${materialView(activeSession)}</section><section class="card"><h2>记忆提示</h2><p>${hint(activeSession.track)}</p></section><button class="primary wide" data-stage="recall">遮住素材，开始回忆</button>`;
  }
  if (activeSession.stage === "recall") {
    return `<header class="topbar"><div><p class="eyebrow">主动回忆</p><h1>${levelName}</h1></div><button class="secondary" data-exit-session>退出</button></header>
      ${timerView("回忆倒计时")}
      <section class="card"><h2>输入回忆内容</h2><p class="small">${promptText(activeSession.track)}</p><textarea class="recall-input" data-answer>${activeSession.draft || ""}</textarea></section><button class="primary wide" data-check>提交并分析</button>`;
  }
  return `<header class="topbar"><div><p class="eyebrow">结果分析</p><h1>${levelName}</h1></div><button class="secondary" data-exit-session>完成</button></header>
    <section class="result-panel ${activeSession.result.score >= 85 ? "pass" : "retry"}"><strong>${activeSession.result.score}%</strong><p>${activeSession.result.feedback}</p></section><section class="card"><h2>原始素材</h2>${materialView(activeSession)}</section><div class="action-grid"><button class="secondary" data-retry>重练本级</button><button class="primary" data-next-level>下一等级</button></div>`;
}

function materialView(session) {
  if (session.track === "digits") return `<div class="memory-target digits-target">${session.material.answer}</div><div class="palace-map">${session.material.groups.map((g, i) => {
    const image = numberCodes[g] || "自定义图像";
    return `<div><span>${palace[i]}</span><strong>${g}</strong><div class="mini-object">${objectArt(image)}<em>${image}</em></div></div>`;
  }).join("")}</div>`;
  if (session.track === "words") return `<div class="text-target">${session.material.lines.map((l) => `<p>${l}</p>`).join("")}</div><div class="palace-map">${session.material.lines.map((l, i) => `<div><span>第 ${i + 1} 行</span><strong>${keywords(l).join(" / ")}</strong><em>关键词成像</em></div>`).join("")}</div>`;
  if (session.track === "cards") return `<div class="card-sequence">${session.material.cards.map((c, i) => `<div>${playingCard(c)}<span>${i + 1}. ${palace[i % palace.length]}</span></div>`).join("")}</div>`;
  if (session.track === "image") return `<div class="image-pair">${session.material.words.map((w) => `<div class="object-tile">${objectArt(w)}<strong>${w}</strong></div>`).join("")}</div>`;
  return `<div class="palace-map">${palace.map((p, i) => `<div><span>${i + 1}</span><strong>${p}</strong><em>固定地点桩</em></div>`).join("")}</div>`;
}

function startSession(trackId, level) {
  activeSession = { track: trackId, level, stage: "learn", material: makeMaterial(trackId, level), result: null, deadline: null, draft: "" };
  tab = "train";
  app();
}

function setSessionStage(stage) {
  if (activeSession?.stage === "recall") {
    const answer = document.querySelector("[data-answer]");
    if (answer) activeSession.draft = answer.value;
  }
  activeSession.stage = stage;
  activeSession.deadline = ["observe", "recall"].includes(stage) ? Date.now() + stageDuration(activeSession.track, activeSession.level, stage) * 1000 : null;
  app();
}

function stageDuration(track, level, stage) {
  const observe = {
    digits: [18, 30, 45, 75],
    words: [35, 55, 90],
    cards: [35, 70, 160],
    image: [18, 30, 45],
    loci: [40, 35, 35],
  };
  const recall = {
    digits: [25, 40, 60, 90],
    words: [60, 90, 150],
    cards: [45, 90, 210],
    image: [30, 45, 60],
    loci: [60, 60, 60],
  };
  return (stage === "observe" ? observe : recall)[track]?.[level] || 45;
}

function timerView(label) {
  const seconds = Math.max(0, Math.ceil(((activeSession?.deadline || Date.now()) - Date.now()) / 1000));
  return `<section class="timer-card"><span>${label}</span><strong class="timer-number">${seconds}</strong><em>秒</em></section>`;
}

function startCountdown() {
  clearInterval(timerId);
  if (!activeSession || !["observe", "recall"].includes(activeSession.stage) || !activeSession.deadline) return;
  timerId = setInterval(() => {
    const remain = Math.max(0, Math.ceil((activeSession.deadline - Date.now()) / 1000));
    const node = document.querySelector(".timer-number");
    if (node) node.textContent = remain;
    if (remain > 0) return;
    clearInterval(timerId);
    if (activeSession.stage === "observe") {
      setSessionStage("recall");
      return;
    }
    const answer = document.querySelector("[data-answer]")?.value || "";
    activeSession.result = score(activeSession, answer);
    activeSession.stage = "result";
    activeSession.deadline = null;
    app();
  }, 250);
}

function makeMaterial(trackId, level) {
  if (trackId === "digits") {
    const answer = Array.from({ length: [4, 8, 12, 20][level] || 4 }, () => Math.floor(Math.random() * 10)).join("");
    return { answer, groups: answer.match(/.{1,2}/g) };
  }
  if (trackId === "words") {
    const lines = shuffle(wordPool).slice(0, [1, 2, 4][level] || 1);
    return { answer: lines.join("\n"), lines };
  }
  if (trackId === "cards") {
    const cards = shuffle(suits.flatMap(([symbol, suit, color]) => ranks.map((rank) => ({ symbol, suit, color, rank, label: `${suit} ${rank}` })))).slice(0, [5, 10, 26][level] || 5);
    return { answer: cards.map((c) => c.label).join(" "), cards };
  }
  if (trackId === "image") {
    const words = shuffle(["老虎", "冰箱", "火车", "苹果", "月亮", "书包"]).slice(0, [2, 4, 6][level] || 2);
    return { answer: words.join(" "), words };
  }
  return { answer: palace.join(" "), route: palace };
}

function score(session, answer) {
  if (session.track === "words") {
    const keys = session.material.lines.flatMap(keywords);
    const hit = keys.filter((k) => answer.includes(k)).length;
    return recordResult(session, { score: Math.round((hit / Math.max(1, keys.length)) * 100), feedback: `关键词命中 ${hit}/${keys.length}。` }, answer);
  }
  const expected = clean(session.material.answer);
  const actual = clean(answer);
  let hit = 0;
  for (let i = 0; i < Math.min(expected.length, actual.length); i += 1) if (expected[i] === actual[i]) hit += 1;
  return recordResult(session, { score: Math.round((hit / Math.max(expected.length, 1)) * 100), feedback: `顺序匹配 ${hit}/${expected.length}。错位时回到地点路线复查。` }, answer);
}

function recordResult(session, result, answer) {
  const title = tracks.find((t) => t.id === session.track).title;
  if (result.score < 85) state.mistakes.unshift({ title, answer, expected: session.material.answer, tip: result.feedback });
  state.records.unshift({ title: `${title} L${session.level + 1}`, score: result.score, date: new Date().toLocaleDateString("zh-CN") });
  save();
  return result;
}

function visual(type) {
  const scenes = {
    association: `<div class="visual-demo-pair">${objectArt("老虎")}${objectArt("冰箱")}</div>`,
    palace: `<svg viewBox="0 0 220 130"><rect width="220" height="130" rx="16" fill="#f8fafc"/><path d="M28 98h164V55L110 22 28 55z" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/><circle cx="58" cy="83" r="10" fill="#f97316"/><circle cx="105" cy="69" r="10" fill="#22c55e"/><circle cx="152" cy="83" r="10" fill="#ef4444"/></svg>`,
    digits: `<div class="visual-demo-pair dark-demo"><strong>37</strong>${objectArt("山鸡")}</div>`,
    cards: `<svg viewBox="0 0 220 130"><rect width="220" height="130" rx="16" fill="#f8fafc"/><rect x="74" y="18" width="72" height="94" rx="8" fill="white" stroke="#cbd5e1" stroke-width="3"/><text x="88" y="48" fill="#dc2626" font-size="24">5♥</text><text x="92" y="88" fill="#dc2626" font-size="46">♥</text></svg>`,
    keyword: `<svg viewBox="0 0 220 130"><rect width="220" height="130" rx="16" fill="#ecfdf5"/><rect x="34" y="34" width="152" height="12" rx="6" fill="#0f766e"/><rect x="34" y="60" width="118" height="12" rx="6" fill="#14b8a6"/><circle cx="64" cy="96" r="16" fill="#f59e0b"/><circle cx="112" cy="96" r="16" fill="#38bdf8"/></svg>`,
    recall: `<svg viewBox="0 0 220 130"><rect width="220" height="130" rx="16" fill="#fff7ed"/><path d="M70 36h80v58H70z" fill="#fff" stroke="#f97316" stroke-width="4"/><path d="M88 58h44M88 76h32" stroke="#0f172a" stroke-width="5"/><path d="M154 42l22 18-22 18" fill="none" stroke="#22c55e" stroke-width="6"/></svg>`,
  };
  return `<div class="visual-card">${scenes[type] || scenes.association}</div>`;
}

function objectArt(name) {
  const fallback = `<svg viewBox="0 0 120 100" class="object-art"><rect x="18" y="18" width="84" height="64" rx="18" fill="#e2e8f0"/><circle cx="60" cy="50" r="20" fill="#94a3b8"/></svg>`;
  const art = {
    老虎: `<svg viewBox="0 0 120 100" class="object-art"><circle cx="60" cy="52" r="34" fill="#f59e0b"/><path d="M32 34 18 18l4 25M88 34l14-16-4 25" fill="#f59e0b" stroke="#0f172a" stroke-width="3"/><path d="M43 28l-8 20M60 20v20M77 28l8 20" stroke="#0f172a" stroke-width="5"/><circle cx="48" cy="53" r="4" fill="#0f172a"/><circle cx="72" cy="53" r="4" fill="#0f172a"/><path d="M54 66h12M45 74c10 8 20 8 30 0" stroke="#0f172a" stroke-width="4" fill="none"/><path d="M60 58l-7 8h14z" fill="#111827"/></svg>`,
    冰箱: `<svg viewBox="0 0 120 100" class="object-art"><rect x="34" y="12" width="52" height="76" rx="10" fill="#38bdf8" stroke="#0f172a" stroke-width="4"/><path d="M34 45h52" stroke="#0f172a" stroke-width="4"/><path d="M76 25v12M76 58v16" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M49 26h15M49 62h15" stroke="#bae6fd" stroke-width="4"/></svg>`,
    火车: `<svg viewBox="0 0 120 100" class="object-art"><rect x="20" y="34" width="72" height="34" rx="8" fill="#2563eb"/><rect x="30" y="22" width="42" height="24" rx="6" fill="#60a5fa"/><rect x="30" y="42" width="16" height="12" rx="2" fill="#dbeafe"/><rect x="54" y="42" width="16" height="12" rx="2" fill="#dbeafe"/><circle cx="36" cy="72" r="8" fill="#0f172a"/><circle cx="76" cy="72" r="8" fill="#0f172a"/><path d="M92 48h12l-12 12z" fill="#f97316"/></svg>`,
    苹果: `<svg viewBox="0 0 120 100" class="object-art"><path d="M60 32c16-16 38-2 34 24-4 27-20 36-34 25-14 11-30 2-34-25-4-26 18-40 34-24z" fill="#ef4444" stroke="#0f172a" stroke-width="4"/><path d="M62 29c2-12 10-18 22-17-4 10-11 15-22 17z" fill="#22c55e" stroke="#0f172a" stroke-width="3"/><path d="M58 31c0-10 2-15 8-22" stroke="#7c2d12" stroke-width="4" fill="none"/></svg>`,
    月亮: `<svg viewBox="0 0 120 100" class="object-art"><rect width="120" height="100" rx="20" fill="#0f172a"/><path d="M74 20c-22 5-34 25-27 45 7 19 27 26 45 16-10 16-30 22-48 14-23-10-33-36-23-59C30 16 54 7 74 20z" fill="#fde68a"/></svg>`,
    书包: `<svg viewBox="0 0 120 100" class="object-art"><rect x="30" y="30" width="60" height="54" rx="10" fill="#ef4444" stroke="#0f172a" stroke-width="4"/><path d="M44 30c2-14 30-14 32 0" fill="none" stroke="#0f172a" stroke-width="5"/><path d="M30 52H18v24h12M90 52h12v24H90" fill="#f87171" stroke="#0f172a" stroke-width="4"/><rect x="45" y="56" width="30" height="20" rx="4" fill="#fca5a5" stroke="#0f172a" stroke-width="3"/></svg>`,
    山鸡: `<svg viewBox="0 0 120 100" class="object-art"><path d="M38 58c8-24 41-28 55-5 8 14-4 29-28 30-23 1-35-9-27-25z" fill="#f59e0b" stroke="#0f172a" stroke-width="4"/><path d="M90 50c14-6 22-2 26 8-12 0-20 3-27 10" fill="#dc2626" stroke="#0f172a" stroke-width="3"/><path d="M38 59 15 43c16-6 27-1 35 10" fill="#92400e" stroke="#0f172a" stroke-width="3"/><circle cx="65" cy="48" r="4" fill="#0f172a"/><path d="M56 38c-8-12 8-19 13-7 8-13 23-2 11 9" fill="#ef4444" stroke="#0f172a" stroke-width="3"/><path d="M62 82l-6 12M76 81l4 13" stroke="#0f172a" stroke-width="4"/></svg>`,
    球衣: `<svg viewBox="0 0 120 100" class="object-art"><path d="M38 20h44l20 18-14 16-9-7v37H41V47l-9 7-14-16z" fill="#60a5fa" stroke="#0f172a" stroke-width="4"/><text x="48" y="62" font-size="26" font-weight="900" fill="#0f172a">91</text></svg>`,
    雪人: `<svg viewBox="0 0 120 100" class="object-art"><circle cx="60" cy="33" r="18" fill="#f8fafc" stroke="#0f172a" stroke-width="4"/><circle cx="60" cy="68" r="26" fill="#f8fafc" stroke="#0f172a" stroke-width="4"/><circle cx="54" cy="30" r="3" fill="#0f172a"/><circle cx="66" cy="30" r="3" fill="#0f172a"/><path d="M60 36l14 5-14 5z" fill="#f97316"/></svg>`,
    河流: `<svg viewBox="0 0 120 100" class="object-art"><rect width="120" height="100" rx="20" fill="#dcfce7"/><path d="M12 72c22-36 44 10 66-24 11-17 22-21 34-17" fill="none" stroke="#38bdf8" stroke-width="18" stroke-linecap="round"/><path d="M15 72c22-32 43 10 64-22 11-16 22-20 34-16" fill="none" stroke="#0ea5e9" stroke-width="8" stroke-linecap="round"/></svg>`,
    喇叭: `<svg viewBox="0 0 120 100" class="object-art"><path d="M20 58h22l36 22V20L42 42H20z" fill="#f59e0b" stroke="#0f172a" stroke-width="4"/><path d="M86 38c8 8 8 16 0 24M98 28c15 16 15 28 0 44" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/></svg>`,
    巴士: `<svg viewBox="0 0 120 100" class="object-art"><rect x="18" y="25" width="84" height="48" rx="10" fill="#facc15" stroke="#0f172a" stroke-width="4"/><rect x="28" y="35" width="18" height="14" rx="3" fill="#dbeafe"/><rect x="52" y="35" width="18" height="14" rx="3" fill="#dbeafe"/><rect x="76" y="35" width="16" height="14" rx="3" fill="#dbeafe"/><circle cx="36" cy="76" r="8" fill="#0f172a"/><circle cx="84" cy="76" r="8" fill="#0f172a"/></svg>`,
  };
  return art[name] || fallback;
}

function playingCard(card) {
  return `<div class="playing-card ${card.color === "red" ? "red-card" : "black-card"}"><div class="corner top"><b>${card.rank}</b><span>${card.symbol}</span></div><div class="suit-center">${card.symbol}</div><div class="corner bottom"><b>${card.rank}</b><span>${card.symbol}</span></div></div>`;
}
function hint(track) {
  if (track === "digits") return "两位一组，先转成图像，再放到地点。回忆时沿地点取回图像。";
  if (track === "words") return "先抓关键词，再补原句。不要追求一开始逐字背诵。";
  if (track === "cards") return "逐张转成图像，按顺序放进地点。先保证顺序，再追求速度。";
  if (track === "image") return "让图像之间发生夸张动作，不要只是并排摆放。";
  return "按固定路线走，顺序和倒序都要稳定。";
}
function promptText(track) {
  if (track === "digits") return "输入完整数字。";
  if (track === "cards") return "按顺序输入牌面。";
  if (track === "words") return "尽量按原顺序复述。";
  return "输入你回忆出的内容。";
}
function keywords(line) {
  return line.replace(/[，。、“”]/g, " ").split(/\s+/).filter(Boolean).slice(0, 4);
}
function clean(v) {
  return String(v).replace(/\s+/g, "").replace(/[，。,.、]/g, "").toLowerCase();
}
function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function bind() {
  document.querySelectorAll("[data-tab]").forEach((b) => (b.onclick = () => { tab = b.dataset.tab; activeSession = null; app(); }));
  document.querySelectorAll("[data-tab-jump]").forEach((b) => (b.onclick = () => { tab = b.dataset.tabJump; app(); }));
  document.querySelectorAll("[data-method-select]").forEach((b) => (b.onclick = () => { selectedMethod = b.dataset.methodSelect; app(); }));
  document.querySelectorAll("[data-open-method]").forEach((b) => (b.onclick = () => { selectedMethod = b.dataset.openMethod; tab = "methods"; activeSession = null; app(); }));
  document.querySelectorAll("[data-learn-method]").forEach((b) => (b.onclick = () => { if (!state.learned.includes(b.dataset.learnMethod)) state.learned.push(b.dataset.learnMethod); save(); tab = "train"; app(); }));
  document.querySelectorAll("[data-start-session]").forEach((b) => (b.onclick = () => startSession(b.dataset.startSession, Number(b.dataset.level))));
  document.querySelectorAll("[data-stage]").forEach((b) => (b.onclick = () => setSessionStage(b.dataset.stage)));
  document.querySelectorAll("[data-check]").forEach((b) => (b.onclick = () => {
    activeSession.draft = document.querySelector("[data-answer]").value;
    activeSession.result = score(activeSession, activeSession.draft);
    activeSession.stage = "result";
    activeSession.deadline = null;
    app();
  }));
  document.querySelectorAll("[data-retry]").forEach((b) => (b.onclick = () => startSession(activeSession.track, activeSession.level)));
  document.querySelectorAll("[data-next-level]").forEach((b) => (b.onclick = () => startSession(activeSession.track, Math.min(activeSession.level + 1, tracks.find((t) => t.id === activeSession.track).levels.length - 1))));
  document.querySelectorAll("[data-exit-session]").forEach((b) => (b.onclick = () => { activeSession = null; app(); }));
}

app();
