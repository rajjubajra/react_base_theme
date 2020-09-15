import React from 'react';
import './PhotoGallery.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function PhotoGallery() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default PhotoGallery
