const initialState = {
    count: 0,
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        const incrementBy =
          typeof action.incrementBy === "number" ? action.incrementBy : 1;
        return {
          count: state.count + incrementBy,
        };
  
      case "DECREMENT":
        return {
          count: state.count - 1,
        };
  
      default:
        return state;
    }
    return state;
  };
  
  const store = createStore(counterReducer);
  
  console.log(store.getState());
  
  store.dispatch({
    type: "INCREMENT",
    incrementBy: 10,
  });
  store.dispatch({
    type: "INCREMENT",
  });
  store.dispatch({
    type: "DECREMENT",
  });
  
  store.subcribe(()=>{
  
      console.log(store.getState());
  
  })
  