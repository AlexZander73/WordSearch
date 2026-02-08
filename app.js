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

async function loadMinorWords() {
  try {
    const response = await fetch("data/minor-words.txt");
    if (!response.ok) return;
    const text = await response.text();
    text
      .split(/\r?\n/)
      .map((word) => word.trim().toUpperCase())
      .filter((word) => word.length >= 3)
      .forEach((word) => MINOR_WORD_SET.add(word));
  } catch (error) {
    // Keep the built-in list if the larger list fails to load.
  }
}

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
  }
];

const PALETTES = {
  americas: { accent: "#ff7a59", accent2: "#4f9cff", accent3: "#ffd166", bg: "#fff5e6", panel: "#ffffff" },
  europe: { accent: "#2b6df6", accent2: "#f56a6a", accent3: "#ffe59a", bg: "#f2f6ff", panel: "#ffffff" },
  africa: { accent: "#ff9f45", accent2: "#6bc8b0", accent3: "#ffd166", bg: "#fff6ec", panel: "#ffffff" },
  asia: { accent: "#ff6fa9", accent2: "#6bc0ff", accent3: "#ffe7a6", bg: "#fff4f8", panel: "#ffffff" },
  oceania: { accent: "#ff8f4f", accent2: "#4fb5a8", accent3: "#ffd166", bg: "#fff4e6", panel: "#ffffff" }
};

const CONTINENT_PALETTE = {
  NA: "americas",
  SA: "americas",
  EU: "europe",
  AF: "africa",
  AS: "asia",
  OC: "oceania"
};

const GENERIC_COUNTRY_WORDS = [
  "TRAVEL",
  "JOURNEY",
  "CULTURE",
  "MARKET",
  "RIVER",
  "MOUNTAIN",
  "VALLEY",
  "FOREST",
  "COAST",
  "HARBOR",
  "BRIDGE",
  "GARDEN",
  "MUSEUM",
  "CASTLE",
  "TEMPLE",
  "VILLAGE",
  "CITY",
  "PLAZA",
  "STREET",
  "SUNSET",
  "SUNRISE",
  "ISLAND",
  "BAY",
  "LAKE",
  "RAIN",
  "SNOW",
  "CLOUD",
  "WIND",
  "HORIZON",
  "TRAIL"
];

const CONTINENT_WORDS = {
  americas: [
    "CANYON",
    "PRAIRIE",
    "COAST",
    "HARBOR",
    "RIDGE",
    "CREEK",
    "PINE",
    "LAKE",
    "RIVER",
    "VALLEY",
    "TRAIL",
    "ISLAND",
    "CLIFF",
    "MEADOW",
    "PARK",
    "ROAD",
    "BRIDGE",
    "SUMMIT",
    "WATERFALL",
    "BLOOM"
  ],
  europe: [
    "CASTLE",
    "VILLAGE",
    "MARKET",
    "RIVER",
    "GARDEN",
    "SQUARE",
    "BRIDGE",
    "CANAL",
    "HARBOR",
    "CHAPEL",
    "FOREST",
    "MEADOW",
    "HILLS",
    "ALLEY",
    "TOWER",
    "MUSEUM",
    "PALACE",
    "ISLAND",
    "PLAZA",
    "TRAIL"
  ],
  africa: [
    "SAFARI",
    "SAVANNA",
    "OASIS",
    "DESERT",
    "DUNE",
    "MARKET",
    "PALM",
    "COAST",
    "RIVER",
    "PLAIN",
    "HARBOR",
    "LAGOON",
    "SUNSET",
    "VILLAGE",
    "GROVE",
    "MEADOW",
    "MOUNTAIN",
    "VALLEY",
    "TRAIL",
    "ISLAND"
  ],
  asia: [
    "TEMPLE",
    "PALACE",
    "MARKET",
    "RIVER",
    "GARDEN",
    "BRIDGE",
    "HARBOR",
    "ISLAND",
    "MOUNTAIN",
    "PLAZA",
    "ALLEY",
    "PAGODA",
    "SPICE",
    "TEA",
    "CANAL",
    "FOREST",
    "VALLEY",
    "SUNRISE",
    "TRAIL",
    "SQUARE"
  ],
  oceania: [
    "REEF",
    "LAGOON",
    "BEACH",
    "ISLAND",
    "COAST",
    "HARBOR",
    "TRAIL",
    "FOREST",
    "MOUNTAIN",
    "VOLCANO",
    "BAY",
    "COVE",
    "CORAL",
    "SURF",
    "CLIFF",
    "WAVE",
    "MEADOW",
    "GROVE",
    "SUNSET",
    "RAIN"
  ]
};

const BIOME_WORDS = {
  arctic: ["SNOW", "AURORA", "ICE", "GLACIER", "FROST", "TUNDRA", "PINE", "FJORD", "WINTER", "LIGHTS"],
  temperate: ["FOREST", "MEADOW", "HILL", "RIVER", "LAKE", "GARDEN", "TRAIL", "VALLEY", "BREEZE", "CLOUD"],
  dry: ["DESERT", "DUNE", "OASIS", "SUN", "CANYON", "STONE", "RIDGE", "HORIZON", "PALM", "SAND"],
  tropical: ["JUNGLE", "MONSOON", "LAGOON", "PALM", "RAIN", "REEF", "CANOPY", "RIVER", "BLOOM", "BREEZE"]
};

