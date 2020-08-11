import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchData } from '../redux/actions/ActionFetchData';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Clock from '../components/clock/Clock';

export default function Home() {
  const dispatch = useDispatch();

  const data = useSelector(state => state.reducerFetchData.data);
  console.log(data);

  useEffect(() => {
    dispatch(actionFetchData());
  }, [dispatch])


  /** CSS STYLE */
  const blockTextParent = {
    display: "grid"
  }
  const blockText = {
    position: "relative",
    width: "250px",
    justifySelf: "end",
    right: "20px",
    top: "20px",
    zIndex: "1"
  }
  const mainText = {
    padding: "50px"
  }
  /** CSS STYLE CLOSED */


  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col className="d-none d-md-block">
            <Clock />
          </Col>
          <Col style={blockTextParent}>
            <div style={blockText}>
              <Card>
                <Card.Body>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem non quae, magnam ea deleniti alias mollitia error recusandae unde iusto similique nemo? Qui quibusdam nostrum, earum at a necessitatibus quam.</p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <div>
            <Card>
              <Card.Body>
                <div style={mainText}>
                  <h1>Hello,</h1>
                  <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque animi reiciendis fugiat praesentium eum ipsam! Quod esse nobis, perferendis error voluptate voluptas nisi ea expedita dolorum, accusantium beatae hic. Nobis. Ypsum, dolor sit amet consectetur adipisicing elit. Quae nam libero dicta sequi necessitatibus ipsa eum. Nesciunt beatae sapiente veritatis, sed quam numquam rerum possimus illo aliquid ab molestias laborum!</p>
                </div>

              </Card.Body>
            </Card>
          </div>


        </Row>



      </Container>
    </div >
  )
}
