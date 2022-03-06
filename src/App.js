import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' });
  };

  const decrement = () => {
    dispatch({ type: 'DEC' });
  };

  const addVal = () => {
    dispatch({ type: 'ADD', payload: 10 });
  };
  const btnClick = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addVal}>Add value</button>
      <button onClick={btnClick}>Reset</button>
    </div>
  );
}

export default App;
