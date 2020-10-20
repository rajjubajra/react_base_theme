import React, { useEffect, useState } from 'react'
import Header from './Header';




function ScrollUpDown() {

  const [mouseScroll, setmouseScroll] = useState();

  useEffect(() => {
    var lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        // downscroll code
        console.log('goind up');
        setmouseScroll('going up');
      } else {
        // upscroll code
        console.log("going down");
        setmouseScroll('going Down');

      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
  }, [])



  return (
    <div className="container">
      <div style={{ width: "100%", height: "300vh" }}>
        <div style={{ position: "fixed", width: "100%" }}>
          <Header />
        </div>


        <div style={{
          position: "fixed",
          top: "25%"
        }}>
          <h1>Mouse Scroll Up / Down</h1>
          <h3>{mouseScroll}</h3>
        </div>

      </div>
    </div>
  )
}

export default ScrollUpDown
