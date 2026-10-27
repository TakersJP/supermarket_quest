/* Supermarket Quest — Grade 3 skip counting & financial literacy game.
   All money is stored as whole cents (integers) so every calculation is exact. */
'use strict';

/* ---------------------------------------------------------------
   MISSION DATA
   Every price is a multiple of 5¢, so Canadian cash rounding is never needed.
   --------------------------------------------------------------- */
const MISSIONS = [
  {
    id: 'family',
    name: 'Family Dinner',
    level: 'Easy',
    emoji: '🍽️',
    budget: 3500,
    story: 'Your family is coming over for dinner! Buy everything on the list. You have $35 to spend.',
    items: [
      { id: 'apple', name: 'Apples', one: 'apple', many: 'apples', emoji: '🍎', price: 300, qty: 4 },
      { id: 'milk', name: 'Milk', one: 'carton of milk', many: 'cartons of milk', emoji: '🥛', price: 500, qty: 2 },
      { id: 'bread', name: 'Bread', one: 'loaf of bread', many: 'loaves of bread', emoji: '🍞', price: 400, qty: 1 },
      { id: 'juice', name: 'Juice', one: 'bottle of juice', many: 'bottles of juice', emoji: '🧃', price: 200, qty: 2 }
    ],
    choices: null,
    distractors: [
      { id: 'candy', name: 'Candy', emoji: '🍭', price: 200 },
      { id: 'donut', name: 'Donuts', emoji: '🍩', price: 300 }
    ],
    bonusWays: false,
    skills: [
      'Skip counting forward by 2, 3, 4 and 5',
      'Extending number patterns',
      'Repeated addition',
      'Adding money to find a total',
      'Subtracting to find money left over',
      'Counting Canadian coins and bills',
      'Making change'
    ]
  },
  {
    id: 'party',
    name: 'School Party',
    level: 'Medium',
    emoji: '🎉',
    budget: 5000,
    story: 'Your class is having a party! Buy the party supplies, then choose ONE treat. You have $50, so choose carefully. Not every treat will fit your budget!',
    items: [
      { id: 'pizza', name: 'Pizza', one: 'pizza', many: 'pizzas', emoji: '🍕', price: 1000, qty: 2 },
      { id: 'juicebox', name: 'Juice Packs', one: 'juice pack', many: 'juice packs', emoji: '🧃', price: 500, qty: 3 },
      { id: 'sticker', name: 'Stickers', one: 'sticker', many: 'stickers', emoji: '⭐', price: 25, qty: 8 },
      { id: 'balloon', name: 'Balloons', one: 'balloon', many: 'balloons', emoji: '🎈', price: 50, qty: 6 }
    ],
    choices: {
      pick: 1,
      label: 'Treat Corner',
      items: [
        { id: 'cake', name: 'Party Cake', one: 'party cake', many: 'party cakes', emoji: '🎂', price: 1200, qty: 1 },
        { id: 'cupcake', name: 'Cupcakes', one: 'box of cupcakes', many: 'boxes of cupcakes', emoji: '🧁', price: 1000, qty: 1 },
        { id: 'fruit', name: 'Fruit Tray', one: 'fruit tray', many: 'fruit trays', emoji: '🍇', price: 800, qty: 1 },
        { id: 'cookie', name: 'Cookies', one: 'box of cookies', many: 'boxes of cookies', emoji: '🍪', price: 600, qty: 1 },
        { id: 'popcorn', name: 'Popcorn', one: 'bag of popcorn', many: 'bags of popcorn', emoji: '🍿', price: 400, qty: 1 }
      ]
    },
    distractors: [
      { id: 'soda', name: 'Pop', emoji: '🥤', price: 200 },
      { id: 'choc', name: 'Chocolate', emoji: '🍫', price: 300 }
    ],
    bonusWays: false,
    skills: [
      'Skip counting by 5, 10 and 25',
      'Skip counting with money (25¢ and 50¢)',
      'Finding pattern rules',
      'Adding dollars and cents',
      'Comparing amounts to stay on budget',
      'Making a smart spending choice',
      'Making change with coins'
    ]
  },
  {
    id: 'super',
    name: 'Super Shopper',
    level: 'Challenge',
    emoji: '🦸',
    budget: 10000,
    story: 'Stock up the kitchen for the whole week! Buy everything on the list, then choose TWO treats. You have $100. Plan carefully so you don\'t run out of money!',
    items: [
      { id: 'egg', name: 'Eggs', one: 'carton of eggs', many: 'cartons of eggs', emoji: '🥚', price: 400, qty: 3 },
      { id: 'cheese', name: 'Cheese', one: 'block of cheese', many: 'blocks of cheese', emoji: '🧀', price: 500, qty: 4 },
      { id: 'carrot', name: 'Carrots', one: 'bag of carrots', many: 'bags of carrots', emoji: '🥕', price: 200, qty: 6 },
      { id: 'chicken', name: 'Chicken', one: 'pack of chicken', many: 'packs of chicken', emoji: '🍗', price: 1000, qty: 3 },
      { id: 'banana', name: 'Bananas', one: 'banana', many: 'bananas', emoji: '🍌', price: 25, qty: 6 },
      { id: 'cereal', name: 'Cereal', one: 'box of cereal', many: 'boxes of cereal', emoji: '🥣', price: 300, qty: 3 }
    ],
    choices: {
      pick: 2,
      label: 'Treat Corner',
      items: [
        { id: 'cake3', name: 'Big Cake', one: 'big cake', many: 'big cakes', emoji: '🎂', price: 1500, qty: 1 },
        { id: 'icecream', name: 'Ice Cream', one: 'tub of ice cream', many: 'tubs of ice cream', emoji: '🍨', price: 900, qty: 1 },
        { id: 'melon', name: 'Watermelon', one: 'watermelon', many: 'watermelons', emoji: '🍉', price: 700, qty: 1 },
        { id: 'berry', name: 'Strawberries', one: 'box of strawberries', many: 'boxes of strawberries', emoji: '🍓', price: 500, qty: 1 },
        { id: 'popcorn3', name: 'Popcorn', one: 'bag of popcorn', many: 'bags of popcorn', emoji: '🍿', price: 300, qty: 1 }
      ]
    },
    distractors: [
      { id: 'chips', name: 'Chips', emoji: '🥨', price: 400 },
      { id: 'candy3', name: 'Candy', emoji: '🍬', price: 100 },
      { id: 'soda3', name: 'Pop', emoji: '🥤', price: 200 }
    ],
    bonusWays: true,
    skills: [
      'Skip counting forward and backward',
      'Increasing and decreasing patterns',
      'Finding pattern rules',
      'Repeated addition with bigger numbers',
      'Adding and subtracting dollars and cents',
      'Budgeting: choosing treats that fit',
      'Showing money amounts in different ways',
      'Making change'
    ]
  }
];

/* Demo Mission: a short practice round on the normal screens. Nothing from it
   is tracked, saved or sent to the class report. */
const DEMO_MISSION = {
  id: 'demo',
  demo: true,
  name: 'Practice Round',
  level: 'Practice',
  emoji: '🧑‍🏫',
  budget: 2000,
  story: 'Let\'s practise together! Buy everything on the list, then pay at the checkout. You have $20 to spend.',
  items: [
    { id: 'apple', name: 'Apples', one: 'apple', many: 'apples', emoji: '🍎', price: 300, qty: 2 },
    { id: 'juice', name: 'Juice', one: 'bottle of juice', many: 'bottles of juice', emoji: '🧃', price: 200, qty: 2 }
  ],
  choices: null,
  distractors: [
    { id: 'candy', name: 'Candy', emoji: '🍭', price: 200 }
  ],
  bonusWays: false,
  skills: [
    'Skip counting forward',
    'Adding money to find a total',
    'Checking the budget',
    'Counting Canadian coins and bills',
    'Making change'
  ]
};

/* Canadian money, largest to smallest (values in cents). */
const MONEY = [
  { v: 5000, type: 'bill', label: '$50', name: 'fifty-dollar bill', cls: 'b50' },
  { v: 2000, type: 'bill', label: '$20', name: 'twenty-dollar bill', cls: 'b20' },
  { v: 1000, type: 'bill', label: '$10', name: 'ten-dollar bill', cls: 'b10' },
  { v: 500, type: 'bill', label: '$5', name: 'five-dollar bill', cls: 'b5' },
  { v: 200, type: 'coin', label: '$2', name: 'toonie', cls: 'c200', pic: '🐻‍❄️' },
  { v: 100, type: 'coin', label: '$1', name: 'loonie', cls: 'c100', pic: '🦆' },
  { v: 25, type: 'coin', label: '25¢', name: 'quarter', cls: 'c25', pic: '🦌' },
  { v: 10, type: 'coin', label: '10¢', name: 'dime', cls: 'c10', pic: '⛵' },
  { v: 5, type: 'coin', label: '5¢', name: 'nickel', cls: 'c5', pic: '🦫' }
];

const PRAISE = ['Awesome!', 'You got it!', 'Super counting!', 'Great job!', 'Fantastic!', 'Way to go!', 'Brilliant!', 'Nice skip counting!'];

/* ---------------------------------------------------------------
   HELPERS
   --------------------------------------------------------------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/** $3, $6.50, −$2 */
