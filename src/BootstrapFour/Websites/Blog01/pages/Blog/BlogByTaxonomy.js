import React, { useState, useEffect } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ActionFetchBlogByTaxonomy } from './Redux/ActionFetchBlogByTaxonomy';
import PopularBlog from '../PopularBlog/PopularBlog';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';
import { pagelink } from '../../PageLink';
import Taxonomy from '../Taxonomy/Taxonomy';
import ColourMode from '../../components/ColourMode/ColourMode';


function BlogByTaxonomy() {
  /** dyanamic color */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);




  /** TAXONOMY ID [useParams()] */
  const { tid } = useParams();


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchBlogByTaxonomy(tid));
  }, [dispatch, tid])

  const data = useSelector(state => state.ReducerFetchBlogByTaxonomy.data);
  const fetched = useSelector(state => state.ReducerFetchBlogByTaxonomy.fetched);


  /** PAGINATION */
  const initial = 0;
  const pageGap = 8;
  const dataLength = fetched && data.length;

  const [pager, setPager] = useState(initial);

  const nextPage = () => {
    pageGap > (dataLength - pageGap) &&
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
      <NavigationOne />
      <div className={`${className} container mt-5 mb-5`}>

        {/** TAXONOMY */}
        <div className="row">
          <div className="col">
            <Taxonomy />
          </div>
        </div>

        {/** BLOG */}
        <div className="row">
          {/** POPULAR BLOG */}
          <div className="col-lg-3">
            <PopularBlog />
          </div>

          <div className="col-lg-9">
            {/** BLOG BY TAXONOMY */}
            <h1>Blog : Taxanomy?</h1>
            {
              fetched
                ? slicedData.map(item => {
                  return <section key={item.nid}>
                    <h2>{item.title}</h2>
                    <p>{item.created}</p>
                    <div>[
                      <DangerouslySetInnerHtml text={item.term_node_tid} substr={0} />
                      ]</div>
                    <DangerouslySetInnerHtml text={item.body} substr={250} />
                    <Link to={`/${pagelink.readMore}/${item.nid}`}>Read More</Link>
                  </section>

                })
                : <div>LOADING....</div>
            }

          </div>
        </div>

        {/** PAGE NAVIGATIONS */}
        <div className="row justify-content-center mt-4 mb-5">
          {
            <span onClick={() => prevPage()}> Prev </span>
          }

          <p> ---  Page {(pager + pageGap) / pageGap}  --- </p>

          { /** Page gap defined in drupal view is 10 */
            <span onClick={() => nextPage()}> Next </span>
          }
        </div>


      </div>
    </div>
  )
}
export default BlogByTaxonomy