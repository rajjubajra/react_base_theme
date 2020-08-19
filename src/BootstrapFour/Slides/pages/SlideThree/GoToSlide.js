import React, { useState } from 'react'
import { useEffectOnce } from 'react-use';


const gotoBulletStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  zIndex: "10"
}



function GoToSlide(props) {

  const [dotArr, setDotArr] = useState([]);


  useEffectOnce(() => {
    let row = [];
    function Dots() {
      for (let i = 0; i <= (props.dataLength - 1); i++) {
        row.push(0)
      }
      setDotArr(row);
    }
    Dots();

  }, [])

  //console.log(dotArr);

  return (

    <div style={gotoBulletStyle}>
      {
        dotArr.map((item, index) => {
          return <div
            /** props pass to parent component */
            onClick={() => props.goToTheSlide(index)}
            /** Individual DOT style */
            style={{
              color: index === props.activeSlide ? "#fff" : "#888",
              fontWeight: "900",
              margin: "10px",
              cursor: "pointer"
            }}
            key={index}>{item}</div>
        })
      }
    </div>

  )
}

export default GoToSlide;