function fmt(c) {
  const sign = c < 0 ? '−' : '';
  c = Math.abs(c);
  return sign + '$' + (c % 100 === 0 ? String(c / 100) : (c / 100).toFixed(2));
}
/** Prices under a dollar read more naturally in cents: 25¢ */
function fmtPrice(c) { return c > 0 && c < 100 ? c + '¢' : fmt(c); }
/** Format in a question's unit ('cents' or 'dollars') */
function fmtUnit(c, mode) { return mode === 'cents' ? c + '¢' : fmt(c); }
/** Skip-count step words: "3", "25¢", "$10" */
function stepWord(c) { return c < 100 ? c + '¢' : (c % 100 === 0 ? String(c / 100) : fmt(c)); }

/**
 * Turns what a child types into cents, or null if it isn't a number.
 * Accepts "9", "$9", "9.00", "3.5", "3,50", "75¢", "75c".
 * In 'cents' mode a plain whole number is read as cents (so "200" = 200¢).
 */
function parseMoney(raw, mode = 'dollars') {
  let s = String(raw == null ? '' : raw).trim().replace(/\s+/g, '').replace(/,/g, '.');
  if (!s) return null;
  const hasCent = /(¢|c)$/i.test(s);
  const hasDollar = s.includes('$');
  s = s.replace(/[$¢c]/gi, '');
  if (s === '' || s === '.' || !/^\d*\.?\d{0,2}$/.test(s)) return null;
  const asCents = hasCent || (mode === 'cents' && !hasDollar && !s.includes('.'));
  if (asCents) return s.includes('.') ? null : parseInt(s, 10);
  return Math.round(parseFloat(s) * 100);
}

/** 150 -> "1 dollar and 50 cents" */
function dollarWords(c) {
  const d = Math.floor(c / 100), r = c % 100;
  const dollars = d ? `${d} dollar${d === 1 ? '' : 's'}` : '';
  const cents = r ? `${r} cents` : '';
  return [dollars, cents].filter(Boolean).join(' and ');
}

function plural(item, n) { return n === 1 ? item.one : item.many; }
function sum(arr) { return arr.reduce((a, b) => a + b, 0); }

/** Greedy breakdown of an amount into Canadian money pieces. */
function breakdown(amount, exclude = []) {
  const out = [];
  let left = amount;
  for (const m of MONEY) {
    if (exclude.includes(m.v)) continue;
    while (left >= m.v) { out.push(m.v); left -= m.v; }
  }
  return out;
}

function moneyHTML(v, extraClass = '') {
  const m = MONEY.find((x) => x.v === v);
  if (m.type === 'bill') {
    return `<span class="money bill ${m.cls} ${extraClass}" aria-label="${m.name}"><span class="bill-top">CANADA</span><span class="bill-val">${m.label}</span><span class="bill-leaf">🍁</span></span>`;
  }
  return `<span class="money coin ${m.cls} ${extraClass}" aria-label="${m.name}"><span class="coin-face"><span class="coin-pic">${m.pic}</span><span class="coin-val">${m.label}</span></span></span>`;
}

/* ---------------------------------------------------------------
   SOUND (tiny Web Audio tones; no audio files needed)
   --------------------------------------------------------------- */
const Sound = {
  on: true,
  ctx: null,
  tone(freq, start, dur, type = 'sine', vol = 0.15) {
    if (!this.on) return;
    try {
      this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)();
      const t = this.ctx.currentTime + start;
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = type; o.frequency.value = freq;
      g.gain.setValueAtTime(vol, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g).connect(this.ctx.destination);
      o.start(t); o.stop(t + dur);
    } catch (e) { /* audio not available */ }
  },
  good() { this.tone(660, 0, 0.15); this.tone(880, 0.1, 0.2); },
  oops() { this.tone(300, 0, 0.18, 'triangle', 0.12); this.tone(250, 0.12, 0.2, 'triangle', 0.1); },
  tap() { this.tone(520, 0, 0.06, 'square', 0.05); },
  coin() { this.tone(1200, 0, 0.08, 'sine', 0.1); this.tone(1600, 0.05, 0.1, 'sine', 0.08); },
  win() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, i * 0.13, 0.3)); }
};

/* ---------------------------------------------------------------
   SAVED PROGRESS (optional; game works without it)
   --------------------------------------------------------------- */
const Store = {
  key: 'supermarketQuest.v1',
  load() {
    try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch (e) { return {}; }
  },
  save(data) {
    try { localStorage.setItem(this.key, JSON.stringify(data)); } catch (e) { /* storage blocked */ }
  }
};
let saved = Store.load();
saved.completed = saved.completed || {};
if (saved.sound === false) Sound.on = false;

/* ---------------------------------------------------------------
   GAME STATE
   --------------------------------------------------------------- */
let S = null;

function newGame(mission) {
  S = {
    m: mission,
    cart: {},              // itemId -> count
    lastType: null,
    stats: { solved: 0, firstTry: 0, hints: 0 },
    sheet: null,
    pay: [],               // cents values currently on the counter
    paid: 0,
    firstWay: null,        // sorted list of pieces used in the first payment
    checkoutStep: 'pay',   // pay -> change -> bonus -> done
    changeTries: 0,
    bonusDone: false,
    track: {},             // skill -> { right, wrong, hints } for the teacher report
    mistakes: {},          // mistake key -> count
    startedAt: Date.now(),
    logged: false          // mission already added to the class session
  };
}

const listItems = () => S.m.items;
const choiceItems = () => (S.m.choices ? S.m.choices.items : []);
const findItem = (id) => listItems().concat(choiceItems()).find((i) => i.id === id);
const choicesInCart = () => choiceItems().filter((i) => S.cart[i.id]);
const cartEntries = () => listItems().concat(choiceItems())
  .filter((i) => S.cart[i.id])
  .map((i) => ({ item: i, n: S.cart[i.id], cost: i.price * S.cart[i.id] }));
const cartTotal = () => sum(cartEntries().map((e) => e.cost));
const shoppingDone = () =>
  listItems().every((i) => (S.cart[i.id] || 0) === i.qty) &&
  (!S.m.choices || choicesInCart().length === S.m.choices.pick);

/* ---------------------------------------------------------------
   SCREENS
   --------------------------------------------------------------- */
function show(name) {
  $$('.screen').forEach((s) => s.classList.toggle('active', s.id === 'screen-' + name));
  window.scrollTo(0, 0);
  $$('.screen.active').forEach((s) => (s.scrollTop = 0));
  const demo = !!(S && S.m.demo);
  document.body.classList.toggle('demo', demo && name !== 'menu');
  $('#demo-bar').hidden = !demo || name === 'menu';
  $('#btn-demo-skip').hidden = name === 'complete';
  if (SESSION) {
    if (demo) SESSION.lastActive = Date.now(); // demo time isn't a student's play time
    else touchSession();
  }
}

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2200);
}

function setBudgetChips() { $$('.js-budget').forEach((el) => (el.textContent = fmt(S.m.budget))); }

/* ---------- MENU ---------- */
function renderMenu() {
  $('#mission-cards').innerHTML = MISSIONS.map((m, i) => `
    <button class="mission-card lvl-${m.level.toLowerCase()}" type="button" data-mission="${i}">
      ${saved.completed[m.id] ? '<span class="done-badge" aria-label="Completed">✅</span>' : ''}
      <span class="mc-emoji" aria-hidden="true">${m.emoji}</span>
      <span class="mc-num">Mission ${i + 1}</span>
      <span class="mc-name">${m.name}</span>
      <span class="mc-level">${m.level}</span>
      <span class="mc-budget">👛 Budget ${fmt(m.budget)}</span>
    </button>`).join('');
  show('menu');
}

/* ---------- STAGE 1: BRIEFING ---------- */
function startMission(index, mission = MISSIONS[index]) {
  newGame(mission);
  const m = S.m;
  setBudgetChips();
  $('#brief-emoji').textContent = m.emoji;
  $('#brief-level').textContent = m.level;
  $('#brief-level').className = 'brief-level lvl-' + m.level.toLowerCase();
  $('#brief-title').textContent = 'Mission: ' + m.name;
  $('#brief-story').textContent = m.story;
  $('#brief-budget').textContent = fmt(m.budget);
  $('#brief-list').innerHTML = m.items.map((i) => `
    <tr><td><span class="li-emoji" aria-hidden="true">${i.emoji}</span> ${i.name}</td><td>${i.qty}</td><td>${fmtPrice(i.price)}</td></tr>`).join('');
  $('#brief-choices').innerHTML = m.choices ? `
    <h4 class="choice-head">🍰 ${m.choices.label}: choose ${m.choices.pick} treat${m.choices.pick > 1 ? 's' : ''} (1 of each)</h4>
    <div class="choice-tags">${m.choices.items.map((i) => `<span class="choice-tag"><span aria-hidden="true">${i.emoji}</span> ${i.name} <b>${fmtPrice(i.price)}</b></span>`).join('')}</div>
    <p class="choice-tip">💭 Think: which treats can you afford after buying your list?</p>` : '';
  show('briefing');
}

/* ---------- STAGE 2: SHOP ---------- */
function shopSay(msg) { $('#shop-bubble').innerHTML = msg; }

