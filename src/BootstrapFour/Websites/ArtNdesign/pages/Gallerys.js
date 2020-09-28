import React from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import { Link } from 'react-router-dom';
import { pagelink } from '../PageLink';
import IconClose from '../components/Icon/IconClose';
import Gallery from './Gallery/Gallery';

function Gallerys() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);

  return (
    <div className={className}>
      <ColourMode />

      <div className="ml-3">
        <Link to={`/${pagelink.pages}`}>
          <IconClose />
        </Link>
      </div>


      <Gallery />

    </div>
  )
}

export default Gallerys
