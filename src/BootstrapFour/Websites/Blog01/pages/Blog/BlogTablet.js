import React from 'react';
import PopularBlog from '../PopularBlog/PopularBlog';
import Taxonomy from '../Taxonomy/Taxonomy';
import ViewBox from '../ViewBox';
import YearMonthDrops from './Form/YearMonthDrops';
import { useSelector } from 'react-redux';
import BoxArrowInLeft from '../../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../../components/Icon/BoxArrowInRight';





function BlogTablet(props) {

  /** YEAR AND MONTH SELECTED FROM YearMonthDrops.js */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);


  return (
    <>

      <div className={`container-fluid mb-5`}>

        <div className="row">


          <div className="col-md-4">
            <Taxonomy />
          </div>

          {/** ALL BLOGS  LISTING */}
          <div className="col-md-8">
            {/** Blog sub-title and Year Month drops */}
            <div className="row justify-content-between">
              <div className="col-md-11 d-flex justify-content-between">
                <h2 className="text-uppercase">{props.title}</h2>
                <YearMonthDrops />
              </div>
            </div>

            {/** BLOG LISTING */}

            <div className="row">
              <div className="col-md-11">
                {
                  props.fetched
                    ? props.slicedData.map(item => {
                      return <section key={item.nid}>
                        <ViewBox
                          nid={item.nid}
                          dateNonFormated={item.created}
                          taxoName={item.term_node_tid}
                          title={item.title}
                          body={item.body}
                          pager={props.pager}
                        />
                      </section>
                    })
                    : props.LoadingMessage(year, month)
                }
              </div>
            </div>
          </div>
        </div>


        {/** PAGE NAVIGATIONS */}
        <div className="row justify-content-center mt-4 mb-5">
          {
            <span onClick={() => props.prevPage()}><BoxArrowInLeft /></span>
          }

          <p className="ml-5 mr-5">
            Page  -  {(props.pager + props.pageGap) / props.pageGap}
            <span className="small-font ml-2">[{props.dataLength} - {props.pager}]</span>
          </p>

          { /** Page gap defined in drupal view is 10 */
            <span onClick={() => props.nextPage()}><BoxArrowInRight /></span>
          }
        </div>

      </div>

    </>
  )
}
export default BlogTablet