import React, { useState, useEffect } from 'react';
import ColourMode from '../colourMode/ColourMode';
import { useSelector, useDispatch } from 'react-redux';
import Headers from '../headers/Header';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { actionFetchData } from '../../actions/actionFetchData';


import ListItem from './ListItem';


function MusicCardDetail(props) {
  /** Album Id */
  let { id } = useParams();
  console.log("music detail id", id);
  const dispatch = useDispatch()


  /** Cover Image and Track list variables*/
  const [coverImage, setCoverImage] = useState([]);
  const [trackList, setTrackList] = useState([]);

  /** Colour data from reducer */
  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);

  /** track data from the reducer */
  const fetched = useSelector(state => state.reducerFetchData.fetched);
  const data = useSelector(state => state.reducerFetchData.data);
  //console.log("music card details", data);


  useEffect(() => {
    if (!fetched) {
      dispatch(actionFetchData());
    }

    if (fetched) {
      setCoverImage(data[id].field_image_medium[0]);
      setTrackList(data[id].field_track);
    }

  }, [data, dispatch, fetched, id])



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
