import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerMenuThree } from '../pages/NavigationThree/Redux/reducerMenuThree';
import { reducerMenuFour } from '../pages/NavigationFour/Redux/reducerMenuFour';
import { reducerUserMenuFour } from '../pages/NavigationFour/Redux/reducerUserMenuFour';
import { reducerMagazineMenu } from '../pages/NavigationFive/Redux/reducerMagazineMenu';
import { reducerOpenMeghaMenu } from '../pages/NavigationFive/Redux/reducerOpenMeghaMenu';

const reducer = combineReducers(
  {
    reducerFetchData,
    reducerMenuThree,
    reducerMenuFour,
    reducerUserMenuFour,
    reducerMagazineMenu,
    reducerOpenMeghaMenu,
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);