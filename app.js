const XP_MAJOR = 100;
const XP_MINOR = 10;
const XP_COMPLETE = 200;

const DEFAULT_WORDS = [
  "RAINBOW",
  "PUZZLE",
  "SEARCH",
  "HIGHLIGHT",
  "DRAG",
  "LETTER",
  "CIRCLE",
  "SCORE",
  "STAR",
  "CLOUD",
  "SUNSHINE",
  "BUBBLES",
  "PLANET",
  "COMET",
  "FLOWER",
  "TRAIL",
  "RIVER",
  "MEADOW",
  "SKYLINE",
  "SUMMIT",
  "FOREST",
  "BLOSSOM"
];

const MINOR_WORDS = [
  "ABLE",
  "ABOUT",
  "ABOVE",
  "ACORN",
  "ACROSS",
  "ACT",
  "ADD",
  "AFTER",
  "AGAIN",
  "AGE",
  "AIR",
  "ALL",
  "ALSO",
  "AMONG",
  "AND",
  "ANY",
  "ALOE",
  "ANCHOR",
  "ARCH",
  "ART",
  "AURA",
  "BACK",
  "BALL",
  "BAND",
  "BASE",
  "BE",
  "BEACH",
  "BEAN",
  "BEAR",
  "BEAT",
  "BEEN",
  "BEST",
  "BIG",
  "BILL",
  "BIRD",
  "BITE",
  "BOOK",
  "BORN",
  "BOTH",
  "BRIGHT",
  "BRING",
  "BUILD",
  "BUS",
  "CALL",
  "CAME",
  "CARRY",
  "CASE",
  "CAT",
  "CELL",
  "CENTER",
  "CHECK",
  "CITY",
  "CLASS",
  "CLEAR",
  "CLOSE",
  "COLD",
  "COME",
  "COOL",
  "COST",
  "CUT",
  "BALM",
  "BARN",
  "BLOOM",
  "BLUE",
  "BOAT",
  "BOULDER",
  "BRANCH",
  "BROOK",
  "BUD",
  "BUSH",
  "CAMP",
  "CANOE",
  "CANYON",
  "CAPE",
  "CAVE",
  "CLIFF",
  "CLOVE",
  "COAST",
  "CONE",
  "CORAL",
  "COVE",
  "CREEK",
  "CREST",
  "DARK",
  "DATA",
  "DAY",
  "DEAR",
  "DEEP",
  "DID",
  "DO",
  "DOOR",
  "DOWN",
  "DRAW",
  "EACH",
  "EARTH",
  "EAST",
  "EASY",
  "EAT",
  "EDGE",
  "ELSE",
  "END",
  "ENOUGH",
  "EVER",
  "EYE",
  "DUNE",
  "DEW",
  "DRIFT",
  "DRUM",
  "ECHO",
  "EMBER",
  "FALL",
  "FAR",
  "FARMS",
  "FAST",
  "FEEL",
  "FEET",
  "FERN",
  "FIR",
  "FLAME",
  "FLEET",
  "FLORA",
  "FOAM",
  "FROST",
  "FROM",
  "FULL",
  "GAME",
  "GAVE",
  "GIRL",
  "GIVE",
  "GO",
  "GOOD",
  "GREAT",
  "GREEN",
  "GROUP",
  "GROW",
  "HAD",
  "HAND",
  "HARD",
  "HAS",
  "HAVE",
  "HEAD",
  "HEAR",
  "HELP",
  "HERE",
  "HIGH",
  "HILL",
  "HOME",
  "HOPE",
  "HOT",
  "HOUR",
  "HOUSE",
  "HOW",
  "IDEA",
  "IF",
  "IN",
  "INTO",
  "IS",
  "IT",
  "GALE",
  "GARDEN",
  "GLADE",
  "GLIDE",
  "GLOW",
  "GROVE",
  "HARBOR",
  "HAVEN",
  "HIKE",
  "HOLLOW",
  "HORIZON",
  "ICE",
  "ISLE",
  "IVY",
  "JET",
  "JUNIPER",
  "KITE",
  "LAKE",
  "LARK",
  "LAVA",
  "LEAF",
  "LEFT",
  "LIFE",
  "LILY",
  "LUSH",
  "MAKE",
  "MAN",
  "MANY",
  "ME",
  "MIGHT",
  "MIND",
  "MORE",
  "MIST",
  "MOON",
  "MOSS",
  "NEST",
  "NOVA",
  "OAK",
  "OASIS",
  "OFF",
  "OLD",
  "ON",
  "ONCE",
  "ONE",
  "ONLY",
  "OPEN",
  "OR",
  "OUR",
  "OUT",
  "ORCHID",
  "ORBIT",
  "PEAK",
  "PEBBLE",
  "PINE",
  "POND",
  "PRAIRIE",
  "PART",
  "PLAY",
  "PLEASE",
  "POINT",
  "POWER",
  "QUILL",
  "RAIN",
  "REED",
  "RIDGE",
  "ROAM",
  "ROCK",
  "ROSE",
  "SAIL",
  "SAND",
  "SAY",
  "SEE",
  "SEEM",
  "SET",
  "SEED",
  "SHADE",
  "SHORE",
  "SKY",
  "SMALL",
  "SO",
  "SOME",
  "SONG",
  "SOUND",
  "STATE",
  "STAY",
  "STORY",
  "STUDY",
  "SUN",
  "SPARK",
  "STONE",
  "STREAM",
  "SUMMER",
  "TAKE",
  "TALK",
  "TEAM",
  "TELL",
  "THANK",
  "THEIR",
  "THEN",
  "THERE",
  "THESE",
  "THING",
  "THIS",
  "THREE",
  "TIME",
  "TO",
  "TOGETHER",
  "THORN",
  "TIDE",
  "TRAIL",
  "TREE",
  "TRY",
  "TURN",
  "TWO",
  "UNDER",
  "UP",
  "US",
  "USE",
  "VERY",
  "WANT",
  "WATER",
  "WELL",
  "WERE",
  "WEST",
  "WHAT",
  "WHEN",
  "WHICH",
  "WHILE",
  "WHITE",
  "WHO",
  "WHY",
  "WILL",
  "WITH",
  "WORD",
  "VALE",
  "VINE",
  "WAVE",
  "WILD",
  "WIND",
  "WING",
  "WOOD"
].map((word) => word.toUpperCase());
const MINOR_WORD_SET = new Set(MINOR_WORDS);