function renderShop() {
  const m = S.m;
  // Mix distractors into the main aisle so kids must read their list.
  const aisle = [];
  m.items.forEach((it, i) => {
    aisle.push({ ...it, kind: 'list' });
    if (m.distractors[i]) aisle.push({ ...m.distractors[i], kind: 'extra' });
  });
  m.distractors.slice(m.items.length).forEach((d) => aisle.push({ ...d, kind: 'extra' }));

  const card = (it) => `
    <button class="item-card ${it.kind}" type="button" data-item="${it.id}" data-kind="${it.kind}"
      aria-label="${it.name}, ${fmtPrice(it.price)} each">
      <span class="ic-emoji" aria-hidden="true">${it.emoji}</span>
      <span class="ic-name">${it.name}</span>
      <span class="price-tag">${fmtPrice(it.price)}</span>
      <span class="ic-count" data-count="${it.id}" hidden></span>
    </button>`;

  let html = `<div class="shelf"><h3 class="shelf-label">🛒 Grocery Aisle</h3><div class="shelf-row">${aisle.map(card).join('')}</div><div class="shelf-plank" aria-hidden="true"></div></div>`;
  if (m.choices) {
    html += `<div class="shelf treats"><h3 class="shelf-label">🍰 ${m.choices.label} <small>Choose ${m.choices.pick}</small></h3>
      <div class="shelf-row">${m.choices.items.map((it) => card({ ...it, kind: 'choice' })).join('')}</div><div class="shelf-plank" aria-hidden="true"></div></div>`;
  }
  $('#shelves').innerHTML = html;
  shopSay(m.choices
    ? `Collect everything on your list, then pick <b>${m.choices.pick}</b> from the Treat Corner. Remember your budget is <b>${fmt(m.budget)}</b>!`
    : 'Tap a grocery on the shelf to add it to your cart. Only buy what is on your list!');
  updateShopSide();
  show('shop');
}

function updateShopSide() {
  const m = S.m;
  let html = m.items.map((i) => {
    const n = S.cart[i.id] || 0;
    const dots = Array.from({ length: i.qty }, (_, k) => `<span class="dot ${k < n ? 'on' : ''}"></span>`).join('');
    return `<li class="${n === i.qty ? 'complete' : ''}"><span class="pl-emoji" aria-hidden="true">${i.emoji}</span>
      <span class="pl-name">${i.name}</span><span class="pl-dots" aria-hidden="true">${dots}</span>
      <span class="pl-count">${n}/${i.qty}</span></li>`;
  }).join('');
  if (m.choices) {
    const c = choicesInCart().length;
    html += `<li class="${c === m.choices.pick ? 'complete' : ''}"><span class="pl-emoji" aria-hidden="true">🍰</span>
      <span class="pl-name">Treats</span><span class="pl-dots" aria-hidden="true">${Array.from({ length: m.choices.pick }, (_, k) => `<span class="dot ${k < c ? 'on' : ''}"></span>`).join('')}</span>
      <span class="pl-count">${c}/${m.choices.pick}</span></li>`;
  }
  $('#progress-list').innerHTML = html;

  const entries = cartEntries();
  $('#cart-list').innerHTML = entries.length ? entries.map(({ item, n }) => {
    const seq = Array.from({ length: n }, (_, k) => `<span class="seq-chip">${fmtPrice(item.price * (k + 1))}</span>`).join('<span class="seq-arrow">→</span>');
    return `<li><div class="cart-top"><span class="ci-emoji" aria-hidden="true">${item.emoji}</span>
        <span class="ci-name">${n} ${item.name}</span>
        <button class="remove-btn" type="button" data-remove="${item.id}" aria-label="Put one ${item.one} back">−</button></div>
        <div class="seq" aria-label="Skip counting pattern">${seq}</div></li>`;
  }).join('') : '<li class="empty">Your cart is empty.</li>';

  $$('[data-count]').forEach((el) => {
    const n = S.cart[el.dataset.count] || 0;
    el.hidden = !n;
    el.textContent = n;
  });

  const btn = $('#btn-to-budget');
  const done = shoppingDone();
  btn.disabled = !done;
  btn.textContent = done ? '🧾 Go to Checkout' : 'Collect everything first';
}

function onItemTap(id, kind, cardEl) {
  Sound.tap();
  if (kind === 'extra') {
    const d = S.m.distractors.find((x) => x.id === id);
    mistake('offList');
    shopSay(`${d.emoji} ${d.name} aren't on your shopping list. Smart shoppers stick to their list and save money!`);
    cardEl.classList.remove('shake'); void cardEl.offsetWidth; cardEl.classList.add('shake');
    return;
  }
  const item = findItem(id);
  const n = S.cart[id] || 0;
  if (kind === 'list') {
    if (n >= item.qty) {
      shopSay(`You already have all ${item.qty} ${plural(item, item.qty)} you need. ✅`);
      return;
    }
    askQuestion(makeAddQuestion(item, n + 1), cardEl);
  } else {
    if (n) { shopSay(`You already picked the ${item.name}. You only need one of each treat.`); return; }
    if (choicesInCart().length >= S.m.choices.pick) {
      shopSay(`You already have ${S.m.choices.pick} treat${S.m.choices.pick > 1 ? 's' : ''}. Tap <b>−</b> in your cart to put one back if you want to swap.`);
      return;
    }
    askQuestion(makeTreatQuestion(item), cardEl);
  }
}

function onRemove(id) {
  const item = findItem(id);
  const n = S.cart[id];
  if (!n) return;
  if (n === 1) {
    delete S.cart[id];
    shopSay(`You put the ${item.one} back on the shelf.`);
    updateShopSide();
    return;
  }
  askQuestion(makeRemoveQuestion(item, n), null);
}

/* ---------------------------------------------------------------
   QUESTION GENERATORS
   Each returns { emoji, title, prompt, visual, answer, mode, pre, hints[], wrong(v), onCorrect, success }
   --------------------------------------------------------------- */
function chipRow(values, labels, missingIndex, mode, arrow = '→') {
  return `<div class="chip-row">${values.map((v, k) => `
    <div class="pattern-chip ${k === missingIndex ? 'missing' : ''}">
      <span class="pc-val">${k === missingIndex ? '?' : fmtUnit(v, mode)}</span>
      ${labels ? `<span class="pc-lbl">${labels[k]}</span>` : ''}
    </div>`).join(`<span class="chip-arrow" aria-hidden="true">${arrow}</span>`)}</div>`;
}

function makeAddQuestion(item, n) {
  const p = item.price;
  const mode = p < 100 ? 'cents' : 'dollars';
  const f = (v) => fmtUnit(v, mode);
  const ans = p * n;
  const by = stepWord(p);
  let types = ['extend', 'sequence', 'repeated'];
  if (n >= 3) types.push('rule');
  if (S.m.id === 'super' && n >= 2) types.push('backward');
  if (n === 1) types = [item.qty === 1 ? 'single' : 'start'];
  if (item.qty === 1) types = ['single'];
  if (S.m.demo && n > 1) types = ['extend']; // the same question every time, so the teacher knows what's coming
  let type = pick(types.filter((t) => t !== S.lastType).length ? types.filter((t) => t !== S.lastType) : types);
  S.lastType = type;

  const base = {
    skill: 'skip', step: p,
    emoji: item.emoji, mode, answer: ans, pre: '',
    title: 'Skip Count!',
    success: mode === 'cents'
      ? `${n} ${plural(item, n)} cost ${ans} cents.${ans >= 100 ? ` That is the same as ${dollarWords(ans)}.` : ''}`
      : `${n} ${plural(item, n)} cost ${f(ans)}.`,
    onCorrect: () => { S.cart[item.id] = n; },
    wrong: (v) => {
      if (v === ans - p || v === ans + p) return `So close! You are one jump away. Count forward by ${by} again.`;
      return `Try again! Count forward by ${by}.`;
    }
  };
  const labels = (count) => Array.from({ length: count }, (_, k) => `${k + 1} ${plural(item, k + 1)}`);

  switch (type) {
    case 'start':
      return { ...base, title: 'Start Your Pattern!',
        prompt: `${item.name} cost <b>${fmtPrice(p)}</b> each. You will skip count by <b>${by}</b>!<br>How much does <b>1 ${item.one}</b> cost?`,
        hints: ['Look at the price tag. That is the cost of one.'],
        wrong: () => `Try again! Look at the price for one ${item.one}.` };
    case 'single':
      return makeTreatQuestion(item);
    case 'extend':
      return { ...base,
        prompt: `You have <b>${n - 1} ${plural(item, n - 1)}</b> costing <b>${f(p * (n - 1))}</b>.<br>How much will <b>${n} ${plural(item, n)}</b> cost?`,
        visual: chipRow(Array.from({ length: n }, (_, k) => p * (k + 1)), labels(n), n - 1, mode),
        hints: [`Start at ${f(p * (n - 1))} and count forward by ${by}.`, `Each ${item.one} adds ${f(p)} more. One more jump!`] };
    case 'sequence':
      return { ...base, title: 'Extend the Pattern!',
        prompt: `Skip count by <b>${by}</b> to find the cost of <b>${n} ${plural(item, n)}</b>.`,
        visual: chipRow(Array.from({ length: n }, (_, k) => p * (k + 1)), labels(n), n - 1, mode),
        hints: [`Each number grows by ${by}. What comes after ${f(p * (n - 1))}?`, `Try ${f(p * (n - 1))} + ${f(p)}.`] };
    case 'repeated':
      return { ...base, title: 'Repeated Addition!',
        prompt: `${n} ${plural(item, n)} at ${fmtPrice(p)} each:<br><span class="big-eq">${Array.from({ length: n }, () => f(p)).join(' + ')} = ?</span>`,
        hints: [`Adding ${f(p)} again and again is the same as skip counting by ${by}.`, `Count by ${by} on your fingers: one finger for each ${f(p)}.`],
        wrong: (v) => v === ans - p || v === ans + p
          ? 'So close! Count how many numbers you are adding.'
          : `Try again! Skip count by ${by}, one jump for each ${item.one}.` };
    case 'rule': {
      const seqVals = Array.from({ length: n - 1 }, (_, k) => p * (k + 1));
      return { ...base, title: 'Find the Pattern Rule!', answer: p, pre: 'Add', skill: 'pattern', step: 0,
        prompt: `Here is the cost of your ${item.many} so far. What is the pattern rule?`,
        visual: chipRow(seqVals, labels(n - 1), -1, mode),
        success: `The rule is "add ${f(p)}". So ${n} ${plural(item, n)} cost ${f(ans)}.`,
        hints: ['How much bigger is each number than the one before it?', `Try ${f(p * 2)} − ${f(p)}.`],
        wrong: () => 'Not quite. Look at how much the numbers grow each time.' };
    }
    case 'backward': {
      const start = n + 3;
      const vals = [start, start - 1, start - 2, n].map((k) => p * k);
      const lbls = [start, start - 1, start - 2, n].map((k) => `${k} ${plural(item, k)}`);
      return { ...base, title: 'Count Backward!', skill: 'backward',
        prompt: `Count <b>backward</b> by ${by} to find the cost of <b>${n} ${plural(item, n)}</b>.`,
        visual: chipRow(vals, lbls, 3, mode),
        hints: [`Start at ${f(vals[2])} and count back by ${by}.`, `Try ${f(vals[2])} − ${f(p)}.`],
        wrong: () => `Try again! Count backward by ${by}.` };
    }
  }
  return base;
}

