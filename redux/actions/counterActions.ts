// Types
import { ReduxActionType } from '../../interfaces';

// Action types
import { INCREMENT, INCREMENT_CALL, SET, SET_CALL } from '../types';

export const increment = (): ReduxActionType<string, any> => ({
  type: INCREMENT,
  payload: null,
});

export const incrementCall = (): ReduxActionType<string, any> => ({
  type: INCREMENT_CALL,
  payload: null,
});

export const set = (staticNumber: number): ReduxActionType<string, number> => ({
  type: SET,
  payload: staticNumber,
});

export const setCall = (staticNumber: number): ReduxActionType<string, number> => ({
  type: SET_CALL,
  payload: staticNumber,
});
