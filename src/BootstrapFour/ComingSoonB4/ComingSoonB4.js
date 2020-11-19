import React, { useEffect, useState } from 'react';
import './ComingSoonB4.scss';
import axios from 'axios';
import { comingSoonForRemote } from './Config';
import Page from './Page';
import Loading from './Loading';


function ComingSoonB4() {


  const [logoHorizontal, setLogoHorizontal] = useState('');
  const [logoSquare, setLogoSquare] = useState('');
  const [bodyMsg, setBodyMsg] = useState('Under Construction');
  const [linkWebHosting, setLinkWebHosting] = useState('');
  const [linkFreeImages, setLinkFreeImages] = useState('');
  const [linkContact, setLinkContact] = useState('');




  useEffect(() => {


    const dataUrl = comingSoonForRemote.URL;

    axios({
      method: 'GET',
      url: dataUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        //console.log(res.data);
        setLogoHorizontal(res.data[0].field_logo_horizontal[0]);
        setLogoSquare(res.data[0].field_logo_square[0]);
        setBodyMsg(res.data[0].body[0].value);
        setLinkWebHosting(res.data[0].field_link_label[0]);
        setLinkFreeImages(res.data[0].field_link_label[1]);
        setLinkContact(res.data[0].field_link_label[2]);
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    window.scroll(0, 0)
  }, [])




  return (
    <div className="container coming-soon-b4">
      <div className="row justify-content-center">
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
      </div>
    </div>
  )
}

export default ComingSoonB4