/** Treats and single items use price patterns (the price tag alone doesn't give it away). */
function makeTreatQuestion(item) {
  const p = item.price;
  const step = pick([100, 200]);
  const mode = 'dollars';
  const f = (v) => fmt(v);
  const variant = pick(['rule', 'missing']);
  const done = { skill: 'pattern', onCorrect: () => { S.cart[item.id] = 1; }, emoji: item.emoji, mode, success: `The ${item.name} costs ${fmtPrice(p)} today. Into the cart!` };
  const days = ['Mon', 'Tue', 'Wed', 'Today'];
  if (variant === 'rule') {
    const vals = [3, 2, 1, 0].map((k) => p + step * k);
    return { ...done, title: 'Sale Pattern!', answer: step, pre: 'Subtract', mode: step < 100 ? 'cents' : 'dollars',
      prompt: `The ${item.name} went on sale! The price dropped the <b>same amount</b> each day. What is the pattern rule?`,
      visual: chipRow(vals, days, -1, 'dollars'),
      hints: ['Is the pattern going up or down? How much does it change each time?', `Try ${f(vals[0])} − ${f(vals[1])}.`],
      wrong: () => 'Not quite. Find how much the price goes down from one day to the next.' };
  }
  // missing term in a decreasing price pattern
  const vals = [4, 3, 2, 1, 0].map((k) => p + step * k);
  const miss = pick([1, 2, 3]);
  return { ...done, title: 'Missing Number!', answer: vals[miss], pre: '',
    prompt: `The ${item.name} price went down by <b>${fmtPrice(step)}</b> every day. What is the missing price?`,
    visual: chipRow(vals, ['Mon', 'Tue', 'Wed', 'Thu', 'Today'], miss, 'dollars'),
    hints: [`Count backward by ${fmtPrice(step)} from ${f(vals[miss - 1])}.`, `Try ${f(vals[miss - 1])} − ${fmtPrice(step)}.`],
    wrong: (v) => v === vals[miss - 1] || v === vals[miss + 1]
      ? 'That number is already in the pattern! Look for the one in between.'
      : `Try again! The price goes down by ${fmtPrice(step)} each day.` };
}

function makeRemoveQuestion(item, n) {
  const p = item.price;
  const mode = p < 100 ? 'cents' : 'dollars';
  const f = (v) => fmtUnit(v, mode);
  const by = stepWord(p);
  const ans = p * (n - 1);
  return {
    skill: 'backward', step: p,
    emoji: item.emoji, mode, answer: ans, pre: '', title: 'Count Backward!',
    prompt: `You have <b>${n} ${plural(item, n)}</b> costing <b>${f(p * n)}</b>.<br>If you put 1 back, how much will <b>${n - 1} ${plural(item, n - 1)}</b> cost?`,
    visual: chipRow([n, n - 1].map((k) => p * k), [n, n - 1].map((k) => `${k} ${plural(item, k)}`), 1, mode, '←'),
    hints: [`Count backward by ${by} from ${f(p * n)}.`, `Take away one ${item.one}: ${f(p * n)} − ${f(p)}.`],
    wrong: () => `Try again! Count backward by ${by}.`,
    success: `${n - 1} ${plural(item, n - 1)} cost ${f(ans)}. You put one back.`,
    onCorrect: () => { S.cart[item.id] = n - 1; }
  };
}

/* ---------------------------------------------------------------
   QUESTION MODAL
   --------------------------------------------------------------- */
let Q = null;

function askQuestion(q, sourceEl) {
  Q = { ...q, tries: 0, hintIndex: 0, sourceEl, locked: false };
  $('#q-emoji').textContent = q.emoji;
  $('#q-title').textContent = q.title;
  $('#q-prompt').innerHTML = q.prompt;
  $('#q-visual').innerHTML = q.visual || '';
  $('#q-pre').textContent = q.pre || '';
  $('#q-pre').hidden = !q.pre;
  const cents = q.mode === 'cents';
  $('#q-unit-pre').textContent = cents ? '' : '$';
  $('#q-unit-pre').hidden = cents;
  $('#q-unit-post').textContent = cents ? '¢' : '';
  $('#q-unit-post').hidden = !cents;
  $('#q-label').textContent = 'Your answer in ' + (cents ? 'cents' : 'dollars');
  const input = $('#q-input');
  input.value = '';
  input.classList.remove('wrong', 'right');
  $('#q-feedback').textContent = '';
  $('#q-feedback').className = 'q-feedback';
  $('#q-hint').hidden = true;
  $('#q-hint-btn').disabled = false;
  $('#q-hint-btn').textContent = '💡 Hint';
  $('#q-modal').hidden = false;
  $('.modal-card').classList.remove('pop'); void $('.modal-card').offsetWidth; $('.modal-card').classList.add('pop');
  setTimeout(() => input.focus(), 50);
}

function closeQuestion() {
  $('#q-modal').hidden = true;
  Q = null;
}

function checkQuestion() {
  if (!Q || Q.locked) return;
  const input = $('#q-input');
  const fb = $('#q-feedback');
  const v = parseMoney(input.value, Q.mode);
  if (v === null) {
    fb.textContent = '✏️ Type your answer as a number first.';
    fb.className = 'q-feedback info';
    input.focus();
    return;
  }
  Q.tries++;
  track(Q.skill, v === Q.answer);
  if (v === Q.answer) {
    Q.locked = true;
    S.stats.solved++;
    if (Q.tries === 1) S.stats.firstTry++;
    input.classList.remove('wrong'); input.classList.add('right');
    fb.innerHTML = `🎉 <b>${pick(PRAISE)}</b> ${Q.success || ''}`;
    fb.className = 'q-feedback good';
    Sound.good();
    // show the completed pattern
    $$('.pattern-chip.missing .pc-val', $('#q-visual')).forEach((el) => {
      el.textContent = fmtUnit(Q.answer, Q.mode);
      el.parentElement.classList.add('solved');
    });
    const q = Q;
    setTimeout(() => {
      closeQuestion();
      const before = { ...S.cart };
      q.onCorrect();
      const added = Object.keys(S.cart).some((k) => (S.cart[k] || 0) > (before[k] || 0));
      if (added && q.sourceEl) flyToCart(q.sourceEl);
      updateShopSide();
      shopSay(`${q.emoji} ${q.success}`);
      if (shoppingDone()) {
        shopSay('🎊 Your cart has everything! Tap <b>Go to Checkout</b>.');
        $('#btn-to-budget').classList.add('pulse');
      }
    }, 1300);
  } else {
    input.classList.remove('right', 'wrong'); void input.offsetWidth; input.classList.add('wrong');
    let msg = Q.wrong ? Q.wrong(v) : 'Try again!';
    if (Q.step && Math.abs(v - Q.answer) === Q.step) mistake('oneJump');
    if (Q.mode === 'dollars' && v === Q.answer * 100) mistake('centsDollars');
    if (Q.mode === 'dollars' && v === Q.answer * 100) msg = 'It looks like you counted in cents. Remember, one hundred cents make one dollar. Write your answer in dollars.';
    fb.innerHTML = '💪 ' + msg + (Q.tries >= 2 && Q.hintIndex === 0 ? ' Tap 💡 Hint if you want help.' : '');
    fb.className = 'q-feedback bad';
    Sound.oops();
    input.select();
  }
}

