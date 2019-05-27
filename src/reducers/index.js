const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

const initialState = {
  counter: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        counter: state.counter + 1
      };
    
    case ActionTypes.DECREMENT:
      return {
        counter: Math.max(state.counter - 1, 0)
      };

    default:
      return state;
  }
};

export default rootReducer;