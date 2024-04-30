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
      <div className="card flex flex-col gap-4">
        <button className="bg-slate-200 font-semibold">count is {count}</button>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          increase <span className="text-green-500">+1</span>
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrease <span className="text-red-500">-1</span>
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(+inputValue));
          }}
        >
          increase by amount{" "}
          <span className="text-green-500">+{inputValue}</span>
        </button>
        <button
          onClick={() => {
            dispatch(decrementByAmount(+inputValue));
          }}
        >
          decrease by amount <span className="text-red-500">-{inputValue}</span>
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
