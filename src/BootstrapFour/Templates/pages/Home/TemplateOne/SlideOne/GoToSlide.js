import React, { useState } from 'react'
import { useEffectOnce } from 'react-use';

const divStyle = {
  width: "100%",
  position: "absolute",
  bottom: "10px",
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
    <div style={divStyle}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
    </div>
  )
}

export default GoToSlide;
