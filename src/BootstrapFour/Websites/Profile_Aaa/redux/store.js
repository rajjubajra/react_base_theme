import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerFetchData } from './reducer/ReducerFetchData';
import { reducerSelectColourMode } from './reducer/reducerSelectColourMode';
import { reducerSelectGroup } from './reducer/reducersSelectGroup';


const reducer = combineReducers(
  {
    reducerFetchData,
    reducerSelectColourMode,
    reducerSelectGroup
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
