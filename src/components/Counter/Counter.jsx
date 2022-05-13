import { useEffect, useState, useReducer } from 'react';
import styles from './Counter.css';

const initialCount = 0;

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};

function countReducer(counter, action) {
  switch (action.type) {
    case 'increment':
      return counter + 1;
    case 'decrement':
      return counter - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
}

function colorReducer(color, colorCondition) {
  console.log(colorCondition);
  switch (colorCondition.type) {
    case 'color':
      return (color = colorCondition.payload.color);
    default:
      throw Error('Unknown action type.');
  }
}

export default function Counter() {
  const [count, updater] = useReducer(countReducer, initialCount);
  const [color, colorUpdate] = useReducer(colorReducer, colors.yellow);

  // const [count, setCount] = useState(0);
  // const [currentColor, setCurrentColor] = useState(colors.yellow);

  useEffect(() => {
    if (count === 0) {
      // setCurrentColor(colors.yellow);
      colorUpdate({ type: 'color', payload: { color: colors.yellow } });
    }

    if (count > 0) {
      // setCurrentColor(colors.green);
      colorUpdate({ type: 'color', payload: { color: colors.green } });
    }

    if (count < 0) {
      // setCurrentColor(colors.red);
      colorUpdate({ type: 'color', payload: { color: colors.red } });
    }
  }, [count]);

  const increment = () => {
    // setCount((prevState) => prevState + 1);
    updater({ type: 'increment' });
  };

  const decrement = () => {
    updater({ type: 'decrement' });
  };

  const reset = () => {
    updater({ type: 'reset' });
  };

  return (
    <main className={styles.main}>
      <h1 style={{ color: color }}>{count}</h1>
      <div>
        <button
          type="button"
          onClick={increment}
          aria-label="increment"
          style={{ backgroundColor: colors.green }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={decrement}
          aria-label="decrement"
          style={{ backgroundColor: colors.red }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={reset}
          style={{ backgroundColor: colors.yellow }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
