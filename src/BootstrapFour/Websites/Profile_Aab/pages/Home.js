import React, { useEffect } from 'react';
import Nav from '../components/header/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchData } from '../redux/actions/ActionFetchData';
import { Container, Row, Col } from 'react-bootstrap';
import { CssClass } from '../CssGlobalClass';

export default function Home() {
  const dispatch = useDispatch();

  const data = useSelector(state => state.reducerFetchData.data);
  console.log(data);

  useEffect(() => {
    dispatch(actionFetchData());
  }, [dispatch])


  return (
    <div className={CssClass.rootClass}>
      <Nav />
      <Container>
        <Row>
          <Col><h1>Home</h1></Col>
        </Row>
      </Container>



    </div>
  )
}
