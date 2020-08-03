import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../headers/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { actionFetchAbout } from '../../actions/actionFetchAbout';

function About() {
  const dispatch = useDispatch();

  const aboutData = useSelector(state => state.reducerFetchAbout.payload);
  const dataFetched = useSelector(state => state.reducerFetchAbout.fetched);


  console.log("about", aboutData, dataFetched);

  useEffect(() => {
    dispatch(actionFetchAbout());
  }, [dispatch])

  function createMarkup(text) {
    return { __html: text };
  }


  return (
    <div className="photography">
      <Header />
      <Container className="mt-5">
        <Row>
          {
            dataFetched
              ? aboutData.map((item, index) => {
                return <div>
                  <h1>{item.title}</h1>
                  {item.images.map(elm => {
                    return <img src={elm.url} alt={elm.alt} />
                  })}
                  <div dangerouslySetInnerHTML={createMarkup(item.text)} />
                </div>
              })
              : <div>Data not found</div>
          }
        </Row>
      </Container>
    </div>
  )
}

export default About
