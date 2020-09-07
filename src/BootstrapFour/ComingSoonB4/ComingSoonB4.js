import React, { useEffect, useState } from 'react';
import './ComingSoonB4.scss';
import axios from 'axios';
import { comingSoonForLocal, comingSoonForRemote } from './Config';
import Page from './Page';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from './Loading';


function ComingSoonB4() {
  const [logoHorizontal, setLogoHorizontal] = useState('');
  const [logoSquare, setLogoSquare] = useState('');
  const [bodyMsg, setBodyMsg] = useState('Under Construction');
  const [linkWebHosting, setLinkWebHosting] = useState('');
  const [linkFreeImages, setLinkFreeImages] = useState('');
  const [linkContact, setLinkContact] = useState('');


  const dataUrl = comingSoonForLocal.URL


  useEffect(() => {

    axios({
      method: 'GET',
      url: dataUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        console.log(res.data);
        setLogoHorizontal(res.data[0].field_logo_horizontal[0]);
        setLogoSquare(res.data[0].field_logo_square[0]);
        setBodyMsg(res.data[0].body[0].value);
        setLinkWebHosting(res.data[0].field_link_label[0]);
        setLinkFreeImages(res.data[0].field_link_label[1]);
        setLinkContact(res.data[0].field_link_label[2]);
      })
      .catch(err => console.log(err))
  }, [dataUrl])


  return (
    <Container className="coming-soon-b4">
      <Row className="justify-content-center">
        {
          /** LOADING */
          logoHorizontal === '' && logoSquare === '' ?
            <Loading />
            :
            <Page
              logoSquare={logoSquare}
              logoHorizontal={logoHorizontal}
              bodyMsg={bodyMsg}
              linkWebHosting={linkWebHosting}
              linkFreeImages={linkFreeImages}
              linkContact={linkContact}
            />
        }
      </Row>
    </Container>
  )
}

export default ComingSoonB4
