import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useState } from "react";

import { useAppSelector, useAppDispatch } from "./store/reduxHooks";

import {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
} from "./store/reducers/counterSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState(0);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(+e.target.value);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button>count is {count}</button>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          increase +1
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrease -1
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(+inputValue));
          }}
        >
          increase by amount +{inputValue}
        </button>
        <button
          onClick={() => {
            dispatch(decrementByAmount(+inputValue));
          }}
        >
          decrease by amount -{inputValue}
        </button>
      </div>
      <p>
        <input
          type="number"
          name="amount"
          id="amount"
          value={inputValue}
          placeholder="insert the amount value . . ."
          className="bg-slate-100 rounded py-2 px-4"
          onChange={onChange}
        />
      </p>
    </>
  );
}

export default App;
