import React, { useState, useEffect } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchBlogByYearMonth } from './Redux/ActionFetchBlogByYearMonth';
import PopularBlog from '../PopularBlog/PopularBlog';
import Taxonomy from '../Taxonomy/Taxonomy';
import ColourMode from '../../components/ColourMode/ColourMode';
import Title from '../../components/header/Titlte/Title';
import ViewBox from './ViewBox';
import YearMonthDrops from './Form/YearMonthDrops';


function BlogByYearMonth() {
  /** dyanamic color */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  // const [data, setData] = useState([]);
  // const [month, setMonth] = useState('');
  // const [year, setYear] = useState('');

  const dispatch = useDispatch();


  /** ACTION FETCH BLOG DATA */
  useEffect(() => {
    dispatch(ActionFetchBlogByYearMonth());
  }, [dispatch])

  /**  FETCH DATA FROM REDUCER */
  const dataYM = useSelector(state => state.ReducerFetchBlogByYearMonth.payload);
  const fetched = useSelector(state => state.ReducerFetchBlogByYearMonth.fetched);


  /** PAGINATION */
  const initial = 0;
  const pageGap = 8;
  const dataLength = fetched && dataYM.length;

  const [pager, setPager] = useState(initial);

  const nextPage = () => {
    pager < (dataLength - pageGap) &&
      setPager(prevState => prevState + pageGap)
  }

  const prevPage = () => {
    pager >= pageGap &&
      setPager(prevState => prevState - pageGap)
  }

  const slicedData = fetched && dataYM.slice(pager, pager + pageGap);
  /** PAGINATION closed**************/


  return (
    <div className="blog-one">
      <ColourMode />

      {/** MAIN NAVIGATION */}
      <NavigationOne />


      <div className={`${className} container mt-5 mb-5`}>
        <div className="row">
          <div className="col">
            <Title />
          </div>
        </div>
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
            {/** Blog sub-title and Year Month drops */}
            <div className="d-flex justify-content-between">
              <h1>Blog</h1>
              <YearMonthDrops />
            </div>

            {
              fetched
                ? slicedData.map(item => {
                  return <section key={item.nid}>
                    <ViewBox
                      nid={item.nid}
                      dateNonFormated={item.created}
                      taxoName={item.term_node_tid}
                      title={item.title}
                      body={item.body}
                    />
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
export default BlogByYearMonth