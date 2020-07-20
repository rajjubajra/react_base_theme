import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionPagination, actionGoToPage } from '../../actions/actionPagination';

function Pagination(props) {
  const dispatch = useDispatch();

  /** Page Length */
  const pagelength = useSelector(state => state.reducerFetchData.dataLength);
  //console.log("PAGINATION LENGTH", pagelength);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link
            onClick={() => dispatch(actionPagination("prev", pagelength))}
            className="page-link"
            to="#"
            aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </Link>
        </li>

        <li className="page-item">
          <Link
            onClick={() => dispatch(actionGoToPage(0))}
            className="page-link"
            to="#">1</Link>
        </li>
        <li className="page-item">
          <Link
            onClick={() => dispatch(actionGoToPage(1))}
            className="page-link"
            to="#">2</Link>
        </li>
        <li className="page-item">
          <Link
            onClick={() => dispatch(actionGoToPage(2))}
            className="page-link"
            to="#">3</Link>
        </li>
        <li className="page-item">
          <Link
            onClick={() => dispatch(actionPagination("next", pagelength))}
            className="page-link"
            to="#"
            aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav >
  )
}

export default Pagination
