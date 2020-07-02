import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MusicCard from './MusicCard';
import concert from '../../../../../../src/images/Music/concert00.jpg';
import music from '../../../../../../src/images/Music/music00.png';
import sheet from '../../../../../../src/images/Music/sheet00.jpg';
import string from '../../../../../../src/images/Music/string00.jpg';
import vinyl from '../../../../../../src/images/Music/vinyl00.jpg';
import audio from '../../../../../../src/images/Music/audio00.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { actionPaginationPrev, actionPaginationNext } from '../../actions/actionPagination';



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

function MusicCards() {
  const dispatch = useDispatch();


  return (
    <Container>
      <Row>
        {
          data.map((item, index) => {
            return <Col key={index} lg={4}>
              <MusicCard
                id={item.id}
                img={item.img}
                alt={item.title}
                title={item.title} />
            </Col>
          })
        }
      </Row>
      <Row>
        <div onClick={() => dispatch(actionPaginationPrev(+10))}>Prev</div>
        <div onClick={() => dispatch(actionPaginationNext(-10))}>Next</div>
      </Row>
    </Container>
  )
}

export default MusicCards
