import { useState } from 'react';
import './App.css';
import BallList from './components/BallList/BallList';
import Button from './components/Button/Button';

const getRandomNum = () => {
  return Math.floor(Math.random() * 36 + 1);
};

function App() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const generateRandomNumbersPull = () => {
    const numbersSet = new Set<number>();

    while (numbersSet.size < 5) {
      numbersSet.add(getRandomNum());
    }

    const sortedNumbers = [...numbersSet].sort((a, b) => a - b);

    setNumbers(sortedNumbers);
  };

  return (
    <div className="app-wrapper">
      <Button onClick={generateRandomNumbersPull}>New numbers</Button>
      <BallList numbersPull={numbers} />
    </div>
  );
}

export default App;
