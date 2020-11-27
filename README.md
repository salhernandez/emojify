# emojify
Ever wondered what would happen if you replaced all the words of a webpage with their emoji equivalent, like `t-rex` replaced with 🦖, and `dolphin` replaced with 🐬? Well look no further, I've created this Chrome Extension so you don't have to.

## Demo
![emojify demo](https://raw.githubusercontent.com/salhernandez/emojify/main/assets/emojify.gif?token=ADXPKJYFC52XVXG2PVPFW327ZG6YY)

The Chrome Extension replaces single word emojis  in the `p`, `h1`, `h2`, `h3`, `h4`, `h5` and `h6` tags.

# Resources needed to complete project

- List of emojis and their aliases
    - [https://github.com/github/gemoji/blob/master/db/emoji.json](https://github.com/github/gemoji/blob/master/db/emoji.json)
- [Chrome Storage API](https://developer.chrome.com/apps/storage)
- [Chrome Tabs API](https://developer.chrome.com/extensions/tabs)

# Words to Emoji Mappings
These mapppings can also be found on `emojis.json`.
```JSON
{
    "100": "💯",
    "1234": "🔢",
    "grinning": "😀",
    "smiley": "😃",
    "smile": "😄",
    "grin": "😁",
    "laughing": "😆",
    "satisfied": "😆",
    "rofl": "🤣",
    "joy": "😂",
    "wink": "😉",
    "blush": "😊",
    "innocent": "😇",
    "kissing": "😗",
    "relaxed": "☺️",
    "yum": "😋",
    "hugs": "🤗",
    "thinking": "🤔",
    "expressionless": "😑",
    "smirk": "😏",
    "unamused": "😒",
    "grimacing": "😬",
    "relieved": "😌",
    "pensive": "😔",
    "sleepy": "😪",
    "sleeping": "😴",
    "mask": "😷",
    "sunglasses": "😎",
    "confused": "😕",
    "worried": "😟",
    "hushed": "😯",
    "astonished": "😲",
    "flushed": "😳",
    "frowning": "😦",
    "anguished": "😧",
    "fearful": "😨",
    "cry": "😢",
    "sob": "😭",
    "scream": "😱",
    "confounded": "😖",
    "persevere": "😣",
    "disappointed": "😞",
    "sweat": "😓",
    "weary": "😩",
    "triumph": "😤",
    "rage": "😡",
    "pout": "😡",
    "angry": "😠",
    "imp": "👿",
    "skull": "💀",
    "hankey": "💩",
    "poop": "💩",
    "shit": "💩",
    "ghost": "👻",
    "alien": "👽",
    "robot": "🤖",
    "kiss": "💋",
    "cupid": "💘",
    "heartpulse": "💗",
    "heartbeat": "💓",
    "heart": "❤️",
    "anger": "💢",
    "boom": "💥",
    "collision": "💥",
    "dizzy": "💫",
    "dash": "💨",
    "hole": "🕳️",
    "bomb": "💣",
    "zzz": "💤",
    "wave": "👋",
    "hand": "✋",
    "v": "✌️",
    "metal": "🤘",
    "fu": "🖕",
    "+1": "👍",
    "thumbsup": "👍",
    "-1": "👎",
    "thumbsdown": "👎",
    "fist": "✊",
    "facepunch": "👊",
    "punch": "👊",
    "clap": "👏",
    "handshake": "🤝",
    "pray": "🙏",
    "selfie": "🤳",
    "muscle": "💪",
    "leg": "🦵",
    "foot": "🦶",
    "ear": "👂",
    "nose": "👃",
    "brain": "🧠",
    "lungs": "🫁",
    "tooth": "🦷",
    "bone": "🦴",
    "eyes": "👀",
    "eye": "👁️",
    "tongue": "👅",
    "lips": "👄",
    "baby": "👶",
    "child": "🧒",
    "boy": "👦",
    "girl": "👧",
    "adult": "🧑",
    "man": "👨",
    "woman": "👩",
    "bow": "🙇",
    "facepalm": "🤦",
    "shrug": "🤷",
    "student": "🧑‍🎓",
    "teacher": "🧑‍🏫",
    "judge": "🧑‍⚖️",
    "farmer": "🧑‍🌾",
    "cook": "🧑‍🍳",
    "mechanic": "🧑‍🔧",
    "scientist": "🧑‍🔬",
    "technologist": "🧑‍💻",
    "singer": "🧑‍🎤",
    "artist": "🧑‍🎨",
    "pilot": "🧑‍✈️",
    "astronaut": "🧑‍🚀",
    "firefighter": "🧑‍🚒",
    "cop": "👮",
    "policeman": "👮‍♂️",
    "policewoman": "👮‍♀️",
    "detective": "🕵️",
    "guard": "💂",
    "guardsman": "💂‍♂️",
    "guardswoman": "💂‍♀️",
    "ninja": "🥷",
    "prince": "🤴",
    "princess": "👸",
    "angel": "👼",
    "santa": "🎅",
    "superhero": "🦸",
    "supervillain": "🦹",
    "mage": "🧙",
    "fairy": "🧚",
    "vampire": "🧛",
    "merperson": "🧜",
    "merman": "🧜‍♂️",
    "mermaid": "🧜‍♀️",
    "elf": "🧝",
    "genie": "🧞",
    "zombie": "🧟",
    "massage": "💆",
    "haircut": "💇",
    "walking": "🚶",
    "runner": "🏃",
    "running": "🏃",
    "dancer": "💃",
    "dancers": "👯",
    "climbing": "🧗",
    "skier": "⛷️",
    "snowboarder": "🏂",
    "golfing": "🏌️",
    "surfer": "🏄",
    "rowboat": "🚣",
    "swimmer": "🏊",
    "bicyclist": "🚴",
    "cartwheeling": "🤸",
    "wrestling": "🤼",
    "bath": "🛀",
    "couple": "👫",
    "couplekiss": "💏",
    "family": "👪",
    "footprints": "👣",
    "monkey": "🐒",
    "gorilla": "🦍",
    "orangutan": "🦧",
    "dog": "🐶",
    "dog2": "🐕",
    "poodle": "🐩",
    "wolf": "🐺",
    "raccoon": "🦝",
    "cat": "🐱",
    "cat2": "🐈",
    "lion": "🦁",
    "tiger": "🐯",
    "tiger2": "🐅",
    "leopard": "🐆",
    "horse": "🐴",
    "racehorse": "🐎",
    "unicorn": "🦄",
    "zebra": "🦓",
    "deer": "🦌",
    "bison": "🦬",
    "cow": "🐮",
    "ox": "🐂",
    "cow2": "🐄",
    "pig": "🐷",
    "pig2": "🐖",
    "boar": "🐗",
    "ram": "🐏",
    "sheep": "🐑",
    "goat": "🐐",
    "camel": "🐫",
    "llama": "🦙",
    "giraffe": "🦒",
    "elephant": "🐘",
    "mammoth": "🦣",
    "rhinoceros": "🦏",
    "hippopotamus": "🦛",
    "mouse": "🐭",
    "mouse2": "🐁",
    "rat": "🐀",
    "hamster": "🐹",
    "rabbit": "🐰",
    "rabbit2": "🐇",
    "chipmunk": "🐿️",
    "beaver": "🦫",
    "hedgehog": "🦔",
    "bat": "🦇",
    "bear": "🐻",
    "koala": "🐨",
    "sloth": "🦥",
    "otter": "🦦",
    "skunk": "🦨",
    "kangaroo": "🦘",
    "badger": "🦡",
    "feet": "🐾",
    "turkey": "🦃",
    "chicken": "🐔",
    "rooster": "🐓",
    "bird": "🐦",
    "penguin": "🐧",
    "dove": "🕊️",
    "eagle": "🦅",
    "duck": "🦆",
    "swan": "🦢",
    "owl": "🦉",
    "dodo": "🦤",
    "feather": "🪶",
    "flamingo": "🦩",
    "peacock": "🦚",
    "parrot": "🦜",
    "frog": "🐸",
    "crocodile": "🐊",
    "turtle": "🐢",
    "lizard": "🦎",
    "snake": "🐍",
    "dragon": "🐉",
    "sauropod": "🦕",
    "t-rex": "🦖",
    "whale": "🐳",
    "whale2": "🐋",
    "dolphin": "🐬",
    "flipper": "🐬",
    "seal": "🦭",
    "fish": "🐟",
    "blowfish": "🐡",
    "shark": "🦈",
    "octopus": "🐙",
    "shell": "🐚",
    "snail": "🐌",
    "butterfly": "🦋",
    "bug": "🐛",
    "ant": "🐜",
    "bee": "🐝",
    "honeybee": "🐝",
    "beetle": "🪲",
    "cricket": "🦗",
    "cockroach": "🪳",
    "spider": "🕷️",
    "scorpion": "🦂",
    "mosquito": "🦟",
    "fly": "🪰",
    "worm": "🪱",
    "microbe": "🦠",
    "bouquet": "💐",
    "rosette": "🏵️",
    "rose": "🌹",
    "hibiscus": "🌺",
    "sunflower": "🌻",
    "blossom": "🌼",
    "tulip": "🌷",
    "seedling": "🌱",
    "cactus": "🌵",
    "herb": "🌿",
    "shamrock": "☘️",
    "leaves": "🍃",
    "grapes": "🍇",
    "melon": "🍈",
    "watermelon": "🍉",
    "tangerine": "🍊",
    "orange": "🍊",
    "mandarin": "🍊",
    "lemon": "🍋",
    "banana": "🍌",
    "pineapple": "🍍",
    "mango": "🥭",
    "apple": "🍎",
    "pear": "🍐",
    "peach": "🍑",
    "cherries": "🍒",
    "strawberry": "🍓",
    "blueberries": "🫐",
    "tomato": "🍅",
    "olive": "🫒",
    "coconut": "🥥",
    "avocado": "🥑",
    "eggplant": "🍆",
    "potato": "🥔",
    "carrot": "🥕",
    "corn": "🌽",
    "cucumber": "🥒",
    "broccoli": "🥦",
    "garlic": "🧄",
    "onion": "🧅",
    "mushroom": "🍄",
    "peanuts": "🥜",
    "chestnut": "🌰",
    "bread": "🍞",
    "croissant": "🥐",
    "flatbread": "🫓",
    "pretzel": "🥨",
    "bagel": "🥯",
    "pancakes": "🥞",
    "waffle": "🧇",
    "cheese": "🧀",
    "bacon": "🥓",
    "hamburger": "🍔",
    "fries": "🍟",
    "pizza": "🍕",
    "hotdog": "🌭",
    "sandwich": "🥪",
    "taco": "🌮",
    "burrito": "🌯",
    "tamale": "🫔",
    "falafel": "🧆",
    "egg": "🥚",
    "stew": "🍲",
    "fondue": "🫕",
    "popcorn": "🍿",
    "butter": "🧈",
    "salt": "🧂",
    "bento": "🍱",
    "rice": "🍚",
    "curry": "🍛",
    "ramen": "🍜",
    "spaghetti": "🍝",
    "oden": "🍢",
    "sushi": "🍣",
    "dango": "🍡",
    "dumpling": "🥟",
    "crab": "🦀",
    "lobster": "🦞",
    "shrimp": "🦐",
    "squid": "🦑",
    "oyster": "🦪",
    "icecream": "🍦",
    "doughnut": "🍩",
    "cookie": "🍪",
    "birthday": "🎂",
    "cake": "🍰",
    "cupcake": "🧁",
    "pie": "🥧",
    "candy": "🍬",
    "lollipop": "🍭",
    "custard": "🍮",
    "coffee": "☕",
    "teapot": "🫖",
    "tea": "🍵",
    "sake": "🍶",
    "champagne": "🍾",
    "cocktail": "🍸",
    "beer": "🍺",
    "beers": "🍻",
    "mate": "🧉",
    "chopsticks": "🥢",
    "spoon": "🥄",
    "hocho": "🔪",
    "knife": "🔪",
    "amphora": "🏺",
    "japan": "🗾",
    "compass": "🧭",
    "mountain": "⛰️",
    "volcano": "🌋",
    "camping": "🏕️",
    "desert": "🏜️",
    "stadium": "🏟️",
    "bricks": "🧱",
    "rock": "🪨",
    "wood": "🪵",
    "hut": "🛖",
    "houses": "🏘️",
    "house": "🏠",
    "office": "🏢",
    "hospital": "🏥",
    "bank": "🏦",
    "hotel": "🏨",
    "school": "🏫",
    "factory": "🏭",
    "wedding": "💒",
    "church": "⛪",
    "mosque": "🕌",
    "synagogue": "🕍",
    "kaaba": "🕋",
    "fountain": "⛲",
    "tent": "⛺",
    "foggy": "🌁",
    "cityscape": "🏙️",
    "sunrise": "🌅",
    "hotsprings": "♨️",
    "barber": "💈",
    "train2": "🚆",
    "metro": "🚇",
    "station": "🚉",
    "tram": "🚊",
    "monorail": "🚝",
    "train": "🚋",
    "bus": "🚌",
    "trolleybus": "🚎",
    "minibus": "🚐",
    "ambulance": "🚑",
    "taxi": "🚕",
    "car": "🚗",
    "truck": "🚚",
    "tractor": "🚜",
    "motorcycle": "🏍️",
    "bike": "🚲",
    "skateboard": "🛹",
    "busstop": "🚏",
    "motorway": "🛣️",
    "fuelpump": "⛽",
    "construction": "🚧",
    "anchor": "⚓",
    "boat": "⛵",
    "sailboat": "⛵",
    "canoe": "🛶",
    "speedboat": "🚤",
    "ferry": "⛴️",
    "ship": "🚢",
    "airplane": "✈️",
    "parachute": "🪂",
    "seat": "💺",
    "helicopter": "🚁",
    "rocket": "🚀",
    "luggage": "🧳",
    "hourglass": "⌛",
    "watch": "⌚",
    "stopwatch": "⏱️",
    "clock12": "🕛",
    "clock1230": "🕧",
    "clock1": "🕐",
    "clock130": "🕜",
    "clock2": "🕑",
    "clock230": "🕝",
    "clock3": "🕒",
    "clock330": "🕞",
    "clock4": "🕓",
    "clock430": "🕟",
    "clock5": "🕔",
    "clock530": "🕠",
    "clock6": "🕕",
    "clock630": "🕡",
    "clock7": "🕖",
    "clock730": "🕢",
    "clock8": "🕗",
    "clock830": "🕣",
    "clock9": "🕘",
    "clock930": "🕤",
    "clock10": "🕙",
    "clock1030": "🕥",
    "clock11": "🕚",
    "clock1130": "🕦",
    "moon": "🌔",
    "thermometer": "🌡️",
    "sunny": "☀️",
    "star": "⭐",
    "star2": "🌟",
    "stars": "🌠",
    "cloud": "☁️",
    "tornado": "🌪️",
    "fog": "🌫️",
    "cyclone": "🌀",
    "rainbow": "🌈",
    "umbrella": "☔",
    "zap": "⚡",
    "snowflake": "❄️",
    "snowman": "⛄",
    "comet": "☄️",
    "fire": "🔥",
    "droplet": "💧",
    "ocean": "🌊",
    "fireworks": "🎆",
    "sparkler": "🎇",
    "firecracker": "🧨",
    "sparkles": "✨",
    "balloon": "🎈",
    "tada": "🎉",
    "bamboo": "🎍",
    "dolls": "🎎",
    "flags": "🎏",
    "ribbon": "🎀",
    "gift": "🎁",
    "tickets": "🎟️",
    "ticket": "🎫",
    "trophy": "🏆",
    "soccer": "⚽",
    "baseball": "⚾",
    "softball": "🥎",
    "basketball": "🏀",
    "volleyball": "🏐",
    "football": "🏈",
    "tennis": "🎾",
    "bowling": "🎳",
    "lacrosse": "🥍",
    "badminton": "🏸",
    "golf": "⛳",
    "ski": "🎿",
    "sled": "🛷",
    "dart": "🎯",
    "kite": "🪁",
    "8ball": "🎱",
    "joystick": "🕹️",
    "jigsaw": "🧩",
    "pinata": "🪅",
    "spades": "♠️",
    "hearts": "♥️",
    "diamonds": "♦️",
    "clubs": "♣️",
    "mahjong": "🀄",
    "art": "🎨",
    "thread": "🧵",
    "yarn": "🧶",
    "knot": "🪢",
    "eyeglasses": "👓",
    "goggles": "🥽",
    "necktie": "👔",
    "shirt": "👕",
    "tshirt": "👕",
    "jeans": "👖",
    "scarf": "🧣",
    "gloves": "🧤",
    "coat": "🧥",
    "socks": "🧦",
    "dress": "👗",
    "kimono": "👘",
    "sari": "🥻",
    "shorts": "🩳",
    "bikini": "👙",
    "purse": "👛",
    "handbag": "👜",
    "pouch": "👝",
    "shopping": "🛍️",
    "shoe": "👞",
    "sandal": "👡",
    "boot": "👢",
    "crown": "👑",
    "tophat": "🎩",
    "lipstick": "💄",
    "ring": "💍",
    "gem": "💎",
    "mute": "🔇",
    "speaker": "🔈",
    "sound": "🔉",
    "loudspeaker": "📢",
    "mega": "📣",
    "bell": "🔔",
    "notes": "🎶",
    "microphone": "🎤",
    "headphones": "🎧",
    "radio": "📻",
    "saxophone": "🎷",
    "accordion": "🪗",
    "guitar": "🎸",
    "trumpet": "🎺",
    "violin": "🎻",
    "banjo": "🪕",
    "drum": "🥁",
    "iphone": "📱",
    "calling": "📲",
    "phone": "☎️",
    "telephone": "☎️",
    "pager": "📟",
    "fax": "📠",
    "battery": "🔋",
    "computer": "💻",
    "printer": "🖨️",
    "keyboard": "⌨️",
    "trackball": "🖲️",
    "minidisc": "💽",
    "cd": "💿",
    "dvd": "📀",
    "abacus": "🧮",
    "clapper": "🎬",
    "tv": "📺",
    "camera": "📷",
    "vhs": "📼",
    "mag": "🔍",
    "candle": "🕯️",
    "bulb": "💡",
    "flashlight": "🔦",
    "lantern": "🏮",
    "book": "📖",
    "books": "📚",
    "notebook": "📓",
    "ledger": "📒",
    "scroll": "📜",
    "newspaper": "📰",
    "bookmark": "🔖",
    "label": "🏷️",
    "moneybag": "💰",
    "coin": "🪙",
    "yen": "💴",
    "dollar": "💵",
    "euro": "💶",
    "pound": "💷",
    "receipt": "🧾",
    "chart": "💹",
    "envelope": "✉️",
    "email": "📧",
    "e-mail": "📧",
    "package": "📦",
    "mailbox": "📫",
    "postbox": "📮",
    "pencil2": "✏️",
    "pen": "🖊️",
    "paintbrush": "🖌️",
    "crayon": "🖍️",
    "memo": "📝",
    "pencil": "📝",
    "briefcase": "💼",
    "date": "📅",
    "calendar": "📆",
    "clipboard": "📋",
    "pushpin": "📌",
    "paperclip": "📎",
    "paperclips": "🖇️",
    "scissors": "✂️",
    "wastebasket": "🗑️",
    "lock": "🔒",
    "unlock": "🔓",
    "key": "🔑",
    "hammer": "🔨",
    "axe": "🪓",
    "pick": "⛏️",
    "dagger": "🗡️",
    "gun": "🔫",
    "boomerang": "🪃",
    "shield": "🛡️",
    "wrench": "🔧",
    "screwdriver": "🪛",
    "gear": "⚙️",
    "clamp": "🗜️",
    "link": "🔗",
    "chains": "⛓️",
    "hook": "🪝",
    "toolbox": "🧰",
    "magnet": "🧲",
    "ladder": "🪜",
    "alembic": "⚗️",
    "dna": "🧬",
    "microscope": "🔬",
    "telescope": "🔭",
    "satellite": "📡",
    "syringe": "💉",
    "pill": "💊",
    "stethoscope": "🩺",
    "door": "🚪",
    "elevator": "🛗",
    "mirror": "🪞",
    "window": "🪟",
    "bed": "🛏️",
    "chair": "🪑",
    "toilet": "🚽",
    "plunger": "🪠",
    "shower": "🚿",
    "bathtub": "🛁",
    "razor": "🪒",
    "broom": "🧹",
    "basket": "🧺",
    "bucket": "🪣",
    "soap": "🧼",
    "toothbrush": "🪥",
    "sponge": "🧽",
    "smoking": "🚬",
    "coffin": "⚰️",
    "headstone": "🪦",
    "moyai": "🗿",
    "placard": "🪧",
    "atm": "🏧",
    "wheelchair": "♿",
    "mens": "🚹",
    "womens": "🚺",
    "restroom": "🚻",
    "wc": "🚾",
    "customs": "🛃",
    "warning": "⚠️",
    "underage": "🔞",
    "radioactive": "☢️",
    "biohazard": "☣️",
    "back": "🔙",
    "end": "🔚",
    "on": "🔛",
    "soon": "🔜",
    "top": "🔝",
    "om": "🕉️",
    "menorah": "🕎",
    "aries": "♈",
    "taurus": "♉",
    "gemini": "♊",
    "cancer": "♋",
    "leo": "♌",
    "virgo": "♍",
    "libra": "♎",
    "scorpius": "♏",
    "sagittarius": "♐",
    "capricorn": "♑",
    "aquarius": "♒",
    "pisces": "♓",
    "ophiuchus": "⛎",
    "repeat": "🔁",
    "rewind": "⏪",
    "cinema": "🎦",
    "infinity": "♾️",
    "bangbang": "‼️",
    "interrobang": "⁉️",
    "question": "❓",
    "exclamation": "❗",
    "recycle": "♻️",
    "trident": "🔱",
    "beginner": "🔰",
    "o": "⭕",
    "x": "❌",
    "loop": "➿",
    "sparkle": "❇️",
    "copyright": "©️",
    "registered": "®️",
    "tm": "™️",
    "hash": "#️⃣",
    "asterisk": "*️⃣",
    "zero": "0️⃣",
    "one": "1️⃣",
    "two": "2️⃣",
    "three": "3️⃣",
    "four": "4️⃣",
    "five": "5️⃣",
    "six": "6️⃣",
    "seven": "7️⃣",
    "eight": "8️⃣",
    "nine": "9️⃣",
    "abcd": "🔡",
    "symbols": "🔣",
    "abc": "🔤",
    "a": "🅰️",
    "ab": "🆎",
    "b": "🅱️",
    "cl": "🆑",
    "cool": "🆒",
    "free": "🆓",
    "id": "🆔",
    "m": "Ⓜ️",
    "new": "🆕",
    "ng": "🆖",
    "o2": "🅾️",
    "ok": "🆗",
    "parking": "🅿️",
    "sos": "🆘",
    "up": "🆙",
    "vs": "🆚",
    "koko": "🈁",
    "sa": "🈂️",
    "u6708": "🈷️",
    "u6709": "🈶",
    "u6307": "🈯",
    "u5272": "🈹",
    "u7121": "🈚",
    "u7981": "🈲",
    "accept": "🉑",
    "u7533": "🈸",
    "u5408": "🈴",
    "u7a7a": "🈳",
    "congratulations": "㊗️",
    "secret": "㊙️",
    "u55b6": "🈺",
    "u6e80": "🈵",
    "andorra": "🇦🇩",
    "afghanistan": "🇦🇫",
    "anguilla": "🇦🇮",
    "albania": "🇦🇱",
    "armenia": "🇦🇲",
    "angola": "🇦🇴",
    "antarctica": "🇦🇶",
    "argentina": "🇦🇷",
    "austria": "🇦🇹",
    "australia": "🇦🇺",
    "aruba": "🇦🇼",
    "azerbaijan": "🇦🇿",
    "barbados": "🇧🇧",
    "bangladesh": "🇧🇩",
    "belgium": "🇧🇪",
    "bulgaria": "🇧🇬",
    "bahrain": "🇧🇭",
    "burundi": "🇧🇮",
    "benin": "🇧🇯",
    "bermuda": "🇧🇲",
    "brunei": "🇧🇳",
    "bolivia": "🇧🇴",
    "brazil": "🇧🇷",
    "bahamas": "🇧🇸",
    "bhutan": "🇧🇹",
    "botswana": "🇧🇼",
    "belarus": "🇧🇾",
    "belize": "🇧🇿",
    "canada": "🇨🇦",
    "switzerland": "🇨🇭",
    "chile": "🇨🇱",
    "cameroon": "🇨🇲",
    "cn": "🇨🇳",
    "colombia": "🇨🇴",
    "cuba": "🇨🇺",
    "curacao": "🇨🇼",
    "cyprus": "🇨🇾",
    "de": "🇩🇪",
    "djibouti": "🇩🇯",
    "denmark": "🇩🇰",
    "dominica": "🇩🇲",
    "algeria": "🇩🇿",
    "ecuador": "🇪🇨",
    "estonia": "🇪🇪",
    "egypt": "🇪🇬",
    "eritrea": "🇪🇷",
    "es": "🇪🇸",
    "ethiopia": "🇪🇹",
    "eu": "🇪🇺",
    "finland": "🇫🇮",
    "fiji": "🇫🇯",
    "micronesia": "🇫🇲",
    "fr": "🇫🇷",
    "gabon": "🇬🇦",
    "gb": "🇬🇧",
    "uk": "🇬🇧",
    "grenada": "🇬🇩",
    "georgia": "🇬🇪",
    "guernsey": "🇬🇬",
    "ghana": "🇬🇭",
    "gibraltar": "🇬🇮",
    "greenland": "🇬🇱",
    "gambia": "🇬🇲",
    "guinea": "🇬🇳",
    "guadeloupe": "🇬🇵",
    "greece": "🇬🇷",
    "guatemala": "🇬🇹",
    "guam": "🇬🇺",
    "guyana": "🇬🇾",
    "honduras": "🇭🇳",
    "croatia": "🇭🇷",
    "haiti": "🇭🇹",
    "hungary": "🇭🇺",
    "indonesia": "🇮🇩",
    "ireland": "🇮🇪",
    "israel": "🇮🇱",
    "india": "🇮🇳",
    "iraq": "🇮🇶",
    "iran": "🇮🇷",
    "iceland": "🇮🇸",
    "it": "🇮🇹",
    "jersey": "🇯🇪",
    "jamaica": "🇯🇲",
    "jordan": "🇯🇴",
    "jp": "🇯🇵",
    "kenya": "🇰🇪",
    "kyrgyzstan": "🇰🇬",
    "cambodia": "🇰🇭",
    "kiribati": "🇰🇮",
    "comoros": "🇰🇲",
    "kr": "🇰🇷",
    "kuwait": "🇰🇼",
    "kazakhstan": "🇰🇿",
    "laos": "🇱🇦",
    "lebanon": "🇱🇧",
    "liechtenstein": "🇱🇮",
    "liberia": "🇱🇷",
    "lesotho": "🇱🇸",
    "lithuania": "🇱🇹",
    "luxembourg": "🇱🇺",
    "latvia": "🇱🇻",
    "libya": "🇱🇾",
    "morocco": "🇲🇦",
    "monaco": "🇲🇨",
    "moldova": "🇲🇩",
    "montenegro": "🇲🇪",
    "madagascar": "🇲🇬",
    "macedonia": "🇲🇰",
    "mali": "🇲🇱",
    "myanmar": "🇲🇲",
    "mongolia": "🇲🇳",
    "macau": "🇲🇴",
    "martinique": "🇲🇶",
    "mauritania": "🇲🇷",
    "montserrat": "🇲🇸",
    "malta": "🇲🇹",
    "mauritius": "🇲🇺",
    "maldives": "🇲🇻",
    "malawi": "🇲🇼",
    "mexico": "🇲🇽",
    "malaysia": "🇲🇾",
    "mozambique": "🇲🇿",
    "namibia": "🇳🇦",
    "niger": "🇳🇪",
    "nigeria": "🇳🇬",
    "nicaragua": "🇳🇮",
    "netherlands": "🇳🇱",
    "norway": "🇳🇴",
    "nepal": "🇳🇵",
    "nauru": "🇳🇷",
    "niue": "🇳🇺",
    "oman": "🇴🇲",
    "panama": "🇵🇦",
    "peru": "🇵🇪",
    "philippines": "🇵🇭",
    "pakistan": "🇵🇰",
    "poland": "🇵🇱",
    "portugal": "🇵🇹",
    "palau": "🇵🇼",
    "paraguay": "🇵🇾",
    "qatar": "🇶🇦",
    "reunion": "🇷🇪",
    "romania": "🇷🇴",
    "serbia": "🇷🇸",
    "ru": "🇷🇺",
    "rwanda": "🇷🇼",
    "seychelles": "🇸🇨",
    "sudan": "🇸🇩",
    "sweden": "🇸🇪",
    "singapore": "🇸🇬",
    "slovenia": "🇸🇮",
    "slovakia": "🇸🇰",
    "senegal": "🇸🇳",
    "somalia": "🇸🇴",
    "suriname": "🇸🇷",
    "syria": "🇸🇾",
    "swaziland": "🇸🇿",
    "chad": "🇹🇩",
    "togo": "🇹🇬",
    "thailand": "🇹🇭",
    "tajikistan": "🇹🇯",
    "tokelau": "🇹🇰",
    "turkmenistan": "🇹🇲",
    "tunisia": "🇹🇳",
    "tonga": "🇹🇴",
    "tr": "🇹🇷",
    "tuvalu": "🇹🇻",
    "taiwan": "🇹🇼",
    "tanzania": "🇹🇿",
    "ukraine": "🇺🇦",
    "uganda": "🇺🇬",
    "us": "🇺🇸",
    "uruguay": "🇺🇾",
    "uzbekistan": "🇺🇿",
    "venezuela": "🇻🇪",
    "vietnam": "🇻🇳",
    "vanuatu": "🇻🇺",
    "samoa": "🇼🇸",
    "kosovo": "🇽🇰",
    "yemen": "🇾🇪",
    "mayotte": "🇾🇹",
    "zambia": "🇿🇲",
    "zimbabwe": "🇿🇼",
    "england": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
}
```

# Usage Instructions
This Chrome Extension is not published to the Chrome Web Store, you need to install it in developer mode. You can find those instructions [here](#development)

1. Click on Extension Icon
   1. Enable\Disable emojification

# Development
1. Clone this repository.
1. Open up Chrome and go to the `chrome://extensions/` page (Window → Extensions).
1. Enable developer mode (if it's not already).
1. Click on `Load unpacked extension`.
1. Select the folder for this extension.

## Keyboard Shortcut
Go to the bottom of the `chrome://extensions/` page, click on `Keyboard shortcuts` and add the shortcut of your choice.

## Credits
* Original Emoji JSON borrowed from [github/gemoji](https://github.com/github/gemoji/blob/master/db/emoji.json):