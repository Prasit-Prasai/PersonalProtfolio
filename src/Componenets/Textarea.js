
import React,{useState} from 'react'



export default function Textarea(props) {
    const [text,setText] = useState('Enter your text here');
    const touppercasechange= ()=>{
        console.log("hii clicked");
        let uppercasetext = text.toUpperCase();
        setText(uppercasetext)
            }
            const handleonchange = (event)=>{
        // console.log("hii there");
        setText(event.target.value)
            }
            const tolowercasechange= ()=>{
                // console.log("hii clicked");
                let uppercasetext = text.toLocaleLowerCase();
                setText(uppercasetext)
                    }
    return (
    <>
 <div className='Container'> 
        <h1>{props.heading}</h1>
       <textarea className="form-control" aria-label="With textarea" value={text} onChange={handleonchange} rows="13"></textarea>
        <button className="btn btn-primary" onClick={touppercasechange} spacing = "0.5 rm">Convert to Uppercase</button>

        <button className="btn btn-primary" onClick={tolowercasechange}>Convert to Lowercase</button>
</div>
<div className="container my-3" style={{ whiteSpace: 'pre-line' }}>
    <h1>Summary of text above : </h1>
    Number of words : {text.split(" ").length}
    
    Number of characters : {text.length}
</div>

</>
  )
}
