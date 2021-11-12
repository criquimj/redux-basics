import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counterValue = useSelector((state) => state.counter);
  const isShowingCounter = useSelector((state) => state.isShowingCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = (evt) => {
    evt.preventDefault();
    dispatch({ type: "TOGGLECOUNTER" });
  };
  const incrementHandler = (evt) => {
    evt.preventDefault();
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = (evt) => {
    evt.preventDefault();
    dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowingCounter && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