const THEMES = [
  {
    id: "none",
    name: "None",
    colors: {
      accent: "#ff7a59",
      accent2: "#4f9cff",
      accent3: "#ffd166",
      bg: "#fff5e6",
      panel: "#ffffff"
    },
    words: []
  },
  {
    id: "garden",
    name: "Garden Bloom",
    colors: {
      accent: "#ff7a59",
      accent2: "#8dd9b8",
      accent3: "#ffd166",
      bg: "#fff5e6",
      panel: "#ffffff"
    },
    words: [
      "FLOWER",
      "PETAL",
      "BLOSSOM",
      "GARDEN",
      "VINE",
      "ROSE",
      "DAISY",
      "LILAC",
      "MEADOW",
      "NECTAR",
      "SUNLIGHT",
      "SPROUT",
      "HONEY",
      "WILDFLOWER"
    ]
  },
  {
    id: "mountain",
    name: "Mountain Hike",
    colors: {
      accent: "#4f9cff",
      accent2: "#79c2a0",
      accent3: "#b4e1ff",
      bg: "#eef6ff",
      panel: "#ffffff"
    },
    words: [
      "SUMMIT",
      "RIDGE",
      "TRAIL",
      "PEAK",
      "BOULDER",
      "FOREST",
      "PINE",
      "CANYON",
      "VALLEY",
      "CAMPSITE",
      "CABIN",
      "SHELTER",
      "MAP",
      "HIKE"
    ]
  },
  {
    id: "coast",
    name: "Coastal Breeze",
    colors: {
      accent: "#42b7b2",
      accent2: "#ffb347",
      accent3: "#a6e3ff",
      bg: "#f2fbff",
      panel: "#ffffff"
    },
    words: [
      "OCEAN",
      "WAVE",
      "TIDE",
      "SHELL",
      "CORAL",
      "HARBOR",
      "SEAGULL",
      "SUNSET",
      "SAND",
      "BREEZE",
      "COAST",
      "LIGHTHOUSE",
      "ISLAND",
      "BOAT"
    ]
  },
  {
    id: "meadow",
    name: "Meadow Magic",
    colors: {
      accent: "#ff9ac2",
      accent2: "#8ad3b5",
      accent3: "#ffd166",
      bg: "#fff0f6",
      panel: "#ffffff"
    },
    words: [
      "MEADOW",
      "BUTTERFLY",
      "BREEZE",
      "WILD",
      "FIELD",
      "NEST",
      "BLOSSOM",
      "CLOVER",
      "CREEK",
      "SKY",
      "SUN",
      "BIRD",
      "RAINBOW",
      "GRASS"
    ]
  }
];

