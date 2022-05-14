import React from "react";
import "./App.css";
import tattoo from "./assets/img/tattoo.png";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <div className="App">
      <div className="nav flex row sb">
        <div className="nav-logo flex row sb">
          <img src={logo} alt="tattoo" />
          <h4>Heavan Tattooz</h4>
        </div>
        <div className="nav-mid flex-1 flex sa">
          <a className="nav-item pointer" href="#">
            Home
          </a>
          <a className="nav-item pointer" href="#">
            About
          </a>
          <a className="nav-item pointer" href="#">
            Price
          </a>
          <a className="nav-item pointer" href="#">
            Contact
          </a>
        </div>
        <div>
          <button className="pointer">do something</button>
        </div>
      </div>
      <div id="home" className="home flex col">
        <h5 className="subtle-title">Heavan Tattooz takes you to Heaven</h5>
        <div className="door-opening"></div>
        <div className="door-opening-1"></div>
        <img className="tattoo-image" src={tattoo} alt="" />

      </div>
    </div>
  );
}

export default App;
