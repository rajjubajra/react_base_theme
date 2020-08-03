import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { actionFetchCategory } from '../../actions/actionFetchCategory';



function Cards(props) {

  const dispatch = useDispatch();

  return (
    <Card className="bg-dark text-white"
      onClick={() => dispatch(actionFetchCategory(props.id))}>
      <Card.Img src={props.image} alt={props.alt} fluid />
      <Card.ImgOverlay>
        <Card.Title>{props.id}{props.title}</Card.Title>
        <Card.Text>
          {props.brief_text}
        </Card.Text>
        <Card.Text>{props.footer}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )

}

export default Cards
