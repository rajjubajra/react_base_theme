import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { ActionFetchReadMore } from './Redux/ActionFetchReadMore';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';
import IconClose from '../../components/Icon/IconClose';
import { pagelink } from '../../PageLink';
import { Link } from 'react-router-dom';



function ReadMore() {

  /** daynamic colour */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);

  const dispatch = useDispatch();

  const { nid } = useParams();

  useEffect(() => {
    dispatch(ActionFetchReadMore(nid));
  }, [dispatch, nid])


  const data = useSelector(state => state.ReducerFetchReadMore.data);
  const fetched = useSelector(state => state.ReducerFetchReadMore.fetched);


  const imgStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    filter: "grayscale(100%)",
    margin: "20px 0px",
  }


  return (
    <div className={`${className} mb-5`}>
      <ColourMode />
      <NavigationOne />
      {
        fetched ?
          <div className="container mt-5">
            {/** created date */}
            <div className="row">
              <div className="col">
                {data[0].created}
              </div>
            </div>
            {/** taxonomy name & close icon */}
            <div className="row">
              <div className="col">
                <DangerouslySetInnerHtml text={data[0].term_node_tid} substr={0} />
              </div>
              <div className="col">
                <Link to={`/${pagelink.blogs}`}><IconClose /></Link>
              </div>
            </div>

            {/** TITLE */}
            <div className="row">
              <div className="col">
                <h2>{data[0].title}</h2>
              </div>
            </div>

            {/** Image */}
            <div className="row">
              <div className="col">
                <img style={imgStyle}
                  src={data[0].field_image}
                  alt={data[0].title} />
              </div>
            </div>

            {/** TEXT BODY */}
            <div className="row">
              <div className="col">
                <DangerouslySetInnerHtml text={data[0].body} substr={0} />
              </div>
            </div>
          </div>
          : <div><h1>Loading...</h1></div>
      }


    </div>
  )
}

export default ReadMore
