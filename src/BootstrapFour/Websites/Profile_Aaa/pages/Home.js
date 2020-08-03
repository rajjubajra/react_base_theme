import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchData } from '../redux/action/ActionFetchData';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header/Header';

export default function Home() {
  const dispatch = useDispatch();

  const data = useSelector(state => state.reducerFetchData.data);
  console.log(data);

  useEffect(() => {
    dispatch(actionFetchData());
  }, [dispatch])


  return (
    <div className='base-theme'>
      <Header />
      <Container>
        <Row>
          <Col><h1>Home</h1></Col>
        </Row>
      </Container>
    </div>
  )
}