const CAMPAIGN_LEVELS = [
  { themeId: "garden", gridSize: 10, words: 7, label: "Bloom Path" },
  { themeId: "garden", gridSize: 11, words: 8, label: "Petal Run" },
  { themeId: "garden", gridSize: 12, words: 9, label: "Hedge Maze" },
  { themeId: "mountain", gridSize: 11, words: 8, label: "Trailhead" },
  { themeId: "mountain", gridSize: 12, words: 9, label: "Ridge Walk" },
  { themeId: "mountain", gridSize: 13, words: 10, label: "Summit Push" },
  { themeId: "coast", gridSize: 11, words: 8, label: "Seaside" },
  { themeId: "coast", gridSize: 12, words: 9, label: "Harbor Light" },
  { themeId: "coast", gridSize: 13, words: 10, label: "Open Water" },
  { themeId: "meadow", gridSize: 12, words: 9, label: "Soft Breeze" }
];

const boardEl = document.getElementById("board");
const wordListEl = document.getElementById("wordList");
const scoreEl = document.getElementById("scoreCount");
const hintEl = document.getElementById("hint");
const gridSizeInput = document.getElementById("gridSize");
const resizeBtn = document.getElementById("resizeBtn");
const resetBtn = document.getElementById("resetBtn");
const menuToggle = document.getElementById("menuToggle");
const menuPanel = document.getElementById("menuPanel");
const menuResume = document.getElementById("menuResume");
const menuResize = document.getElementById("menuResize");
const menuReset = document.getElementById("menuReset");
const menuStats = document.getElementById("menuStats");
const menuTheme = document.getElementById("menuTheme");
const menuMap = document.getElementById("menuMap");
const statsModal = document.getElementById("statsModal");
const statsClose = document.getElementById("statsClose");
const statMajor = document.getElementById("statMajor");
const statMinor = document.getElementById("statMinor");
const statTotal = document.getElementById("statTotal");
const statTime = document.getElementById("statTime");
const themeModal = document.getElementById("themeModal");
const themeOptions = document.getElementById("themeOptions");
const themeClose = document.getElementById("themeClose");
const winScreen = document.getElementById("winScreen");
const winSummary = document.getElementById("winSummary");
const winLevel = document.getElementById("winLevel");
const winTotalWords = document.getElementById("winTotalWords");
const winNext = document.getElementById("winNext");
const winStats = document.getElementById("winStats");
const winRetry = document.getElementById("winRetry");
const winMap = document.getElementById("winMap");
const levelDisplay = document.getElementById("levelDisplay");
const levelRing = document.getElementById("levelRing");
const xpLabel = document.getElementById("xpLabel");
const wordPanel = document.querySelector(".word-panel");
const themeTitle = document.getElementById("themeTitle");
const mapGrid = document.getElementById("mapGrid");
const mapLevel = document.getElementById("mapLevel");
const mapTotalWords = document.getElementById("mapTotalWords");
const freePlayBtn = document.getElementById("freePlayBtn");
const mapBackBtn = document.getElementById("mapBackBtn");
const screenMap = document.getElementById("screenMap");
const screenPlay = document.getElementById("screenPlay");
const resizeModal = document.getElementById("resizeModal");
const resizeInput = document.getElementById("resizeInput");
const resizeSubmit = document.getElementById("resizeSubmit");
const resizeClose = document.getElementById("resizeClose");

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1]
];

