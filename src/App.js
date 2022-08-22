import "./App.css";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import TextForm2 from "./components/TextForm2";
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
    }
  };
  return (
    // <Router>
    <>
      <Navbar
        title="Textutils"
        about="About us"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert showalert={showalert} />
      <div className="container">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Route exact path="/"> */}
           <TextForm2
            alert={alert}
            heading="Enter text below to analyse"
            mode={mode}
            togglemode={togglemode}
         />
          {/* </Route>
        </Switch> */}
       
      </div>
    {/* </Router> */}
    </>
  );

}

export default App;