function showHint() {
  if (!Q) return;
  const hints = Q.hints || [];
  if (Q.hintIndex >= hints.length) return;
  const h = $('#q-hint');
  h.hidden = false;
  h.innerHTML = hints.slice(0, Q.hintIndex + 1).map((x) => '💡 ' + x).join('<br>');
  Q.hintIndex++;
  S.stats.hints++;
  trackHint(Q.skill);
  if (Q.hintIndex >= hints.length) {
    $('#q-hint-btn').disabled = true;
    $('#q-hint-btn').textContent = '💡 No more hints';
  } else {
    $('#q-hint-btn').textContent = '💡 Another Hint';
  }
}

function flyToCart(fromEl) {
  const target = $('#cart-icon');
  const emojiEl = fromEl.querySelector('.ic-emoji') || fromEl;
  const a = emojiEl.getBoundingClientRect();
  const b = target.getBoundingClientRect();
  const fly = document.createElement('div');
  fly.className = 'flyer';
  fly.textContent = emojiEl.textContent;
  fly.style.left = a.left + a.width / 2 + 'px';
  fly.style.top = a.top + a.height / 2 + 'px';
  document.body.appendChild(fly);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    fly.style.transform = `translate(${b.left + b.width / 2 - (a.left + a.width / 2)}px, ${b.top + b.height / 2 - (a.top + a.height / 2)}px) scale(.4)`;
    fly.style.opacity = '0.3';
  }));
  setTimeout(() => {
    fly.remove();
    target.classList.remove('bounce'); void target.offsetWidth; target.classList.add('bounce');
  }, 750);
}

/* ---------------------------------------------------------------
   STAGE 3: CHECKOUT (receipt, budget check, payment, change)
   --------------------------------------------------------------- */
function renderCheckout() {
  const entries = cartEntries();
  const prev = S.sheet;
  // Keep rows the student already solved if that item wasn't changed.
  const keptRows = {};
  if (prev) entries.forEach((e) => { if (prev.rows[e.item.id] === e.n) keptRows[e.item.id] = e.n; });
  S.sheet = { rows: keptRows, totalOk: false, enough: null, overOk: false };

  $('#receipt-mission').textContent = 'Mission: ' + S.m.name;
  $('#receipt-rows').innerHTML = entries.map(({ item, n }) => {
    const ok = keptRows[item.id] === n;
    return `<div class="receipt-line">
        <label for="row-${item.id}">
          <span class="row-name">${item.name}</span>
          <span class="row-detail">${n} ${plural(item, n)}, ${fmtPrice(item.price)} each</span>
          <span class="row-groups" aria-hidden="true">${Array.from({ length: n }, () => `<span class="row-group">${item.emoji}<small>${fmtPrice(item.price)}</small></span>`).join('')}</span>
        </label>
        <div class="money-input"><span class="pre">$</span><input id="row-${item.id}" data-row="${item.id}" inputmode="decimal" autocomplete="off" class="${ok ? 'right' : ''}" ${ok ? `value="${(item.price * n / 100).toFixed(item.price * n % 100 ? 2 : 0)}" disabled` : ''}></div>
        <button class="hint-btn" type="button" data-hint="row-${item.id}" aria-label="Hint for ${item.name}">💡</button>
      </div>
      <p class="field-hint" id="hint-row-${item.id}" hidden></p>`;
  }).join('');

  const total = $('#in-total');
  total.value = ''; total.disabled = false; total.className = '';
  $('#hint-total').hidden = true;
  $('#enough-block').hidden = true;
  $$('[data-enough]').forEach((b) => { b.disabled = false; b.classList.remove('picked', 'right', 'wrong'); });
  $('#over-block').hidden = true;
  const over = $('#in-over');
  over.value = ''; over.disabled = false; over.className = '';
  $('#hint-over').hidden = true;
  $('#btn-check-budget').hidden = false;
  $('#btn-swap').hidden = true;
  $('#btn-back-shop').hidden = false;

  resetPayment();
  lockPayment(true);
  checkoutSay(S.m.choices
    ? 'Welcome to the checkout! Work out what each grocery costs, then add them up. Will your treats fit in your budget?'
    : 'Welcome to the checkout! Work out what each grocery costs, then add them up to find your total.');
  show('checkout');
}

function resetPayment() {
  S.pay = []; S.paid = 0; S.checkoutStep = 'locked'; S.firstWay = null; S.changeTries = 0; S.bonusDone = false;
  $('#reg-total').textContent = '?';
  $('#money-bank').innerHTML = MONEY.slice().reverse().map((m) =>
    `<button class="bank-btn" type="button" data-money="${m.v}" aria-label="Add a ${m.name}, ${m.label}">${moneyHTML(m.v)}</button>`).join('');
  $('#pay-title').textContent = 'Your Payment';
  $('#enough-pay').hidden = true;
  $('#change-block').hidden = true;
  $('#btn-finish').hidden = true;
  $('#btn-pay').hidden = false;
  $('#btn-pay').textContent = '💳 Pay';
  $('#btn-clear-pay').hidden = false;
  $('#money-bank').classList.remove('locked');
  $('#change-given').innerHTML = '';
  const ci = $('#in-change'); ci.value = ''; ci.disabled = false; ci.className = '';
  $('#btn-check-change').disabled = false;
  $('#hint-change').hidden = true;
  renderPayTray();
}

/** The payment side stays locked until the receipt and budget check are done. */
function lockPayment(locked) {
  const side = $('#pay-side');
  side.classList.toggle('locked', locked);
  side.inert = locked;
  $('#pay-lock').hidden = !locked;
}

function unlockPayment() {
  S.checkoutStep = 'pay';
  $('#reg-total').textContent = fmt(cartTotal());
  $('#btn-check-budget').hidden = true;
  lockPayment(false);
  reveal('#pay-side');
}

function reveal(sel) {
  setTimeout(() => { try { $(sel).scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) { /* old browser */ } }, 60);
}

function markField(input, ok) {
  input.classList.remove('right', 'wrong');
  void input.offsetWidth;
  input.classList.add(ok ? 'right' : 'wrong');
  if (ok) input.disabled = true;
}

function checkBudget() {
  const entries = cartEntries();
  const total = cartTotal();
  const budget = S.m.budget;
  let wrong = 0, blank = 0, right = 0, centsSlip = false;

  entries.forEach(({ item, n, cost }) => {
    const input = $('#row-' + item.id);
    if (input.disabled) return;
    const v = parseMoney(input.value);
    if (v === null) { blank++; return; }
    const ok = v === cost;
    markField(input, ok);
    track('receipt', ok);
    if (ok) { S.sheet.rows[item.id] = n; right++; } else { wrong++; if (v === cost * 100) { centsSlip = true; mistake('centsDollars'); } }
  });

  const tIn = $('#in-total');
  if (!tIn.disabled) {
    const v = parseMoney(tIn.value);
    if (v === null) blank++;
    else {
      const ok = v === total;
      markField(tIn, ok);
      track('total', ok);
      if (ok) { S.sheet.totalOk = true; right++; } else wrong++;
    }
  }

  if (S.sheet.enough === false) {
    const oIn = $('#in-over');
    if (!oIn.disabled) {
      const v = parseMoney(oIn.value);
      if (v === null) blank++;
      else {
        const ok = v === total - budget;
        markField(oIn, ok);
        track('budget', ok);
        if (ok) { right++; S.sheet.overOk = true; } else wrong++;
      }
    }
  }

  if (wrong) {
    Sound.oops();
    checkoutSay(`${right ? `You got ${right} right! ` : ''}Check the <b class="red">red</b> box${wrong > 1 ? 'es' : ''} and try again. Tap 💡 for a hint.` +
      (centsSlip ? ' It looks like you wrote cents in a dollar box. Remember, one hundred cents make one dollar!' : ''));
  } else if (blank) {
    checkoutSay(right ? `Great work so far! ✏️ Fill in the empty boxes too.` : '✏️ Type a number in each box, then tap Check My Answers.');
    if (right) Sound.good();
  } else {
    Sound.good();
  }
  afterBudgetStep();
}

function afterBudgetStep() {
  const allRows = cartEntries().every(({ item, n }) => S.sheet.rows[item.id] === n);
  if (!allRows || !S.sheet.totalOk) return;
  if (S.sheet.enough === null) {
    $('#enough-block').hidden = false;
    reveal('#enough-block');
    checkoutSay(`🎉 Your total is correct! Now compare it with your budget of <b>${fmt(S.m.budget)}</b>.`);
    $('#btn-check-budget').hidden = true;
    return;
  }
  if (S.sheet.overOk) {
    checkoutSay(`You found it! You are <b>${fmt(cartTotal() - S.m.budget)}</b> over budget. Go back and swap a treat for a cheaper one.`);
    $('#btn-check-budget').hidden = true;
    $('#btn-swap').hidden = false;
  }
}

