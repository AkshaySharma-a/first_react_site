import './App.css';
import React from "react";
import NavBar from './component/NavBar';
import TextBox from './component/TextBox';
import About from './component/About';
import Alert from './component/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  // dark mode enable or disebal
  const [Mode, setMode] = useState("light");
  const [text, settext] = useState("☀️")
  const [textColor, settextColor] = useState("#343a40")
  const [alertText, setalertText] = useState(null)

  // ======>alert<=====

  const showAlert = (msg, type) => {
    setalertText({
      msg: msg,
      type: type,
    })
    setTimeout(() => {
      setalertText(null)
    }, 1500);

  }

    // =======>dark or light mode <======

  const toggeldarkmode = () => {
    if (Mode === "light") {
      setMode('dark');
      settext("🌙")
      settextColor("#f8f9fa")
      document.body.style.backgroundColor = "#343a40"
      document.body.style.Color = "#f8f9fa"
      showAlert("Enable dark mode", "success");

    } else {
      setMode('light')
      settext("☀️")
      settextColor("#343a40")
      document.body.style.backgroundColor = "#f8f9fa"
      document.body.style.Color = "#343a40"
      showAlert("Enable Light mode", "success");
    }
  }


  // =======>dark or Color mode <======

  const[colorMode,setColorMode]=useState("")


  const toggelColorMode = (newValue) => {
    setColorMode(newValue)
    document.body.style.backgroundColor = colorMode
    // document.body.style.Color =ColorChecker(colorMode)
  }


 


  

  

  return (

    // =====>component<=====


    <>
      {/* =====>title<====== */}

      <NavBar Title="Text Manipulation" Abot="About" Home="Home" Mode={Mode} toggeldarkmode={toggeldarkmode} text={text} textColor={textColor} toggelColorMode={toggelColorMode} />

      {/* =====>alert<====== */}

      <Alert alert={alertText} textColor={textColor} />

      {/* =====>router<====== */}
      <Router>
        <Routes>

          {/* ======> About <====== */}
          <Route exact path="/about" element={<div className="container"><About textColor={textColor} />
          </div>}></Route>

          {/* =====>text box<====== */}
          <Route exact path="/" element={<div className="container my-3" >
            <TextBox Heading=" Let's Modify your text" Mode={Mode} textColor={textColor} showAlert={showAlert} /></div>}> </Route>

        </Routes>
      </Router>

    </>
  );
}

export default App;
