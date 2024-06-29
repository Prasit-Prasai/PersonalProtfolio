
import React,{useState} from 'react'



export default function Textarea(props) {
    const [text,setText] = useState('Enter your text here ');
    const handleonclick = ()=>{
        console.log("hii clicked");
        let uppercasetext = text.toUpperCase();
        setText(uppercasetext)
            }
            const handleonchange = (event)=>{
        console.log("hii there");
        setText(event.target.value)
            }
    return (
    
 <div>
        <h1>{props.heading}</h1>
       <textarea className="form-control" aria-label="With textarea" value={text} onChange={handleonchange} rows="13"></textarea>
        <button className="btn btn-primary" onClick={handleonclick}>Convert to Uppercase</button>
</div>



  )
}
