import React, { useState, useEffect, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { Context } from "../components/Wrapper";
import { FormattedMessage } from "react-intl";
function Product() {
  const [rest, setrest] = useState([]);
  useEffect(() => {
    const axiosGet = async () => {
      const response = await axios.get(
        "https://api.dev.therepublicoftoys.uz/api/v1/offers"
      );
      setrest(response.data);
    };
    axiosGet();
  }, []);
  let context = useContext(Context)
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <Tabs defaultIndex={localStorage.getItem('activetoy')}>
      <div className="container products">
        <div className="tabs__grid">
          <h2><FormattedMessage id="home.cotegory" /></h2>
          
          <h1><button  onClick={toggleClass}><FormattedMessage id="home.cotegory" /></button><FormattedMessage id="nav.products" /></h1>
          <TabList className="tabs" className={isActive ? 'actab tabs': 'tabs'}>
            <Tab>
              <button onClick={()=>{
                toggleClass()
                localStorage.setItem('activetoy', 0)
                }}><FormattedMessage id="cotg.1" /></button>
            </Tab>
            <Tab>
              <button   onClick={()=>{
                toggleClass()
                localStorage.setItem('activetoy', 1)
                }}><FormattedMessage id="cotg.2" /></button>
            </Tab>
            <Tab>
              <button  onClick={()=>{
                toggleClass()
                localStorage.setItem('activetoy', 2)
              }}><FormattedMessage id="cotg.3" /></button>
            </Tab>
            <Tab>
              <button  onClick={()=>{
                toggleClass()
                localStorage.setItem('activetoy', 3)
              }}><FormattedMessage id="cotg.4" /></button>
            </Tab>
            <Tab>
              <button  onClick={()=>{
                toggleClass()
                localStorage.setItem('activetoy', 4)
              }}><FormattedMessage id="cotg.5" /></button>
            </Tab>
            <Tab>
              <button  onClick={()=>{
                toggleClass()
                localStorage.setItem('activetoy', 5)
              }}><FormattedMessage id="cotg.6" /></button>
            </Tab>
            <div onClick={toggleClass} className="tab-closer">

            </div>
          </TabList>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "Машинки")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://api.dev.therepublicoftoys.uz" + item?.img1
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.title_uz
                          : context.locale === "ru"
                          ? item.title_ru
                          : item.title_uz}
                      </p>
                      <span><FormattedMessage id="sums"/></span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "Конструкторы")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://api.dev.therepublicoftoys.uz" + item?.img1
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.title_uz
                          : context.locale === "ru"
                          ? item.title_ru
                          : item.title_uz}
                      </p>
                      <span><FormattedMessage id="sums"/></span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "девчонок")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://api.dev.therepublicoftoys.uz" + item?.img1
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.title_uz
                          : context.locale === "ru"
                          ? item.title_ru
                          : item.title_uz}
                      </p>
                      <span><FormattedMessage id="sums"/></span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "уморазвития")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://api.dev.therepublicoftoys.uz" + item?.img1
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.title_uz
                          : context.locale === "ru"
                          ? item.title_ru
                          : item.title_uz}
                      </p>
                      <span><FormattedMessage id="sums"/></span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "плашадок")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://api.dev.therepublicoftoys.uz" + item?.img1
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.title_uz
                          : context.locale === "ru"
                          ? item.title_ru
                          : item.title_uz}
                      </p>
                      <span><FormattedMessage id="sums"/></span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "Спортивные")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://api.dev.therepublicoftoys.uz" + item?.img1
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.title_uz
                          : context.locale === "ru"
                          ? item.title_ru
                          : item.title_uz}
                      </p>
                      <span><FormattedMessage id="sums"/></span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
}

export default Product;
