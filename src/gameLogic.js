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
      "vocal", "witch", "xerox", "yacht", "zebra"
    ];

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