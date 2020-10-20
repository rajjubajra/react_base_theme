import React, { useRef, useState } from 'react';

/** This Component  
 * displays share Icon
 * copies current url on click on share icon
 */

function CopyToClipBoard() {

  const [isCopied, setCopied] = useState(false);
  const textAreaRef = useRef(null);

  /** copy current url */
  const copyContent = window.location;

  function CbCopy() {
    textAreaRef.current.select();//selectes from form input field

    document.execCommand('copy');// copy to clipboard
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
            Share</span>
      }
      <form style={{ position: "relative", top: "-1000000px", width: "0px" }}>
        <textarea
          ref={textAreaRef}
          value={copyContent}
        />
      </form>
    </>
  )


}
export default CopyToClipBoard


