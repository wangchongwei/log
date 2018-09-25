/*  @flow */

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import promise from './promise';
import reducers from '../reduces';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const finalCreateStore = applyMiddleware(thunk, promise, logger)(createStore);

function configureStore(onComplete?: (err?: any, result?: Object) => void) {
  const store = autoRehydrate()(finalCreateStore)(reducers);

  const persistConfig = {
    storage: AsyncStorage,
    whitelist: ['login'],
  };

  global.store = store;
  persistStore(store, persistConfig, onComplete);
  return store;
}

export default configureStore;
