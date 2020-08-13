import React from 'react';
import './Blogs.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function Blogs() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default Blogs
