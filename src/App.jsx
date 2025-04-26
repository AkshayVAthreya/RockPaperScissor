import React, { useState } from 'react';

const choices = ['Rock', 'Paper', 'Scissors'];

export default function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult('It\'s a Tie!');
    } else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      setResult('You Win!');
    } else {
      setResult('You Lose!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '70px',display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
       }}>
      
      <h1>Rock Paper Scissors</h1>
      <div>
        {choices.map((choice) => (
          <button 
            key={choice} 
            onClick={() => playGame(choice)}
            style={{ margin: '10px', padding: '10px 20px' }}
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <div style={{ marginTop: '30px' }}>
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}
