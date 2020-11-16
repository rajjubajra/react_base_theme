import React, { useState, useEffect } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchBlog } from './Redux/ActionFetchBlog';
import PopularBlog from '../PopularBlog/PopularBlog';
import Taxonomy from '../Taxonomy/Taxonomy';
import ColourMode from '../../components/ColourMode/ColourMode';
import Title from '../../components/header/Titlte/Title';
import ViewBox from '../ViewBox';
import YearMonthDrops from './Form/YearMonthDrops';
import { useHistory, useLocation } from 'react-router-dom';


function Blog() {

  /** dyanamic color */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  /** HOW DOES IT WORK */
  /**
   * If "Year & Month" is not selected 
   * All Data will be displayed with pagebreak
   * 
   * If "Year & Month" is selected 
   * ActionFetchBlog run with selected Year and Month
   * In Action 
   * if year, month is empty 
   * url will be : `${baseUrl.URL}/blog
   * if year and month is selected
   * url will be : `${baseUrl.URL}/blog/${year}${month}
   * - Drupal View Contexual Filter will sort data by YYYYMM
   * 
   * 
   * - DRUPAL 8 SITE
   *   - CREATE VIEW : BLOG  
   *   - SELECT ARTICLE
   *   - REST EXPORT PATH : "blog-year-month"
   *   - IN View Advance
   *      - Add Contexual Filter
   *      - Find and Select Year + Month 
   *   - IN View FORMAT
   *      - Format: Serializer | Settings: JSON
   *      - Show: entity
   *   - PAGER
   *      - Item to display: full | Paged, 0 items
   *   - SAVE VIEW : BLOG 
   * 
   */



  const dispatch = useDispatch();



  /** YEAR AND MONTH SELECTED FROM YearMonthDrops.js */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);

  /** ACTION FETCH BLOG DATA */
  useEffect(() => {
    dispatch(ActionFetchBlog(year, month))
  }, [dispatch, month, year])

  /**  FETCH DATA FROM REDUCER */
  const payload = useSelector(state => state.ReducerFetchBlog.payload);
  const fetched = useSelector(state => state.ReducerFetchBlog.fetched);



  /** PAGINATION *******************************************/
  const initial = 0;
  const pageGap = 8;
  const dataLength = fetched && payload.length;

  const [pager, setPager] = useState(initial);

  /**This useEffect will be 
   * implimented while back to the page 
   * from ReadMore page. In order to set the
   * existing page number
   */
  const pagerStored = useSelector(state => state.ReducerPager.pager);
  useEffect(() => {
    pagerStored > 0 && setPager(pagerStored);
  }, [pagerStored])

  const nextPage = () => {
    pager < (dataLength - pageGap) &&
      setPager(prevState => prevState + pageGap)
  }

  const prevPage = () => {
    pager >= pageGap &&
      setPager(prevState => prevState - pageGap)
  }

  const location = useLocation();
  const history = useHistory();
  console.log("location", location, "history", history);


  const slicedData = fetched && payload.slice(pager, pager + pageGap);
  /** PAGINATION closed ******************************/


  /** LOADING MESSAGE */
  /** IF Year/Month both are not selected following message is displyed */
  const LoadingMessage = (year, month) => {
    if (year === '' || month === '') {
      return "Please select Year and Month";
    } else {
      return "Loading";
    }
  }



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
            <div className="row justify-content-between">
              <h1>Blog</h1>
              <YearMonthDrops />
            </div>
            {/** BLOG LISTING */}
            <div className="row">
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
                        pager={pager}
                      />
                    </section>
                  })
                  : LoadingMessage(year, month)
              }
            </div>


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