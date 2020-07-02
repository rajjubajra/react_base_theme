import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAudio } from 'react-use';
import PlayingTrackInProgress from './PlayingTrackInProgress';
import { actionStopTheTrack } from '../../actions/actionPlayTheTrack';

function PlayingTrack() {
  const dispatch = useDispatch();
  const track = useSelector(state => state.reducerPlayTheTrack.track);
  //const status = useSelector(state => state.reducerPlayTheTrack.status);


  const [audio, state, controls, ref] = useAudio({
    src: track,
    autoPlay: true,
  });

  // console.log(state);
  //console.log(ref);




  return (

    <div>
      <p className="mb-0">
        {/* { <audio src={track} preload='auto' controls></audio>} */}
        {audio}
        <PlayingTrackInProgress now={(state.time / state.duration) * 100} />
        <button onClick={controls.play}>Play</button>
        <button onClick={controls.pause}>Pause</button>
        <button onClick={() => dispatch(actionStopTheTrack(''))}>Stop</button>
      </p>
    </div>
  )
}

export default PlayingTrack