function onEnough(answer) {
  const total = cartTotal();
  const budget = S.m.budget;
  const correct = total <= budget;
  const btn = $(`[data-enough="${answer}"]`);
  track('budget', (answer === 'yes') === correct);
  if (!correct && !S.sheet.overCounted) { mistake('overBudget'); S.sheet.overCounted = true; }
  if (answer === 'yes' && !correct) mistake('saidEnough');
  if ((answer === 'yes') === correct) {
    Sound.good();
    S.sheet.enough = correct;
    $$('[data-enough]').forEach((b) => (b.disabled = true));
    btn.classList.add('right');
    if (correct) {
      unlockPayment();
      checkoutSay(`Yes! ${fmt(total)} is ${total === budget ? 'exactly' : 'less than'} ${fmt(budget)}, so you can buy everything. 💵 Now pay at the register! Tap coins and bills.`);
    } else {
      $('#over-block').hidden = false;
      $('#btn-check-budget').hidden = false;
      reveal('#over-block');
      checkoutSay(`Right! ${fmt(total)} is more than ${fmt(budget)}. You can't buy everything. How much over budget are you?`);
      setTimeout(() => $('#in-over').focus(), 50);
    }
  } else {
    Sound.oops();
    btn.classList.remove('wrong'); void btn.offsetWidth; btn.classList.add('wrong');
    checkoutSay(`Look again! Is <b>${fmt(total)}</b> more or less than <b>${fmt(budget)}</b>? Compare the dollars first.`);
  }
}

function showBudgetHint(key) {
  S.stats.hints++;
  trackHint(key === 'total' ? 'total' : key === 'over' ? 'budget' : 'receipt');
  let el, text;
  if (key === 'total') {
    el = $('#hint-total');
    text = 'Add the cost of each grocery together. Try adding two numbers at a time, then add the next one.';
  } else if (key === 'over') {
    el = $('#hint-over');
    text = `Count up from ${fmt(S.m.budget)} to your total. Or subtract: your total − ${fmt(S.m.budget)}.`;
  } else {
    const id = key.replace('row-', '');
    const item = findItem(id);
    const n = S.cart[id];
    el = $('#hint-' + key);
    text = n === 1
      ? `One ${item.one} costs the price on its tag.`
      : `Skip count by ${stepWord(item.price)}, ${n} times. ` + (item.price < 100 ? (item.price === 25 ? 'Remember, four quarters make one dollar.' : 'Remember, one hundred cents make one dollar.') : `Start: ${fmtPrice(item.price)}, ${fmtPrice(item.price * 2)}, …`);
  }
  el.hidden = false;
  el.textContent = '💡 ' + text;
}

function checkoutSay(msg) { $('#checkout-bubble').innerHTML = msg; }

function renderPayTray() {
  const sorted = S.pay.slice().sort((a, b) => b - a);
  $('#pay-tray').innerHTML = sorted.length
    ? sorted.map((v) => `<button class="tray-btn" type="button" data-tray="${v}" aria-label="Take back ${MONEY.find((m) => m.v === v).name}">${moneyHTML(v)}</button>`).join('')
    : '<p class="tray-empty">Tap money below to put it on the counter.</p>';
  $('#reg-selected').textContent = fmt(sum(S.pay));
}

function addMoney(v) {
  if (S.checkoutStep !== 'pay' && S.checkoutStep !== 'bonus') return;
  Sound.coin();
  S.pay.push(v);
  $('#enough-pay').hidden = true;
  renderPayTray();
}

function removeMoney(v) {
  if (S.checkoutStep !== 'pay' && S.checkoutStep !== 'bonus') return;
  const i = S.pay.indexOf(v);
  if (i >= 0) S.pay.splice(i, 1);
  Sound.tap();
  $('#enough-pay').hidden = true;
  renderPayTray();
}

function onPay() {
  const sel = sum(S.pay);
  const total = cartTotal();
  if (!sel) { checkoutSay('Tap coins and bills first to choose your money.'); return; }
  if (S.checkoutStep === 'bonus') {
    const way = S.pay.slice().sort((a, b) => b - a).join(',');
    if (sel !== total) {
      track('pay', false);
      Sound.oops();
      checkoutSay(`Your money makes <b>${fmt(sel)}</b>. You need <b>exactly</b> ${fmt(total)}. ${sel > total ? 'Take some away.' : 'Add some more.'}`);
      return;
    }
    if (way === S.firstWay) {
      track('pay', false);
      Sound.oops();
      checkoutSay('That is the same way you paid before! Try different coins and bills.');
      return;
    }
    track('pay', true);
    Sound.win();
    S.checkoutStep = 'done';
    S.bonusDone = true;
    $('#money-bank').classList.add('locked');
    $('#btn-pay').hidden = true;
    $('#btn-clear-pay').hidden = true;
    checkoutSay(`🌟 Amazing! You showed <b>${fmt(total)}</b> two different ways. That's what Super Shoppers do!`);
    $('#btn-finish').hidden = false;
    return;
  }
  $('#enough-pay-q').innerHTML = `You picked <b>${fmt(sel)}</b>. Is that enough to pay <b>${fmt(total)}</b>?`;
  $('#enough-pay').hidden = false;
}

function onPayEnough(ans) {
  const sel = sum(S.pay);
  const total = cartTotal();
  const enough = sel >= total;
  track('pay', (ans === 'yes') === enough);
  if (ans === 'yes' && !enough) mistake('underpaid');
  if (ans === 'yes' && enough) {
    Sound.good();
    S.paid = sel;
    S.firstWay = S.pay.slice().sort((a, b) => b - a).join(',');
    S.checkoutStep = 'change';
    $('#enough-pay').hidden = true;
    $('#btn-pay').hidden = true;
    $('#btn-clear-pay').hidden = true;
    $('#btn-back-shop').hidden = true;
    $('#money-bank').classList.add('locked');
    $('#ch-total').textContent = fmt(total);
    $('#ch-paid').textContent = fmt(sel);
    $('#change-block').hidden = false;
    reveal('#change-block');
    checkoutSay('The cashier takes your money. 🧾 Now, how much change should you get back?');
    $('.register').classList.remove('ching'); void $('.register').offsetWidth; $('.register').classList.add('ching');
    setTimeout(() => $('#in-change').focus(), 50);
  } else if (ans === 'no' && !enough) {
    Sound.good();
    $('#enough-pay').hidden = true;
    checkoutSay(`Good thinking! ${fmt(sel)} is less than ${fmt(total)}. Add more money.`);
  } else if (ans === 'yes') {
    Sound.oops();
    checkoutSay(`The cashier says: "That's not enough yet!" Compare <b>${fmt(sel)}</b> with <b>${fmt(total)}</b>. Which is bigger?`);
    $('#enough-pay').hidden = true;
  } else {
    Sound.oops();
    checkoutSay(`Look again! Compare <b>${fmt(sel)}</b> with <b>${fmt(total)}</b>. Which is bigger?`);
  }
}

function checkChange() {
  const input = $('#in-change');
  const v = parseMoney(input.value);
  const expect = S.paid - cartTotal();
  if (v === null) { checkoutSay('✏️ Type your change as a number. If you paid the exact amount, type 0.'); return; }
  S.changeTries++;
  track('change', v === expect);
  if (v !== expect && (v === S.paid || v === cartTotal())) mistake('changeNumber');
  if (v === expect) {
    markField(input, true);
    S.stats.solved++;
    if (S.changeTries === 1) S.stats.firstTry++;
    $('#btn-check-change').disabled = true;
    Sound.win();
    const pieces = breakdown(expect);
    $('#change-given').innerHTML = expect
      ? `<p>The cashier gives you:</p><div class="change-pieces">${pieces.map((p, i) => `<span class="drop-in" style="animation-delay:${i * 0.15}s">${moneyHTML(p)}</span>`).join('')}</div>`
      : '<p>You paid the exact amount, so there is no change! 👏</p>';
    if (S.m.bonusWays) {
      S.checkoutStep = 'bonus';
      S.pay = [];
      renderPayTray();
      $('#money-bank').classList.remove('locked');
      $('#btn-pay').hidden = false;
      $('#btn-pay').textContent = '✔ Check My Way';
      $('#btn-clear-pay').hidden = false;
      $('#pay-title').textContent = 'Bonus: Another Way to Pay';
      checkoutSay(`🎉 Correct! <b>Super Shopper Bonus:</b> show a <b>different way</b> to make exactly <b>${fmt(cartTotal())}</b> with coins and bills.`);
    } else {
      S.checkoutStep = 'done';
      checkoutSay(`🎉 Correct! Your change is ${fmt(expect)}. Thanks for shopping!`);
      $('#btn-finish').hidden = false;
    }
  } else {
    markField(input, false);
    Sound.oops();
    checkoutSay(v === S.paid || v === cartTotal()
      ? 'Hmm, that is one of the numbers you started with. Change is the difference between them!'
      : '💪 Try again! Count up from the total cost to the money you paid.');
  }
}

/* ---------------------------------------------------------------
   STAGE 5: COMPLETE
   --------------------------------------------------------------- */
