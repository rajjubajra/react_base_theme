import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { actionCategoryImageId } from '../../actions/actionFetchCategory';




function CategoryCard(props) {

  const dispatch = useDispatch();



  return (
    <Card
      className={`bg-dark text-white ${props.show}`}
      onClick={() => dispatch(actionCategoryImageId(props.id))}
    >
      <Card.Img src={props.image} alt={props.alt} />
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

export default CategoryCard
