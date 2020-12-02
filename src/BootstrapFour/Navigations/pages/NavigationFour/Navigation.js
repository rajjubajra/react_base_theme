import React from 'react';
import { useSelector } from 'react-redux';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

function Navigation(props) {

  const menu = useSelector(state => state.reducerMenuFour.data);
  const menuLength = useSelector(state => state.reducerMenuFour.dataLength);

  const usermenu = useSelector(state => state.reducerUserMenuFour.data);
  const userMenuLength = useSelector(state => state.reducerUserMenuFour.dataLength);

  console.log("Menu", menu, props.windowSizeSmall)

  return (
    <>
      {
        props.windowSizeSmall
          ? <Mobile
            menu={menu}
            menuLength={menuLength}
            usermenu={usermenu}
            userMenuLength={userMenuLength}
          />
          : <Desktop
            menu={menu}
            menuLength={menuLength}
            usermenu={usermenu}
            userMenuLength={userMenuLength}
          />
      }
    </>
  )
}
export default Navigation