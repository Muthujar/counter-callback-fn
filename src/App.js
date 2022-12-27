// import "./App.css";
import React from "react";
import { Child } from "./task3/child";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function Counter(x) {
    let val = x ? count + 1 : count - 1;

    setCount(val);
  }

  return (
    <div className="App">
      <Child data={Counter} count={count} />
    </div>
  );
}

export default App;
