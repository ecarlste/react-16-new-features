import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const App = props => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);

  return (
    <div>
      <p>
        The current {text} is {count}
      </p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};

App.defaultProps = {
  count: 10,
  text: "count"
};

ReactDOM.render(<App count={15} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
