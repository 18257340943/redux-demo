import { useEffect } from "react";
import { Button, Input, List } from "antd";
import { connect } from "react-redux";
import actionCreators from "./redux/actionCreators";

function App(props) {
  const { count, list, dispatch } = props;
  useEffect(() => {
    dispatch(actionCreators.getList);
  }, []);
  return (
    <div className="App">
      <h1>{count}</h1>
      <ul>{list && list.map((i) => <li key={i.id}>{i.text}</li>)}</ul>
      <Button onClick={() => props.dispatch(actionCreators.increment)}>
        +
      </Button>
      <Button onClick={() => props.dispatch(actionCreators.decrement)}>
        -
      </Button>
      <Input onChange={(e) => e} />
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state, "state");
  const { base } = state;
  return {
    count: base.count,
    list: base.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decrement: () => dispatch(actionCreators.decrement()),
  };
};

export default connect(mapStateToProps)(App);
