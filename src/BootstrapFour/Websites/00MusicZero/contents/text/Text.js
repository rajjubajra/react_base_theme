import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useSelector } from 'react-redux';
import EmailNTel from '../address/EmailNTel';
import Pagination from './Pagination';



const bigFont = {
  fontSize: "2rem"
}

function Text() {

  /** Paragrap Image, Title and Text */
  const [paraTitle, setParaTitle] = useState('');
  const [paraG, setParaG] = useState('');
  const [paraImage, setParaImage] = useState('');

  /** Next Album onClick */
  //const [albumLength, setAlbumLength] = useState(0);
  //const [currentAlbum, setCuttentAlbum] = useState(0);


  /** data from Reducer */
  const fetched = useSelector(state => state.reducerFetchData.fetched);
  const textData = useSelector(state => state.reducerFetchData.data);

  /** PAGINATION */
  const page = useSelector(state => state.reducerPagination.page);




  useEffect(() => {
    if (fetched) {
      /** Set Image, Title and Text */
      setParaG(textData[page].body[0].value);
      setParaTitle(textData[page].title[0].value);
      setParaImage(textData[page].field_image_medium[0].url)
      /** set Album length */
      // setAlbumLength(textData.length);
    }
  }, [fetched, page, textData])

  console.log("current album");

  /** react html reader */
  function createParagraph() {
    return { __html: paraG };
  }



  return (
    <Container >
      <Row>
        <Pagination />
      </Row>

      <Row>
        <Col lg={6} style={bigFont}>
          <h1>{paraTitle}</h1>
          <div dangerouslySetInnerHTML={createParagraph()} />
        </Col>
        <Col lg={6}>
          <img src={paraImage} alt="album cover" />
        </Col>
      </Row>

      <Row>
        <EmailNTel />
      </Row>
    </Container >
  )
}

export default Text
