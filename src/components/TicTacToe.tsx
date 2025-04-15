import { useState } from 'react';

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 board
    const [winner, setWinner] = useState<string | null>(null); // Track the winner
    const [isUserTurn, setIsUserTurn] = useState(true); // Track whose turn it is

    const checkWinner = (board: (string | null)[]) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of winningCombinations) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        if (board.every(cell => cell !== null)) {
            return 'Draw';
        }

        return null;
    };

    const handleClick = (index: number) => {
        if (!isUserTurn || board[index] || winner) return; // Ignore if it's not the user's turn, cell is filled, or game is over

        const newBoard = [...board];
        newBoard[index] = 'X'; // User's move
        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
            return;
        }

        setIsUserTurn(false); // Disable user input while bot makes its move

        // Bot's move
        setTimeout(() => {
            const emptyCells = newBoard
                .map((cell, idx) => (cell === null ? idx : null))
                .filter(idx => idx !== null) as number[];

            if (emptyCells.length > 0) {
                const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                newBoard[randomIndex] = 'O'; // Bot's move
                setBoard(newBoard);

                const botWinner = checkWinner(newBoard);
                if (botWinner) {
                    setWinner(botWinner);
                } else {
                    setIsUserTurn(true); // Re-enable user input after bot's move
                }
            }
        }, 500); // Delay for bot's move
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setIsUserTurn(true); // Reset to user's turn
    };

    return (
        <div className="text-center mt-14 relative">
            <h2 className="text-3xl sm:text-4xl mb-6">Tripp trapp tresko:</h2>
            <div className="relative flex flex-wrap w-[80vw] h-[80vw] sm:w-[20vw] sm:h-[20vw] mx-auto">
                {board.map((cell, index) => (
                    <div
                        key={index}
                        className="w-1/3 h-1/3 border border-black flex items-center justify-center"
                        onClick={() => handleClick(index)}
                    >
                        <button className="w-full h-full text-2xl sm:text-4xl">
                            {cell}
                        </button>
                    </div>
                ))}
                {winner && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                        <p className="text-2xl sm:text-3xl text-white">
                            {winner === 'Draw'
                                ? 'Uavgjort!'
                                : winner === 'X'
                                ? 'Du vinner!'
                                : 'Du taper!'}
                        </p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                            onClick={resetGame}
                        >
                            Spill på nytt
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TicTacToe;