const STORAGE_KEY = "wordsearch_stats_v1";

let gridSize = Number(gridSizeInput.value);
let grid = [];
let words = [];
let foundWords = new Set();
let minorFound = new Set();
let activeSelection = [];
let pointerIsDown = false;
let startCell = null;
let currentPointerId = null;
let activeTheme = THEMES[0];
let mode = "free";
let currentLevelIndex = 0;
let lastTick = Date.now();
let xpPinned = false;
let returnToWin = false;

const stats = loadStats();
applyTheme(findTheme(stats.themeId) || activeTheme);

function loadStats() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (error) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }
  return {
    xp: 0,
    level: 0,
    majorTotal: 0,
    minorTotal: 0,
    totalWords: 0,
    totalTime: 0,
    themeId: THEMES[0].id,
    campaignUnlocked: 0,
    campaignCompleted: []
  };
}

function saveStats() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function levelCap(level) {
  return 1000 + level * 100;
}

function addXp(amount) {
  stats.xp += amount;
  let leveled = false;
  while (stats.xp >= levelCap(stats.level)) {
    stats.xp -= levelCap(stats.level);
    stats.level += 1;
    leveled = true;
  }
  if (leveled) {
    hintEl.textContent = `Level up! You reached level ${stats.level}.`;
    triggerLevelUp();
  }
  triggerXpGain(amount);
  updateXpUI();
  saveStats();
}

function updateXpUI() {
  levelDisplay.textContent = String(stats.level);
  const cap = levelCap(stats.level);
  const percent = Math.min(100, (stats.xp / cap) * 100);
  levelRing.style.setProperty("--ring", `${percent * 3.6}deg`);
  xpLabel.textContent = `${stats.xp} / ${cap} XP`;
  levelRing.dataset.xp = `${stats.xp} / ${cap} XP`;
}

function triggerXpGain(amount) {
  const float = document.createElement("div");
  float.className = "ring-float";
  float.textContent = `+${amount} XP`;
  levelRing.appendChild(float);
  levelRing.classList.add("gain");
  window.setTimeout(() => {
    levelRing.classList.remove("gain");
    float.remove();
  }, 1400);
}

function triggerLevelUp() {
  levelRing.classList.add("level-up");
  window.setTimeout(() => {
    levelRing.classList.remove("level-up");
  }, 1600);
}
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const hrs = Math.floor(mins / 60);
  const remMins = mins % 60;
  if (hrs > 0) return `${hrs}h ${remMins}m`;
  return `${mins}m`;
}

function applyTheme(theme) {
  activeTheme = theme;
  const root = document.documentElement;
  root.style.setProperty("--accent", theme.colors.accent);
  root.style.setProperty("--accent-2", theme.colors.accent2);
  root.style.setProperty("--accent-3", theme.colors.accent3);
  root.style.setProperty("--bg", theme.colors.bg);
  root.style.setProperty("--panel", theme.colors.panel);
  stats.themeId = theme.id;
  themeTitle.textContent = theme.id === "none" ? "Word List" : `${theme.name} Words`;
  saveStats();
}

function findTheme(id) {
  return THEMES.find((theme) => theme.id === id);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickWords(size, pool, count) {
  const maxWords = count || clamp(Math.floor(size * 0.8), 6, 12);
  const usable = pool.filter((word) => word.length <= size);
  return shuffle([...usable]).slice(0, maxWords).map((word) => word.toUpperCase());
}

function emptyGrid(size) {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => ""));
}

