import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import BlogOne from './BlogOne/BlogOne';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export const News = () => {

  const [className, setClassName] = useState('light');
  const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    setColourVariant(variant);
  }, [colorMode, variant])

  /** FOR back to same page from readmore-news page */
  const { currentPage } = useParams();
  const { lastPage } = useParams();
  console.log("current page", currentPage, "lastpage", lastPage);


  return (
    <div className={className}>
      <ColourMode />
      <NavigationOne />
      <BlogOne currentPage={currentPage} lastPage={lastPage} />
    </div>
  )
}
export default News;