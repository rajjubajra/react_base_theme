import React, { useRef, useState, useEffect } from 'react';

/** This Component  
 * displays share Icon
 * copies current url on click on share icon
 */

function CopyToClipBoard(props) {

  const [isCopied, setCopied] = useState(false);
  const textAreaRef = useRef(null);
  const [imageUri, setImageUri] = useState('');


  useEffect(() => {
    setImageUri(props.image_uri)
  }, [props.image_uri])
  /** copy current url */


  function CbCopy() {
    textAreaRef.current.select();
    //console.log("SELECTED", textAreaRef);
    document.execCommand('copy');
    //console.log(document.execCommand('copy'));
    setCopied(true);
  }
  function CBClear() {
    setCopied(false)
  }


  const btStyle = {
    margin: "14px",
    cursor: "pointer"
  }


  return (
    <>
      {
        document.queryCommandSupported('copy') &&
          isCopied
          ? <span style={btStyle} className="small-font" onClick={CBClear}>
            Copied</span>
          : <span style={btStyle} className="small-font" onClick={CbCopy}>
            Copy Image Uri</span>
      }
      <form style={{ position: "relative", top: "-1000000px", width: "0px" }}>
        <textarea
          ref={textAreaRef}
          defaultValue={imageUri}
        />
      </form>
    </>
  )


}
export default CopyToClipBoard


