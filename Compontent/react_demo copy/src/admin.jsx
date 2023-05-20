import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "./store/couter";
import { inncrease } from "./store/couter";
export default function Admin() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  
  const onDecrease = () => {
    dispatch(inncrease())
  }

  const onInCrease = () => {
    dispatch(increase(10))
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={onDecrease}>-</button>
      <button onClick={onInCrease}>+</button>
    </div>
  );
}