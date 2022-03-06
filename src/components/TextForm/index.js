import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextForm({title,theme,showAlert}) {
    const [text,setText]= useState('Enter Text Here');
    const [outputText,setOutputText]= useState('');

    const handleTextChange = (e)=>{
        const {value}=e.target;
        const newText = value.split(/[ ]+/).join(' ');
        // console.log(' Handle Text called  ',value.slice(-1).charCodeAt(0));
        setText(newText[0]===' '?'':newText);
    }

    const copyToClipboard=()=>{
        navigator.clipboard.writeText(text);
        showAlert(`Copied to clipboard`,"success");
      };

    const handleMinify = ()=>{
        let newText = text.split(/[ ]+/);
        newText = newText.join('');
        newText = newText.split(/\n+/);
        newText = newText.join('');
        setOutputText(newText);
        showAlert("Minified","success");
    }

    const handleCaseClick = (e) =>{
        const {name} = e.target;
        setText(prevText=> name==='upper'?prevText.toUpperCase():prevText.toLowerCase());
        showAlert(`Converted to ${name.toUpperCase()} case`,"success");
    }
    return (
        <div className='container my-3'>
            <h1>{title}</h1>
            <div className="row mb-3">
                <textarea className="col mx-2" style={theme?{backgroundColor:'rgb(36 54 82)',color:'white'}:null} value={text} onChange={handleTextChange} id="myBox" rows="16"></textarea>
                <textarea className="col mx-2" style={theme?{backgroundColor:'rgb(36 54 82)',color:'white'}:null} value={outputText} id="myOutBox" readOnly rows="16"></textarea>
            </div>
            <button className="btn btn-primary mx-1" name='upper' onClick={handleCaseClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" name='lower'  onClick={handleCaseClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" name='copy'  onClick={copyToClipboard}>Copy to clipboard</button>
            <button className="btn btn-primary mx-1" name='removeSpace'  onClick={handleMinify}>Minify</button>
            <div className="summary my-3">
                <h1>Your Object Summary</h1>
                <p>Your text contains {text.slice(-1)===' '?text.split(' ').length-1:text.split(' ').length} words and {text.length} characters</p>
                <h2>{(0.008 * text.split(' ').length).toPrecision(4)} minutes read</h2>
            </div>
            
        </div>
    )
}

TextForm.propTypes = {
        title: PropTypes.string,
    }

export default TextForm

