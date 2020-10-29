import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';
import { reducerFetchPhoto } from './reducers/reducerFetchPhoto';

import { reducerFetchTracks } from '../pages/Music/Redux/reducerFetchTracks';
import { reducerFetchAlbum } from '../pages/Music/Redux/reducerFetchAlbum';

import { reducerBlogSevenPages } from '../pages/News/BlogSeven/redux/reducerBlogSevenPages';
import { reducerBlogSevenSelectedDate } from '../pages/News/BlogSeven/redux/reducerBlogSevenSelectedDate';

import { reducerFetchTour } from '../pages/Tour/Redux/reducerFetchTour';
import { reducerFetchTourDetails } from '../pages/Tour/Redux/reducerFetchTourDetails';
import { reducerHideTour } from '../pages/Tour/Redux/reducerHideTour';

import { reducerFetchLatestNews } from '../pages/Home/Redux/reducerFetchLatestNews';
import { reducerFetchLandingPage } from '../pages/Home/Redux/reducerFetchLandingPage';
import { reducerFetchAbout } from '../pages/About/Redux/reducerFetchAbout';

import { reducerFetchMenu } from '../components/header/NavigationOne/Redux/reducerFetchMenu';

const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerSelectColourMode,
    reducerFetchPhoto,
    reducerFetchTracks,
    reducerFetchAlbum,
    reducerBlogSevenPages,
    reducerBlogSevenSelectedDate,
    reducerFetchTour,
    reducerFetchTourDetails,
    reducerHideTour,
    reducerFetchLatestNews,
    reducerFetchLandingPage,
    reducerFetchAbout,
    reducerFetchMenu
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
