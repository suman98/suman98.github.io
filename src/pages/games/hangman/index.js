import React, { useState, useEffect } from "react";
import "./App.css";
import wordJson from './words.json'

const wordData = wordJson;
const topics = Object.keys(wordData).map(i => ({
    name: i.replaceAll('_', ' ').toLocaleUpperCase(),
    value: i,
}));

const App = () => {
    const [selectedTopic, setSelectedTopic] = useState("programming_words");
    const [word, setWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const [maxGuesses] = useState(6);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [activeButton, setActiveButton] = useState(null); // State to track the active button

    const handleTopicChange = (e) => {
        const selected = e.target.value;
        setSelectedTopic(selected);
        resetGame(selected);
    };

    const resetGame = (topic) => {
        setGuessedLetters([]);
        setWrongGuesses(0);
        setGameOver(false);
        setGameWon(false);
        setActiveButton(null); // Reset active button state
        pickRandomWord(topic || selectedTopic); // Ensure to pick a new word
    };  

    const setUpHints = (randomWord) => {
        const letters = randomWord.split('')
        const count = Math.ceil((20 / 100) * letters.length);
        const selectedLetters = [...letters].sort(() => 0.5 - Math.random()).slice(0, count);
        setGuessedLetters(selectedLetters)
        console.log(selectedLetters, randomWord)
    }

    const pickRandomWord = (topic) => {
        const words = wordData[topic].map(i => i.toLowerCase());
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setWord(randomWord); // Set the selected word
        setUpHints(randomWord)
    };

    const handleGuess = (letter) => {
        if (!guessedLetters.includes(letter) && !gameOver) {
            setGuessedLetters((prev) => [...prev, letter]);
            setActiveButton(letter); // Set the clicked button as active

            if (!word.includes(letter)) {
                setWrongGuesses((prev) => prev + 1);
            }
        }
    };

    useEffect(() => {
        if (word) {
            const isWordGuessed = word
                .split("")
                .every((letter) => guessedLetters.includes(letter));

            if (isWordGuessed) {
                setGameWon(true);
                setGameOver(true);
            } else if (wrongGuesses >= maxGuesses) {
                setGameOver(true);
            }
        }
    }, [guessedLetters, word, wrongGuesses, maxGuesses]);

    useEffect(() => {
        pickRandomWord(selectedTopic); // Ensure to pick a word on mount
    }, [selectedTopic]);

    return (
        <div className="App">
            <h1>Hangman Game By Suman</h1>

            <div className="dropdown">
                <label htmlFor="topic-select">Choose a topic:</label>
                <select
                    id="topic-select"
                    value={selectedTopic}
                    onChange={handleTopicChange}
                    className="dropdown-select"
                >
                    {topics.map(item => (
                        <option value={item.value} key={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="word">
                {word.split("").map((letter, index) => (
                    <span key={index} className="letter">
                        {guessedLetters.includes(letter) ? letter : "_"}
                    </span>
                ))}
            </div>

            <p>Wrong guesses: {wrongGuesses} / {maxGuesses}</p>

            <div className="keyboard">
                {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
                    <button
                        key={letter}
                        onClick={() => handleGuess(letter)}
                        className={`letter-btn ${guessedLetters.includes(letter) ? "guessed" : ""
                            } ${gameOver && !guessedLetters.includes(letter) ? "not-guessed" : ""} ${activeButton === letter ? "active" : ""}`}
                        disabled={gameOver}
                    >
                        {letter}
                    </button>
                ))}
            </div>

            {gameOver && (
                <div className="text-center">
                    {gameWon ? (
                        <p className="game-winner">Congratulations, You Won!</p>
                    ) : (
                        <p className="game-over">Game Over! The word was: {word}</p>
                    )}
                    <button onClick={() => resetGame(selectedTopic)} className="reset-btn">
                        Play Again
                    </button>
                </div>
            )}

            {/* Display the guessed letters in a styled box */}
            <div className="guessed-word">
                <h2>Guessed Letters:</h2>
                <p>{guessedLetters.length > 0 ? guessedLetters.join(", ") : "No letters guessed yet."}</p>
            </div>
        </div>
    );
};

export default App;
