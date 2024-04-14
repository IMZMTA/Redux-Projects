const redux = require('redux');

const INITIAL_VALUE = {
  counter : 0,
};

// //reducer function -> not good practice should be similar to useDispatcher in useReducer
// const reducer = (store=INITIAL_VALUE, action) => {
//   console.log("Reducer called :", action);
//   return {counter :store.counter + 1};
// }

//Reducer function
const reducer = (store=INITIAL_VALUE, action) => {
  let newStore = store;
  if(action.type=="INCREMENT"){
    console.log("Reducer called :", action);
    newStore = {counter :store.counter + 1};
  }
  else if(action.type=="DECREMENT"){
    console.log("Reducer called :", action);
    newStore = {counter :store.counter - 1};
  }
  else if(action.type=="ADDITION"){
    console.log("Reducer called :", action);
    newStore = {counter :store.counter + action.payload.number};
  }
  return newStore;
};

//createStore need reducer
const store = redux.createStore(reducer);

//subscribe only create , subscription is not established
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

//connection establish
store.subscribe(subscriber);

//Change the Dispatch-> Update the method
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "DECREMENT"});
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "INCREMENT"});
store.dispatch({type : "ADDITION", payload : {number : 7}});
store.dispatch({type : "DECREMENT"});