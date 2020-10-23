import React, { useState, useEffect } from 'react';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector, useDispatch } from 'react-redux';
import NavigationBar from '../../components/header/NavigationBar';
import { useParams } from 'react-router-dom';
import { actionFetchData } from '../../pages/Redux/actions/actionFetchData';
import ListItem from './ListItem';
import { actionPlayAllTracks } from '../../pages/Redux/actions/actionPlayAllTracks';
import PlayAll from './PlayAll';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnerHtml';


function MusicCardDetail(props) {



  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  /** Album Id */
  let { id } = useParams();
  console.log("music detail id", id);
  const dispatch = useDispatch()


  /** Cover Image and Track list variables*/
  const [coverImage, setCoverImage] = useState([]);
  const [bodyText, setBodyText] = useState('')
  const [trackList, setTrackList] = useState([]);
  const [allTracksId, setAllTracksId] = useState([]);

  /** Colour data from reducer */
  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);



  /** track data from the reducer */
  const fetched = useSelector(state => state.reducerFetchData.fetched);
  const data = useSelector(state => state.reducerFetchData.data);
  console.log("music card details", trackList);

  /** PLAY ALL TRACKS ON QUE */
  const playAllTracks = useSelector(state => state.reducerPlayAllTracks.playAllTracks);


  useEffect(() => {
    if (!fetched) {
      dispatch(actionFetchData());
    }

    if (fetched) {
      setCoverImage(data[id].field_image_medium[0]);
      setTrackList(data[id].field_track);
      setBodyText(data[id].body[0].value)

    }

    if (fetched) {
      let trackIds = [];
      trackList.map(item => {
        return trackIds.push(
          {
            url: item.url,
            alt: item.description,
            id: item.target_id
          }
        )
      })
      setAllTracksId(trackIds);
    }

  }, [data, dispatch, fetched, id, trackList])


  console.log(" cover image", bodyText);

  return (
    <div className={`music-zero ${className}`}>

      <ColourMode />
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mt-5">Album: <b>{coverImage['alt']}</b></h1>
            <img src={coverImage['url']} alt='cover' />
            <div className="mt-4 mb-5">
              <DangerouslySetInnerHtml text={bodyText} />
            </div>

          </div>


          {/** Right column */}
          <div className="col-lg-6 mb-2">
            <div className="mt-5 mb-3">
              {
                playAllTracks
                  ? <button className="btn btn-light mt-5"
                    onClick={() => dispatch(actionPlayAllTracks(allTracksId, false))}>
                    Back</button>
                  : <button className="btn btn-light mt-5"
                    onClick={() => dispatch(actionPlayAllTracks(allTracksId, true))}>
                    Play All</button>
              }
            </div>
            <div>
              {
                playAllTracks
                  ? <PlayAll />
                  : trackList.map((item, index) => {
                    return <div key={index}>
                      <ListItem
                        title={item.description}
                        track={item.url}
                        id={item.target_id}
                      />
                    </div>
                  })
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MusicCardDetail
