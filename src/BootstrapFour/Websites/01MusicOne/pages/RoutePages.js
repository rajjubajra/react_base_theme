import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './Home/Home';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import News from './News/News';
import Contact from './Contact/Contact';
import BlogReadMoreOne from './News/BlogOne/BlogReadMore';
import { pagelink } from '../PageLink';
import Tour from './Tour/Tour';
import Shop from './Shop/Shop';
import Music from './Music/Music';
import Album from './Music/Album';
import TourDetails from './Tour/TourDetails';
import { actionFetchMenu } from '../components/header/NavigationOne/Redux/actionFetchMenu';


function RoutePages() {

  const dispatch = useDispatch();

  /** get data from reducer */
  const data = useSelector(state => state.reducerFetchMenu.data);
  const dataLength = useSelector(state => state.reducerFetchMenu.dataLength);
  console.log("ROUTE PAGE", data);

  /** fetch menu data */
  useEffect(() => {
    dispatch(actionFetchMenu());
  }, [dispatch])
  /**
   * Important Note: 
   * Drupal 8 link path name must be exactly same as COMPONENT name
   * SO ' - ' Hypen must be avoided WHILE defining LINK.   * 
   */


  return (
    <>
      {

        dataLength > 0
        && data.map(item => {
          const { id, path, component } = item;
          switch (component) {
            case 'home':
              return <Route key={id} exact path={`/${path}`} component={Home} />
            case 'tour':
              return <Route key={id} exact path={`/${path}`} component={Tour} />
            case 'about':
              return <Route key={id} exact path={`/${path}`} component={About} />
            case 'gallery':
              return <Route key={id} exact path={`/${path}`} component={Gallery} />
            case 'albums':
              return <Route key={id} exact path={`/${path}`} component={Music} />
            case 'news':
              return <Route key={id} exact path={`/${path}`} component={News} />
            case 'contact':
              return <Route key={id} exact path={`/${path}`} component={Contact} />
            default:
              return <Route key={id} exact path={`/${pagelink.home}`} component={Home} />
          }
        })
      }

      {
        <>
          <Route exact path={`/${pagelink.tourDetails}/:nid`} component={TourDetails} />
          <Route exact path={`/${pagelink.newsReadMore}/:nid`} component={BlogReadMoreOne} />
          <Route exact path={`/${pagelink.album}/:nid`} component={Album} />
        </>
      }

      {/* <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.tour}`} component={Tour} />
      <Route exact path={`/${pagelink.tourDetails}/:nid`} component={TourDetails} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.gallery}`} component={Gallery} />
      <Route exact path={`/${pagelink.albums}`} component={Music} />
      <Route exact path={`/${pagelink.album}/:nid`} component={Album} />
      <Route exact path={`/${pagelink.news}`} component={News} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
      <Route exact path={`/${pagelink.shop}`} component={Shop} />
      <Route exact path={`/${pagelink.newsReadMore}/:nid`} component={BlogReadMoreOne} /> */}
    </>
  )
}
export default RoutePages