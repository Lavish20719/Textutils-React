import React, {useState} from "react";


export default function TextForm(props) {
    //upper Case function
     const handleUpClick =()=>{
           
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppe  rCase",'success');
     }
      //lower Case function

      const handleLowClick =()=>{
           
        let newText = text.toLowerCase();
        setText(newText);
         props.showAlert("Converted To LowerCase",'success');
     }

     //clear text function
     const handleClearTextClick =()=>{
       setText("");
        props.showAlert("Text Cleared",'success');
     }
     
     //copy text function

     const handleCopyText = ()=>{
          let text = document.getElementById("myBox");
          text.select();
          navigator.clipboard.writeText(text.value);
             props.showAlert("Copy To Clipbord",'success');
     }

     //Remove Extra spaces function 

     const handleRemoveExtraSpace = ()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
          props.showAlert("Removerd Extra Space",'success');
     }

   //handle on change function
      const handleOnChange =(event)=>{
        
        setText(event.target.value)
     }
  

    const [text, setText] = useState('');
  return (
   <>
     <div className="container" style={{color:props.mode ==='light'?'#042743':'white'}}>
       <h1>{props.heading}</h1>
         <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode ==='light'?'#042743':'white'}} id="myBox" rows="9"> </textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
     </div>
    <div className="container my-3" style={{color:props.mode ==='light'?'#042743':'white'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{text.split(' ').length*0.008} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text:'Enter something in the textbox above  to preview it here'}</p>
    </div>
    </>
  );
}
