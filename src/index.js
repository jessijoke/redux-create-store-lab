function candyReducer(state=[], action){
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}


function countReducer(state=0, action){
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    default:
      return state;
  }
}


function createStore(reducer){
  // your code here!
    let state;
    let listeners = [];
    
    const subscribe = (listener) => {
      listeners.push(listener);
    }
    
    const dispatch = (action) => {
     state = reducer(state, action)
     listeners.forEach( listener => listener() ) 
    }
    
    dispatch({type:"Initial Action"})
    
    const getState = () => {
      return state
    }
    
    return{
      getState: getState,
      dispatch: dispatch,
      subscribe, subscribe
    }
  }