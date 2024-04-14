import { useSelector } from "react-redux"


const DisplayCounter = () => {


  const {counterVal : counter} = useSelector(store => store.counter);

  // const counterObj = useSelector(store => store.counter);
  // const counter = counterObj.counterVal;

  // const counter = useSelector(store=>store.counter);

  return (
    <>
      <p className="lead mb-4">
        Current Counter Value : {counter}
        {/* Current Counter Value : {counter} */}
      </p>
    </>
  )
}

export default DisplayCounter
