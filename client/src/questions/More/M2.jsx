import React from "react";
import { useState, useEffect } from "react";

const M2 = () => {
  const words = [
    "hangman",
    "javascript",
    "react",
    "tailwind",
    "openai",
    "chatgpt",
  ];
  const maxAttempts = 6;

  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(maxAttempts);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex]);
  }, []);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setRemainingAttempts(remainingAttempts - 1);
      }
    }
  };

  const getMaskedWord = () => {
    return word
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  };

  const isGameWon = () => {
    return getMaskedWord().replace(/\s/g, "") === word;
  };

  const isGameOver = () => {
    return remainingAttempts === 0 || isGameWon();
  };

  const resetGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex]);
    setGuessedLetters([]);
    setRemainingAttempts(maxAttempts);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Hangman Game</h1>
      <div className="mb-4">
        <p>Guess the word:</p>
        <p className="text-2xl font-bold">{getMaskedWord()}</p>
      </div>
      <p>Remaining attempts: {remainingAttempts}</p>
      <div className="flex space-x-2 mb-4">
        {Array.from(Array(26)).map((_, index) => {
          const letter = String.fromCharCode(65 + index);
          return (
            <button
              key={letter}
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => handleGuess(letter.toLowerCase())}
              disabled={
                guessedLetters.includes(letter.toLowerCase()) || isGameOver()
              }
            >
              {letter}
            </button>
          );
        })}
      </div>
      {isGameWon() && (
        <p className="text-green-500">Congratulations! You won!</p>
      )}
      {remainingAttempts === 0 && (
        <p className="text-red-500">Game over! The word was "{word}".</p>
      )}
      {isGameOver() && (
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={resetGame}
        >
          New Game
        </button>
      )}
    </div>
  );
};

export default M2;
