import React, { useEffect } from 'react'
import BoxSix from './BoxSix/BoxSix'
import ColourMode from '../components/ColourMode/ColourMode';
import Nav from '../components/header/Nav';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionFetchPhoto } from '../redux/actions/ActionFetchPhoto';


function Gallery() {

  const dispatch = useDispatch();
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);


  let { id } = useParams();
  console.log("params", { id });


  useEffect(() => {
    dispatch(actionFetchPhoto({ id }))
  }, [dispatch, id])

  return (
    <div className={className}>
      <ColourMode />
      <Nav />
      <BoxSix />
    </div>
  )
}
export default Gallery