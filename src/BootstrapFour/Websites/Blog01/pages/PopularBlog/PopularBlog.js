import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchPopularBlog } from './Redux/ActionFetchPopularBlog';
import ViewBox from '../ViewBox';


function PopularBlog() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchPopularBlog());
  }, [dispatch])

  const data = useSelector(state => state.ReducerFetchPopularBlog.data);
  const fetched = useSelector(state => state.ReducerFetchPopularBlog.fetched);

  return (
    <div className="col-sm-10 col-lg-12 col-md-12">
      <h2 className="text-uppercase d-none d-md-block d-lg-block d-xl-block">Popular</h2>
      {
        fetched
          ? data.map(item => {
            const { nid, title, body } = item;
            return <section key={nid}>
              <ViewBox
                nid={nid}
                title={title}
                body={body}
                substr="200"
              />
            </section>
          })
          : 'LOADING.....'
      }

    </div>
  )
}

export default PopularBlog