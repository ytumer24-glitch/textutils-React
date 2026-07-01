import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleSentenceCase = () => {
        let newtext = text.toLowerCase()
        .replace(/(^\s*\w|[.!?]\s+\w)/g, match => match.toUpperCase());
        setText(newtext)
        props.showAlert("Converted to Sentence Case!", "success");
    }

    const handleclear = () => {
        setText("")
        props.showAlert("Text cleared!", "success");
    }

     const handleOnChange = (event) => {
        setText(event.target.value)
    }

    
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : ' #042743'}}></textarea>
  <button className="btn btn-warning my-3 mx-2"onClick={handleSentenceCase}>Convert to Sentence Case</button>
  <button className="btn btn-primary my-3 mx-2"onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-success my-3 mx-2"onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-danger my-3 mx-2"onClick={handleclear}>Clear Text</button>
   </div>
    </div>
    <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>Minutes to read: {0.008 * text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : "Enter text in the textbox above to preview it here."}</p>
    </div>
    </>
  )
}
