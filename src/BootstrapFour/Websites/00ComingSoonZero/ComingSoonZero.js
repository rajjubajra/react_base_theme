import React from 'react';
import './ComingSoonZero.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Home from './pages/Home';
//import RoutePages from './pages/RoutePages';


function ComingSoonZero() {
  return (
    <Provider store={store}>
      <Home />
      {/* <RoutePages /> */}
    </Provider>
  )
}

export default ComingSoonZero
