import React, { useState, useEffect } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import Title from '../../components/header/Titlte/Title';
import SearchForm from './Form/SearchForm';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchBlog } from './Redux/ActionFetchBlog';
import ViewBox from '../ViewBox';


function BlogSearch() {

  /** define states */
  const query = useSelector(state => state.ReducerSearchForm.query);
  const [queryResult, setQueryResult] = useState([]);


  /*** STEP 1 *** FETCH DATA  ***********************/
  const dispatch = useDispatch();
  /** ACTION FETCH BLOG DATA */
  useEffect(() => {
    /** empty value is passed in order to 
     * fetch all Blog data
      */
    dispatch(ActionFetchBlog('', ''));
  }, [dispatch])
  /**  FETCH DATA FROM REDUCER */
  const payload = useSelector(state => state.ReducerFetchBlog.payload);
  const fetched = useSelector(state => state.ReducerFetchBlog.fetched);
  //console.log("DATA TO SEARCH", data);


  /** PAGINATION *******************************************/
  const initial = 0;
  const pageGap = 8;
  const queryLength = queryResult && queryResult.length;

  const [pager, setPager] = useState(initial);

  const nextPage = () => {
    pager < (queryLength - pageGap) &&
      setPager(prevState => prevState + pageGap)
  }

  const prevPage = () => {
    pager >= pageGap &&
      setPager(prevState => prevState - pageGap)
  }

  const slicedQuery = queryResult && queryResult.slice(pager, pager + pageGap);
  console.log("SLICED QUERY", slicedQuery);
  /** PAGINATION closed ******************************/




  /*** 3 *** STORE QUERY RESULT INTO QUERY RESULT STATE
   * USING filter and includes functions
   */
  useEffect(() => {
    let result = fetched && query.length > 0 &&
      payload.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
        || item.body.toLowerCase().includes(query.toLowerCase())
      )
    setQueryResult(result);
    query.length < 1 && setPager(0);
  }, [payload, query, fetched]) // run query when any changes on query state
  console.log("QUERY RESULT", queryResult);


  /** HILIGHTs the SEARCH RESULT THAT MATCH QUERY */
  function highlightQury(query, text) {
    let term = query; // search query we want to highlight in results 
    let results = text; // search results
    // "g" for global, "i" for case-insensitive
    return results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);
  }


  return (
    <>
      {/** MAIN NAVIGATION */}
      <NavigationOne />

      <div className="container mb-5 mt-5 min-vh-100">
        {/** Title */}
        <div className="row">
          <div className="col">
            <Title hideLink={true} />
          </div>
        </div>

        {/** SEARCH FORM */}
        <div className="row justify-content-center">
          <div className="col">
            <SearchForm query={query} />
          </div>
        </div>

        {/** SEARCH RESULT */}
        <div className="row">
          <div className="col">
            {
              queryResult && slicedQuery.map(item => {
                return <section key={item.nid}>
                  <ViewBox
                    title={highlightQury(query, item.title)}
                    body={highlightQury(query, item.body)}
                    dateNonFormated={item.created}
                    nid={item.nid}
                  />
                </section>
              })
            }

          </div>
        </div>

        {/** SEARCH NOT FOUND MESSAGE */}
        <div className="row">
          <div className="col">
            {
              query.length > 0
              && queryResult
              && queryResult.length < 1
              && 'Search Not found'
            }
          </div>
        </div>
        {/** PAGE NAVIGATIONS */}
        <div className={`${queryLength > 0 ? 'd-flex' : 'd-none'} row justify-content-center mt-4 mb-5`}>

          {
            <span onClick={() => prevPage()}> Prev </span>
          }

          <p> ---  Page {(pager + pageGap) / pageGap}  [{queryLength} - {pager}]--- </p>

          { /** Page gap defined in drupal view is 10 */
            <span onClick={() => nextPage()}> Next </span>
          }

        </div>
      </div>
    </>
  )
}
export default BlogSearch