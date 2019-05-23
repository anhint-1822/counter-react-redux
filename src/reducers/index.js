import ActionNames from '../constants';

const initialState = {
  votes: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionNames.UP:
      return {
        ...state,
        votes: state.votes + 1
      };
    
    case ActionNames.DOWN:
      return {
        ...state,
        votes: Math.max(state.votes - 1, 0)
      };

    default:
      return state;
  }
};

export default rootReducer;