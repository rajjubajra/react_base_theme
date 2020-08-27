import React, { useEffect } from 'react';
import Nav from '../../components/header/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchData } from '../../redux/actions/ActionFetchData';
import { Container, Row, Col } from 'react-bootstrap';
import { cssclass } from '../../config/CssClass';
import SideNav from '../../components/SideNav/SideNav';

export const TemplateTwo = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.reducerFetchData.data);
  console.log(data);

  useEffect(() => {
    dispatch(actionFetchData());
  }, [dispatch])


  return (
    <div className={cssclass.base_classname}>
      <Nav />
      <SideNav />
      <Container>
        <Row>
          <Col><h1>Column 2</h1></Col>
        </Row>
      </Container>



    </div>
  )
}
export default TemplateTwo;
