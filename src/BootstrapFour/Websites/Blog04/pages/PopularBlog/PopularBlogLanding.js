import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchPopularBlog } from './Redux/ActionFetchPopularBlog';
import ViewBox from '../ViewBox';


function PopularBlogLanding(props) {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchPopularBlog());
  }, [dispatch])

  const data = useSelector(state => state.ReducerFetchPopularBlog.data);
  const fetched = useSelector(state => state.ReducerFetchPopularBlog.fetched);

  //console.log(" DATA +++ ===", data);


  const titleStyle = {
    marginLeft: "5px"
  }

  return (
    <>
      <div className="row">
        <div className="col">
          {
            !props.hideTitle && <div style={titleStyle}>
              <h2 className="text-uppercase d-none d-md-block d-lg-block d-xl-block">
                - Popular Blogs -</h2>
            </div>
          }
        </div>
      </div>
      <div className="row">
        {
          fetched
            ? data.slice(0, 4).map(item => {
              const { nid, title, body } = item;
              return <div key={nid} className="col-sm-10 col-lg-6 col-md-6">
                <div style={{
                  height: "345px"
                }} className='border p-3 mx-1 my-3'>
                  <ViewBox
                    nid={nid}
                    title={title}
                    body={body}
                    substr="200"
                  />
                </div>
              </div>
            })
            : 'LOADING.....'
        }
      </div>
    </>
  )
}

export default PopularBlogLanding