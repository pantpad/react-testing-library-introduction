import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useRef } from "react";

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

  const input = useRef<HTMLInputElement>(null);

  function logInputValue() {
    console.log(input.current?.value ? input.current.value : 0);
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
      <button onClick={logInputValue}>count is {count}</button>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          increase{count}
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrease {count}
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount());
          }}
        >
          increase by amount {count}
        </button>
        <button
          onClick={() => {
            dispatch(decrementByAmount());
          }}
        >
          decrease by amount {count}
        </button>
      </div>
      <p>
        <input
          ref={input}
          type="number"
          name="amount"
          id="amount"
          placeholder="insert the amount value . . ."
          className="bg-slate-100 rounded py-2 px-4"
        />
      </p>
    </>
  );
}

export default App;
