const spookyMonsspookyAdjectives = [
    "spooky",
    "eerie",
    "creepy",
    "ghoulish",
    "haunting",
    "sinister",
    "macabre",
    "chilling",
    "ghostly",
    "shadowy",
    "gruesome",
    "wicked",
    "frightening",
    "mysterious",
    "bloodcurdling",
    "terrifying",
    "cackling",
    "dreadful",
    "enchanted",
    "bewitched",
    "bizarre",
    "hair-raising",
    "nightmarish",
    "uncanny",
    "dark",
    "spidery",
    "phantom",
    "eldritch",
    "grimy",
    "twisted",
    "shuddering",
    "apparitional",
    "cryptic",
    "cursed",
    "vengeful",
    "phantasmal",
    "ominous",
    "spectral",
    "fanged",
    "wretched",
    "scream-inducing",
    "bewitching",
    "gravitating",
    "veiled",
    "frightful",
    "gloomy",
    "diabolical",
    "mysterious",
    "bloodthirsty",
    "cackling",
    "dismal",
    "spellbound",
    "phobic",
    "witchy",
    "banshee-like",
    "ominous",
    "cursed",
    "grizzly",
    "shadowy",
    "unholy",
    "eerie",
    "fractured",
    "spectral",
    "menacing",
    "sombre",
    "chthonic",
    "dread-filled",
    "nightmarish",
    "sinister",
    "jarring",
    "forsaken",
    "wailing",
    "tattered",
    "dreadful",
    "gloom-ridden",
    "creep-tastic",
    "phantom-like",
    "wickedly",
    "ethereal",
    "macabre",
    "darkened",
    "grisly",
    "nightmarish",
    "shrieking",
    "bloodcurdling",
    "shocking",
    "mournful",
    "grim",
    "lovecraftian",
    "frantic",
    "diabolical",
    "wraith-like",
    "unsettling",
    "harrowing"
  ];
  
  const spookyMons = [
    "Vampire",
    "Werewolf",
    "Zombie",
    "Ghost",
    "Mummy",
    "Witch",
    "Skeleton",
    "Ghoul",
    "Frankenstein's Monster",
    "Banshee",
    "Bat",
    "Griffin",
    "Demon",
    "Goblin",
    "Scarecrow",
    "Pumpkinhead",
    "Reaper",
    "Chupacabra",
    "Headless Horseman",
    "Leprechaun",
    "Sirens",
    "Wendigo",
    "Yeti",
    "Mermaid",
    "Hydra",
    "Vampire Bat",
    "Hobgoblin",
    "Nymph",
    "Bugbear",
    "Fairy",
    "Sprite",
    "Phantom",
    "Kitsune",
    "Ogre",
    "Killer Clown",
    "Sandman",
    "Manticore",
    "Dullahan",
    "Troll",
    "Gorgon",
    "Basilisk",
    "Necromancer",
    "Lich",
    "Minotaur",
    "Succubus",
    "Incubus",
    "Zora",
    "Chimera",
    "Golem",
    "Selkie",
    "Sasquatch",
    "Ghost Dog",
    "Mokele-Mbembe",
    "Wendigo",
    "Djinn",
    "Kraken",
    "Sphinx",
    "Kappa",
    "Vampire Lord",
    "Lamia",
    "Skinwalker",
    "Jinn",
    "Fomorian",
    "Grendel",
    "Shapeshifter",
    "Manticore",
    "Will-o'-the-Wisp",
    "Gorgon",
    "Kitsune",
    "Mummy Lord",
    "Phantom Cat",
    "Dark Elf",
    "Gargoyle",
    "Giant Spider",
    "Zombie Horde",
    "Fae",
    "Banshee Wail",
    "Hellhound",
    "Vampire Hunter",
    "Rusalka",
    "Beastman"
  ];
  
  const colors = new Map([
    ["red", "#FF0000"],
    ["green", "#00FF00"],
    ["orange", "#FFA500"],
    ["yellow", "#FFFF00"],
    ["blue", "#0000FF"],
    ["purple", "#800080"],
    ["pink", "#FFC0CB"]
]);

  
  
    export function generateName(name, date, color) {
      // First Value is Name
      // Third Value is Color
      // Mat the Spooky Witch
      let returnValues = ["", ""];
    
      let spookyName = name;
      spookyName += " the ";
      
      let index_name = stringToHash(name) % spookyMonsspookyAdjectives.length;
      index_name = Math.abs(index_name);
      spookyName += spookyMonsspookyAdjectives[index_name];
      spookyName += " ";
  
      let dateV2 = "A";
      dateV2 += date;
      index_name = stringToHash(dateV2) % spookyMons.length;
      index_name = Math.abs(index_name);
      spookyName += spookyMons[index_name];
  
      returnValues[0] = spookyName;
  
      returnValues[1] = colors.get(color);
  
      return returnValues;    
    }
  
    function stringToHash(string) {
      string.toString();
      
      let hash = 0;
  
      if (string.length == 0) return hash;
  
      for (let i = 0; i < string.length; i++) {
          let char = string.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash = hash & hash;
      }
  
      return hash;
  }