import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was clicked"  +text);
    let newText = text.toUpperCase();
    props.showAlert("Converted to uppercase!", "success");
    setText(newText);
  }

  const handleLoClick = () => {
    //console.log("UpperCase was clicked"  +text);
    let newText = text.toLowerCase();
    props.showAlert("Converted to lowercase!","success")
    setText(newText);
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared Text!","success")
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    props.showAlert("Copied to clipboard!","success")
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Space!","success")
  }



  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  }


  const [text, setText] = useState("");
  return (
    <>
  <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='light'?'white':'#042743',color: props.mode==='light'?'#042743':'white'}} onChange={handleOnChange} rows="8"></textarea>
    </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3 " style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} word and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{ text.length>0?text:"Enter something  in the above to preview it here"}</p>

      </div>

      </>
  );
}
