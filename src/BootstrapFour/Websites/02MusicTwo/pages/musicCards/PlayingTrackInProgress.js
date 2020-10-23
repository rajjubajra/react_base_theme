import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from 'react-redux';

export default function PlayingTrackInProgress(props) {

  let now = props.now;

  const variant = useSelector(state => state.reducerSelectColourMode.variant);



  return (
    <>
      <ProgressBar variant={variant} now={now} label={`${now.toFixed(0)}%`} />
    </>
  )
}
