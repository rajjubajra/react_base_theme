import React from 'react';
import NavigationOne from '../components/header/NavigationOne/NavigationOne';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import NewsLetters from './NewsLetters/NewsLetters';
import PopularBlog from './PopularBlog/PopularBlog';
import Taxonomy from './Taxonomy/Taxonomy';
import Title from '../components/header/Titlte/Title';



export default function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);

  console.log("CSS CLASS", className);

  return (
    <div className={`${className}`}>
      <ColourMode />
      <NavigationOne />

      <div className="container mt-5">
        {/** Title */}
        <div className="row">
          <div className="col">
            <Title />
          </div>
        </div>

        {/** TAXONOMY */}
        <div className="row">
          <div className="col">
            <Taxonomy />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <PopularBlog />
          </div>
          <div className="col-lg-9">
            <NewsLetters />
          </div>
        </div>
      </div>

    </div>
  )
}
