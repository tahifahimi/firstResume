import React from "react";
// import styles from "./designCss.css";
import "./designCss.css";
import data from "./data.json";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className="App">

      <div className="navigation">
        <nav>
          <ul className="listbar">
            <li><a href="#home">Home</a></li>
            <li className="topnav_bar"><a href="#news">News</a></li>
            <li className="topnav_bar"><a href="#sign">Sign In/up</a></li>
          </ul>
        </nav>
      </div>

      <div className="fullPage">
        <h1 className="title">{data.title}</h1>
        <div>
          {Object.keys(data.link).map(key => {
            return <SocialIcon url={data.link[key]} />;
          })}
          <p>{data.description}</p>
        </div>
      </div>

      <div className="fullPage">
        <div>
          <h2 className="about">{data.sections[0].title}</h2>
        </div>
        <div>
          <p>{data.sections[0].items[0].content}</p>
        </div>
      </div>

      <div className="fullPage">
        <div>
          <h2 className="skills">{data.sections[1].title}</h2>
        </div>
        <div>
          <h3>{data.sections[1].items[0].content.discription}</h3>
          <h3>{data.sections[1].items[1].content.discription}</h3>
          <h3>{data.sections[1].items[2].content.discription}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