function canPlace(word, row, col, dir, board) {
  const [dr, dc] = dir;
  for (let i = 0; i < word.length; i += 1) {
    const r = row + dr * i;
    const c = col + dc * i;
    if (r < 0 || r >= board.length || c < 0 || c >= board.length) {
      return false;
    }
    const existing = board[r][c];
    if (existing && existing !== word[i]) {
      return false;
    }
  }
  return true;
}

function placeWord(word, board) {
  const attempts = 220;
  for (let i = 0; i < attempts; i += 1) {
    const dir = directions[Math.floor(Math.random() * directions.length)];
    const row = Math.floor(Math.random() * board.length);
    const col = Math.floor(Math.random() * board.length);
    if (!canPlace(word, row, col, dir, board)) continue;
    const [dr, dc] = dir;
    for (let j = 0; j < word.length; j += 1) {
      board[row + dr * j][col + dc * j] = word[j];
    }
    return true;
  }
  return false;
}

function fillRandom(board) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board.length; c += 1) {
      if (!board[r][c]) {
        board[r][c] = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }
}

function buildBoard(size, wordPool, count) {
  words = pickWords(size, wordPool, count);
  grid = emptyGrid(size);
  const sorted = [...words].sort((a, b) => b.length - a.length);
  sorted.forEach((word) => {
    if (!placeWord(word, grid)) {
      const idx = words.indexOf(word);
      if (idx !== -1) words.splice(idx, 1);
    }
  });
  fillRandom(grid);
}

function renderBoard() {
  boardEl.innerHTML = "";
  boardEl.style.gridTemplateColumns = `repeat(${gridSize}, minmax(0, 1fr))`;
  for (let r = 0; r < gridSize; r += 1) {
    for (let c = 0; c < gridSize; c += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = grid[r][c];
      cell.dataset.row = String(r);
      cell.dataset.col = String(c);
      boardEl.appendChild(cell);
    }
  }
}

function renderWordList() {
  wordListEl.innerHTML = "";
  words.forEach((word) => {
    const li = document.createElement("li");
    li.textContent = word;
    li.dataset.word = word;
    if (foundWords.has(word)) li.classList.add("found");
    wordListEl.appendChild(li);
  });
}

function updateScore() {
  scoreEl.textContent = String(foundWords.size);
}

function resetSelection() {
  activeSelection.forEach((cell) => {
    if (!cell.classList.contains("found") && !cell.classList.contains("minor")) {
      cell.classList.remove("selected");
    }
  });
  activeSelection = [];
}

function getCellFromPoint(x, y) {
  const el = document.elementFromPoint(x, y);
  if (!el || !el.classList.contains("cell")) return null;
  return el;
}

function lineCells(start, end) {
  const startRow = Number(start.dataset.row);
  const startCol = Number(start.dataset.col);
  const endRow = Number(end.dataset.row);
  const endCol = Number(end.dataset.col);
  const dr = endRow - startRow;
  const dc = endCol - startCol;

  if (dr === 0 && dc === 0) return [start];

  const stepR = Math.sign(dr);
  const stepC = Math.sign(dc);

  if (stepR !== 0 && stepC !== 0 && Math.abs(dr) !== Math.abs(dc)) {
    return [start];
  }

  const length = Math.max(Math.abs(dr), Math.abs(dc));
  const cells = [];
  for (let i = 0; i <= length; i += 1) {
    const r = startRow + stepR * i;
    const c = startCol + stepC * i;
    const cell = boardEl.querySelector(`.cell[data-row='${r}'][data-col='${c}']`);
    if (cell) cells.push(cell);
  }
  return cells;
}

function updateSelection(endCell) {
  if (!startCell) return;
  resetSelection();
  const cells = lineCells(startCell, endCell);
  cells.forEach((cell) => {
    if (!cell.classList.contains("found") && !cell.classList.contains("minor")) {
      cell.classList.add("selected");
    }
  });
  activeSelection = cells;
}

