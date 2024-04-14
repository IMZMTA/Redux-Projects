import { useRef } from "react";
import { useDispatch } from "react-redux"

const Controls = () => {

  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
      dispatch({type : "INCREMENT"});
  };

  const handleDecrement = () => {
      dispatch({type : "DECREMENT"});
  };

  const handleAddition = () => {
      dispatch({type : "ADD", payload :{ num : inputElement.current.value}});
      inputElement.current.value="";
  };

  const handleSubtraction = () => {
      dispatch({type : "SUB", payload :{ num : inputElement.current.value}});
      inputElement.current.value="";
  };

  const handlePrivacyToggle = () => {
      dispatch({type : "PRIVACY_TOGGLE"});
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>
              +1
          </button>
          <button
              type="button"
              className="btn btn-success btn-lg px-4 gap-3"
            onClick={handleDecrement} >
              -1
          </button>
      </div>
      <button
              type="button"
              className="btn btn-warning btn-lg px-4 gap-3 mt-4"
            onClick={handlePrivacyToggle} >
              Privacy Toggle
      </button>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
          <button
              type="button"
              className="btn btn-danger btn-lg px-4 gap-3"
              onClick={handleSubtraction} >
              Subtract
          </button>
          <input type="text" placeholder=" Enter number" ref={inputElement}/>
          <button
              type="button"
              className="btn btn-info btn-lg px-4 gap-3"
              onClick={handleAddition}  >
              Add
          </button>
      </div>
    </>
  )
}

export default Controls
