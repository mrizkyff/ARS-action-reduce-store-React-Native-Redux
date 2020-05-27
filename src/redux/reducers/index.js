const initialState = {
    count: 10
  }
  
  const reducer = (state = initialState, action) => {
    console.log(action);
    const payload = action.payload || 1
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + payload
        }
      case 'DECREMENT':
        return {
          count: state.count - payload
        }
      case 'RESET':
        return {
          count: 0
        }
      default:
        break;
    }
    return state
  };

  export default reducer;