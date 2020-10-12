import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';
import { reducerFetchPhoto } from './reducers/reducerFetchPhoto';

import { reducerFetchTracks } from '../pages/Music/Redux/reducerFetchTracks';
import { reducerFetchAlbum } from '../pages/Music/Redux/reducerFetchAlbum';

import { reducerBlogOnePages } from '../pages/News/BlogOne/redux/reducerBlogOnePages';

import { reducerFetchTour } from '../pages/Tour/Redux/reducerFetchTour';
import { reducerFetchTourDetails } from '../pages/Tour/Redux/reducerFetchTourDetails';

const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerSelectColourMode,
    reducerFetchPhoto,
    reducerFetchTracks,
    reducerFetchAlbum,
    reducerBlogOnePages,
    reducerFetchTour,
    reducerFetchTourDetails,
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
