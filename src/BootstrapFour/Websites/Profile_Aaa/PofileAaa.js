import React from 'react';
import './ProfileAaa.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function ProfileAaa() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default ProfileAaa
