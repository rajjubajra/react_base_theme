import React from 'react'
import Button from './Button';


function ButtonGroup() {
  return (
    <div className="button-group">
      <Button name="All" datafilter="*" />
      <Button name="Food" datafilter=".food" />
      <Button name="Music" datafilter=".music" />
      <Button name="Upcoming" datafilter=".upcoming" />
    </div>
  )
}

export default ButtonGroup