import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

//if export from ../store/index.js
// import { counterActions, privacyActions } from "../store";

const Controls = () => {
const dispatch = useDispatch(); // need but usage type change because toolkit of redux
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment()); //need but usage type 
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement()); //need but usage type
  };

  const handleAddition = () => {
    dispatch(counterActions.add({ num: inputElement.current.value }))

    inputElement.current.value = "";
  };

  const handleSubtraction = () => {
    dispatch(counterActions.sub(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4 gap-3"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <button
        type="button"
        className="btn btn-warning btn-lg px-4 gap-3 mt-4"
        onClick={handlePrivacyToggle}
      >
        Privacy Toggle
      </button>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <button
          type="button"
          className="btn btn-danger btn-lg px-4 gap-3"
          onClick={handleSubtraction}
        >
          Subtract
        </button>
        <input type="text" placeholder=" Enter number" ref={inputElement} />
        <button
          type="button"
          className="btn btn-info btn-lg px-4 gap-3"
          onClick={handleAddition}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Controls;
