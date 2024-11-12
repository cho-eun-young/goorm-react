import React from "react";
import { useCounterStore } from "../store/useConterStore";

const Counter = () => {
  const { count, inc } = useCounterStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={inc}>one up</button>
    </div>
  );
};

export default Counter;
