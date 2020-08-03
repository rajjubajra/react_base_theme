import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerFetchData } from './reducers/reducerFetchData';
import { reducerFetchCategory } from './reducers/reducerFetchCategory';
import { reducerFetchAbout } from './reducers/reducerFetchAbout';

import { reducerSelectGroup } from './reducers/reducersSelectGroup';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';
import { reducerPlayTheTrack } from './reducers/reducerPlayTheTrack';
import { reducerPagination } from './reducers/reducerPagination';
import { reducerPlayAllTracks } from './reducers/reducerPlayAllTracks';


const reducer = combineReducers(
  {
    reducerFetchData,
    reducerFetchCategory,
    reducerFetchAbout,
    reducerSelectGroup,
    reducerSelectColourMode,
    reducerPlayTheTrack,
    reducerPagination,
    reducerPlayAllTracks
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
