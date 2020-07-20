import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAudio } from 'react-use';
import PlayingTrackInProgress from './PlayingTrackInProgress';
import { actionStopTheTrack } from '../../actions/actionPlayTheTrack';

function PlayingTrack() {
  const dispatch = useDispatch();
  const track = useSelector(state => state.reducerPlayTheTrack.track);

  /** useAudio from react-use */
  const [audio, state, controls, ref] = useAudio({
    src: track,
    autoPlay: true,
  });

  console.log("state", state);
  console.log("ref", ref);
  console.log("track", track);


  return (

    <div>
      <p className="mb-0">
        {/* { <audio src={track} preload='auto' controls></audio>} */}
        {audio}
        <div>Time: {state.time} [duration: {state.duration}] </div>
        <PlayingTrackInProgress now={(state.time / state.duration) * 100} />
        <button onClick={controls.pause}>Pause</button>
        <button onClick={controls.play}>Play</button>
        <br />
        <button onClick={controls.mute}>Mute</button>
        <button onClick={controls.unmute}>Un-mute</button>
        <br />
        <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
        <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
        <button onClick={() => controls.volume(1)}>Volume: 100%</button>
        <br />
        <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
        <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
        <button onClick={() => dispatch(actionStopTheTrack(''))}>Stop</button>
      </p>
    </div>
  )
}

export default PlayingTrack
