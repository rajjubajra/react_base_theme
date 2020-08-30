import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerPassBlogId } from './reducers/ReducerPassBlogId';


const reducer = combineReducers(
  {
    //reducerFetchData,
    reducerPassBlogId
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
