import { useEffect, useState } from "react";
import { Button, Input, List } from "antd";
import store from "./redux/store";
import actionCreators from "./redux/actionCreators";

const { dispatch } = store;

function shallowComparison(obj1, obj2) {
  for (const key1 in obj1) {
    if (Object.hasOwnProperty.call(obj1, key1)) {
      const element1 = obj1[key1];
      if (obj2.hasOwnProperty(key1)) {
        if (element1 !== obj2[key1]) {
          return false;
        }
      }
    }
    return true;
  }
}

function App() {
  const [state, setState] = useState(store.getState());
  const {
    base: { count, list },
    user,
  } = state;
  console.log("render");
  useEffect(() => {
    store.subscribe(() => {
      if (!shallowComparison(state, store.getState())) {
        console.log("不相等");
        setState(store.getState());
      }
    });
    dispatch(actionCreators.getList);
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <ul>{list && list.map((i) => <li key={i.id}>{i.text}</li>)}</ul>
      <Button onClick={() => dispatch(actionCreators.increment)}>+</Button>
      <Button onClick={() => dispatch(actionCreators.decrement)}>-</Button>
      <Input onChange={(e) => e} />
    </div>
  );
}

export default App;