const GLOBAL_FILL_WORDS = [
  "ADVENTURE",
  "EXPLORE",
  "COMPASS",
  "PASSPORT",
  "JOURNAL",
  "WANDER",
  "PATHWAY",
  "DISTANCE",
  "HORIZON",
  "MILESTONE",
  "SUNSHINE",
  "BREEZE",
  "GLIMMER",
  "SPARK",
  "TWILIGHT",
  "STARLIGHT",
  "MOONRISE",
  "SEASIDE",
  "BAYOU",
  "HILLSIDE",
  "PEAK",
  "RIDGE",
  "MEADOWS",
  "WOODLAND",
  "WATERWAY",
  "MARINA",
  "BOARDWALK",
  "ISLET",
  "COVE",
  "SHORE",
  "SHELL",
  "CORAL",
  "WILDLIFE",
  "TRAILHEAD",
  "LOOKOUT",
  "SCENIC",
  "CAMPFIRE",
  "GLADE",
  "GROVE",
  "FERN",
  "ORCHARD",
  "HARVEST",
  "FESTIVAL",
  "MARKET",
  "BOUTIQUE",
  "SQUARE",
  "PLAZA",
  "CATHEDRAL",
  "LANDMARK",
  "SKYLINE",
  "SUNSET",
  "SUNRISE",
  "RAINBOW",
  "WILLOW",
  "CANYON",
  "GLACIER",
  "SPRING",
  "SUMMER",
  "AUTUMN",
  "WINTER"
];

const COUNTRY_SPECIFIC_WORDS = {
  canada: ["MAPLE", "IGLOO", "AURORA", "ROCKIES", "BEAVER", "MOOSE", "PRAIRIE", "BAY", "TUNDRA"],
  unitedstates: ["LIBERTY", "SKYLINE", "SUBWAY", "CANYON", "PRAIRIE", "COAST", "DESERT", "FOREST"],
  mexico: ["AZTEC", "MURAL", "PUEBLO", "TACOS", "CANAL", "FIESTA", "TEMPLE"],
  brazil: ["AMAZON", "CARNIVAL", "SAMBA", "JUNGLE", "BEACH", "HARBOR", "COPACABANA"],
  argentina: ["TANGO", "PAMPAS", "GAUCHO", "MATE", "GLACIER", "ANDES"],
  chile: ["ANDES", "FJORD", "PACIFIC", "VALLEY", "GLACIER", "VINE"],
  peru: ["INCA", "CUSCO", "RUINS", "LLAMA", "TEMPLE", "MOUNTAIN"],
  colombia: ["COFFEE", "EMERALD", "JUNGLE", "SIERRA", "HARBOR"],
  unitedkingdom: ["CASTLE", "ABBEY", "HIGHLAND", "RIVER", "BRIDGE", "TEA"],
  ireland: ["CLIFF", "GAELIC", "HARBOR", "MEADOW", "CASTLE"],
  france: ["BISTRO", "BOULEVARD", "CATHEDRAL", "RIVER", "MUSEUM"],
  spain: ["FLAMENCO", "PALACE", "PLAZA", "FIESTA", "SUNSET"],
  italy: ["PIAZZA", "GELATO", "RUINS", "VILLA", "TEMPLE"],
  greece: ["TEMPLE", "OLIVE", "ISLAND", "COAST", "RUINS"],
  egypt: ["PYRAMID", "NILE", "DESERT", "SPHINX", "OASIS"],
  kenya: ["SAFARI", "SAVANNA", "WILDLIFE", "RIFT", "PLAIN"],
  southafrica: ["TABLE", "VINE", "SAFARI", "COAST", "MOUNTAIN"],
  india: ["PALACE", "SPICE", "MONSOON", "TEMPLE", "BAZAAR"],
  china: ["WALL", "TEMPLE", "PALACE", "GARDEN", "RIVER"],
  japan: ["SAKURA", "TORII", "RAMEN", "SUSHI", "FUJI"],
  thailand: ["TEMPLE", "CANAL", "ISLAND", "SPICE", "MARKET"],
  vietnam: ["BAY", "TEMPLE", "FOREST", "ISLAND", "RIVER"],
  indonesia: ["ISLAND", "VOLCANO", "TEMPLE", "JUNGLE", "COAST"],
  philippines: ["ISLAND", "BEACH", "BAY", "COAST", "SUNSET"],
  australia: ["KANGAROO", "KOALA", "OUTBACK", "REEF", "BEACH", "SURF"],
  newzealand: ["FIORD", "TRAIL", "MOUNTAIN", "COAST", "FOREST"]
};

const COUNTRY_ICON_EMOJI = {
  canada: "🍁",
  unitedstates: "🗽",
  mexico: "🌮",
  brazil: "🌴",
  argentina: "🧉",
  chile: "🏔️",
  peru: "🦙",
  colombia: "☕",
  unitedkingdom: "🫖",
  ireland: "☘️",
  france: "🗼",
  spain: "💃",
  portugal: "🚋",
  italy: "🍝",
  greece: "🏛️",
  turkey: "🕌",
  egypt: "🧱",
  kenya: "🦒",
  southafrica: "🦓",
  india: "🪷",
  china: "🐉",
  japan: "🌸",
  thailand: "🏝️",
  vietnam: "🛶",
  indonesia: "🌋",
  philippines: "🏖️",
  australia: "🦘",
  newzealand: "🥾"
};

