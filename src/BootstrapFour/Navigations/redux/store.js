import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerMenuThree } from '../pages/NavigationThree/Redux/reducerMenuThree';
import { reducerMenuFour } from '../pages/NavigationFour/Redux/reducerMenuFour';
import { reducerUserMenuFour } from '../pages/NavigationFour/Redux/reducerUserMenuFour';


const reducer = combineReducers(
  {
    reducerFetchData,
    reducerMenuThree,
    reducerMenuFour,
    reducerUserMenuFour
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);