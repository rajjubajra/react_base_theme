import React from 'react'
import person1 from '../../images/person-1.jpg';
//import person2 from '../../images/person-2.jpg';
//import person3 from '../../images/person-3.jpg';

const B2Review = ({name, info}) => {
  return (
    <div className="b2review">

      <div className="person"><img src={person1} alt="person" /></div>
      <div className="text">
        <p>{info}</p>
        <h3 style={{textTransform: "capitalize", fontStyle:"italic"}}>{name}</h3>
      </div>
    </div>
  )
}

export default B2Review;
