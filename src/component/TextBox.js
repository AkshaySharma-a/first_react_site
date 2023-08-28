import React, { useState } from "react";
import PropTypes from 'prop-types'

// useState for all text function

export default function TextBox(prop) {
  const [text, setText] = useState("");

  //  text Area

  const textonChange = (event) => {
    setText(event.target.value);
  };

  // uppercase every thing
  const upperCaseonClick = () => {
    setText(text.toUpperCase());
    prop.showAlert("Uppercase success","success");
  };

  // Lower Case every thing
  const LowerCaseonClick = () => {
    setText(text.toLowerCase());
    prop.showAlert("lowercase success","success");
  };

  //  uppercase only selected text

  const upperCasesel = () => {
    let select = window.getSelection().toString();
    let newtext = text.replace(select, select.toUpperCase());
    setText(newtext);
    prop.showAlert("Uppercase selected text success","success");
  };

  //  Lowercase only selected text

  const LowerCaseonsel = () => {
    const select = window.getSelection().toString();
    const lowercase = select.toLowerCase();
    const newtext = text.replace(select, lowercase);
    setText(newtext);
    prop.showAlert("LowerCase selected text success","success");
  };
  
  
  const clear = () => {
    setText("")
    prop.showAlert("Clear success","success");
  }

  const removExtraSpace = () => {
    text.replace(' ','+')
  }
  
  const words = text.match(/\b\w+\b/g);
  const wordCount = words ? words.length : 0;

  return (
    <>
    {/* text box page */}
      <div style= {{backgroundColor:prop.Mode}}>
          <div>
        <div className="mb-3" >
          
          {/* mode toggel button */}

          {/* <button onClick={toggleStyle}>{btnText}</button> */}

          <h1  style={{color:prop.textColor}}>{prop.Heading}</h1>

          <textarea
            className="form-control textboxcolor"
            id="exampleFormControlTextarea1"
            placeholder="Enter Text Here"
            onChange={textonChange}
            value={text}
            rows="12"
            style={{backgroundColor:prop.textColor === '#343a40'? '#f8f9fa':'#343a40',color:prop.textColor}}
          ></textarea>
        </div>

        {/* text area action button  */}

        <button className="btn btn-primary mx-2 my-2"onClick={upperCaseonClick}>Uppercase All</button>
        <button className="btn btn-primary mx-2 my-2" onClick={upperCasesel}>Select For Uppercase</button>
        <button className="btn btn-primary mx-2 my-2"onClick={LowerCaseonClick}>Lower case All</button>
        <button className="btn btn-primary mx-2 my-2" onClick={LowerCaseonsel}>{" "}select For Lower case
        </button>
        <button className="btn btn-primary mx-2 my-2"onClick={clear}>Clear</button>
      
      </div>

      {/* word deatil */}

      <div className="container my-3" style={{color: prop.textColor}}>
        <h1>More Details</h1>

        <h3>
          word : {wordCount} <br />
          charactor : {text.replaceAll(" ", "").length} <br />
          reading time :{" "}
          {text.split(" ").length *  0.00769230769 - 0.00769230769 } minute
        </h3>

        {/* use to show text Preview */}

        <div className="container">
        <h1> <br/> Text Preview </h1>
        <p> <br/> {text}{" "} </p>
        </div>
        
      </div>
      </div>
    </>
  );
}
