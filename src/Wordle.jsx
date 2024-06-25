import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { generateWordSet, evaluateGuess } from './gameLogic';
import './Wordle.css';

import gameplaySound from './assets/gameplay.mp3';
import gameoverSound from './assets/gameover.mp3';
import gamewinSound from './assets/gamewin.mp3';

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

const keyboardColors = [
  '#FF0000', '#FF3300', '#FF6600', '#FF9900', '#FFCC00', 
  '#FFFF00', '#CCFF00', '#99FF00', '#66FF00', '#33FF00'
];

const Wordle = () => {
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState('');
  const [guesses, setGuesses] = useState(Array(MAX_GUESSES).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true);

  const [isSoundOn, setIsSoundOn] = useState(false);
  const audioContextRef = useRef(null);
  const audioBuffersRef = useRef({});
  const gameplaySourceRef = useRef(null);

  useEffect(() => {
    const initAudio = async () => {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      const [gameplayBuffer, gameoverBuffer, gamewinBuffer] = await Promise.all([
        fetch(gameplaySound).then(res => res.arrayBuffer()).then(arrayBuffer => audioContextRef.current.decodeAudioData(arrayBuffer)),
        fetch(gameoverSound).then(res => res.arrayBuffer()).then(arrayBuffer => audioContextRef.current.decodeAudioData(arrayBuffer)),
        fetch(gamewinSound).then(res => res.arrayBuffer()).then(arrayBuffer => audioContextRef.current.decodeAudioData(arrayBuffer))
      ]);

      audioBuffersRef.current = {
        gameplay: gameplayBuffer,
        gameover: gameoverBuffer,
        gamewin: gamewinBuffer
      };
    };

    initAudio();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playSound = (soundName, loop = false) => {
    if (audioContextRef.current && audioBuffersRef.current[soundName]) {
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffersRef.current[soundName];
      source.connect(audioContextRef.current.destination);
      source.loop = loop;
      source.start();
      return source;
    }
    return null;
  };

  useEffect(() => {
    if (isSoundOn && !gameplaySourceRef.current) {
      gameplaySourceRef.current = playSound('gameplay', true);
    } else if (!isSoundOn && gameplaySourceRef.current) {
      gameplaySourceRef.current.stop();
      gameplaySourceRef.current = null;
    }
  }, [isSoundOn]);

  useEffect(() => {
    const fetchWord = async () => {
      setLoading(true);
      const { wordSet, todaysWord } = await generateWordSet();
      setWordSet(wordSet);
      setCorrectWord(todaysWord);
      setLoading(false);
    };

    fetchWord();
  }, []);

  const handleKeyPress = useCallback((key) => {
    if (gameOver || loading) return;

    if (key === 'ENTER' || key === 'Enter') {
      if (currentGuess.length !== WORD_LENGTH) return;
      if (!wordSet.has(currentGuess.toUpperCase())) {
        alert('Not in word list');
        return;
      }

      const newGuesses = [...guesses];
      newGuesses[guesses.findIndex(guess => guess === '')] = currentGuess.toUpperCase();
      setGuesses(newGuesses);
      setCurrentGuess('');

      if (currentGuess.toUpperCase() === correctWord) {
        setGameOver(true);
        triggerConfetti();
        if (gameplaySourceRef.current) {
          gameplaySourceRef.current.stop();
          gameplaySourceRef.current = null;
        }
        playSound('gamewin');
        alert('You won!');
      } else if (newGuesses[MAX_GUESSES - 1] !== '') {
        setGameOver(true);
        if (gameplaySourceRef.current) {
          gameplaySourceRef.current.stop();
          gameplaySourceRef.current = null;
        }
        playSound('gameover');
        alert(`Game over! The word was ${correctWord}`);
      }
    } else if (key === 'BACK' || key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (currentGuess.length < WORD_LENGTH && key.length === 1 && key.match(/[a-z]/i)) {
      setCurrentGuess(prev => prev + key.toUpperCase());
    }
  }, [currentGuess, guesses, wordSet, correctWord, gameOver, loading]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      handleKeyPress(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyPress]);

  const keyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
  ];

  const keyColors = useMemo(() => {
    const colors = {};
    keyboardLayout.flat().forEach((key, index) => {
      colors[key] = keyboardColors[index % keyboardColors.length];
    });
    return colors;
  }, []);

  const triggerConfetti = () => {
    const end = Date.now() + 3.5 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  if (loading) {
    return <div className="container"><h1 className="title">Loading...</h1></div>;
  }

  return (
    <div className="container">
      <h1 className="title">Wordle Clone</h1>
      <button className="sound-toggle" onClick={toggleSound}>
        {isSoundOn ? '🔊' : '🔇'}
      </button>
      <div className="grid">
        {guesses.map((guess, i) => (
          <div className="row" key={i}>
            {Array.from({ length: WORD_LENGTH }).map((_, j) => (
              <motion.div
                className="cell"
                key={j}
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0],
                  backgroundColor: guess
                    ? evaluateGuess(guess, correctWord)[j] === 'correct'
                      ? '#6aaa64'
                      : evaluateGuess(guess, correctWord)[j] === 'present'
                      ? '#c9b458'
                      : '#3a3a3c'
                    : 'transparent',
                  color: guess ? '#fff' : '#fff',
                }}
                transition={{ duration: 0.3 }}
              >
                {guess[j] || ''}
              </motion.div>
            ))}
          </div>
        ))}
        <div className="row">
          {Array.from({ length: WORD_LENGTH }).map((_, i) => (
            <motion.div
              className="cell"
              key={i}
              initial={{ scale: 1 }}
              animate={{ scale: currentGuess[i] ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {currentGuess[i] || ''}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="keyboard">
        {keyboardLayout.map((row, i) => (
          <div className="keyboard-row" key={i}>
            {row.map((key) => (
              <motion.button
                className="key"
                key={key}
                data-key={key}
                data-special-key={key === "ENTER" || key === "BACK" ? "true" : "false"}
                style={{ backgroundColor: keyColors[key] }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleKeyPress(key)}
              >
                {key === "ENTER" ? "Enter" : key === "BACK" ? "⌫" : key}
              </motion.button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wordle;