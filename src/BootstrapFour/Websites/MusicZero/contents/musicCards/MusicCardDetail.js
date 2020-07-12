import React, { useEffect, useState } from 'react';
import ColourMode from '../colourMode/ColourMode';
import { useSelector, useDispatch } from 'react-redux';
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
import { actionFetchAlbum } from '../../actions/actionFetchData';

import ListItem from './ListItem';


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



function MusicCardDetail(props) {


  // const dispatch = useDispatch();
  // const [albumId, setAlbumId] = useState();


  // useEffect(() => {
  //   setAlbumId(props.id);
  //   dispatch(actionFetchAlbum(albumId))
  // }, [albumId, dispatch, props.id])



  /**Pagination */
  const [itemsInAPage, setItemInAPage] = useState(10)


  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const coverImage = useSelector(state => state.reducerFetchData.coverImage);
  const trackList = useSelector(state => state.reducerFetchData.tracks);

  console.log("TRACK LIST", trackList);



  //console.log(coverImage['url']);


  return (
    <Container className="music-zero" fluid >
      <div className={colorMode}>
        <Headers />
        <ColourMode />

        <h1>Album: <b>{coverImage['alt']}</b></h1>
        <img src={coverImage['url']} alt='cover' />
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
