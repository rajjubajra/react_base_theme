import React from 'react';
import './ArtNdesign.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function ArtNdesign() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default ArtNdesign
