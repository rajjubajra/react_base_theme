import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAudio } from 'react-use';
import PlayingTrackInProgress from './PlayingTrackInProgress';



function PlayAll() {



  const [nextSong, setNextSong] = useState(0);
  const [autoPlayNext, setAutoPlayNext] = useState(false);
  const [autoPlayComplited, setAutoPlayComplited] = useState(false);

  const playAllTracks = useSelector(state => state.reducerPlayAllTracks.playAllTracks);
  const tracks = useSelector(state => state.reducerPlayAllTracks.tracks);



  const [audio, state, controls, ref] = useAudio(
    {
      src: tracks[nextSong].url,
      autoPlay: true
    }
  );

  function nextsong() {
    autoPlayComplited ? setNextSong(0) : setNextSong(song => song + 1)
  }

  useEffect(() => {
    nextSong === (tracks.length - 1)
      ? setAutoPlayComplited(true)
      : setAutoPlayComplited(false);
  }, [nextSong, tracks.length])


  useEffect(() => {
    /** set condition to change tracks index */
    state.duration !== 0 && state.time !== 0 && state.time === state.duration && state.paused
      ? setAutoPlayNext(true)
      : setAutoPlayNext(false)
  }, [state.duration, state.paused, state.time])


  useEffect(() => {
    if (autoPlayNext) {
      return nextsong()
    }
  }, [autoPlayNext])// do not add "nextsong" here



  // console.log("STATE", state);
  // console.log("control", controls);
  // console.log("ref", ref);
  // console.log("audio", audio);
  // console.log("track Ids", trackIds);
  //console.log('NEXT SONG', nextSong, "|", tracks.length - 1);
  //console.log('COMPLITED', autoPlayComplited);


  return (
    <div>
      <div>song:{nextSong}: {tracks[nextSong].url}</div>
      <div>Number of Songs: {tracks.length}</div>
      <pre> {JSON.stringify(tracks, null, 2)}</pre>
      <PlayingTrackInProgress now={(state.time / state.duration) * 100} />
      <div>

        {playAllTracks ? audio : ''}

        <pre>{JSON.stringify(state, null, 2)}</pre>
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
      </div>
    </div>
  )
}

export default PlayAll