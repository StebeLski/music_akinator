import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';

// let composeEnhancers = compose;

// composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export default createStore(reducers, applyMiddleware(thunk));
