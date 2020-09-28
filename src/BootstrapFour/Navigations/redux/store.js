import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerMenuThree } from '../pages/NavigationThree/Redux/reducerMenuThree';


const reducer = combineReducers(
  {
    reducerFetchData,
    reducerMenuThree
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
