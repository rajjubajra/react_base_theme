import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchTaxonomy } from './Redux/ActionFetchTaxonomy';
import { pagelink } from '../../PageLink';
import { Link } from 'react-router-dom';


function Taxonomy() {



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchTaxonomy())
  }, [dispatch])




  const data = useSelector(state => state.ReducerFetchTaxonomy.data);
  const fetched = useSelector(state => state.ReducerFetchTaxonomy.fetched);



  return (
    <div>
      <ul className="list-group list-group-horizontal">
        {
          fetched
            ? data.map(item => {
              return <li key={item.tid} className="list-group-item">
                <Link
                  to={`/${pagelink.blogByTaxonomy}/${item.tid}`}>
                  {item.name}
                </Link>
              </li>
            })
            : 'Loading...'
        }
      </ul>
    </div>
  )
}

export default Taxonomy
