// React
import React from 'react';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../redux/reducers';

const store = createStore(rootReducer);

export const withProvider = (story) => <Provider store={store}>{story()}</Provider>;