function renderComplete() {
  const total = cartTotal();
  const count = sum(cartEntries().map((e) => e.n));
  const change = S.paid - total;
  const demo = !!S.m.demo;
  if (!demo) {
    saved.completed[S.m.id] = true;
    Store.save(saved);
  }

  $('#done-title').textContent = demo ? 'Demo Complete!' : 'Mission Complete!';
  $('#done-sub').textContent = demo
    ? 'You\'re ready to shop!'
    : `${playerName ? `Great job, ${playerName.split(' ')[0]}! ` : ''}You finished "${S.m.name}"! You are a Super Shopper!`;
  $('#report-card').hidden = demo;
  $('#btn-again').hidden = demo;
  $('#btn-another').hidden = demo;
  const stat = (emoji, label, val) => `<div class="stat"><span class="stat-emoji" aria-hidden="true">${emoji}</span><span class="stat-val">${val}</span><span class="stat-lbl">${label}</span></div>`;
  $('#done-stats').innerHTML =
    stat('🛒', 'Groceries purchased', count) +
    stat('🧾', 'Total money spent', fmt(total)) +
    stat('👛', 'Budget remaining', fmt(S.m.budget - total)) +
    stat('🪙', 'Change received', fmt(change)) +
    stat('🧠', 'Questions solved', S.stats.solved);
  $('#done-skills').innerHTML = S.m.skills.map((s) => `<li>✅ ${s}</li>`).join('') +
    (S.bonusDone ? '<li>✅ Bonus: paid the same amount two different ways</li>' : '');
  renderReportCard();
  show('complete');
  if (SESSION && !S.logged && !demo) { S.logged = true; SESSION.finished.push(S.m.name); touchSession(); syncSession(); }
  Sound.win();
  confetti();
}

/* ---------------------------------------------------------------
   TEACHER DEMO
   Runs DEMO_MISSION on the normal screens. No name is needed, and
   track(), trackHint(), mistake() and renderComplete() leave the class
   report alone while S.m.demo is set.
   --------------------------------------------------------------- */
function startDemo() {
  Sound.tap();
  closeQuestion();
  startMission(-1, DEMO_MISSION);
}

/** Moves on one step, answering for the class where needed. */
function skipDemo() {
  Sound.tap();
  closeQuestion();
  const screen = $('.screen.active').id.replace('screen-', '');
  if (screen === 'briefing') renderShop();
  else if (screen === 'shop') {
    listItems().forEach((i) => { S.cart[i.id] = i.qty; });
    renderCheckout();
  } else if (S.checkoutStep === 'locked') skipReceipt();
  else {
    if (!S.paid) S.paid = S.m.budget; // as if they paid with the money in their wallet
    renderComplete();
  }
}

/** Fills in the receipt and budget check as if the class had answered them. */
function skipReceipt() {
  const dollars = (c) => (c / 100).toFixed(c % 100 ? 2 : 0);
  cartEntries().forEach(({ item, n, cost }) => {
    const input = $('#row-' + item.id);
    input.value = dollars(cost);
    markField(input, true);
    S.sheet.rows[item.id] = n;
  });
  const total = $('#in-total');
  total.value = dollars(cartTotal());
  markField(total, true);
  S.sheet.totalOk = true;
  S.sheet.enough = true;
  $('#enough-block').hidden = false;
  $$('[data-enough]').forEach((b) => (b.disabled = true));
  $('[data-enough="yes"]').classList.add('right');
  unlockPayment();
  checkoutSay(`The total is <b>${fmt(cartTotal())}</b>, which fits your budget of <b>${fmt(S.m.budget)}</b>. 💵 Now pay at the register! Tap coins and bills.`);
}

function exitDemo() {
  closeQuestion();
  renderMenu();
}

/* ---------------------------------------------------------------
   CLASS REPORT
   Everything a student does on one day is one "session": all missions,
   finished or not. The session is kept in this browser's storage and quietly
   sent to the teacher's Google Sheet every 90 seconds, after each mission and
   when the game is closed. The sheet keeps one row per student per day and
   updates it in place (see TEACHER-SETUP.md). Students never see a button.
   --------------------------------------------------------------- */
const SETTINGS = window.SQ_SETTINGS || {};
const reportsOn = () => /^https:\/\/script\.google\.com\//.test(SETTINGS.reportUrl || '');
let playerName = '';
let SESSION = null;

const SKILLS = [
  { key: 'skip', label: 'Skip counting' },
  { key: 'backward', label: 'Counting backward' },
  { key: 'pattern', label: 'Patterns and rules' },
  { key: 'receipt', label: 'Working out item costs' },
  { key: 'total', label: 'Adding the total' },
  { key: 'budget', label: 'Checking the budget' },
  { key: 'pay', label: 'Paying with money' },
  { key: 'change', label: 'Making change' }
];

const MISTAKE_TEXT = {
  oneJump: 'Was one skip-count jump off',
  centsDollars: 'Wrote cents where dollars were needed',
  offList: 'Tapped items that were not on the list',
  overBudget: 'Picked treats that went over budget',
  saidEnough: 'Said "enough money" when over budget',
  underpaid: 'Tried to pay with too little money',
  changeNumber: 'Gave the total or the amount paid as the change'
};

function bump(trackObj, skill, field) {
  (trackObj[skill] || (trackObj[skill] = { right: 0, wrong: 0, hints: 0 }))[field]++;
}
function track(skill, ok) {
  if (!S || !skill) return;
  bump(S.track, skill, ok ? 'right' : 'wrong');
  if (SESSION && !S.m.demo) { bump(SESSION.track, skill, ok ? 'right' : 'wrong'); touchSession(); }
}
function trackHint(skill) {
  if (!S || !skill) return;
  bump(S.track, skill, 'hints');
  if (SESSION && !S.m.demo) { bump(SESSION.track, skill, 'hints'); touchSession(); }
}
function mistake(key) {
  if (!S) return;
  S.mistakes[key] = (S.mistakes[key] || 0) + 1;
  if (SESSION && !S.m.demo) { SESSION.mistakes[key] = (SESSION.mistakes[key] || 0) + 1; touchSession(); }
}

/** 3 = strong, 2 = getting there, 1 = needs practice, 0 = not practised */
function skillStars(t) {
  if (!t || t.right + t.wrong === 0) return 0;
  const score = t.right / (t.right + t.wrong + t.hints * 0.5);
  return score >= 0.8 ? 3 : score >= 0.5 ? 2 : 1;
}

function rateSkills(trackObj) {
  const skills = {}, strong = [], close = [], practise = [];
  SKILLS.forEach(({ key, label }) => {
    const t = trackObj[key];
    const stars = skillStars(t);
    skills[key] = stars ? `${'⭐'.repeat(stars)} (${t.right} right, ${t.wrong} wrong, ${t.hints} hints)` : '—';
    if (stars === 3) strong.push(label);
    else if (stars === 2) close.push(label);
    else if (stars === 1) practise.push(label);
  });
  return { skills, strong, close, practise };
}

function checkName() {
  playerName = $('#in-name').value.trim().replace(/\s+/g, ' ').slice(0, 40);
  if (playerName) { openSession(playerName); return true; }
  const card = $('#name-card');
  card.classList.remove('need'); void card.offsetWidth; card.classList.add('need');
  Sound.oops();
  toast('✏️ Write your full name first!');
  $('#in-name').focus();
  return false;
}

/** Student-facing card on the Mission Complete screen (this mission only). */
function renderReportCard() {
  const { strong, close, practise } = rateSkills(S.track);
  const grow = practise.concat(close);
  $('#report-strong').innerHTML = strong.length ? strong.map((x) => `<li>${x}</li>`).join('') : '<li>You worked hard on every step!</li>';
  $('#report-practise').innerHTML = grow.length ? grow.map((x) => `<li>${x}</li>`).join('') : '<li>Nothing! Try a harder mission next.</li>';
}

/* ---------- Session storage ---------- */
const Sessions = {
  key: 'supermarketQuest.sessions',
  load() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch (e) { return {}; } },
  save(all) { try { localStorage.setItem(this.key, JSON.stringify(all)); } catch (e) { /* storage blocked */ } }
};

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function saveSession(sess = SESSION) {
  if (!sess) return;
  const all = Sessions.load();
  all[sess.id] = sess;
  Sessions.save(all);
}

/** Same name + same day = same session, even after a reload. */
function openSession(name) {
  const date = today();
  const id = [date, SETTINGS.className || '', name.toLowerCase()].join('|');
  if (SESSION && SESSION.id === id) return;
  if (SESSION) syncSession(SESSION); // a different student is taking over this iPad
  const all = Sessions.load();
  Object.keys(all).forEach((k) => { if (all[k].date !== date && !all[k].dirty) delete all[k]; });
  SESSION = all[id] || { id, date, className: SETTINGS.className || '', activeMs: 0, track: {}, mistakes: {}, finished: [] };
  SESSION.name = name;
  SESSION.lastActive = Date.now(); // time away from the game doesn't count
  SESSION.dirty = true;
  all[id] = SESSION;
  Sessions.save(all);
}

function touchSession() {
  if (!SESSION) return;
  const now = Date.now();
  SESSION.activeMs += Math.min(now - (SESSION.lastActive || now), 2 * 60000); // idle gaps count at most 2 minutes
  SESSION.lastActive = now;
  SESSION.lastStopped = whereStopped();
  SESSION.dirty = true;
  saveSession();
}

