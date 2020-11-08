import React, { useState, useEffect } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionFetchBlog } from './Redux/ActionFetchBlog';
import PopularBlog from '../PopularBlog/PopularBlog';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';
import { pagelink } from '../../PageLink';
import Taxonomy from '../Taxonomy/Taxonomy';
import ColourMode from '../../components/ColourMode/ColourMode';


function Blog() {
  /** dyanamic color */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);




  const dispatch = useDispatch();


  /** ACTION FETCH BLOG DATA */
  useEffect(() => {
    dispatch(ActionFetchBlog());
  }, [dispatch])

  /**  FETCH DATA FROM REDUCER */
  const data = useSelector(state => state.ReducerFetchBlog.payload);
  const fetched = useSelector(state => state.ReducerFetchBlog.fetched);

  /** PAGINATION */
  const initial = 0;
  const pageGap = 8;
  const dataLength = fetched && data.length;

  const [pager, setPager] = useState(initial);

  const nextPage = () => {
    pager < (dataLength - pageGap) &&
      setPager(prevState => prevState + pageGap)
  }

  const prevPage = () => {
    pager >= pageGap &&
      setPager(prevState => prevState - pageGap)
  }

  const slicedData = fetched && data.slice(pager, pager + pageGap);
  /** PAGINATION closed**************/




  return (
    <div className="blog-one">
      <ColourMode />

      {/** MAIN NAVIGATION */}
      <NavigationOne />


      <div className={`${className} container mt-5 mb-5`}>
        {/** TAXONOMY TERMS */}
        <div className="row">
          <div className="col">
            <Taxonomy />
          </div>
        </div>


        <div className="row">

          {/** POPULAR BLOG */}
          <div className="col-lg-3">
            <PopularBlog />
          </div>

          {/** ALL BLOGS  LISTING */}
          <div className="col-lg-9">
            <h1>Blog</h1>
            {
              fetched
                ? slicedData.map(item => {
                  return <section key={item.nid}>
                    <h2>{item.title}</h2>
                    <DangerouslySetInnerHtml text={item.body} substr={300} />
                    <Link to={`${pagelink.readMore}/${item.nid}`}>
                      Read More
                    </Link>
                  </section>
                })
                : 'LOADING....'
            }
          </div>
        </div>

        {/** PAGE NAVIGATIONS */}
        <div className="row justify-content-center mt-4 mb-5">
          {
            <span onClick={() => prevPage()}> Prev </span>
          }

          <p> ---  Page {(pager + pageGap) / pageGap}  [{dataLength} - {pager}]--- </p>

          { /** Page gap defined in drupal view is 10 */
            <span onClick={() => nextPage()}> Next </span>
          }
        </div>
      </div>
    </div>
  )
}
export default Blog