import React from 'react';
import { useSelector } from 'react-redux';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

function Navigation(props) {

  const menu = useSelector(state => state.reducerMenuThree.data);
  const menuLength = useSelector(state => state.reducerMenuThree.dataLength);

  console.log("Menu", menu, props.view, props.windowSizeSmall)
  return (
    <>
      {
        props.windowSizeSmall
          ? <Mobile menu={menu} menuLength={menuLength} />
          : <Desktop menu={menu} menuLength={menuLength} />
      }
    </>
  )
}

export default Navigation