function selectionToWord(cells) {
  const letters = cells.map((cell) => cell.textContent).join("");
  const reversed = letters.split("").reverse().join("");
  return { letters, reversed };
}

function animateFoundWord(word, cells, targetEl) {
  if (!targetEl) return;
  const targetRect = targetEl.getBoundingClientRect();
  const targetX = targetRect.left + targetRect.width * 0.2;
  const targetY = targetRect.top + targetRect.height * 0.5;
  cells.forEach((cell, index) => {
    const rect = cell.getBoundingClientRect();
    const letter = document.createElement("span");
    letter.className = "flying-letter";
    letter.textContent = word[index] || cell.textContent;
    letter.style.left = `${rect.left + rect.width / 2 - 6}px`;
    letter.style.top = `${rect.top + rect.height / 2 - 10}px`;
    const dx = targetX - (rect.left + rect.width / 2);
    const dy = targetY - (rect.top + rect.height / 2);
    const cx = dx * 0.5 + (Math.random() * 40 - 20);
    const cy = dy * 0.5 - (Math.random() * 40 + 10);
    letter.style.setProperty("--dx", `${dx}px`);
    letter.style.setProperty("--dy", `${dy}px`);
    letter.style.setProperty("--cx", `${cx}px`);
    letter.style.setProperty("--cy", `${cy}px`);
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    letter.appendChild(sparkle);
    document.body.appendChild(letter);
    letter.addEventListener(
      "animationend",
      () => {
        letter.remove();
      },
      { once: true }
    );
  });
}

function registerMinor(word, cells) {
  if (minorFound.has(word)) return false;
  minorFound.add(word);
  addXp(XP_MINOR);
  stats.minorTotal += 1;
  stats.totalWords += 1;
  saveStats();
  cells.forEach((cell) => {
    cell.classList.remove("selected");
    cell.classList.add("minor");
    cell.classList.add("pulse");
  });
  hintEl.textContent = `Bonus word: ${word}! +${XP_MINOR} XP`;
  animateFoundWord(word, cells, levelRing);
  window.setTimeout(() => {
    cells.forEach((cell) => cell.classList.remove("pulse"));
  }, 500);
  return true;
}

function finalizeSelection() {
  if (!activeSelection.length) return;
  const { letters, reversed } = selectionToWord(activeSelection);
  const match = words.find(
    (word) => !foundWords.has(word) && (word === letters || word === reversed)
  );
  if (match) {
    foundWords.add(match);
    stats.majorTotal += 1;
    stats.totalWords += 1;
    addXp(XP_MAJOR);
    activeSelection.forEach((cell) => {
      cell.classList.remove("selected");
      cell.classList.add("found");
      cell.classList.add("pulse");
    });
    const li = wordListEl.querySelector(`[data-word='${match}']`);
    if (li) li.classList.add("found");
    animateFoundWord(match, activeSelection, li);
    updateScore();
    hintEl.textContent = `Nice! Found ${match}. +${XP_MAJOR} XP`;
    boardEl.classList.add("celebrate");
    window.setTimeout(() => {
      activeSelection.forEach((cell) => cell.classList.remove("pulse"));
      boardEl.classList.remove("celebrate");
    }, 500);
    if (foundWords.size === words.length) {
      completeRound();
    }
  } else {
    const options = [letters, reversed].filter((word) => word.length >= 3);
    const foundMinor = options.some((word) => {
      const uppercase = word.toUpperCase();
      if (MINOR_WORD_SET.has(uppercase) && !words.includes(uppercase)) {
        return registerMinor(uppercase, activeSelection);
      }
      return false;
    });
    if (!foundMinor) {
      resetSelection();
      hintEl.textContent = "Try again. Drag in a straight line.";
    }
  }
}

function handlePointerDown(event) {
  const cell = event.target.closest(".cell");
  if (!cell) return;
  pointerIsDown = true;
  currentPointerId = event.pointerId;
  startCell = cell;
  cell.setPointerCapture(event.pointerId);
  updateSelection(cell);
}

