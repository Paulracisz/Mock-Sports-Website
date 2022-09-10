import React from "react";
import "./App.css";
import WhiteLogo from "./resources/Next Level Supplements-logos_white.png";
import BasketballPic from "./resources/basketball-man-jumping-playing-8k-h4.jpg";
import MagnifyingGlass from './resources/icons8-search-24.png'

function App() {
  return (
    <main lang="en" className="App">
      <header className="App-header">
        <img className="white-logo" alt="logo" src={WhiteLogo} />
        <h1 className="main-header">Next Level Performance</h1>
        <h1 className="main-header">Shop</h1>
        <h1 className="main-header">About Us</h1>
        <h1 className="main-header">Contact</h1>
        <div className="search-bar">
          <div className="topnav">
            <img className="magnifying-glass" alt="magnifying glass" src={MagnifyingGlass}/>
            <input type="text" placeholder="Search.."></input>
          </div>
        </div>
      </header>
      <img className="card-pic" alt="man slam dunking" src={BasketballPic} />
      <div className="black-text-box">
        <h2 className="card-header-top">
          Next Level Performance For Half The Cost
        </h2>
        <p className="flavor-text">
          Next Level Performance Supplements has the best dietary supplements,
          designed to keep you at the top of your game.
        </p>
        <h2>Scientifically Proven</h2>
        <p className="flavor-text">
          We worked with the fields leading experts to ensure that we are
          delivering data driven products.
        </p>
      </div>
      <footer></footer>
    </main>
  );
}

export default App;
