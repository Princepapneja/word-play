import React,{useState} from "react";

export default function Logics(props) {
    const cleartext=()=>{
        setText("")
        props.alert("Text Cleared","warning")
    setTimeout(() => {
      props.alert(null,null)
      
    }, 1000);
    }
    // const toogleCase=()=>{
    // setText(text.split(" "))
    // }
    const upperCase=()=>{
        setText(text.toUpperCase())
        props.alert("Converted in to UpperCase","success")
    setTimeout(() => {
      props.alert(null,null)
      
    }, 1000);
        }
    const lowerCase=()=>{
        setText(text.toLowerCase())
        props.alert("Converted in to LowerCase","success")
        setTimeout(() => {
          props.alert(null,null)
          
        }, 1000);  
      }
    const change=(event)=>{
    setText(event.target.value)
    }

    const [text, setText]= useState('');

    return (

    <div className="container my-4">
      <div className="form-floating">
        <textarea
          className="rounded p-2" cols="150" rows="10"
          value={text} onChange={change}
          id="floatingTextarea"
        ></textarea>
      </div>
      <button className="btn btn-primary my-2 mx-2" onClick={upperCase}>Convert into UpperCase</button>
      <button className="btn btn-primary my-2 mx-2" onClick={lowerCase}>convert into LowerCase</button>
      <button className="btn btn-primary my-2 mx-2" onClick={cleartext}>Clear Text</button>
      <br />
      <span>  {text.split(" ").filter((element)=>{ return element.length!==0}).length} words, {text.length} Characters and {text.length-(text.split(" ").length-1)} Characters(Without Spaces)</span>
      <br />
      <h2>Preview</h2>
      {<p className="p-2 rounded">{text===""?"Enter in Upper box to Preview":text}</p>  }
    </div>
  );
}