const COUNTRY_CITY_OVERRIDES = {
  canada: ["Halifax", "Quebec", "Toronto", "Winnipeg", "Calgary", "Vancouver"],
  australia: ["Brisbane", "Gold Coast", "Melbourne", "Canberra", "Sydney"],
  unitedstates: ["New York", "Los Angeles", "Chicago", "Miami", "San Francisco", "Seattle", "Boston", "Las Vegas", "Honolulu"],
  unitedkingdom: ["London", "Edinburgh", "Manchester", "Liverpool", "Belfast", "Bristol"],
  france: ["Paris", "Nice", "Lyon", "Marseille", "Bordeaux", "Toulouse"],
  spain: ["Madrid", "Barcelona", "Seville", "Valencia", "Bilbao", "Granada"],
  italy: ["Rome", "Milan", "Venice", "Florence", "Naples", "Bologna"],
  germany: ["Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt", "Dresden"],
  japan: ["Tokyo", "Kyoto", "Osaka", "Sapporo", "Fukuoka", "Hiroshima"],
  china: ["Beijing", "Shanghai", "Xi'an", "Chengdu", "Guangzhou", "Shenzhen"],
  india: ["Delhi", "Mumbai", "Jaipur", "Agra", "Goa", "Bengaluru"],
  brazil: ["Rio de Janeiro", "Sao Paulo", "Salvador", "Brasilia", "Recife", "Fortaleza"],
  mexico: ["Mexico City", "Cancun", "Guadalajara", "Monterrey", "Oaxaca", "Merida"],
  egypt: ["Cairo", "Giza", "Luxor", "Aswan", "Alexandria"],
  southafrica: ["Cape Town", "Johannesburg", "Durban", "Pretoria", "Knysna"],
  turkey: ["Istanbul", "Ankara", "Izmir", "Antalya", "Cappadocia"],
  thailand: ["Bangkok", "Chiang Mai", "Phuket", "Krabi", "Pattaya"],
  vietnam: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue", "Hoi An"],
  philippines: ["Manila", "Cebu", "Boracay", "Palawan", "Davao"],
  indonesia: ["Jakarta", "Bali", "Yogyakarta", "Bandung", "Surabaya"],
  greece: ["Athens", "Santorini", "Mykonos", "Thessaloniki", "Crete"],
  portugal: ["Lisbon", "Porto", "Sintra", "Faro", "Coimbra"],
  netherlands: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"],
  switzerland: ["Zurich", "Geneva", "Lucerne", "Bern", "Interlaken"],
  austria: ["Vienna", "Salzburg", "Innsbruck", "Graz", "Hallstatt"],
  sweden: ["Stockholm", "Gothenburg", "Malmo", "Uppsala", "Kiruna"],
  norway: ["Oslo", "Bergen", "Trondheim", "Tromso", "Stavanger"],
  denmark: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Roskilde"],
  finland: ["Helsinki", "Tampere", "Turku", "Rovaniemi", "Oulu"],
  poland: ["Warsaw", "Krakow", "Gdansk", "Wroclaw", "Poznan"],
  ireland: ["Dublin", "Galway", "Cork", "Belfast", "Limerick"],
  newzealand: ["Auckland", "Wellington", "Queenstown", "Christchurch", "Rotorua"],
  argentina: ["Buenos Aires", "Mendoza", "Cordoba", "Bariloche", "Ushuaia"],
  chile: ["Santiago", "Valparaiso", "Puerto Varas", "Punta Arenas", "Atacama"],
  peru: ["Lima", "Cusco", "Arequipa", "Iquitos", "Puno"],
  colombia: ["Bogota", "Medellin", "Cartagena", "Cali", "Santa Marta"],
  kenya: ["Nairobi", "Mombasa", "Maasai Mara", "Nakuru", "Lamu"],
  morocco: ["Marrakesh", "Casablanca", "Fes", "Chefchaouen", "Rabat"],
  uae: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain"]
};

const CONTINENT_ICONS = {
  americas: "🧭",
  europe: "🏰",
  africa: "🦁",
  asia: "🎎",
  oceania: "🌊"
};

const COUNTRIES = (window.COUNTRIES_DATA || [])
  .filter((country) => !/russia|russian/i.test(country.name || "") && !/russia/i.test(country.id || ""))
  .map((country) => ({
    ...country,
    palette: CONTINENT_PALETTE[country.continent] || "americas"
  }));

const DIFFICULTY_SETTINGS = [
  { difficulty: 1, gridSize: 9 },
  { difficulty: 2, gridSize: 11 },
  { difficulty: 3, gridSize: 13 }
];

