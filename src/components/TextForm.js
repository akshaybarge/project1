import React, {useState} from 'react'

export default function TextForm(props) {
    //console.log('TF',props.setcolor.color);
    const handleUpClick = () =>{
        let newtxt = text.toUpperCase()
        setText(newtxt)
        props.showalert("Converted to Uppercase","success");
    }
    const handleClearTxt = () =>{
        let newtxt = "";
        setText(newtxt)
        props.showalert("Text Cleared","success");
    }
    const handleCopyTxt = () =>{
        let txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showalert("Text Copied","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handleExtractEmail = () =>{
        function extractEmails (text)
        {   props.showalert("Email Extracted","success");
            return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        }

        let a = extractEmails(text);
    console.log(a)}
    let [text,setText] = useState("");
    /* text = "new text" wrong way to change the state */
    /* setText("new text"); //correct way to change the state */

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'White':'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{backgroundColor: props.setcolor.color, color:props.mode==='dark'?'White':'black',resize:'none'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-primary mx-1 ${text?'':'disabled'}`} onClick={handleUpClick} >UpperCase</button>
            <button className="btn btn-primary mx-1 " onClick={handleExtractEmail}>Extract Email</button>
            <button className="btn btn-primary mx-1" onClick={handleClearTxt}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyTxt}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'White':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text===""?"Enter something to preview":text}</p>
        </div>
        </>
    )
}
