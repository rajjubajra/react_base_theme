import React, { useEffect } from 'react';
import Nav from '../components/header/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchData } from '../redux/actions/ActionFetchData';
import { Container, Row, Col } from 'react-bootstrap';
import { cssclass } from '../CssClass';

export const BaseCompoTwo = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.reducerFetchData.data);
  console.log(data);

  useEffect(() => {
    dispatch(actionFetchData());
  }, [dispatch])


  return (
    <div className={cssclass.base_classname}>
      <Nav />
      <Container>
        <Row>
          <Col><h1>Column 2</h1></Col>
        </Row>
      </Container>



    </div>
  )
}
export default BaseCompoTwo;
