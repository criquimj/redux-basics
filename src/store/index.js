import { createStore } from "redux";

const counterReducer = (
  state = { counter: 0, isShowingCounter: true },
  action
) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      isShowingCounter: state.isShowingCounter,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      isShowingCounter: state.isShowingCounter,
    };
  }

  if (action.type === "TOGGLECOUNTER") {
    return {
      counter: state.counter,
      isShowingCounter: !state.isShowingCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
