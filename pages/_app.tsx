// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { rootReducer } from '../redux/reducers';
import { rootSaga } from '../redux/sagas';

// Types
// import { AppProps } from 'next/app';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.less';

const App: React.FC<any> = ({ Component, pageProps, store }): React.ReactElement => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

const makeStore: any = (): any => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default withRedux(makeStore)(App);
