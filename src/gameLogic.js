// gameLogic.js

// Fetch words from an API or a larger word list file
export const generateWordSet = async () => {
  try {
    // In a real-world scenario, you'd fetch from an API or read from a file
    // For this example, we'll use a larger hardcoded list
    const fiveLetterWords = [
      "apple", "brick", "crane", "dough", "eagle", "flute", "grape", 
      "hatch", "ivory", "joker", "knife", "lemon", "mango", "noble", 
      "ocean", "piano", "quilt", "radio", "snake", "table", "umbra", 
      "vocal", "witch", "xerox", "yacht", "zebra", "actor", "baker", 
      "cider", "dance", "eager", "fable", "gamer", "harpy", "igloo", 
      "jazzy", "kayak", "latch", "medal", "nanny", "opium", "plush", 
      "quart", "raven", "swarm", "torch", "under", "vivid", "wrist", 
      "xenon", "yummy", "zesty", "arbor", "bison", "cleft", "drone", 
      "exalt", "frost", "globe", "hover", "input", "jolly", "knack", 
      "leash", "melon", "novel", "ozone", "polar", "quasi", "relic", 
      "straw", "trout", "usher", "valid", "whale", "xylol", "youth", 
      "zephyr", "abbey", "blaze", "canny", "delta", "ember", "frank", 
      "grove", "house", "inner", "jumpy", "kneel", "lumen", "mirth", 
      "nerdy", "onset", "proud", "quota", "rider", "sheep", "torch", 
      "ultra", "vigor", "waltz", "xerus", "yacht", "zonal", "axial", 
      "bloom", "crisp", "dusty", "ethos", "finer", "gleam", "haste", 
      "imply", "jewel", "kiosk", "latch", "molar", "nudge", "olive", 
      "press", "quell", "reign", "saint", "terse", "unify", "vowel", 
      "wrack", "xenon", "yield", "zonal", "azure", "brave", "clamp", 
      "dried", "eject", "fauna", "glory", "happy", "icing", "joint", 
      "kebab", "lemon", "magic", "north", "otter", "pivot", "quack", 
      "ready", "scarf", "tilde", "uncle", "vivid", "wheat", "xerus", 
      "yacht", "zebra", "angel", "brink", "clerk", "dread", "elate", 
      "flame", "gloom", "harsh", "idiot", "joust", "knead", "laugh", 
      "mount", "noble", "other", "piano", "quilt", "revel", "silly", 
      "trope", "usage", "value", "waste", "xenon", "yeast", "zonal", 
      "apron", "bongo", "climb", "drink", "elbow", "flood", "grasp", 
      "hurry", "irony", "jolly", "kneel", "lemon", "march", "never", 
      "opera", "plain", "query", "rider", "shiny", "toast", "upper", 
      "valid", "whirl", "xerox", "yacht", "zonal", "agile", "black", 
      "clown", "drawn", "entry", "froze", "glide", "haunt", "ivory", 
      "jazzy", "kneel", "leapt", "mover", "novel", "organ", "pluck", 
      "quirk", "rouse", "silly", "trove", "urban", "vivid", "wheel", 
      "xenon", "yacht", "zonal", "apple", "brink", "cleft", "drove", 
      "eagle", "flask", "grill", "hover", "issue", "jazzy", "kneel", 
      "lemon", "maker", "niche", "often", "pound", "quilt", "rival", 
      "smile", "tread", "unite", "voter", "wince", "xerox", "yacht", 
      "zonal", "agent", "beach", "clasp", "dread", "elite", "fancy", 
      "grasp", "haste", "inbox", "jazzy", "kneel", "leapt", "major", 
      "ninja", "orbit", "power", "quote", "right", "smile", "trick", 
      "ultra", "value", "whale", "xenon", "yacht", "zonal", "adobe", 
      "bison", "cabin", "dread", "exile", "fraud", "grime", "haste", 
      "ivory", "jumpy", "kneel", "lemon", "model", "nifty", "opera", 
      "plane", "quiet", "rumor", "shout", "theme", "uncle", "vivid", 
      "wheat", "xerus", "yacht", "zonal", "agent", "beady", "clerk", 
      "dried", "epoch", "fancy", "grove", "haste", "ivory", "jazzy", 
      "kneel", "leapt", "magic", "naval", "opera", "piano", "quote", 
      "ridge", "shade", "trope", "unity", "voter", "whirl", "xerox", 
      "yacht", "zonal", "aptly", "blaze", "cider", "dread", "elite", 
      "frown", "groom", "haste", "issue", "jazzy", "kneel", "lemon", 
      "match", "night", "opera", "plaid", "quirk", "route", "smirk", 
      "tread", "ultra", "vivid", "whale", "xenon", "yacht", "zonal", 
      "about", "binge", "cider", "dread", "eagle", "flank", "grasp", 
      "haste", "inbox", "jazzy", "kneel", "leapt", "motor", "north", 
      "orbit", "plane", "quote", "rival", "shade", "tried", "uncle", 
      "voter", "whirl", "xerus", "yacht", "zonal", "afoot", "black", 
      "clamp", "dread", "eager", "fable", "globe", "haste", "issue", 
      "jazzy", "kneel", "lemon", "maker", "nerdy", "opera", "plaid", 
      "quilt", "rumor", "shady", "trend", "unity", "vivid", "wheat", 
      "xerus", "yacht", "zonal", "admin", "binge", "clerk", "drink", 
      "epoch", "froze", "gloom", "haste", "ivory", "jumpy", "kneel", 
      "leapt", "march", "never", "opera", "piano", "quote", "ridge", 
      "shade", "trope", "uncle", "voter", "whirl", "xerox", "yacht", 
      "zonal", "apple", "brink", "cleft", "drove", "eagle", "flask", 
      "grill", "haste", "inbox", "jazzy", "kneel", "lemon", "maker", 
      "nerdy", "opera", "plane", "quirk", "route", "smirk", "trend", 
      "unity", "voter", "wheat", "xerox", "yacht", "zonal", "angle", 
      "bison", "cider", "drink", "epoch", "fancy", "grove", "haste", 
      "issue", "jazzy", "kneel", "leapt", "motor", "north", "opera", 
      "plaid", "quote", "rumor", "shade", "trend", "uncle", "vivid", 
      "whale", "xerus", "yacht", "zonal", "alert", "bloom", "clerk", 
      "dried", "epoch", "froze", "globe", "haste", "issue", "jazzy", 
      "kneel", "lemon", "magic", "naval", "opera", "piano", "quote", 
      "ridge", "shade", "trope", "ultra", "vivid", "wheat", "xerus", 
      "yacht", "zonal", "agile", "bison", "cleft", "drink", "epoch", 
      "fable", "grove", "haste", "issue", "jazzy", "kneel", "leapt", 
      "motor", "north", "opera", "plane", "quirk", "route", "shade", 
      "trend", "uncle", "vivid", "whirl", "xerox", "yacht", "zonal", 
      "admin", "blaze", "clerk", "drink", "epoch", "froze", "grove", 
      "haste", "issue", "jazzy", "kneel", "lemon", "maker", "naval", 
      "opera", "plaid", "quote", "rumor", "shady", "trend", "unity", 
      "vivid", "wheat", "xerus", "yacht", "zonal", "angel", "bloom", 
      "clerk", "drink", "epoch", "fable", "globe", "haste", "issue", 
      "jazzy", "kneel", "lemon", "magic", "north", "opera", "piano", 
      "quote", "ridge", "shade", "trend", "ultra", "vivid", "whale", 
      "xerus", "yacht", "zonal", "adobe", "bison", "cleft", "dread", 
      "epoch", "froze", "grove", "haste", "issue", "jazzy", "kneel", 
      "lemon", "major", "naval", "opera", "plane", "quirk", "route", 
      "shady", "trend", "unity", "vivid", "wheat", "xerox", "yacht", 
      "zonal", "agent", "blaze", "clerk", "dread", "epoch", "fancy", 
      "grove", "haste", "issue", "jazzy", "kneel", "lemon", "magic", 
      "north", "opera", "piano", "quote", "ridge", "shade", "trend", 
      "ultra", "vivid", "whale", "xerus", "yacht", "zonal", "apple", 
      "bison", "cleft", "dried", "epoch", "froze", "globe", "haste", 
      "issue", "jazzy", "kneel", "lemon", "maker", "naval", "opera", 
      "plane", "quirk", "rumor", "shady", "trend", "unity", "vivid", 
      "wheat", "xerox", "yacht", "zonal", "alert", "bloom", "clerk", 
      "drink", "epoch", "froze", "grove", "haste", "issue", "jazzy", 
      "kneel", "lemon", "magic", "north", "opera", "piano", "quote", 
      "ridge", "shade", "trend", "ultra", "vivid", "whale", "xerus", 
      "yacht", "zonal", "admin", "bison", "cleft", "dried", "epoch", 
      "fable", "grove", "haste", "issue", "jazzy", "kneel", "lemon", 
      "maker", "naval", "opera", "plane", "quirk", "route", "shady", 
      "trend", "unity", "vivid", "wheat", "xerox", "yacht", "zonal", 
      "adobe", "blaze", "clerk", "dread", "epoch", "froze", "globe", 
      "haste", "issue", "jazzy", "kneel", "lemon", "magic", "north", 
      "opera", "piano", "quote", "ridge", "shade", "trend", "ultra", 
      "vivid", "whale", "xerus", "yacht", "zonal", "apple", "bison", 
      "cleft", "drink", "epoch", "froze", "grove", "haste", "issue", 
      "jazzy", "kneel", "lemon", "major", "naval", "opera", "plane", 
      "quirk", "rumor", "shady", "trend", "unity", "vivid", "wheat", 
      "xerox", "yacht", "zonal", "agent", "bloom", "clerk", "dread", 
      "epoch", "fable", "grove", "haste", "issue", "jazzy", "kneel", 
      "lemon", "maker", "north", "opera", "piano", "quote", "ridge", 
      "shade", "trend", "ultra", "vivid", "whale", "xerus", "yacht", 
      "zonal", "admin", "bison", "cleft", "drink", "epoch", "froze", 
      "globe", "haste", "issue", "jazzy", "kneel", "lemon", "magic", 
      "naval", "opera", "plane", "quirk", "route", "shady", "trend", 
      "unity", "vivid", "wheat", "xerox", "yacht", "zonal", "alert", 
      "bloom", "clerk", "dread", "epoch", "fable", "grove", "haste", 
      "issue", "jazzy", "kneel", "lemon", "maker", "north", "opera", 
      "piano", "quote", "ridge", "shade", "trend", "ultra", "vivid", 
      "whale", "xerus", "yacht", "zonal", "agent", "bison", "cleft", 
      "drink", "epoch", "froze", "globe", "haste", "issue", "jazzy", 
      "kneel", "lemon", "major", "naval", "opera", "plane", "quirk", 
      "rumor", "shady", "trend", "unity", "vivid", "wheat", "xerox", 
      "yacht", "zonal", "alert", "blaze", "clerk", "dread", "epoch", 
      "fable", "grove", "haste", "issue", "jazzy", "kneel", "lemon", 
      "magic", "north", "opera", "piano", "quote", "ridge", "shade", 
      "trend", "ultra", "vivid", "whale", "xerus", "yacht", "zonal", 
      "adobe", "bison", "cleft", "drink", "epoch", "froze", "globe", 
      "haste", "issue", "jazzy", "kneel", "lemon", "major", "naval", 
      "opera", "plane", "quirk", "route", "shady", "trend", "unity", 
      "vivid", "wheat", "xerox", "yacht", "zonal", "angel", "bloom", 
      "clerk", "dried", "epoch", "fable", "grove", "haste", "issue", 
      "jazzy", "kneel", "lemon", "magic", "north", "opera", "piano", 
      "quote", "ridge", "shade", "trend", "ultra", "vivid", "whale", 
      "xerus", "yacht", "zonal", "agent", "bison", "cleft", "drink", 
      "epoch", "froze", "globe", "haste", "issue", "jazzy", "kneel", 
      "lemon", "major", "naval", "opera", "plane", "quirk", "rumor", 
      "shady", "trend", "unity", "vivid", "wheat", "xerox", "yacht", 
      "zonal", "admin", "blaze", "clerk", "dread", "epoch", "fable", 
      "grove", "haste", "issue", "jazzy", "kneel", "lemon", "magic", 
      "north", "opera", "piano", "quote", "ridge", "shade", "trend", 
      "ultra", "vivid", "whale", "xerus", "yacht", "zonal", "alert", 
      "bison", "cleft", "drink", "epoch", "froze", "globe", "haste", 
      "issue", "jazzy", "kneel", "lemon", "maker", "naval", "opera", 
      "plane", "quirk", "route", "shady", "trend", "unity", "vivid", 
      "wheat", "xerox", "yacht", "zonal", "adobe", "blaze", "clerk", 
      "dread", "epoch", "fable", "grove", "haste", "issue", "jazzy", 
      "kneel", "lemon", "magic", "north", "opera", "piano", "quote", 
      "ridge", "shade", "trend", "ultra", "vivid", "whale", "xerus", 
      "yacht", "zonal", "alert", "bloom", "cleft", "drink", "epoch", 
      "froze", "globe", "haste", "issue", "jazzy", "kneel", "lemon", 
      "major", "naval", "opera", "plane", "quirk", "rumor", "shady", 
      "trend", "unity", "vivid", "wheat", "xerox", "yacht", "zonal", 
      "agent", "bison", "clerk", "dread", "epoch", "fable", "grove", 
      "haste", "issue", "jazzy", "kneel", "lemon", "magic", "north", 
      "opera", "piano", "quote", "ridge", "shade", "trend", "ultra", 
      "vivid", "whale", "xerus", "yacht", "zonal", "admin", "bloom", 
      "cleft", "drink", "epoch", "froze", "globe", "haste", "issue", 
      "jazzy", "kneel", "lemon", "major", "naval", "opera", "plane", 
      "quirk", "route", "shady", "trend", "unity", "vivid", "wheat", 
      "xerox", "yacht", "zonal", "alert", "bison", "clerk", "dread", 
      "epoch", "fable", "grove", "haste", "issue", "jazzy", "kneel", 
      "lemon", "magic", "north", "opera", "piano", "quote", "ridge", 
      "shade", "trend", "ultra", "vivid", "whale", "xerus", "yacht", 
      "zonal", "admin", "bloom", "cleft", "drink", "epoch", "froze", 
      "globe", "haste", "issue", "jazzy", "kneel", "lemon", "major", 
      "naval", "opera", "plane", "quirk", "rumor", "shady", "trend", 
      "unity", "vivid", "wheat", "xerox", "yacht", "zonal", "angel", 
      "bison", "clerk", "dried", "epoch", "fable", "grove", "haste", 
      "issue", "jazzy", "kneel", "lemon", "magic", "north", "opera", 
      "piano", "quote", "ridge", "shade", "trend", "ultra", "vivid", 
      "whale", "xerus", "yacht", "zonal", "agent", "bloom", "cleft", 
      "drink", "epoch", "froze", "globe", "haste", "issue", "jazzy", 
      "kneel", "lemon", "major", "naval", "opera", "plane", "quirk", 
      "route", "shady", "trend", "unity", "vivid", "wheat", "xerox", 
      "yacht", "zonal", "admin", "blaze", "clerk", "dread", "epoch", 
      "fable", "grove", "haste", "issue", "jazzy", "kneel", "lemon", 
      "magic", "north", "opera", "piano", "quote", "ridge", "shade", 
      "trend", "ultra", "vivid", "whale", "xerus", "yacht", "zonal", 
      "alert", "bison", "cleft", "drink", "epoch", "froze", "globe", 
      "haste", "issue", "jazzy", "kneel", "lemon", "maker", "naval", 
      "opera", "plane", "quirk", "rumor", "shady", "trend", "unity", 
      "vivid", "wheat", "xerox", "yacht", "zonal", "adobe", "blaze", 
      "clerk", "dread", "epoch", "fable", "grove", "haste", "issue", 
      "jazzy", "kneel", "lemon", "magic", "north", "opera", "piano", 
      "quote", "ridge", "shade", "trend", "ultra", "vivid", "whale", 
      "xerus", "yacht", "zonal", "alert", "bloom", "cleft", "drink", 
      "epoch", "froze", "globe", "haste", "issue", "jazzy", "kneel", 
      "lemon", "major", "naval", "opera", "plane", "quirk", "rumor", 
      "shady", "trend", "unity", "vivid", "wheat", "xerox", "yacht", 
      "zonal", "angel", "bison", "clerk", "dread", "epoch", "froze", 
      "grove", "haste", "issue", "jazzy", "kneel", "lemon", "magic", 
      "north", "opera", "piano", "quote", "ridge", "shade", "trend", 
      "ultra", "vivid", "whale", "xerus", "yacht", "zonal", "agent", 
      "bloom", "cleft", "drink", "epoch", "fable", "globe", "haste", 
      "issue", "jazzy", "kneel", "lemon", "major", "naval", "opera", 
      "plane", "quirk", "route", "shady", "trend", "unity", "vivid", 
      "wheat", "xerox", "yacht", "zonal", "admin", "blaze", "clerk", 
      "dread", "epoch", "froze", "grove", "haste", "issue", "jazzy", 
      "kneel", "lemon", "magic", "north", "opera", "piano", "quote", 
      "ridge", "shade", "trend", "ultra", "vivid", "whale", "xerus", 
      "yacht", "zonal", "alert", "bison", "cleft", "drink", "epoch", 
      "fable", "globe", "haste", "issue", "jazzy", "kneel", "lemon", 
      "major", "naval", "opera", "plane", "quirk", "route", "shady", 
      "trend", "unity", "vivid", "wheat", "xerox", "yacht", "zonal", 
      "adobe", "blaze", "clerk", "dread", "epoch", "froze", "grove", 
      "haste", "issue", "jazzy", "kneel", "lemon", "magic", "north", 
      "opera", "piano", "quote", "ridge", "shade", "trend", "ultra", 
      "vivid", "whale", "xerus", "yacht", "zonal", "angel", "bison", 
      "cleft", "drink", "epoch", "fable", "globe", "haste", "issue", 
      "jazzy", "kneel", "lemon", "major", "naval", "opera", "plane", 
      "quirk", "rumor", "shady", "trend", "unity", "vivid", "wheat", 
      "xerox", "yacht", "zonal", "alert", "bloom", "clerk", "dread", 
      "epoch", "froze", "grove", "haste", "issue", "jazzy", "kneel", 
      "lemon", "magic", "north", "opera", "piano", "quote", "ridge", 
      "shade", "trend", "ultra", "vivid", "whale", "xerus", "yacht", 
      "zonal", "agent", "bison", "cleft", "drink", "epoch", "fable", 
      "globe", "haste", "issue", "jazzy", "kneel", "lemon", "major", 
      "naval", "opera", "plane", "quirk", "route", "shady", "trend", 
      "unity", "vivid", "wheat", "xerox", "yacht", "zonal", "admin", 
      "blaze", "clerk", "dread", "epoch", "froze", "grove", "haste", 
      "issue", "jazzy", "kneel", "lemon", "magic", "north", "opera", 
      "piano", "quote", "ridge", "shade", "trend", "ultra", "vivid", 
      "whale", "xerus", "yacht", "zonal", "alert", "bison", "clerk", 
      "dread", "epoch", "fable", "globe", "haste", "issue", "jazzy", 
      "kneel", "lemon", "major", "naval", "opera", "plane", "quirk", 
      "route", "shady", "trend", "unity", "vivid", "wheat", "xerox", 
      "yacht", "zonal", "angel", "bloom", "cleft", "drink", "epoch", 
      "froze", "grove", "haste", "issue", "jazzy", "kneel", "lemon", 
      "magic", "north", "opera", "piano", "quote", "ridge", "shade", 
      "trend", "ultra", "vivid", "whale", "xerus", "yacht", "zonal", 
      "adobe", "bison", "clerk", "dread", "epoch", "fable", "globe", 
      "haste", "issue", "jazzy", "kneel", "lemon", "major", "naval", 
      "opera", "plane", "quirk", "rumor", "shady", "trend", "unity", 
      "vivid", "wheat", "xerox", "yacht", "zonal", "alert", "blaze", 
      "cleft", "drink", "epoch", "froze", "grove", "haste", "issue", 
      "jazzy", "kneel", "lemon", "magic", "north", "opera", "piano", 
      "quote", "ridge", "shade", "trend", "ultra", "vivid", "whale", 
      "xerus", "yacht", "zonal", "angel", "bison", "clerk", "dried", 
      "epoch", "fable", "globe", "haste", "issue", "jazzy", "kneel", 
      "lemon", "major", "naval", "opera", "plane", "quirk", "rumor", 
      "shady", "trend", "unity", "vivid", "wheat", "xerox", "yacht", 
      "zonal", "agent", "bloom", "cleft", "drink", "epoch", "froze", 
      "grove", "haste", "issue", "jazzy", "kneel", "lemon", "magic", 
      "north", "opera", "piano", "quote", "ridge", "shade", "trend", 
      "ultra", "vivid", "whale", "xerus", "yacht", "zonal", "adobe", 
      "bison", "clerk", "dread", "epoch", "fable", "globe", "haste", 
      "issue", "jazzy", "kneel", "lemon", "major", "naval", "opera", 
      "plane", "quirk", "route", "shady", "trend", "unity", "vivid", 
      "wheat", "xerox", "yacht", "zonal", "alert", "blaze", "cleft", 
      "drink", "epoch", "froze", "grove", "haste", "issue", "jazzy", 
      "kneel", "lemon", "magic", "north", "opera", "piano", "quote", 
      "ridge", "shade", "trend", "ultra", "vivid", "whale", "xerus", 
      "yacht", "zonal", "angel", "bison", "clerk", "dread", "epoch", 
      "fable", "globe", "haste", "issue", "jazzy", "kneel", "lemon", 
      "major", "naval", "opera", "plane", "quirk", "rumor", "shady", 
      "trend", "unity", "vivid", "wheat", "xerox", "yacht", "zonal", 
      "alert", "bloom", "cleft", "drink", "epoch", "froze", "grove", 
      "haste", "issue", "jazzy", "kneel", "lemon", "magic", "north", 
      "opera", "piano", "quote", "ridge", "shade", "trend", "ultra", 
      "vivid", "whale", "xerus", "yacht", "zonal", "agent", "bison", 
      "clerk", "dread", "epoch", "fable", "globe", "haste", "issue", 
      "jazzy", "kneel", "lemon", "major", "naval", "opera", "plane", 
      "quirk", "route", "shady", "trend", "unity", "vivid", "wheat", 
      "xerox", "yacht", "zonal", "adobe", "bloom", "cleft", "drink", 
      "epoch", "froze", "grove", "haste", "issue", "jazzy", "kneel", 
      "lemon", "magic", "north", "opera", "piano", "quote", "ridge", 
      "shade", "trend", "ultra", "vivid", "whale", "xerus", "yacht", 
      "zonal", "alert", "bison", "clerk", "dread", "epoch", "fable", 
      "globe", "haste", "issue", "jazzy", "kneel", "lemon", "major", 
      "naval", "opera", "plane", "quirk", "rumor", "shady", "trend", 
      "unity", "vivid", "wheat", "xerox", "yacht", "zonal", "angel", 
      "bloom", "cleft", "drink", "epoch", "froze", "grove", "haste", 
      "issue", "jazzy", "kneel", "lemon", "magic", "north", "opera", 
      "piano", "quote", "ridge", "shade", "trend", "ultra", "vivid", 
      "whale", "xerus", "yacht", "zonal", "admin", "bison", "clerk", 
      "dread", "epoch", "fable", "globe", "haste", "issue", "jazzy", 
      "kneel", "lemon", "major", "naval", "opera", "plane", "quirk", 
      "route", "shady", "trend", "unity", "vivid", "wheat", "xerox", 
      "yacht", "zonal", "alert", "blaze", "cleft", "drink", "epoch", 
      "froze", "grove", "haste", "issue", "jazzy", "kneel", "lemon", 
      "magic", "north", "opera", "piano", "quote", "ridge", "shade", 
      "trend", "ultra", "vivid", "whale", "xerus", "yacht", "zonal", 
      "adobe", "bison", "clerk", "dread", "epoch", "fable", "globe", 
      "haste", "issue", "jazzy", "kneel", "lemon", "major", "naval", 
      "opera", "plane", "quirk", "rumor", "shady", "trend", "unity", 
      "vivid", "wheat", "xerox", "yacht", "zonal", "alert", "blaze", 
      "cleft", "drink", "epoch", "froze", "grove", "haste", "issue", 
      "jazzy", "kneel", "lemon", "magic", "north", "opera", "piano", 
      "quote", "ridge", "shade", "trend", "ultra", "vivid", "whale", 
      "xerus", "yacht", "zonal", "angel", "bison", "clerk", "dread", 
      "epoch", "fable", "globe", "haste", "issue", "jazzy", "kneel", 
      "lemon", "major", "naval", "opera", "plane", "quirk", "route", 
      "shady", "trend", "unity", "vivid", "wheat", "xerox", "yacht", 
      "zonal", "agent", "bloom", "cleft", "drink", "epoch", "froze", 
      "grove", "haste", "issue", "jazzy", "kneel", "lemon", "magic", 
      "north", "opera", "piano", "quote", "ridge", "shade", "trend", 
      "ultra", "vivid", "whale", "xerus", "yacht", "zonal", "adobe", 
      "blaze", "clerk", "dread", "epoch", "fable", "globe", "haste", 
      "issue", "jazzy", "kneel", "lemon", "major", "naval", "opera", 
      "plane", "quirk", "rumor", "shady", "trend", "unity", "vivid", 
      "wheat", "xerox", "yacht", "zonal", "alert", "bison", "cleft", 
      "drink", "epoch", "froze", "grove", "haste", "issue", "jazzy", 
      "kneel", "lemon", "magic", "north", "opera", "piano", "quote", 
      "ridge", "shade", "trend", "ultra", "vivid", "whale", "xerus", 
      "yacht", "zonal", "angel", "bison", "clerk", "dried", "epoch", 
      "fable", "globe", "haste", "issue", "jazzy", "kneel", "lemon", 
      "major", "naval", "opera", "plane", "quirk", "rumor", "shady", 
      "trend", "unity", "vivid", "wheat", "xerox", "yacht", "zonal", 
      "agent", "blaze", "cleft", "drink", "epoch", "froze", "grove", 
      "haste", "issue", "jazzy", "kneel", "lemon", "magic", "north", 
      "opera", "piano", "quote", "ridge", "shade", "trend", "ultra", 
      "vivid", "whale", "xerus", "yacht", "zonal", "adobe", "bison", 
      "clerk", "dread", "epoch", "fable", "globe", "haste", "issue", 
      "jazzy", "kneel", "lemon", "major", "naval", "opera", "plane", 
      "quirk", "route", "shady", "trend", "unity", "vivid", "wheat", 
      "xerox", "yacht", "zonal", "alert", "blaze", "cleft", "drink", 
      "epoch", "froze", "grove", "haste", "issue", "jazzy", "kneel", 
      "lemon", "magic", "north", "opera", "piano", "quote", "ridge", 
      "shade", "trend", "ultra", "vivid", "whale", "xerus", "yacht", 
      "zonal", "angel", "bison", "clerk", "dread", "epoch", "fable", 
      "globe", "haste", "issue", "jazzy", "kneel", "lemon", "major", 
      "naval", "opera", "plane", "quirk", "rumor", "shady", "trend", 
      "unity", "vivid", "wheat", "xerox", "yacht", "zonal", "agent", 
      "bloom", "cleft", "drink", "epoch", "froze", "grove", "haste", 
      "issue", "jazzy", "kneel", "lemon", "magic", "north", "opera", 
      "piano", "quote", "ridge", "shade", "trend", "ultra", "vivid", 
      "whale", "xerus", "yacht", "zonal", "adobe", "blaze", "clerk", 
      "dread", "epoch", "fable", "globe", "haste", "issue", "jazzy", 
      "kneel", "lemon", "major", "naval", "opera", "plane", "quirk", 
      "rumor", "shady", "trend", "unity", "vivid", "wheat", "xerox", 
      "yacht", "zonal", "alert", "bison", "cleft", "drink", "epoch", 
      "froze", "grove", "haste", "issue", "jazzy", "kneel", "lemon", 
      "magic", "north", "opera", "piano", "quote", "ridge", "shade", 
      "trend", "ultra", "vivid", "whale", "xerus", "yacht", "zonal", 
      "angel", "bison", "clerk", "dried", "epoch", "fable", "globe", 
      "haste", "issue", "jazzy", "kneel", "lemon", "major", "naval", 
      "opera", "plane", "quirk", "route", "shady", "trend", "unity", 
      "vivid", "wheat", "xerox", "yacht", "zonal", "alert", "bloom", 
      "cleft", "drink", "epoch", "froze", "grove", "haste", "issue", 
      "jazzy", "kneel", "lemon", "magic", "north", "opera", "piano", 
      "quote", "ridge", "shade", "trend", "ultra", "vivid", "whale", 
      "xerus", "yacht", "zonal", "agent", "bison", "clerk", "dread", 
      "epoch", "fable", "globe", "haste", "issue", "jazzy", "kneel", 
      "lemon", "major", "naval", "opera", "plane", "quirk", "rumor", 
      "shady", "trend", "unity", "vivid", "wheat", "xerox", "yacht", 
      "zonal", "adobe", "bloom", "cleft", "drink", "epoch", "froze", 
      "grove", "haste", "issue", "jazzy", "kneel", "lemon", "magic", 
      "north", "opera", "piano", "quote", "ridge", "shade", "trend", 
      "ultra", "vivid", "whale", "xerus", "yacht", "zonal", "alert", 
      "bison", "clerk", "dread", "epoch", "fable", "globe", "haste", 
      "issue", "jazzy", "kneel", "lemon", "major", "naval", "opera", 
      "plane", "quirk", "rumor", "shady", "trend", "unity", "vivid", 
      "wheat", "xerox", "yacht", "zonal", "angel", "bison", "cleft", 
      "drink", "epoch", "froze", "grove", "haste", "issue", "jazzy", 
      "kneel", "lemon", "magic", "north", "opera", "piano", "quote", 
      "ridge", "shade", "trend", "ultra", "vivid", "whale", "xerus", 
      "yacht", "zonal", "admin", "bloom", "clerk", "dread", "epoch", 
      "fable", "globe", "haste", "issue", "jazzy", "kneel", "lemon", 
      "major", "naval", "opera", "plane", "quirk", "route", "shady", 
      "trend", "unity", "vivid", "wheat", "xerox", "yacht", "zonal", 
      "adobe", "blaze", "cleft", "drink", "epoch", "froze", "grove", 
      "haste", "issue", "jazzy", "kneel", "lemon", "magic", "north", 
      "opera", "piano", "quote", "ridge", "shade", "trend", "ultra", 
      "vivid", "whale", "xerus", "yacht", "zonal", "angel", "bison", 
      "clerk", "dried", "epoch", "fable", "globe", "haste", "issue", 
      "jazzy", "kneel", "lemon", "major", "naval", "opera", "plane", 
      "quirk"];
  

      const wordSet = new Set(fiveLetterWords.map(word => word.toUpperCase()));
      const todaysWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)].toUpperCase();
  
      return { wordSet, todaysWord };
    } catch (error) {
      console.error("Error generating word set:", error);
      throw error;
    }
  };
  
  export const evaluateGuess = (guess, correctWord) => {
    const guessArray = guess.split('');
    const correctWordArray = correctWord.split('');
    const result = Array(guess.length).fill('absent');
    const usedIndices = new Set();
  
    // First pass: mark correct letters
    for (let i = 0; i < guessArray.length; i++) {
      if (guessArray[i] === correctWordArray[i]) {
        result[i] = 'correct';
        usedIndices.add(i);
      }
    }
  
    // Second pass: mark present letters
    for (let i = 0; i < guessArray.length; i++) {
      if (result[i] !== 'correct') {
        const correctIndex = correctWordArray.findIndex((letter, index) => 
          letter === guessArray[i] && !usedIndices.has(index)
        );
        if (correctIndex !== -1) {
          result[i] = 'present';
          usedIndices.add(correctIndex);
        }
      }
    }
  
    return result;
  };