const COUNTRY_CITY_WORDS = new Map();

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededShuffle(list, seed) {
  const rng = mulberry32(seed);
  const items = [...list];
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function getBiomeKey(lat) {
  const abs = Math.abs(lat);
  if (abs >= 60) return "arctic";
  if (abs >= 35) return "temperate";
  if (abs >= 15) return "dry";
  return "tropical";
}

function normalizeWord(word) {
  return word.toUpperCase().replace(/[^A-Z]/g, "");
}

function getCountryCentroid(country) {
  const north = Number(country.north);
  const south = Number(country.south);
  const west = Number(country.west);
  const east = Number(country.east);
  if ([north, south, west, east].some((val) => Number.isNaN(val))) {
    return { lat: country.lat || 0, lon: country.lon || 0 };
  }
  const lat = (north + south) / 2;
  let adjustedEast = east;
  if (east < west) adjustedEast += 360;
  let lon = (adjustedEast + west) / 2;
  if (lon > 180) lon -= 360;
  return { lat, lon };
}

function buildCountryWordPool(country, options = {}) {
  const includeCity = options.includeCity !== false;
  const tokens = (value) =>
    value
      .split(/\s+/)
      .map((part) => normalizeWord(part))
      .filter(Boolean);
  const centroid = getCountryCentroid(country);
  const biome = BIOME_WORDS[getBiomeKey(centroid.lat)] || [];
  const region = CONTINENT_WORDS[country.palette] || [];
  const specific = COUNTRY_SPECIFIC_WORDS[country.id] || [];
  const base = [
    country.name,
    ...(includeCity ? [country.city] : []),
    ...tokens(country.name),
    ...(includeCity ? tokens(country.city) : []),
    ...specific,
    ...region,
    ...biome,
    ...GENERIC_COUNTRY_WORDS,
    ...GLOBAL_FILL_WORDS
  ];
  const unique = Array.from(new Set(base.map((w) => normalizeWord(w)).filter(Boolean)));
  return unique;
}

function getCountryCities(country) {
  const map = window.COUNTRY_CITIES || {};
  const list = map[country.id] || [];
  const overrides = COUNTRY_CITY_OVERRIDES[country.id] || [];
  const deduped = [];
  const seen = new Set();
  overrides.concat(list).forEach((city) => {
    const key = city.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    deduped.push(city);
  });
  if (!deduped.length && country.city) {
    deduped.push(country.city);
  }
  const withCapital = country.city && !deduped.some((city) => city.toLowerCase() === country.city.toLowerCase())
    ? [country.city, ...deduped]
    : deduped;
  return withCapital.slice(0, 9);
}

function splitWordsAcrossCities(country) {
  if (COUNTRY_CITY_WORDS.has(country.id)) {
    return COUNTRY_CITY_WORDS.get(country.id);
  }
  const cities = getCountryCities(country);
  const pool = buildCountryWordPool(country, { includeCity: false });
  const seed = hashString(country.id);
  const shuffled = seededShuffle(pool, seed);
  const minPer = 30;
  const chunkSize = Math.max(minPer, Math.floor(shuffled.length / Math.max(1, cities.length)));
  const buckets = new Map();
  let cursor = 0;
  cities.forEach((city) => {
    let bucket = shuffled.slice(cursor, cursor + chunkSize);
    cursor += chunkSize;
    if (bucket.length < minPer) {
      const needed = minPer - bucket.length;
      const extras = shuffled.filter((word) => !bucket.includes(word)).slice(0, needed);
      bucket = bucket.concat(extras);
    }
    buckets.set(city, bucket);
  });
  COUNTRY_CITY_WORDS.set(country.id, buckets);
  return buckets;
}

function getCountryWordsForCity(country, city) {
  const buckets = splitWordsAcrossCities(country);
  const bucket = buckets.get(city);
  const cityWord = normalizeWord(city);
  if (bucket && bucket.length) {
    if (cityWord && !bucket.includes(cityWord)) {
      return [cityWord, ...bucket];
    }
    return bucket;
  }
  const fallback = buckets.values().next().value;
  if (fallback) {
    if (cityWord && !fallback.includes(cityWord)) {
      return [cityWord, ...fallback];
    }
    return fallback;
  }
  return cityWord ? [cityWord, ...buildCountryWordPool(country)] : buildCountryWordPool(country);
}

function buildThemeForCountry(country, city, difficulty) {
  return {
    id: country.id,
    name: country.name,
    colors: PALETTES[country.palette] || PALETTES.americas,
    words: getCountryWordsForCity(country, city)
  };
}

function getCountryById(id) {
  return COUNTRIES.find((country) => country.id === id);
}

function countryCodeToFlag(code) {
  if (!code || code.length !== 2) return "🌍";
  const base = 127397;
  const chars = code.toUpperCase().split("");
  return String.fromCodePoint(...chars.map((char) => base + char.charCodeAt(0)));
}

function getCountryIcon(country) {
  return COUNTRY_ICON_EMOJI[country.id] || CONTINENT_ICONS[country.palette] || "🧭";
}

function buildSilhouetteDataUrl(seed) {
  const rng = mulberry32(seed);
  const points = 8;
  const radius = 46;
  const jitter = 18;
  const center = 60;
  let path = "";
  for (let i = 0; i < points; i += 1) {
    const angle = (Math.PI * 2 * i) / points;
    const r = radius + (rng() - 0.5) * jitter;
    const x = center + Math.cos(angle) * r;
    const y = center + Math.sin(angle) * r;
    path += i === 0 ? `M${x.toFixed(1)},${y.toFixed(1)}` : `L${x.toFixed(1)},${y.toFixed(1)}`;
  }
  path += "Z";
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><path d='${path}' fill='none' stroke='white' stroke-width='2' opacity='0.6'/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function buildCampaignLevels() {
  const levels = [];
  COUNTRIES.forEach((country) => {
    const cities = getCountryCities(country);
    const total = Math.max(1, cities.length);
    cities.forEach((city, index) => {
      const seed = hashString(`${country.id}-${city}`);
      const rng = mulberry32(seed);
      const difficulty = 1 + Math.floor(rng() * DIFFICULTY_SETTINGS.length);
      const setting = DIFFICULTY_SETTINGS[difficulty - 1];
      const north = Number(country.north);
      const south = Number(country.south);
      const west = Number(country.west);
      const east = Number(country.east);
      const hasBounds = ![north, south, west, east].some((val) => Number.isNaN(val));
      let lat;
      let lon;
      if (hasBounds) {
        const latMin = Math.min(north, south);
        const latMax = Math.max(north, south);
        const latPad = Math.max(0.2, (latMax - latMin) * 0.08);
        lat = latMin + latPad + rng() * Math.max(0.1, latMax - latMin - latPad * 2);
        let eastAdj = east;
        if (east < west) eastAdj += 360;
        const lonSpan = eastAdj - west;
        const lonPad = Math.max(0.2, lonSpan * 0.08);
        lon = west + lonPad + rng() * Math.max(0.1, lonSpan - lonPad * 2);
        if (lon > 180) lon -= 360;
      } else {
        const centroid = getCountryCentroid(country);
        const angle = (index / total) * Math.PI * 2;
        const radius = 0.45 + (index % 3) * 0.2;
        lat = centroid.lat + Math.sin(angle) * radius;
        lon = centroid.lon + Math.cos(angle) * radius;
      }
      const id = `${country.id}-${city.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
      levels.push({
        id,
        countryId: country.id,
        city,
        country: country.name,
        lat,
        lon,
        gridSize: setting.gridSize,
        words: setting.gridSize,
        difficulty
      });
    });
  });
  return levels;
}

const CAMPAIGN_LEVELS = buildCampaignLevels();
const FIRST_CAMPAIGN_ID = CAMPAIGN_LEVELS[0]?.id || "canada-halifax";

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
const mapList = document.getElementById("mapList");
const globeEl = document.getElementById("globe");
const globeCanvas = document.getElementById("globeCanvas");
const planeEl = document.getElementById("plane");
const mapLevel = document.getElementById("mapLevel");
const mapTotalWords = document.getElementById("mapTotalWords");
const freePlayBtn = document.getElementById("freePlayBtn");
const newCampaignBtn = document.getElementById("newCampaignBtn");
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
let lastTick = Date.now();
let xpPinned = false;
let returnToWin = false;
let globePins = [];
let globeRotation = 0;
let globeTargetRotation = 0;
let globeAnimating = false;
let travelAnimation = null;
let globeZoomed = false;
let lastPinIndex = null;
let dragActive = false;
let dragMoved = false;
let dragStartX = 0;
let dragStartRotation = 0;
let inertiaVelocity = 0;
let lastDragX = 0;
let lastDragTime = 0;
let earthTexture = null;
let earthImageData = null;
let lastRenderedRotation = null;
let currentLevelIndex = 0;
let nextCampaignId = null;

const stats = loadStats();
normalizeCampaignStats();
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
    campaignCompleted: [],
    themeUsedWords: {},
    lastFreeWords: [],
    globalUsedWords: [],
    freeHistory: [],
    campaignUnlockedIds: [],
    campaignCompletedIds: [],
    currentCampaignId: null,
    campaignSeed: null,
    campaignStep: 0
  };
}

function normalizeCampaignStats() {
  if (!stats.campaignUnlockedIds || !Array.isArray(stats.campaignUnlockedIds)) {
    stats.campaignUnlockedIds = [];
  }
  if (!stats.campaignCompletedIds || !Array.isArray(stats.campaignCompletedIds)) {
    stats.campaignCompletedIds = [];
  }
  if (!stats.currentCampaignId) {
    stats.currentCampaignId = null;
  }
  if (typeof stats.campaignSeed !== "number") {
    stats.campaignSeed = Math.floor(Math.random() * 1e9);
  }
  if (typeof stats.campaignStep !== "number") {
    stats.campaignStep = 0;
  }
  const validIds = new Set(CAMPAIGN_LEVELS.map((level) => level.id));
  stats.campaignUnlockedIds = stats.campaignUnlockedIds.filter((id) => validIds.has(id));
  stats.campaignCompletedIds = stats.campaignCompletedIds.filter((id) => validIds.has(id));
  if (typeof stats.campaignUnlocked === "number" && stats.campaignUnlocked > 0) {
    const unlocked = CAMPAIGN_LEVELS.slice(0, stats.campaignUnlocked + 1).map((level) => level.id);
    stats.campaignUnlockedIds = Array.from(new Set([...stats.campaignUnlockedIds, ...unlocked]));
  }
  if (Array.isArray(stats.campaignCompleted) && stats.campaignCompleted.length) {
    const completed = stats.campaignCompleted
      .map((idx) => CAMPAIGN_LEVELS[idx])
      .filter(Boolean)
      .map((level) => level.id);
    stats.campaignCompletedIds = Array.from(new Set([...stats.campaignCompletedIds, ...completed]));
  }
  if (!stats.campaignUnlockedIds.length) {
    stats.campaignUnlockedIds = [FIRST_CAMPAIGN_ID];
  }
  if (!stats.currentCampaignId) {
    stats.currentCampaignId = stats.campaignUnlockedIds[0];
  }
  if (!CAMPAIGN_LEVELS.some((level) => level.id === stats.currentCampaignId)) {
    stats.currentCampaignId = stats.campaignUnlockedIds[0];
  }
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

function pickWords(size, pool, count, options) {
  const maxWords = count || size;
  const usable = pool.filter((word) => word.length <= size).map((word) => word.toUpperCase());
  const minLongRatio = options?.minLongRatio || 0;
  if (!minLongRatio) {
    return shuffle([...usable]).slice(0, maxWords);
  }
  const longMin = Math.min(options?.longMin || 7, size);
  const longWords = usable.filter((word) => word.length >= longMin);
  const shortWords = usable.filter((word) => word.length < longMin);
  const neededLong = Math.min(longWords.length, Math.ceil(maxWords * minLongRatio));
  const pickedLong = shuffle([...longWords]).slice(0, neededLong);
  const pickedLongSet = new Set(pickedLong);
  const remaining = shuffle([
    ...shortWords,
    ...longWords.filter((word) => !pickedLongSet.has(word))
  ]).slice(0, Math.max(0, maxWords - pickedLong.length));
  return shuffle([...pickedLong, ...remaining]).slice(0, maxWords);
}

function pickUniqueWords(size, pool, count, usedSet, options) {
  const maxWords = count || size;
  const usable = pool.filter((word) => word.length <= size).map((w) => w.toUpperCase());
  const unused = usable.filter((word) => !usedSet.has(word));
  if (unused.length < maxWords) {
    usedSet.clear();
  }
  const fresh = usable.filter((word) => !usedSet.has(word));
  return pickWords(size, fresh, Math.min(maxWords, fresh.length), options);
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

function buildBoard(size, wordPool, count, usedSet, options) {
  words = usedSet
    ? pickUniqueWords(size, wordPool, count, usedSet, options)
    : pickWords(size, wordPool, count, options);
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
  const allThemeWords = COUNTRIES.flatMap((country) => buildCountryWordPool(country, { includeCity: false }));
  const freePool = Array.from(new Set(DEFAULT_WORDS.concat(allThemeWords)));
  const pool = mode === "campaign" ? activeTheme.words : freePool;
  const count = mode === "campaign" ? Math.min(gridSize, activeTheme.words.length) : Math.min(gridSize, pool.length);
  if (mode === "campaign") {
    const key = stats.currentCampaignId || activeTheme.id;
    if (!stats.themeUsedWords[key]) stats.themeUsedWords[key] = [];
    const usedSet = new Set(stats.themeUsedWords[key]);
    const globalSet = new Set(stats.globalUsedWords || []);
    const mergedSet = new Set([...usedSet, ...globalSet]);
    buildBoard(gridSize, pool, count, mergedSet);
    stats.themeUsedWords[key] = Array.from(new Set([...usedSet, ...words]));
    stats.globalUsedWords = Array.from(new Set([...globalSet, ...words]));
    saveStats();
  } else {
    let attempts = 8;
    let current = [];
    let maxWords = count || gridSize;
    const previous = new Set(stats.lastFreeWords || []);
    const globalSet = new Set(stats.globalUsedWords || []);
    const historyList = stats.freeHistory || [];
    const historySet = new Set(historyList.flat());
    const minUnique = Math.min(10, maxWords);
    do {
      const usedSet = new Set([...previous, ...globalSet, ...historySet]);
      buildBoard(gridSize, pool, count, usedSet, { minLongRatio: 0.3, longMin: 7 });
      current = words;
      const overlap = current.filter((w) => previous.has(w)).length;
      const uniqueCount = current.length - overlap;
      if (uniqueCount >= minUnique) break;
      attempts -= 1;
    } while (attempts > 0);
    stats.lastFreeWords = current;
    stats.globalUsedWords = Array.from(new Set([...globalSet, ...current]));
    historyList.unshift(current);
    stats.freeHistory = historyList.slice(0, 15);
    saveStats();
  }
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
    startGlobe();
  } else {
    screenPlay.classList.add("screen-active");
    stopGlobe();
  }
}

function startCampaignLevel(idOrIndex) {
  const index = typeof idOrIndex === "number" ? idOrIndex : getCampaignIndexById(idOrIndex);
  if (index < 0) return;
  mode = "campaign";
  currentLevelIndex = index;
  const level = CAMPAIGN_LEVELS[index];
  stats.currentCampaignId = level.id;
  const country = getCountryById(level.countryId);
  if (country) {
    const theme = buildThemeForCountry(country, level.city, level.difficulty);
    applyTheme(theme);
  }
  gridSize = level.gridSize;
  gridSizeInput.value = String(gridSize);
  rebuild();
  showScreen("play");
  saveStats();
}

function renderMap() {
  mapList.innerHTML = "";
  globeEl.querySelectorAll(".pin").forEach((pin) => pin.remove());
  globePins = [];
  mapLevel.textContent = String(stats.level);
  mapTotalWords.textContent = String(stats.totalWords);
  currentLevelIndex = getCampaignIndexById(stats.currentCampaignId);
  if (currentLevelIndex < 0) currentLevelIndex = 0;
  CAMPAIGN_LEVELS.forEach((level, index) => {
    const item = document.createElement("div");
    item.className = "map-item";
    const theme = getCountryById(level.countryId);
    const palette = theme ? PALETTES[theme.palette] || PALETTES.americas : PALETTES.americas;
    const unlocked = stats.campaignUnlockedIds.includes(level.id) || stats.campaignCompletedIds.includes(level.id);
    const completed = stats.campaignCompletedIds.includes(level.id);
    item.dataset.level = String(index);
    if (!unlocked) item.classList.add("locked");
    if (index === currentLevelIndex) item.classList.add("current");
    if (palette) {
      item.style.setProperty("--item-accent", palette.accent);
      item.style.setProperty("--item-accent-2", palette.accent2);
      item.style.setProperty("--item-accent-3", palette.accent3);
    }
    if (theme) {
      item.style.setProperty("--item-silhouette", `url('${buildSilhouetteDataUrl(hashString(level.id))}')`);
    }
    const flag = theme ? countryCodeToFlag(theme.alpha2) : "🌍";
    const icon = theme ? getCountryIcon(theme) : "🧭";
    item.innerHTML = `
      <div class="map-silhouette"></div>
      <div class="map-item-header">
        <span class="map-flag" aria-hidden="true">${flag}</span>
        <strong>${level.city}, ${level.country}</strong>
        <span class="map-icon" aria-hidden="true">${icon}</span>
      </div>
      <small>${theme ? theme.name : "Theme"} · ${level.difficulty === 1 ? "Easy" : level.difficulty === 2 ? "Medium" : "Hard"}</small>
      <small>Grid ${level.gridSize} · ${level.words} words · ${completed ? "Completed" : unlocked ? "Unlocked" : "Locked"}</small>
    `;
    item.addEventListener("click", () => {
      focusGlobeOnLevel(index);
      moveLevelToTop(index);
      if (unlocked) {
        startCampaignLevel(level.id);
      }
    });
    mapList.appendChild(item);

    const pin = document.createElement("div");
    pin.className = "pin";
    if (!unlocked) pin.classList.add("locked");
    if (index === currentLevelIndex) pin.classList.add("current");
    pin.dataset.index = String(index);
    pin.addEventListener("click", (event) => {
      event.stopPropagation();
      focusGlobeOnLevel(index);
      moveLevelToTop(index);
      if (globeZoomed && lastPinIndex === index) {
        setGlobeZoom(false);
      } else {
        setGlobeZoom(true);
      }
      lastPinIndex = index;
      if (unlocked) {
        startCampaignLevel(level.id);
      }
    });
    globeEl.appendChild(pin);
    globePins.push({ el: pin, level });
  });
  focusGlobeOnLevel(currentLevelIndex);
}

function completeRound() {
  addXp(XP_COMPLETE);
  hintEl.textContent = `Round complete! +${XP_COMPLETE} XP`;
  if (mode === "campaign") {
    const currentId = stats.currentCampaignId;
    if (currentId && !stats.campaignCompletedIds.includes(currentId)) {
      stats.campaignCompletedIds.push(currentId);
    }
    nextCampaignId = pickNextCampaignLevel();
    if (nextCampaignId && !stats.campaignUnlockedIds.includes(nextCampaignId)) {
      stats.campaignUnlockedIds.push(nextCampaignId);
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

function toRadians(deg) {
  return (deg * Math.PI) / 180;
}

function getCampaignIndexById(id) {
  return CAMPAIGN_LEVELS.findIndex((level) => level.id === id);
}

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededRandom() {
  const rng = mulberry32(stats.campaignSeed + stats.campaignStep);
  stats.campaignStep += 1;
  return rng();
}

function pickNextCampaignLevel() {
  const completed = new Set(stats.campaignCompletedIds);
  const available = CAMPAIGN_LEVELS.filter((level) => !completed.has(level.id));
  if (!available.length) return null;
  const current = CAMPAIGN_LEVELS[getCampaignIndexById(stats.currentCampaignId)];
  const currentDifficulty = current ? current.difficulty : 1;
  const targetDifficulty = Math.min(3, currentDifficulty + (seededRandom() < 0.5 ? 0 : 1));
  let pool = available.filter((level) => level.difficulty === targetDifficulty);
  if (!pool.length) {
    pool = available.filter((level) => level.difficulty === currentDifficulty);
  }
  if (!pool.length) {
    pool = available;
  }
  const idx = Math.floor(seededRandom() * pool.length);
  return pool[idx].id;
}

function latLonToVec(lat, lon, rotation) {
  const latRad = toRadians(lat);
  const lonRad = toRadians(lon) + rotation;
  const x = Math.cos(latRad) * Math.sin(lonRad);
  const y = Math.sin(latRad);
  const z = Math.cos(latRad) * Math.cos(lonRad);
  return { x, y, z };
}

function loadEarthTexture() {
  const img = new Image();
  img.src = "earth.jpg";
  img.onload = () => {
    earthTexture = img;
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    earthImageData = ctx.getImageData(0, 0, img.width, img.height);
    renderGlobeTexture(globeRotation);
  };
}

function renderGlobeTexture(rotation) {
  if (!globeCanvas || !earthImageData) return;
  const rect = globeEl.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const target = Math.max(240, Math.floor(rect.width * dpr));
  if (globeCanvas.width !== target) {
    globeCanvas.width = target;
    globeCanvas.height = target;
  }
  const ctx = globeCanvas.getContext("2d");
  const size = globeCanvas.width;
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;
  const tex = earthImageData.data;
  const texW = earthImageData.width;
  const texH = earthImageData.height;
  const half = size / 2;
  const light = { x: -0.2, y: 0.1, z: 1 };
  const lightLen = Math.sqrt(light.x ** 2 + light.y ** 2 + light.z ** 2) || 1;
  const lx = light.x / lightLen;
  const ly = light.y / lightLen;
  const lz = light.z / lightLen;
  for (let y = 0; y < size; y += 1) {
    const ny = 1 - (y + 0.5) / half;
    for (let x = 0; x < size; x += 1) {
      const nx = (x + 0.5) / half - 1;
      const r2 = nx * nx + ny * ny;
      const idx = (y * size + x) * 4;
      if (r2 > 1) {
        data[idx + 3] = 0;
        continue;
      }
      const z = Math.sqrt(1 - r2);
      if (z <= 0) {
        data[idx + 3] = 0;
        continue;
      }
      const lon = Math.atan2(nx, z) - rotation;
      const lat = Math.asin(ny);
      let u = lon / (2 * Math.PI) + 0.5;
      u -= Math.floor(u);
      const v = 0.5 - lat / Math.PI;
      const texX = Math.floor(u * (texW - 1));
      const texY = Math.floor(v * (texH - 1));
      const tIdx = (texY * texW + texX) * 4;
      if (z < 0.02) {
        data[idx + 3] = 0;
        continue;
      }
      const shade = Math.max(0.2, nx * lx + ny * ly + z * lz);
      const limb = 0.45 + 0.55 * z;
      const shadow = shade * limb;
      data[idx] = tex[tIdx] * shadow;
      data[idx + 1] = tex[tIdx + 1] * shadow;
      data[idx + 2] = tex[tIdx + 2] * shadow;
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

function projectToGlobe(vec, radius, centerX, centerY) {
  const x = centerX + vec.x * radius;
  const y = centerY - vec.y * radius * 0.9;
  const scale = 0.6 + (vec.z + 1) * 0.2;
  return { x, y, scale, z: vec.z };
}

function updateGlobe() {
  if (!globeEl) return;
  const rect = globeEl.getBoundingClientRect();
  const radius = rect.width / 2;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  renderGlobeTexture(globeRotation);
  globePins.forEach(({ el, level }) => {
    const vec = latLonToVec(level.lat, level.lon, globeRotation);
    const point = projectToGlobe(vec, radius, centerX, centerY);
    el.style.left = `${point.x}px`;
    el.style.top = `${point.y}px`;
    el.style.transform = `translate(-50%, -50%) scale(${point.scale})`;
    el.style.opacity = point.z > 0 ? "1" : "0.15";
    el.style.pointerEvents = point.z > 0 ? "auto" : "none";
  });
  if (planeEl && planeEl.classList.contains("active") && travelAnimation) {
    const { position } = travelAnimation;
    planeEl.style.left = `${position.x}px`;
    planeEl.style.top = `${position.y}px`;
  }
}

function focusGlobeOnLevel(index) {
  const level = CAMPAIGN_LEVELS[index];
  if (!level) return;
  globeTargetRotation = -toRadians(level.lon);
}

function startGlobe() {
  if (globeAnimating) return;
  globeAnimating = true;
  const tick = () => {
    if (!globeAnimating) return;
    const diff = globeTargetRotation - globeRotation;
    if (!dragActive && Math.abs(inertiaVelocity) > 0.0001) {
      globeRotation += inertiaVelocity;
      inertiaVelocity *= 0.94;
    } else if (!dragActive) {
      globeRotation += diff * 0.08;
    }
    updateGlobe();
    requestAnimationFrame(tick);
  };
  tick();
}

function stopGlobe() {
  globeAnimating = false;
}

function moveLevelToTop(index) {
  const item = mapList.querySelector(`[data-level='${index}']`);
  if (item) {
    mapList.prepend(item);
  }
}

function setGlobeZoom(zoomed) {
  globeZoomed = zoomed;
  globeEl.classList.toggle("zoomed", zoomed);
}

function handleGlobePointerDown(event) {
  dragActive = true;
  dragMoved = false;
  dragStartX = event.clientX;
  dragStartRotation = globeRotation;
  globeTargetRotation = globeRotation;
  inertiaVelocity = 0;
  lastDragX = event.clientX;
  lastDragTime = performance.now();
}

function handleGlobePointerMove(event) {
  if (!dragActive) return;
  const dx = event.clientX - dragStartX;
  if (Math.abs(dx) > 6) dragMoved = true;
  globeRotation = dragStartRotation + dx * 0.006;
  globeTargetRotation = globeRotation;
  updateGlobe();
  const now = performance.now();
  const deltaX = event.clientX - lastDragX;
  const deltaT = Math.max(16, now - lastDragTime);
  inertiaVelocity = (deltaX * 0.006) / (deltaT / 16);
  lastDragX = event.clientX;
  lastDragTime = now;
}

function handleGlobePointerUp() {
  dragActive = false;
}

function slerp(a, b, t) {
  const dot = a.x * b.x + a.y * b.y + a.z * b.z;
  const clamped = Math.max(-1, Math.min(1, dot));
  const theta = Math.acos(clamped) * t;
  const rel = {
    x: b.x - a.x * clamped,
    y: b.y - a.y * clamped,
    z: b.z - a.z * clamped
  };
  const relLen = Math.sqrt(rel.x ** 2 + rel.y ** 2 + rel.z ** 2) || 1;
  const relNorm = { x: rel.x / relLen, y: rel.y / relLen, z: rel.z / relLen };
  return {
    x: a.x * Math.cos(theta) + relNorm.x * Math.sin(theta),
    y: a.y * Math.cos(theta) + relNorm.y * Math.sin(theta),
    z: a.z * Math.cos(theta) + relNorm.z * Math.sin(theta)
  };
}

function animateTravel(fromIndex, toIndex, onDone) {
  const from = CAMPAIGN_LEVELS[fromIndex];
  const to = CAMPAIGN_LEVELS[toIndex];
  if (!from || !to) return;
  focusGlobeOnLevel(fromIndex);
  globeTargetRotation = globeRotation;
  const rect = globeEl.getBoundingClientRect();
  const radius = rect.width / 2;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotation = globeRotation;
  const startVec = latLonToVec(from.lat, from.lon, rotation);
  const endVec = latLonToVec(to.lat, to.lon, rotation);
  const startTime = performance.now();
  const duration = 2400;
  planeEl.classList.add("active");
  const step = (now) => {
    const t = Math.min(1, (now - startTime) / duration);
    const vec = slerp(startVec, endVec, t);
    const point = projectToGlobe(vec, radius, centerX, centerY);
    travelAnimation = { position: point };
    updateGlobe();
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      planeEl.classList.remove("active");
      travelAnimation = null;
      focusGlobeOnLevel(toIndex);
      if (onDone) onDone();
    }
  };
  requestAnimationFrame(step);
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

newCampaignBtn.addEventListener("click", () => {
  stats.campaignCompletedIds = [];
  stats.campaignUnlockedIds = [FIRST_CAMPAIGN_ID];
  stats.currentCampaignId = FIRST_CAMPAIGN_ID;
  stats.campaignSeed = Math.floor(Math.random() * 1e9);
  stats.campaignStep = 0;
  stats.themeUsedWords = {};
  nextCampaignId = null;
  saveStats();
  renderMap();
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
    const nextId = nextCampaignId || pickNextCampaignLevel();
    if (nextId) {
      const nextIndex = getCampaignIndexById(nextId);
      showScreen("map");
      animateTravel(currentLevelIndex, nextIndex, () => startCampaignLevel(nextId));
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

loadMinorWords();
renderMap();
rebuild();
updateXpUI();
renderThemeOptions();
loadEarthTexture();

globeEl.addEventListener("pointerdown", handleGlobePointerDown);
globeEl.addEventListener("pointermove", handleGlobePointerMove);
globeEl.addEventListener("pointerup", handleGlobePointerUp);
globeEl.addEventListener("pointerleave", handleGlobePointerUp);
globeEl.addEventListener("click", () => {
  if (dragMoved) return;
  if (globeZoomed) {
    setGlobeZoom(false);
    lastPinIndex = null;
  }
});

setInterval(tickTime, 1000);
window.addEventListener("beforeunload", () => {
  tickTime();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    tickTime();
    saveStats();
  }
});

window.addEventListener("resize", () => {
  updateGlobe();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
