import React, { useState, useEffect } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ActionFetchBlogByTaxonomy } from './Redux/ActionFetchBlogByTaxonomy';
import PopularBlog from '../PopularBlog/PopularBlog';
import Taxonomy from '../Taxonomy/Taxonomy';
import ColourMode from '../../components/ColourMode/ColourMode';
import Title from '../../components/header/Titlte/Title';
import ViewBox from './ViewBox';
import YearMonthDrops from './Form/YearMonthDrops';



function BlogByTaxonomy() {
  /** dyanamic color */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);





  /** TAXONOMY ID [useParams()] */
  const { tid } = useParams();

  /** BY YEAR AND MONTH TAXONOMY VIEW */
  /**
   * PASS Year and month [YYYYMM]
   * Drupal view Contexual filter sorts data by month
   */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchBlogByTaxonomy(tid, year, month));
  }, [dispatch, month, tid, year])

  const data = useSelector(state => state.ReducerFetchBlogByTaxonomy.data);
  const fetched = useSelector(state => state.ReducerFetchBlogByTaxonomy.fetched);


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


  /** LOADING MESSAGE */
  /** IF Year/Month both are not selected following message is displyed */
  const LoadingMessage = (year, month) => {
    if (year === '' || month === '') {
      return "Please select Year and Month";
    } else {
      return "Loading";
    }
  }

  /** Get Taxonomy Name */
  const taxonomy = useSelector(state => state.ReducerFetchTaxonomy.data);
  const taxoFetched = useSelector(state => state.ReducerFetchTaxonomy.fetched);
  const [taxoName, setTaxoName] = useState();

  console.log("mmmm", taxoFetched, taxonomy, taxoName);

  useEffect(() => {
    const name = taxoFetched && taxonomy.find(function (item) {
      return item.tid === tid && item.name
    })
    setTaxoName(name.name);
  }, [taxoFetched, taxonomy, tid])




  return (
    <div className="blog-one">
      <ColourMode />
      {/** MAIN NAVIGATION */}
      <NavigationOne />


      <div className={`${className} container mt-5 mb-5`}>
        {/** MAIN TITLE AT TOP */}
        <div className="row">
          <div className="col">
            <Title />
          </div>
        </div>

        {/** LIST OF TAXONOMY TERMS WITH NAVIGATION */}
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

            {/** COLUMN TITLE  AND YEAR MONTH SELECTION FORM */}
            <div className="row justify-content-between">
              <h1>Blog :{taxoName}</h1>
              <YearMonthDrops />
            </div>

            {/** LIST OF SELECTED TAXONOMY BLOGS */}
            <div className="row">
              {
                fetched
                  ? slicedData.map(item => {
                    return <section key={item.nid}>
                      <ViewBox
                        nid={item.nid}
                        dateFormated={item.created}
                        taxoName={item.term_node_tid}
                        title={item.title}
                        body={item.body}
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
export default BlogByTaxonomy