function whereStopped() {
  const active = $('.screen.active');
  const screen = active ? active.id.replace('screen-', '') : '';
  if (!S || S.m.demo || screen === 'menu') return 'Main menu';
  const m = S.m.name;
  if (screen === 'briefing') return `${m}: reading the mission`;
  if (screen === 'shop') {
    const got = sum(Object.values(S.cart));
    const need = sum(listItems().map((i) => i.qty)) + (S.m.choices ? S.m.choices.pick : 0);
    return `${m}: shopping (${got} of ${need} items)`;
  }
  if (screen === 'checkout') {
    const step = { locked: 'receipt', pay: 'paying', change: 'working out change', bonus: 'bonus: paying another way', done: 'finishing up' };
    return `${m}: checkout, ${step[S.checkoutStep] || 'receipt'}`;
  }
  if (screen === 'complete') return `${m}: mission complete`;
  return m;
}

function buildSessionReport(sess) {
  const { skills, strong, close, practise } = rateSkills(sess.track);
  const counts = {};
  sess.finished.forEach((n) => { counts[n] = (counts[n] || 0) + 1; });
  const tracks = Object.values(sess.track);
  const right = sum(tracks.map((t) => t.right));
  const total = right + sum(tracks.map((t) => t.wrong));
  return {
    sessionId: sess.id,
    date: sess.date,
    className: sess.className,
    name: sess.name,
    minutes: Math.round(sess.activeMs / 60000),
    finished: Object.keys(counts).map((n) => (counts[n] > 1 ? `${n} (${counts[n]}x)` : n)).join(', ') || 'None yet',
    stoppedAt: sess === SESSION ? whereStopped() : (sess.lastStopped || ''),
    answers: `${right} right out of ${total}`,
    skills,
    hints: sum(tracks.map((t) => t.hints)),
    didWell: strong.join(', ') || '—',
    gettingThere: close.join(', ') || '—',
    practise: practise.join(', ') || '—',
    mistakes: Object.keys(sess.mistakes).map((k) => `${MISTAKE_TEXT[k]} (${sess.mistakes[k]}x)`).join('; ') || 'None'
  };
}

/**
 * Sends the whole session so far. Every send replaces the student's row, so a
 * missed send is fixed by the next one. `leaving` uses sendBeacon, which still
 * delivers while Safari is closing the page.
 */
function syncSession(sess = SESSION, leaving = false) {
  if (!sess || !sess.dirty || !reportsOn() || navigator.onLine === false) return;
  const body = JSON.stringify(buildSessionReport(sess));
  if (leaving && navigator.sendBeacon) {
    if (navigator.sendBeacon(SETTINGS.reportUrl, new Blob([body], { type: 'text/plain;charset=utf-8' }))) {
      sess.dirty = false; saveSession(sess);
    }
    return;
  }
  sess.dirty = false; // anything that happens during the request marks it dirty again
  saveSession(sess);
  // Apps Script sends no CORS headers, so the reply can't be read; a rejection means offline.
  fetch(SETTINGS.reportUrl, {
    method: 'POST', mode: 'no-cors', keepalive: true,
    headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body
  }).catch(() => { sess.dirty = true; saveSession(sess); });
}

/** Sends any sessions left unsent, e.g. from an earlier student who was offline. */
function syncStoredSessions() {
  const all = Sessions.load();
  Object.values(all).forEach((sess) => { if (sess.dirty && (!SESSION || sess.id !== SESSION.id)) syncSession(sess); });
  if (SESSION) syncSession(SESSION);
}

function startSessionSync() {
  setInterval(() => { if (document.visibilityState === 'visible') syncSession(); }, 90000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') syncSession(SESSION, true); });
  window.addEventListener('pagehide', () => syncSession(SESSION, true));
  window.addEventListener('online', syncStoredSessions);
  syncStoredSessions();
}

function confetti() {
  const box = $('#confetti');
  box.innerHTML = '';
  const colors = ['#ff6b6b', '#ffd93d', '#6bcB77', '#4d96ff', '#c77dff', '#ff9f1c'];
  const bits = ['🍎', '🍌', '⭐', '🪙', '🍁'];
  for (let i = 0; i < 70; i++) {
    const d = document.createElement('span');
    const isEmoji = i % 7 === 0;
    d.className = 'confetto' + (isEmoji ? ' emoji' : '');
    if (isEmoji) d.textContent = pick(bits);
    else d.style.background = pick(colors);
    d.style.left = Math.random() * 100 + '%';
    d.style.animationDelay = Math.random() * 2.5 + 's';
    d.style.animationDuration = 2.8 + Math.random() * 2.5 + 's';
    d.style.setProperty('--spin', (Math.random() * 720 - 360) + 'deg');
    box.appendChild(d);
  }
}

/* ---------------------------------------------------------------
   EVENTS
   --------------------------------------------------------------- */
function bindEvents() {
  document.addEventListener('click', (e) => {
    const t = e.target.closest('button');
    if (!t) return;
    if (t.dataset.nav === 'menu') { closeQuestion(); renderMenu(); return; }
    if (t.dataset.mission) {
      if (!checkName()) return;
      Sound.tap(); startMission(+t.dataset.mission); return;
    }
    if (t.dataset.item) { onItemTap(t.dataset.item, t.dataset.kind, t); return; }
    if (t.dataset.remove) { onRemove(t.dataset.remove); return; }
    if (t.dataset.hint) { showBudgetHint(t.dataset.hint); return; }
    if (t.dataset.enough) { onEnough(t.dataset.enough); return; }
    if (t.dataset.money) { addMoney(+t.dataset.money); return; }
    if (t.dataset.tray) { removeMoney(+t.dataset.tray); return; }
    if (t.dataset.payenough) { onPayEnough(t.dataset.payenough); return; }
  });

  $('#btn-demo').addEventListener('click', startDemo);
  $('#btn-demo-skip').addEventListener('click', skipDemo);
  $('#btn-demo-exit').addEventListener('click', exitDemo);

  $('#btn-start-shopping').addEventListener('click', () => { Sound.tap(); renderShop(); });
  $('#btn-to-budget').addEventListener('click', () => {
    if (!shoppingDone()) return;
    $('#btn-to-budget').classList.remove('pulse');
    Sound.tap();
    renderCheckout();
  });
  $('#btn-back-shop').addEventListener('click', () => { renderShop(); });
  $('#btn-swap').addEventListener('click', () => {
    renderShop();
    shopSay(`You need to save <b>${fmt(cartTotal() - S.m.budget)}</b>. Tap <b>−</b> to put a treat back, then pick a cheaper one.`);
  });
  $('#btn-check-budget').addEventListener('click', checkBudget);

  $('#btn-pay').addEventListener('click', onPay);
  $('#btn-clear-pay').addEventListener('click', () => { S.pay = []; $('#enough-pay').hidden = true; renderPayTray(); });
  $('#btn-check-change').addEventListener('click', checkChange);
  $('#in-change').addEventListener('keydown', (e) => { if (e.key === 'Enter') checkChange(); });
  $('#btn-hint-change').addEventListener('click', () => {
    S.stats.hints++;
    trackHint('change');
    const h = $('#hint-change');
    h.hidden = false;
    h.textContent = `💡 Count up from ${fmt(cartTotal())} to ${fmt(S.paid)}. Or subtract: ${fmt(S.paid)} − ${fmt(cartTotal())}.`;
  });
  $('#btn-finish').addEventListener('click', renderComplete);
  $('#in-name').addEventListener('input', () => $('#name-card').classList.remove('need'));
  $('#in-name').addEventListener('keydown', (e) => { if (e.key === 'Enter') e.target.blur(); });

  $('#btn-again').addEventListener('click', () => startMission(MISSIONS.indexOf(S.m)));
  $('#btn-another').addEventListener('click', () => startMission((MISSIONS.indexOf(S.m) + 1) % MISSIONS.length));

  $('#q-form').addEventListener('submit', (e) => { e.preventDefault(); checkQuestion(); });
  $('#q-hint-btn').addEventListener('click', showHint);
  $('#q-cancel').addEventListener('click', closeQuestion);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && Q) closeQuestion(); });

  // Enter on receipt inputs = check
  $('.receipt').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') { e.preventDefault(); checkBudget(); }
  });

  const sb = $('#btn-sound');
  const paintSound = () => {
    sb.textContent = Sound.on ? '🔊' : '🔇';
    sb.setAttribute('aria-pressed', String(Sound.on));
    sb.setAttribute('aria-label', Sound.on ? 'Sound on' : 'Sound off');
  };
  sb.addEventListener('click', () => { Sound.on = !Sound.on; saved.sound = Sound.on; Store.save(saved); paintSound(); Sound.tap(); });
  paintSound();
}

/* 11-sided loonie shape */
(function setLoonieShape() {
  const pts = [];
  for (let i = 0; i < 11; i++) {
    const a = (Math.PI * 2 * i) / 11 - Math.PI / 2;
    pts.push(`${(50 + 50 * Math.cos(a)).toFixed(2)}% ${(50 + 50 * Math.sin(a)).toFixed(2)}%`);
  }
  document.documentElement.style.setProperty('--hendecagon', `polygon(${pts.join(',')})`);
})();

bindEvents();
renderMenu();
startSessionSync();
