import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import './useSticky.scss';

function Header() {

  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    window.addEventListener('wheel', function (event) {
      if (event.deltaY < 0) {
        //console.log('scrolling Down', event.deltaY);
        setScrollDown(true)
        //document.getElementById('status').textContent = 'scrolling up';
      }
      else if (event.deltaY > 0) {
        // console.log('scrolling up', event.deltaY);
        //document.getElementById('status').textContent = 'scrolling down';
        setScrollDown(false);
      }
    });
  }, [])
  //console.log("SCROLL DOWN", scrollDown);

  return (
    <header>
      <div className="main-menu">
        <NavigationBar css_class={scrollDown ? 'sticky' : 'float'} />
      </div>
    </header>
  )
}

export default Header
