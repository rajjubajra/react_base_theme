import React, { useState, useEffect } from 'react'
import Blogs from './Blogs';
import axios from 'axios';
import { d8develRESTAPI } from '../../data/dataSourceUrl';
import Nav from '../../components/header/Nav';
import { ToUniqueArray } from './ToUniqueArray';


export const BlogOne = () => {

  /** DATA FETCHING */
  const develUrl = d8develRESTAPI.DATAURL;
  /** SET DATA INTO state */
  const [d8devel, setD8Devel] = useState([]);
  /** Available data for months */
  const [dateMonths, setDateMonths] = useState([]);
  const [dateYear, setDateYear] = useState([]);
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);
  const dataLength = d8devel.length;


  useEffect(() => {
    axios({
      method: 'GET',
      url: develUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        console.log(res.data);
        setD8Devel(res.data);
        let months = [];
        let years = [];
        res.data.map(item => {
          let data = new Date(item.created[0].value);
          months.push(data.getMonth());
          years.push(data.getFullYear());
        })
        setDateYear(years);
        setDateMonths(months);
      })
      .catch(err => console.log(err))
    //setReadMore(false);
    console.log("useEffect 2");
  }, [develUrl])

  useEffect(() => {
    /** removes duplicate months from the array */
    setMonth(ToUniqueArray(dateMonths));
    setYear(ToUniqueArray(dateYear))
  }, [dateMonths, dateYear])

  // console.log("BLog devel", d8devel.length > 0 && d8devel);
  // console.log("data months", dateMonths, "month", month, "year", year);

  return (
    <div>
      <Nav />
      <Blogs
        dataLength={dataLength}
        devel={d8devel}
        month={month}
        year={year}
      />

    </div>
  )
}
export default BlogOne;