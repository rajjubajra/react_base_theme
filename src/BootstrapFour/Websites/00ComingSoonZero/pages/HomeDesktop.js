import React, { useRef, useEffect, useState } from 'react';
import DangerouslySetInnerHtml from './DangerouslySetInnterHtml';
import { useSelector } from 'react-redux';
import IconDownArrow from '../components/Icon/IconDownArrow';
import { useIntersection } from 'react-use';
import FormFive from './Form/FormFive';



export default function HomeDesktop(props) {


  /** colour variant */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);



  /** INTERSECTIO OBSERVER */
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '350px 0px -350px 0px',
    threshold: 0
  });
  const [view, setView] = useState(true);


  useEffect(() => {

    intersection && intersection.intersectionRatio < 1
      ? setView(true)
      : setView(false)

    console.log(intersection)
  }, [intersection])



  const showHide = {
    opacity: view ? 1 : 0,
    transition: "opacity 0.3s linear"
  }

  const backgroundFadeOut = {
    width: "100%",
    height: "100vh",
    display: "block",
    position: 'absolute',
    top: "0px",
    backgroundColor: variant === 'white' ? "#eeeeee" : '',
    opacity: view ? 1 : 0,
    transition: "opacity 2s"
  }

  const backgroundFadeIn = {
    width: "100%",
    height: "100vh",
    display: "block",
    position: 'relative',
    top: "0px",
    paddingTop: "200px",
    backgroundColor: variant === 'white' ? "#eeeeee" : '',
    opacity: view ? 0 : 1,
    transition: "opacity 2s"
  }

  const staticBgImage = {
    backgroundImage: "url(https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/my-desktop-bg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "300px",
    width: "100%",
    zIndex: "0"
  }

  return (
    <>
      {/** BACKGROUND FADE */}
      <div style={backgroundFadeOut}></div>
      <div className="align-center min-vh-100">

        <div className="container mb-5">

          {/** LOGO HORIZONTAL */}
          <div className="row mt-2">
            <div className="col d-flex justify-content-center">
              <div className='logo-horz'>
                <img src={props.logoHorz} alt={props.logoHorzAlt} />
              </div>
            </div>
          </div>

          {/** BODY CONTENT */}
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="main">
                <div className="logo-square">
                  <img src={props.logoSquare} alt={props.logoSquareAlt} />
                </div>
                <div className='body'>
                  <DangerouslySetInnerHtml text={props.body} />
                </div>
              </div>
            </div>
          </div>

          {/** LINKS */}
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div
                style={{
                  marginBottom: "150px",
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                }}
                className="links">
                {
                  props.fetched && props.links.map((item, index) => {
                    return <button
                      key={index}
                      onClick={() => window.open(item.uri)}>
                      {item.title.replace(/ *\[[^\]]*]/, '')}</button>
                  })
                }
              </div>
            </div>
          </div>
        </div>


        {/** Contact form Navigation */}
        <div ref={intersectionRef} className="d-flex justify-content-center w-100">
          <div style={showHide} className="contact-nav">
            <p>Please send me your enqiry</p>
            <div
              onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
              className="animate-arrow d-flex justify-content-center">
              <IconDownArrow />
            </div>
          </div>
        </div>
      </div>




      {/** contact form */}
      <div style={backgroundFadeIn} className='contact-form min-vh-100'>
        <div style={{ position: "relative", zIndex: 3 }}>
          <FormFive />
        </div>

      </div>
    </>
  )
}
