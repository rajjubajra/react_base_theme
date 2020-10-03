import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionOpenSearch } from '../Redux/actionOpenMeghaMenu';
import IconClose from './IconClose';

function FormSeven() {

  const dispatch = useDispatch();

  /** SEARCH MENU */
  const openSearch = useSelector(state => state.reducerOpenMeghaMenu.openSearch);


  const styleSearch = {
    position: 'relative',
    marginTop: openSearch ? 0 : "-2000px",
    marginBottom: "190px",
    transition: "margin 0.4s linear",
    zIndex: "-10",
    display: openSearch ? "flex" : "none",
    flexDirection: "row"
  }


  return (
    <div style={styleSearch} className="row justify-content-center">

      <div className="col">
        <span onClick={() => dispatch(actionOpenSearch())}>
          <IconClose />
        </span>
        <form className="form-inline mt-5 mb-5">
          <input
            style={{ width: "84%" }}
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Search" />
          <button type="submit" class="btn btn-light mb-2">Search</button>
        </form>
      </div>
    </div>
  )
}

export default FormSeven
