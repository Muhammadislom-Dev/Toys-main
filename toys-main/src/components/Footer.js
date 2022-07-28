import React from "react";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <div className={"footer"}>
      <footer>
        <div className="logo">
         <a href="/"> <img src="/img/footer/logo.svg" alt="" /></a>
        </div>
        <div className="social">
          <p>
            <FormattedMessage id="footer.1" />
          </p>
          <div className="networking">
            <a href="https://t.me/therepublicoftoys" target={"_blank"}>
              <img src="/img/footer/telegram.svg" alt="" />
            </a>
            <a href="https://www.facebook.com/Polimer-Plastik_uz-106158995132744/" target={"_blank"}>
              <img src="/img/footer/facebook.svg" alt="" />
            </a>
            <a href="https://www.instagram.com/polimerplastikuz/?utm_medium=copy_link" target={"_blank"}>
              <img src="/img/footer/igram.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="adress">
          <div className="row">
            <img src="/img/footer/call.svg" alt="" />
            <div>
              <h3>+998 (71) 248-34-94</h3>
              <p>
                <FormattedMessage id="footer.2" />
              </p>
            </div>
          </div>
          <div className="row">
            <img className="w-4" src="/img/footer/loca.svg" alt="" />
            <div>
              <p>
                <FormattedMessage id="footer.3" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
