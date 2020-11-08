import React, { useEffect, useState } from 'react';
import Slide from './Slide';
import LeftRightArrow from './LeftRightArrow';
import GoToSlide from './GoToSlide';


const data = [
  {
    id: 1,
    title: 'First slide label',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    id: 2,
    title: 'Second slide label',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    title: 'Third slide label',
    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  },

]


export const Slides = () => {

  const dataLength = data.length; /** SLIDE DATA LENGTH */
  const slideDelay = 10 * 1000; /** TRANSITION DELAY SECONDS */

  /** ACTIVE SLIDE ON VIEW */
  const [activeSlide, setActiveSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => setActiveSlide(activeSlide => activeSlide < dataLength - 1 ? activeSlide + 1 : 0), slideDelay);
    return () => {
      clearInterval(interval);
    }
  }, [dataLength, slideDelay])


  // console.log(dataLength, activeSlide);

  /** ARROW - NEXT */
  function NextSlide() {
    let goSlide = activeSlide === (dataLength - 1) ? 0 : activeSlide + 1;
    setActiveSlide(goSlide);
  }
  /** ARROW - PREVIOUSE  */
  function PrevSlide() {
    let goSlide = activeSlide === 0 ? (dataLength - 1) : activeSlide - 1;
    setActiveSlide(goSlide);
  }

  /** DOT NAVIGATION AT THE BOTTOM OF THE SLIDE */
  function goToTheSlide(index) {
    setActiveSlide(index);
  }


  return (
    <>
      <div>
        {
          data.map((item, index) => {
            return <div key={item.id}>
              {/** SINGLE SLIDE COMPONENT */}
              <Slide
                title={item.title}
                text={item.text}
                index={index}
                activeSlide={activeSlide}
              />
            </div>
          })
        }
      </div>
      <div>
        {/** LEFT AND RIGHT ARROW OF THE SLIDE */}
        <LeftRightArrow NextSlide={NextSlide} PrevSlide={PrevSlide} />
        {/** GO TO SELECTED SLIDE VIEW */}
        <GoToSlide
          dataLength={dataLength}
          activeSlide={activeSlide}
          goToTheSlide={goToTheSlide}
        />
      </div>
    </>
  )
}

export default Slides;