import React, { useState, useEffect } from 'react'

function Box(props) {


  const [numOfBox, setNumOfBox] = useState([]);
  const btn = [1, 3, 6, 9];

  const { fetched, links } = props;


  useEffect(() => {

    let arr = [];
    for (let i = 0; i <= 11; i++) {
      arr.push(i);
    }
    setNumOfBox(arr);
  }, [])

  console.log("fetched links", fetched)

  return (

    numOfBox.length > 0 && numOfBox.map(item => {
      return btn.forEach(function (btnid) {
        btnid === item ? <div>Button</div> : <div>{item}</div>
      })
    })
  )

}

export default Box