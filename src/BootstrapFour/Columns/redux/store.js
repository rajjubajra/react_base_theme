import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';


const reducer = combineReducers(
  {
    reducerFetchData,
    reducerSelectColourMode,
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