function handlePointerMove(event) {
  if (!pointerIsDown || event.pointerId !== currentPointerId) return;
  const cell = getCellFromPoint(event.clientX, event.clientY);
  if (!cell) return;
  updateSelection(cell);
}

function handlePointerUp(event) {
  if (!pointerIsDown || event.pointerId !== currentPointerId) return;
  pointerIsDown = false;
  currentPointerId = null;
  finalizeSelection();
  startCell = null;
}

function updateStatsModal() {
  statMajor.textContent = String(stats.majorTotal);
  statMinor.textContent = String(stats.minorTotal);
  statTotal.textContent = String(stats.totalWords);
  statTime.textContent = formatTime(stats.totalTime);
}

function rebuild() {
  foundWords = new Set();
  minorFound = new Set();
  updateScore();
  const pool =
    mode === "campaign"
      ? activeTheme.words
      : Array.from(new Set(DEFAULT_WORDS.concat(activeTheme.words)));
  const count = mode === "campaign" ? CAMPAIGN_LEVELS[currentLevelIndex].words : undefined;
  buildBoard(gridSize, pool, count);
  renderBoard();
  renderWordList();
  hintEl.textContent = "Drag across letters in a straight line.";
  updateXpUI();
}

function showScreen(screen) {
  screenMap.classList.remove("screen-active");
  screenPlay.classList.remove("screen-active");
  if (screen === "map") {
    screenMap.classList.add("screen-active");
    renderMap();
  } else {
    screenPlay.classList.add("screen-active");
  }
}

function startCampaignLevel(index) {
  mode = "campaign";
  currentLevelIndex = index;
  const level = CAMPAIGN_LEVELS[index];
  const theme = findTheme(level.themeId);
  if (theme) applyTheme(theme);
  gridSize = level.gridSize;
  gridSizeInput.value = String(gridSize);
  rebuild();
  showScreen("play");
}

function renderMap() {
  mapGrid.innerHTML = "";
  mapLevel.textContent = String(stats.level);
  mapTotalWords.textContent = String(stats.totalWords);
  CAMPAIGN_LEVELS.forEach((level, index) => {
    const card = document.createElement("div");
    card.className = "map-card";
    const theme = findTheme(level.themeId);
    const unlocked = index <= stats.campaignUnlocked;
    const completed = stats.campaignCompleted.includes(index);
    card.innerHTML = `
      <div class="pill">${completed ? "Completed" : unlocked ? "Unlocked" : "Locked"}</div>
      <strong>${theme ? theme.name : "Theme"}</strong>
      <small>${level.label}</small>
      <small>Grid ${level.gridSize} · ${level.words} words</small>
    `;
    if (unlocked) {
      card.addEventListener("click", () => startCampaignLevel(index));
    } else {
      card.style.opacity = "0.45";
    }
    mapGrid.appendChild(card);
  });
}

function completeRound() {
  addXp(XP_COMPLETE);
  hintEl.textContent = `Round complete! +${XP_COMPLETE} XP`;
  if (mode === "campaign") {
    if (!stats.campaignCompleted.includes(currentLevelIndex)) {
      stats.campaignCompleted.push(currentLevelIndex);
    }
    if (stats.campaignUnlocked < currentLevelIndex + 1) {
      stats.campaignUnlocked = currentLevelIndex + 1;
    }
    saveStats();
  }
  winLevel.textContent = String(stats.level);
  winTotalWords.textContent = String(stats.totalWords);
  winSummary.textContent = `You found all ${words.length} words!`;
  winScreen.classList.add("active");
  renderMap();
}

function renderThemeOptions() {
  themeOptions.innerHTML = "";
  THEMES.forEach((theme) => {
    const card = document.createElement("div");
    card.className = "theme-card";
    if (theme.id === activeTheme.id) card.classList.add("active");
    card.innerHTML = `
      <strong>${theme.name}</strong>
      <small>${theme.words.length ? `${theme.words.length} themed words` : "Random mix"}</small>
    `;
    card.addEventListener("click", () => {
      applyTheme(theme);
      mode = "free";
      rebuild();
      renderThemeOptions();
    });
    themeOptions.appendChild(card);
  });
}

