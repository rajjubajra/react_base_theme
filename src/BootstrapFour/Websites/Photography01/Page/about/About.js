import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/headers/Header';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';



import { actionFetchAbout } from '../../actions/actionFetchAbout';

function About() {
  const dispatch = useDispatch();

  const aboutData = useSelector(state => state.reducerFetchAbout.payload);
  const dataFetched = useSelector(state => state.reducerFetchAbout.fetched);

  console.log("about", aboutData, dataFetched);

  useEffect(() => {
    dispatch(actionFetchAbout());
  }, [dispatch])



  /** Image url  for text background */
  const [imageUrl, setImageUrl] = useState([]);

  const textBG = {
    postition: "relative"
  }
  const textBGImage = {
    width: "100%",
    height: "auto",
    opacity: "0.1",
    filter: "grayscale(100%)",
    position: "absolute",
    top: "0px"
  }


  return (
    <div className="photography min-vh-100">
      <Header />
      <div className="container mt-5">
        <div className="row">
          {
            dataFetched
              ? aboutData.map((item, index) => {
                return <>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h1>{item.title}</h1>
                    {item.images.map(elm => {
                      return <img src={elm.url} alt={elm.alt} />
                    })}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div style={textBG} className="mt-5">
                      <DangerouslySetInnerHtml text={item.text} />
                    </div>
                  </div>
                </>
              })
              : <div>Data not found</div>
          }
        </div>
      </div>
    </div>
  )
}

export default About
