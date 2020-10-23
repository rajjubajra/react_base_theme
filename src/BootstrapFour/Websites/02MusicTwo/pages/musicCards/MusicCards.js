import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MusicCard from './MusicCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { actionFetchData } from '../Redux/actions/actionFetchData';


function MusicCards() {

  const dispatch = useDispatch();
  const fetched = useSelector(state => state.reducerFetchData.fetched);
  const listOfAlbum = useSelector(state => state.reducerFetchData.payload);

  useEffect(() => {
    dispatch(actionFetchData());
  }, [dispatch])

  console.log("Music Two Fetched", fetched);
  console.log("music card page", listOfAlbum);


  return (
    <div className="container">
      <div className="row">
        {
          !fetched ? 'data not found' :
            listOfAlbum.map((item, index) => {
              return <Col key={index} lg={4}>
                <MusicCard
                  id={index}
                  img={item.url}
                  alt={item.alt}
                  title={item.alt}
                  text={item.body}
                />
              </Col>
            })
        }
      </div>
    </div>
  )
}

export default MusicCards