function tickTime() {
  const now = Date.now();
  const delta = Math.floor((now - lastTick) / 1000);
  if (delta > 0) {
    stats.totalTime += delta;
    lastTick = now;
    saveStats();
  }
}

resizeBtn.addEventListener("click", () => {
  resizeInput.value = String(gridSize);
  resizeModal.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  rebuild();
});

menuToggle.addEventListener("click", () => {
  menuPanel.classList.add("active");
});

menuResume.addEventListener("click", () => {
  menuPanel.classList.remove("active");
});

menuResize.addEventListener("click", () => {
  menuPanel.classList.remove("active");
  resizeInput.value = String(gridSize);
  resizeModal.classList.add("active");
});

menuReset.addEventListener("click", () => {
  menuPanel.classList.remove("active");
  rebuild();
});

menuStats.addEventListener("click", () => {
  menuPanel.classList.remove("active");
  updateStatsModal();
  statsModal.classList.add("active");
});

menuTheme.addEventListener("click", () => {
  menuPanel.classList.remove("active");
  renderThemeOptions();
  themeModal.classList.add("active");
});

menuMap.addEventListener("click", () => {
  menuPanel.classList.remove("active");
  showScreen("map");
});

mapBackBtn.addEventListener("click", () => {
  showScreen("play");
});

freePlayBtn.addEventListener("click", () => {
  mode = "free";
  rebuild();
  showScreen("play");
});

resizeClose.addEventListener("click", () => {
  resizeModal.classList.remove("active");
});

resizeSubmit.addEventListener("click", () => {
  const size = clamp(Number(resizeInput.value), 8, 20);
  resizeInput.value = String(size);
  gridSize = size;
  gridSizeInput.value = String(size);
  mode = "free";
  rebuild();
  resizeModal.classList.remove("active");
});

statsClose.addEventListener("click", () => {
  statsModal.classList.remove("active");
  if (returnToWin) {
    winScreen.classList.add("active");
    returnToWin = false;
  }
});

themeClose.addEventListener("click", () => {
  themeModal.classList.remove("active");
});

winStats.addEventListener("click", () => {
  winScreen.classList.remove("active");
  updateStatsModal();
  statsModal.classList.add("active");
  returnToWin = true;
});

winRetry.addEventListener("click", () => {
  winScreen.classList.remove("active");
  rebuild();
});

winMap.addEventListener("click", () => {
  winScreen.classList.remove("active");
  showScreen("map");
});

winNext.addEventListener("click", () => {
  winScreen.classList.remove("active");
  if (mode === "campaign") {
    const next = currentLevelIndex + 1;
    if (next < CAMPAIGN_LEVELS.length) {
      startCampaignLevel(next);
    } else {
      showScreen("map");
    }
  } else {
    rebuild();
  }
});

boardEl.addEventListener("pointerdown", handlePointerDown);
boardEl.addEventListener("pointermove", handlePointerMove);
boardEl.addEventListener("pointerup", handlePointerUp);
boardEl.addEventListener("pointerleave", handlePointerUp);
boardEl.addEventListener("pointercancel", handlePointerUp);

levelRing.addEventListener("click", () => {
  xpPinned = !xpPinned;
  wordPanel.classList.toggle("show-xp", xpPinned);
});

levelRing.addEventListener("mouseenter", () => {
  if (!xpPinned) wordPanel.classList.add("show-xp");
});

levelRing.addEventListener("mouseleave", () => {
  if (!xpPinned) wordPanel.classList.remove("show-xp");
});

renderMap();
rebuild();
updateXpUI();
renderThemeOptions();

setInterval(tickTime, 1000);
window.addEventListener("beforeunload", () => {
  tickTime();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
