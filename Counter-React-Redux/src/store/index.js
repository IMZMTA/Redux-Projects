import { createStore } from "redux";

const INTIAL_VALUE = {
  counter : 6,
  privacy : false,
};

const counterReducer = (store=INTIAL_VALUE,action) => {
  let newStore = store;

  if(action.type === "INCREMENT"){
    newStore = {...store, counter : store.counter + 1}
  }
  else if(action.type === "DECREMENT"){
    newStore = {...store, counter : store.counter - 1}
  }
  else if(action.type === "ADD"){
    // newStore = {counter : store.counter + parseInt(action.payload.num)}
    // newStore = {counter : store.counter + Number(action.payload.num)}
    // newStore = {counter : store.counter + +(action.payload.num)}
    newStore = {counter : store.counter + (action.payload.num | 0)};
  }
  else if(action.type === "SUB"){
    newStore = {...store, counter : store.counter - parseInt(action.payload.num)}
  }
  else if(action.type === "PRIVACY_TOGGLE"){
    newStore = {...store, privacy: !store.privacy}
  }

  return newStore;
}

const counterStore = createStore(counterReducer);

export default counterStore;


/*
---------4 steps in Redux -----------
1-> Store Creation -> store(index.js) -> create Reducer type
2-> Store Provider -> Provider(App.jsx)
3-> Store Component use -> useSelector(privacy)->App.jsx, counter->(DisplayCounter.jsx)  useSelector() is subscription
4-> Store Dispatch(editable) -> useDispatch()->(Controls.jsx) -> gives action object to reducer

*/