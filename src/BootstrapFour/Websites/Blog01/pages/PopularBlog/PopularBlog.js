import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';
import { pagelink } from '../../PageLink';
import { ActionFetchPopularBlog } from './Redux/ActionFetchPopularBlog';


function PopularBlog() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchPopularBlog());
  }, [dispatch])

  const data = useSelector(state => state.ReducerFetchPopularBlog.data);
  const fetched = useSelector(state => state.ReducerFetchPopularBlog.fetched);


  return (
    <div>
      <h2>Popular Blogs</h2>
      {
        fetched
          ? data.map(item => {
            return <div key={item.nid}>
              <h3>{item.title}</h3>
              <section>
                <DangerouslySetInnerHtml text={item.body} substr={200} />
              </section>
              <Link to={`/${pagelink.readMore}/${item.nid}`}>Read More</Link>
            </div>

          })
          : 'LOADING.....'
      }

    </div>
  )
}

export default PopularBlog
