import React, { useState } from "react";

export default function Forms(props) {
  const onchanger = (event) => {
    setText(event.target.value);
  };

  const uppercaser = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    setGoodone("We are happy to help you keep visiting");
  };

  const lowercaser = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    setGoodone("We are happy to help you keep visiting");
  };

  const claerer = () => {
    let newtext = "";
    setText(newtext);
    setGoodone("We are happy to help you keep visiting");
  };

  const copier = () => {
    let copy123 = document.getElementById("exampleFormControlTextarea1");
    copy123.select();
    navigator.clipboard.writeText(copy123.value);
    setGoodone("We are happy to help you keep visiting");
  };

  const [text, setText] = useState("");
  const [goodone, setGoodone] = useState("");

  return (
    <div>
      <div className="mb-3 my-5">
        <h1 className="my-2">{props.newtitle}</h1>
        <textarea
          className="form-control  my-2"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={onchanger}
          placeholder={"Enter the text here"}
        >
          this is dummy
        </textarea>

        <button className="btn btn-primary my-3 mx-3" onClick={uppercaser}>
          Convert to upper case
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={lowercaser}>
          Convert to lower
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={claerer}>
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={copier}>
          Copy Text
        </button>

        {/* <h3 className='my-2 mx-5' onClick={()=>{uppercaser();lowercaser();claerer();copier();}}>{goodone}</h3> */}
        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>
            {0.008 * text.split(" ").length} min average reading time required{" "}
          </p>
        </div>
       <h4>{goodone}</h4>
      </div>
    </div>
  );
}
