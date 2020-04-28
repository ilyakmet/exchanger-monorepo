// Types
import { ReduxActionType } from '../../interfaces';

// Action types
import { INCREMENT, SET } from '../types';

// Initial state
const initialState = {
  counter: 0,
};

// Reducer
export const counterReducer = (state = initialState, action: ReduxActionType<string, any>) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case SET:
      return { ...state, counter: action.payload };
    default:
      return { ...state };
  }
};
