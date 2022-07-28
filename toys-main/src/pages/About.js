import React from "react";
import { FormattedMessage } from "react-intl";
function About() {
  return (
    <div className="container">
      <div className="about__page">
        <div className="item__about">
          <h1>
            <FormattedMessage id="nav.about" />
          </h1>
          <p>
            <FormattedMessage id="add.ab" />
          </p>
        </div>
        <div className="item__about">
          <div className="grid__imgs">
            <img src="../img/about/image 6.png" alt="toys" />
            <img
              src="../img/about/image 5.png"
              alt="toys"
              style={{ top: "5vw" }}
            />
            <img src="../img/about/image 7.png" alt="toys" />
            <img
              src="../img/about/image 8.png"
              alt="toys"
              style={{ top: "5vw" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
