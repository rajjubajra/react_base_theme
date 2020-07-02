import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { actionPlayTheTrack } from '../../actions/actionPlayTheTrack';
import PlayingTrack from './PlayingTrack';



function ListItem(props) {

  const dispatch = useDispatch();

  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  const id = useSelector(state => state.reducerPlayTheTrack.id);
  //console.log('variant', variant);

  return (
    <>
      <Alert variant={variant}>
        <Alert.Heading>Song: {props.title}</Alert.Heading>
        <hr />
        {props.id === id ? <PlayingTrack /> :
          <p className="mb-0">
            <button onClick={() => dispatch(actionPlayTheTrack(props.track, props.id))}>Play</button>
          </p>
        }
      </Alert>
    </>
  )
}

export default ListItem
