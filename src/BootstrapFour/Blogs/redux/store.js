import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerPassBlogId } from './reducers/ReducerPassBlogId';
import { reducerBlogOnePages } from '../pages/BlogOne/redux/reducerBlogOnePages';



const reducer = combineReducers(
  {
    //reducerFetchData,
    reducerPassBlogId,
    reducerBlogOnePages,
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
