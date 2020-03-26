import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

import data from "./data.json";

import "./mainCss.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation"></div>

        <div className="firstSection">
          <h1 className="title">{data.title}</h1>
          <div className="icons-wrapper">
            {Object.keys(data.link).map(key => {
              return(
              <div className="icons">
                <SocialIcon url={data.link[key]} />
              </div>);
            })}
          </div>
          <p className="texticons">{data.discription}</p>
        </div>

        <div className="secondSection">
          <h3>{data.sections[0].title}</h3>
          <p className="paragraphs">{data.sections[0].items.content}</p>
        </div>

        <div className="thirdSection">
          <h3>{data.sections[1].title}</h3>
          <div className="cards">
            {data.sections[1].items.map(eachSkill => {
              return (
                <div className="logoanddiscription">
                  <div className="image-wrapper">
                  <img src={eachSkill.content.image}></img>
                    </div>
                  <h4 className="skill-text">{eachSkill.content.discription}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
