import React, { useEffect, useState } from 'react';

const Fun = () => {
    const [moles, setMoles] = useState(Array(10).fill(false));
    const [score, setScore] = useState(0);
    const [moleIndex, setMoleIndex] = useState(-1);
    const [moleCount, setMoleCount] = useState(0);
    const [gameActive, setGameActive] = useState(false);
    
    // Function to randomly show a mole
    const showMole = () => {
        const randomIndex = Math.floor(Math.random() * moles.length);
        setMoleIndex(randomIndex);
        setMoles(prev => prev.map((mole, index) => index === randomIndex ? true : mole));
        
        // Hide the mole after 1000 milliseconds for more difficulty
        setTimeout(() => {
            setMoles(prev => prev.map(() => false));
            setMoleIndex(-1);
            setMoleCount(prev => prev + 1); // Increment mole count
        }, 1000);
    };

    // Show mole every 1 second
    useEffect(() => {
        let interval;
        if (gameActive && moleCount < 20) {
            interval = setInterval(showMole, 1000);
        }
        return () => clearInterval(interval);
    }, [gameActive, moleCount]);

    // Handle mole whack
    const whackMole = (index) => {
        if (moleIndex === index) {
            setScore(prev => prev + 1);
            setMoles(prev => prev.map((mole, i) => i === index ? false : mole)); // Hide the whacked mole
            setMoleIndex(-1); // Reset mole index
        }
    };

    // Start the game
    const startGame = () => {
        setMoleCount(0);
        setScore(0);
        setMoles(Array(10).fill(false));
        setGameActive(true);
        showMole(); // Show the first mole immediately
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <h1 className="text-white text-2xl mb-4">Whack-a-Mole!</h1>
            <h2 className="text-white text-lg mb-4">Score: {score}</h2>
            <div className="flex justify-center w-full mb-4">
                {moles.map((isMoleVisible, index) => (
                    <div
                        key={index}
                        className={`h-24 w-24 flex items-center justify-center border-2 border-white rounded-lg cursor-pointer transition-transform duration-300 ${
                            isMoleVisible ? 'bg-green-500' : 'bg-gray-700'
                        }`}
                        onClick={() => whackMole(index)}
                    >
                        {isMoleVisible && <div className="h-16 w-16 bg-brown rounded-full" />} {/* Mole */}
                    </div>
                ))}
            </div>
            <button
                onClick={startGame}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
            >
                Start Game
            </button>
            {moleCount >= 20 && gameActive && (
                <h3 className="text-white mt-4">Game Over! Final Score: {score}/20</h3>
            )}
        </div>
    );
};

export default Fun;
