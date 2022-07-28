import React, { useRef, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import music from "../img/music.mp3";
import { FormattedMessage } from "react-intl";
import { Context } from "../components/Wrapper";
function Navbar(props) {
  const context = useContext(Context);
  let location = useLocation();
  const homeClass = location.pathname === "/" ? "active" : "";
  const aboutClass = location.pathname === "/about" ? "active" : "";
  const productClass = location.pathname === "/product" ? "active" : "";
  let audio = useRef();
  const [content, setContent] = useState(false);
  const [changeimg, setchangeimg] = useState("/img/nav/volumeUp.svg");
  const play = () => {
    if (changeimg === "/img/nav/volumeMute.svg") {
      setchangeimg("/img/nav/volumeUp.svg");
      audio.current.audioEl.current.pause();
    } else {
      audio.current.audioEl.current.play();
      setContent(true);
      setchangeimg("/img/nav/volumeMute.svg");
    }
  };
  const mute = () => {
    setchangeimg("/img/nav/volumeMute.svg") &&
      console.log(audio.current.audioEl.current);
  };
  window.onscroll = function () {
    if (content === true) {
      return "";
    } else {
      audio?.current?.audioEl?.current?.play();
    }
  };
  function start() {
    audio?.current?.audioEl?.current?.play();
  }
  const [volMusic, setvolMusic] = useState();
  const change = (e) => {
    setvolMusic(e.target.value / 100);
    if (e.target.value >= 1) {
      audio.current.audioEl.current.play();
    } else {
      audio.current.audioEl.current.pause();
    }
    e.target.value >= 50
      ? setchangeimg("/img/nav/volumeUp.svg")
      : e.target.value <= 1
      ? mute()
      : setchangeimg("/img/nav/volumeLow.svg");
  };
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="nav" onMouseEnter={start}>
      <nav>
        <div className="logo">
          <Link to="/">
            {" "}
            <img src="/img/nav/logo.svg" alt="" />
          </Link>
        </div>
        <ul className={isActive ? "activet" : null}>
          <li className={homeClass}></li>
          <li onClick={toggleClass}>
            <Link to="/" style={{ width: "2.6vw" }}>
              <FormattedMessage id="nav.home" />
            </Link>
          </li>
          <li className={productClass} onClick={toggleClass}>
            <Link to="/product">
              <FormattedMessage id="nav.products" />
            </Link>
          </li>
          <li className={aboutClass} onClick={toggleClass}>
            <Link to="/about">
              <FormattedMessage id="nav.about" />
            </Link>
          </li>
          <li>
            <a href="/#showroom" onClick={toggleClass}>
              <FormattedMessage id="nav.showroom" />
            </a>
          </li>
          <li>
            <a href="/#partner" onClick={toggleClass}>
              <FormattedMessage id="nav.partner" />
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={toggleClass}>
              <FormattedMessage id="nav.contact" />
            </a>
          </li>
          <li>
            <select value={context.locale} onChange={context.selectLanguage}>
              <option value="uz">O'z</option>
              <option value="ru">Ру</option>
              <option value="en">En</option>
            </select>
          </li>
          <li onClick={toggleClass}>
            <div className="volume">
              <div className="upper" onClick={play}>
                <img src={changeimg} alt="" />
                <ReactAudioPlayer
                  src={music}
                  ref={audio}
                  autoPlay
                  controls
                  volume={volMusic}
                  id={"ms"}
                  style={{ display: "none" }}
                />
              </div>
              <input type="range" onChange={change} name="" id="" />
            </div>
          </li>
          <li onClick={toggleClass}>
            <a href="tel: +998712483494">
              <button style={{ borderRadius: ".6vw" }}>
                <img src="/img/nav/call.svg" alt="" style={{ width: "1vw" }} />
                99 111 17 33
              </button>
            </a>
          </li>
        </ul>
        <div className="hamb" onClick={toggleClass}>
          <span>
            <img src="/img/home/hamb.svg" alt="toys" />
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
