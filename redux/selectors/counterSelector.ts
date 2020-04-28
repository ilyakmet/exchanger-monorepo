import { CounterSelectorType } from '../../interfaces';

export const selectCounter = (state: CounterSelectorType) => state.counterReducer.counter;
