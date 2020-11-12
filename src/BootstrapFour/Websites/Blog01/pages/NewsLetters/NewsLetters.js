import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchNewsLetters } from '../NewsLetters/Redux/ActionFetchNewsLetters';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';
import { pagelink } from '../../PageLink';
import { Link } from 'react-router-dom';
import { DayMonthCommaYear } from '../../components/DateFormat';



function NewsLetters() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchNewsLetters());
  }, [dispatch])


  const news = useSelector(state => state.ReducerFetchNewsLetters.payload);
  const fetched = useSelector(state => state.ReducerFetchNewsLetters.fetched);

  console.log("NEWS LETTERS", news, fetched);


  return (
    <div>
      <h1>News letters</h1>
      {
        fetched
          ? news.map(item => {
            const { title, body, nid, created } = item
            return <section key={nid} className="mt-5 mb-5">
              <h2>{title}</h2>
              <p>{DayMonthCommaYear(created)}</p>
              <DangerouslySetInnerHtml text={body} substr={250} />
              <Link to={`/${pagelink.readMore}/${nid}`}>Read More</Link>
            </section>
          })
          : "LOADING...."
      }
    </div>
  )

}
export default NewsLetters