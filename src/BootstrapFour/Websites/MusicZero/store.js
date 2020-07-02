import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerSelectGroup } from './reducers/reducersSelectGroup';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';
import { reducerPlayTheTrack } from './reducers/reducerPlayTheTrack';
import { reducerPagination } from './reducers/reducerPagination';


const reducer = combineReducers(
  {
    reducerSelectGroup,
    reducerSelectColourMode,
    reducerPlayTheTrack,
    reducerPagination
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
