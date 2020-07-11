import React, { useEffect, useState } from 'react';
import ColourMode from '../colourMode/ColourMode';
import { useSelector } from 'react-redux';
import Headers from '../headers/Header';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import concert from '../../../../../../src/images/Music/concert00.jpg';
import music from '../../../../../../src/images/Music/music00.png';
import sheet from '../../../../../../src/images/Music/sheet00.jpg';
import string from '../../../../../../src/images/Music/string00.jpg';
import vinyl from '../../../../../../src/images/Music/vinyl00.jpg';
import audio from '../../../../../../src/images/Music/audio00.jpg';

import axios from 'axios';
import ListItem from './ListItem';
import { useRouteMatch } from 'react-router-dom';



const data = [
  {
    id: 1,
    img: concert,
    title: 'Live 2020'
  },
  {
    id: 2,
    img: music,
    title: 'Sounds',
  },
  {
    id: 3,
    img: sheet,
    title: 'Legands',
  },
  {
    id: 4,
    img: string,
    title: 'Guitar Man',
  },
  {
    id: 5,
    img: vinyl,
    title: 'Once upon a time'
  },
  {
    id: 6,
    img: audio,
    title: 'Voice of void'
  },

]




function MusicCardDetail() {

  const match = useRouteMatch('music-zero-detail/:uuid');
  console.log('Matched', match);


  /**Pagination */
  const [itemsInAPage, setItemInAPage] = useState(10)


  // const trackUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/1/top?limit=50';

  const trackUrl = 'http://yellow-website.com/d8-react-base-theme-backend/music_zero?_format=json';



  const [trackList, setTrackList] = useState([]);
  const [albumDetail, setAlbumDetail] = useState('');
  const [statusCode, setStatusCode] = useState(0);
  const [albumTitle, setAlbumTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const id = useSelector(state => state.reducerPlayTheTrack.id);



  useEffect(() => {
    axios({
      method: 'GET',
      url: trackUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        console.log(res.data[0]);
        setTrackList(res.data[0].field_track);
        setAlbumTitle(res.data[0].field_album_title[0].value);
        setCoverImage(res.data[0].field_image_medium[0].url)
        setAlbumDetail(res.data[0]);
      })
      .catch(err => setStatusCode(err.response.status))
  }, [])

  //console.log(trackList);
  console.log(albumTitle);
  console.log(coverImage);
  return (
    <Container className="music-zero" fluid >
      <div className={colorMode}>
        <Headers />
        <ColourMode />

        <h1>Album: <b>{albumTitle}</b></h1>
        <img src={coverImage} alt='cover' />
        <Row>
          <Col lg={8}>
            {
              trackList.map((item, index) => {
                return <div key={index}>
                  <ListItem
                    title={item.description}
                    track={item.url}
                    id={item.target_id}
                  />
                </div>
              })
            }
          </Col>
        </Row>

      </div>
    </Container >
  )
}

export default MusicCardDetail
