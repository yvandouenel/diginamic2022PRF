
import './../css/App.css';
import IncrementButton from './buttons/IncrementButton';
import CounterButton from './buttons/CounterButton';
import ResetButton from './buttons/ResetButton';
import { useState, useEffect } from 'react';

const App = () => {
  // hook d'état
  const [counter, setCounter] = useState(0);

  // hook d'effet pour remplacer les cycles de vie d'un composant Class

  // Equivalent de componentDidUpdate
  useEffect(() => {
    document.title = `Valeur du compteur : ${counter}`;
  });

  // Equivalent de componentDidMount
  useEffect(() => {
    document.title = "Hello World!"
  }, []);


  const handleClickIncrement = () => {
    console.log(`dans handleClickIncrement`);
    // Appel de setState
    setCounter(prevCount => prevCount + 1)
  }
  const handleClickReset = () => {
    console.log(`dans handleClickReset`);

    setCounter(0);
  }
  return (
    <>
      <CounterButton counter={counter} />
      <IncrementButton handleClickIncrement={handleClickIncrement} />
      <ResetButton handleClickReset={handleClickReset} />
    </>
  );
}

export default App;

