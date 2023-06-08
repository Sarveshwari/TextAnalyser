
import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpclick =()=>{
        let newtext=text.toUpperCase();
        setText(newtext)

    }
    const handleLoclick =()=>{
        let newtext=text.toLowerCase();
        setText(newtext)

    }
   const handleOnchange =(event)=>{
       setText(event.target.value)
    }
    const[text, setText]=useState("Enter text here");
  return (
    <>
    <div>
    <h5>{props.heading}</h5>
    <div class="mb-3">
      
        <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
      </div>
      <div className="container my-5">
        <h3>Text Analysis Results : </h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
      </>
  )
}

