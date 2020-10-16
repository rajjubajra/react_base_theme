import React, { useState } from 'react'

function BlogFilterForm(props) {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');


  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  return (
    <div className="form-row">
      <div className="form-group col-md-6">
        <label>Year</label>
        <select className="form-control"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option defaultValue>Choose...</option>
          {
            props.year.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
            })
          }
        </select>
      </div>
      <div className="form-group col-md-4">
        <label>Month</label>
        <select className="form-control"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option defaultValue>Choose...</option>
          {
            props.month.map((item, index) => {
              return <option key={index} value={item}>{month[item]}</option>
            })
          }
        </select>
      </div>
    </div>
  )
}

export default BlogFilterForm
