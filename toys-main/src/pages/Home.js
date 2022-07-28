import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import AOS from "aos";
import { FormattedMessage } from "react-intl";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Context } from "../components/Wrapper";
import Modal from "react-modal";
const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
};
function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function clr() {
    document.querySelectorAll(".clear").forEach((item) => (item.value = ""));
    setIsOpen(true);
  }
  let brow;
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    brow = "Opera";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    brow = "Chrome";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    brow = "Safari";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    brow = "Firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    brow = "IE"; //crap
  } else {
    brow = "Unknown";
  }
  useEffect(() => {
    AOS.init({
      // offset: 400,
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
      disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
    AOS.refresh();
  }, []);
  const [Statisic, setStatisic] = React.useState([]);
  const [Partner, setPartner] = React.useState([]);
  useEffect(() => {
    const axiosGet = async () => {
      const response = await axios.get(
        "https://api.dev.therepublicoftoys.uz/api/v1/statistic"
      );
      setStatisic(response?.data?.data[0]);
    };
    axiosGet();
  }, []);
  useEffect(() => {
    const axiosGet = async () => {
      const partner = await axios.get(
        "https://api.dev.therepublicoftoys.uz/api/v1/partner"
      );
      setPartner(partner?.data?.data);
    };
    axiosGet();
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };
  const settings3 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    openModal();
    // window.scrollTo(0, 0);
    let fixDate = {
      // price: 0,
      name: data.name,
      product_name: data.comment,
      price: data.number,
    };
    function buildFormData(formData, data, parentKey) {
      if (
        data &&
        typeof data === "object" &&
        !(data instanceof Date) &&
        !(data instanceof File)
      ) {
        Object.keys(data).forEach((key) => {
          buildFormData(
            formData,
            data[key],
            parentKey ? `${parentKey}[${key}]` : key
          );
        });
      } else {
        const value = data == null ? "" : data;

        formData.append(parentKey, value);
      }
    }
    function jsonToFormData(data) {
      const formData = new FormData();

      buildFormData(formData, data);

      return formData;
    }
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    axios
      .post(
        "https://api.dev.therepublicoftoys.uz/api/v1/order",
        jsonToFormData(fixDate),
        { headers }
      )
      .then((response) => clr());
    let botMessege = `
      Assalomu aleykum😊%0A
        Email: ${fixDate.price}%0A
        Nomi: ${fixDate.name}%0A
        Izohi: ${fixDate.product_name}%0A
      `;
    axios({
      method: "get",
      url: `https://api.telegram.org/bot5018242502:AAFWwydRp4iH-Gav3-LFUS85dYd30CLI7EU/sendMessage?chat_id=-1001747510834&text=${botMessege}&parse_mode=HTML`,
    });
  };

  const [Showroom, setShowroom] = useState("");
  const [Fabric, setFabric] = useState("");
  let context = useContext(Context);
  return (
    <div className="home">
      <div>
        <div className="slide__menu">
          <Slider {...settings}>
            <div>
              <div className="slide__target">
                <div className="item__one">
                  <h1>
                    <FormattedMessage id="car.1" />
                  </h1>
                  <p></p>
                  <Link to="/product" style={{ padding: "0" }}>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/btnarrow.svg" alt="toys" />
                    </button>
                  </Link>
                </div>
                <div className="item__two">
                  <img
                    src="./img/home/kamaz.png"
                    alt="toys"
                    className={"slide__img"}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="slide__target">
                <div className="item__one">
                  <h1>
                    <FormattedMessage id="car.2" />
                  </h1>
                  <p></p>
                  <Link to="/product" style={{ padding: "0" }}>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/btnarrow.svg" alt="toys" />
                    </button>
                  </Link>
                </div>
                <div className="item__two">
                  <img
                    src="./img/home/kamaz2.png"
                    alt="toys"
                    className={"slide__img"}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="slide__target">
                <div className="item__one">
                  <h1>
                    <FormattedMessage id="car.3" />
                  </h1>
                  <p></p>
                  <Link to="/product" style={{ padding: "0" }}>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/btnarrow.svg" alt="toys" />
                    </button>
                  </Link>
                </div>
                <div className="item__two">
                  <img
                    src="./img/home/kamaz3.png"
                    alt="toys"
                    className={"slide__img"}
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="download__cat">
          <div className="container">
            <a href="/img/down.pdf" download={"pdf"}>
              <button>
                <img src="./img/home/down.svg" alt="toys" />{" "}
                <FormattedMessage id="home.download" />
              </button>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="product">
            <div className="title">
              <span>
                {" "}
                <FormattedMessage id="home.cotegory" />
              </span>
              <h1>
                <FormattedMessage id="nav.products" />
              </h1>
              <hr />
            </div>
            <div className="product__body">
              <Slider {...settings2}>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <Link
                      to="product"
                      onClick={() => {
                        localStorage.setItem("activetoy", 3);
                      }}
                    >
                      <img src="./img/home/ayiqcha.png" alt="toys" />
                    </Link>
                    <p>
                      <FormattedMessage id="cotg.4" />
                    </p>
                  </div>
                </div>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <Link
                      to="product"
                      onClick={() => {
                        localStorage.setItem("activetoy", 0);
                      }}
                    >
                      <img src="./img/home/kamazcard.png" alt="toys" />
                    </Link>
                    <p>
                      <FormattedMessage id="cotg.1" />
                    </p>
                  </div>
                </div>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <Link
                      to="product"
                      onClick={() => {
                        localStorage.setItem("activetoy", 1);
                      }}
                    >
                      <img src="./img/home/shtuk.png" alt="toys" />
                    </Link>
                    <p>
                      <FormattedMessage id="cotg.2" />
                    </p>
                  </div>
                </div>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <Link
                      to="product"
                      onClick={() => {
                        localStorage.setItem("activetoy", 2);
                      }}
                    >
                      <img src="./img/home/kazan.png" alt="toys" />
                    </Link>
                    <p>
                      <FormattedMessage id="cotg.3" />
                    </p>
                  </div>
                </div>

                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <Link
                      to="product"
                      onClick={() => {
                        localStorage.setItem("activetoy", 5);
                      }}
                    >
                      <img src="./img/home/skill.png" alt="toys" />
                    </Link>
                    <p>
                      <FormattedMessage id="cotg.6" />
                    </p>
                  </div>
                </div>

                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <Link
                      to="product"
                      onClick={() => {
                        localStorage.setItem("activetoy", 4);
                      }}
                    >
                      <img src="./img/home/umer.png" alt="toys" />
                    </Link>
                    <p>
                      <FormattedMessage id="cotg.5" />
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="dino" data-aos="fade-up">
          <div className="container">
            <img data-aos="flip-right" src="./img/home/dino.png" alt="" />
            <div
              className="dino__txt"
              style={
                brow === "Safari"
                  ? { marginLeft: "0px" }
                  : { position: "relative", left: "-55px" }
              }
              data-aos="flip-left"
            >
              <div className="title">
                <span>
                  <FormattedMessage id="nav.about" />
                </span>
                <h1>
                  <FormattedMessage id="home.mader" />
                </h1>
                <hr />
              </div>
              <div className="dino__txt__body">
                <p>
                  <FormattedMessage id="home.abouttxt" />
                </p>
                <Link to="/about">
                  <button>
                    <FormattedMessage id="home.more" />{" "}
                    <img src="./img/home/cardar.svg" alt="toys" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="on__counter">
          <div className="title">
            <span>
              <FormattedMessage id="home.infograph" />
            </span>
            <h1>
              <FormattedMessage id="home.number" />
            </h1>
            <hr />
          </div>
          <div className="container">
            <div className="counter__cards">
              <div className="c__card" data-aos="flip-left">
                <h1>{Statisic.info1}+</h1>
                <p>
                  {" "}
                  <FormattedMessage id="home.numberof2" />
                </p>
              </div>
              <div className="c__card" data-aos="flip-left">
                <h1>
                  {Statisic.info2} <FormattedMessage id="home.let" />
                </h1>
                <p>
                  <FormattedMessage id="home.numberof3" />
                </p>
              </div>
              <div className="c__card" data-aos="flip-left">
                <h1>{Statisic.info3}+</h1>
                <p>
                  <FormattedMessage id="home.numberof" />
                </p>
              </div>
              <div className="c__card" data-aos="flip-left">
                <h1>{Statisic.info4}</h1>
                <p>
                  <FormattedMessage id="home.numberof4" />
                </p>
              </div>
            </div>
            <div className="txt__counter">
              {/* <h3>Lorem ipsum dolor sit </h3> */}
              <p>
                <FormattedMessage id="home.lorem" />
              </p>
            </div>
          </div>
        </div>
        <div className="protsess">
          <div className="title">
            <span>
              <FormattedMessage id="home.process" />
            </span>
            <h1>
              {" "}
              <FormattedMessage id="home.processtit" />
            </h1>
            <hr />
          </div>
          <div className="body__protsess">
            <div className="img__protsess">
              <img src="./img/home/tree.svg" alt="" />
            </div>
            <div className="column" style={{ textAlign: "right" }}>
              <p data-aos="zoom-out" style={{ left: "3vw" }}>
                {" "}
                <FormattedMessage id="home.info1" />
              </p>
              <p data-aos="zoom-out" style={{ top: "1vw", right: "1vw" }}>
                <FormattedMessage id="home.info2" />
              </p>
              <p data-aos="zoom-out" style={{ top: "1vw", right: "1vw" }}>
                <FormattedMessage id="home.info3" />
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", right: "0vw" }}>
                <FormattedMessage id="home.info4" />
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", right: "-3vw" }}>
                <FormattedMessage id="home.info5" />
              </p>
              <p data-aos="zoom-out" style={{ top: "2vw", right: "-9vw" }}>
                {" "}
                <FormattedMessage id="home.info6" />
              </p>
            </div>
            <div className="column" style={{ textAlign: "left" }}>
              <p data-aos="zoom-out" style={{ right: "3vw" }}>
                {" "}
                <FormattedMessage id="home.info12" />
              </p>
              <p data-aos="zoom-out">
                <FormattedMessage id="home.info11" />
              </p>
              <p data-aos="zoom-out" style={{ top: "1vw", left: "1vw" }}>
                <FormattedMessage id="home.info10" />
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", left: "0vw" }}>
                <FormattedMessage id="home.info9" />
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", left: "-3vw" }}>
                <FormattedMessage id="home.info8" />
              </p>
              <p data-aos="zoom-out" style={{ top: "2vw", left: "-9vw" }}>
                {" "}
                <FormattedMessage id="home.info7" />
              </p>
            </div>
          </div>
        </div>
        <div className="export">
          <div className="title">
            <span>
              <FormattedMessage id="home.world" />
            </span>
            <h1>
              <FormattedMessage id="home.world2" />
            </h1>
            <hr />
          </div>
          <div className="container" data-aos="zoom-in-down">
            <div className="txt__export">
              <p>
                <FormattedMessage id="home.lorem2" />
              </p>
            </div>
            {context.locale === "en" ? (
              <img src="./img/home/map_en.svg" alt="map toys" />
            ) : context.locale === "ru" ? (
              <img src="./img/home/map.svg" alt="map toys" />
            ) : (
              <img src="./img/home/map_uz.svg" alt="map toys" />
            )}
          </div>
        </div>
        <div id="showroom">
          <div className="farm">
            <div className="title">
              <span>
                <FormattedMessage id="home.gradus" />
              </span>
              <h1>
                <FormattedMessage id="nav.showroom" />
              </h1>
              <hr />
            </div>
            <div className="container">
              <div className="dubl">
                <div className="item" data-aos="flip-left">
                  <img src="./img/home/farm1.png" alt="toys uzb" />
                  {/* <a href="https://therepublicoftoys.uz/showroom/showroom1/ToyFactory/"> */}
                  <button
                    onClick={() => {
                      setShowroom("active");
                    }}
                  >
                    <img src="./img/home/360.svg" alt="toys" />
                    <FormattedMessage id="home.gradusbtn" />
                  </button>
                  {/* </a> */}
                </div>
                <div className="item" data-aos="flip-left">
                  <img src="./img/home/farm2.png" alt="toys uzb" />
                  {/* <a
                    href="https://therepublicoftoys.uz/showroom/showroom2/ToyShowRoom/"
                    rel="noopener noreferrer"
                  > */}
                  <button
                    onClick={() => {
                      setFabric("active");
                    }}
                  >
                    <img src="./img/home/360.svg" alt="toys" />
                    <FormattedMessage id="home.gradusbtn2" />
                  </button>
                  {/* </a> */}
                </div>
              </div>
              <div id="partner">
                <div className="product partner">
                  <div className="title">
                    <span>
                      {" "}
                      <FormattedMessage id="home.prtitle" />
                    </span>
                    <h1>
                      <FormattedMessage id="nav.partner" />
                    </h1>
                    <hr />
                  </div>
                  <div className="product__body">
                    <Slider {...settings3}>
                      {Partner.map((item) => (
                        <div className={"card__slide"}>
                          <div className="card" data-aos="flip-left">
                            <img
                              src={
                                "https://api.dev.therepublicoftoys.uz//" +
                                item.img
                              }
                              alt="toys"
                            />
                          </div>
                        </div>
                      ))}

                      {/* <div className={"card__slide"}>
                        <div className="card" data-aos="flip-left">
                          <img
                            src="./img/home/new.svg"
                            style={{ height: "13vw" }}
                            alt="toys"
                            className="h-21"
                          />
                        </div>
                      </div>
                      <div className={"card__slide"}>
                        <div className="card" data-aos="flip-left">
                          <img src="./img/home/jiraf.svg" alt="toys" />
                        </div>
                      </div>

                      <div className={"card__slide"}>
                        <div className="card" data-aos="flip-left">
                          <img
                            src="./img/home/shag.svg"
                            style={{ height: "13vw" }}
                            alt="toys"
                            className="h-21 d-none"
                          />
                        </div>
                      </div> */}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact" id="contact">
          {context.locale === "ru" ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>
                <FormattedMessage id="home.form" />
              </h1>
              <div className="row">
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("number")}
                  required
                />
                <input
                  type="text"
                  placeholder="Ваша имя"
                  {...register("name")}
                  className="clear"
                />
              </div>
              <textarea
                name=""
                placeholder="Сообщения"
                id=""
                cols="30"
                className="clear"
                rows="10"
                {...register("comment")}
              ></textarea>
              <button>Отправить</button>
            </form>
          ) : context.locale === "en" ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>
                <FormattedMessage id="home.form" />
              </h1>
              <div className="row">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="clear"
                  {...register("number")}
                  required
                />
                <input
                  clas
                  type="text"
                  placeholder="Name"
                  className="clear"
                  {...register("name")}
                  className="clear"
                />
              </div>
              <textarea
                name=""
                placeholder="Message"
                id=""
                cols="30"
                className="clear"
                rows="10"
                {...register("comment")}
              ></textarea>
              <button>Send</button>
            </form>
          ) : context.locale === "uz" ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>
                <FormattedMessage id="home.form" />
              </h1>
              <div className="row">
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("number")}
                  required
                />
                <input
                  type="text"
                  placeholder="Ismingiz"
                  {...register("name")}
                  className="clear"
                />
              </div>
              <textarea
                name=""
                placeholder="Izoh"
                id=""
                cols="30"
                className="clear"
                rows="10"
                {...register("comment")}
              ></textarea>
              <button>Yuborish</button>
            </form>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>
                <FormattedMessage id="home.form" />
              </h1>
              <div className="row">
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("number")}
                  required
                />
                <input
                  type="text"
                  placeholder="Ismingiz"
                  {...register("name")}
                  className="clear"
                />
              </div>
              <textarea
                name=""
                placeholder="Izoh"
                id=""
                cols="30"
                className="clear"
                rows="10"
                {...register("comment")}
              ></textarea>
              <button>Yuborish</button>
            </form>
          )}
        </div>
      </div>
      <div className="modal__room" id={Showroom}>
        <button
          onClick={() => {
            setShowroom("0");
          }}
        >
          <span>&times;</span>
        </button>
        <embed
          type="text/html"
          src="https://therepublicoftoys.uz/showroom/showroom1/ToyShowRoom/index.htm"
        ></embed>
      </div>
      <div className="modal__room" id={Fabric}>
        <button
          onClick={() => {
            setFabric("0");
          }}
        >
          <span>&times;</span>
        </button>
        <embed
          type="text/html"
          src="https://therepublicoftoys.uz/showroom/showroom2/ToyFactory/index.htm"
        ></embed>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Example Modal"
        id={"bg__ff"}
      >
        <img
          src="./img/home/check.png"
          style={{ width: "14vw" }}
          alt="success"
        />
        <h1>
          <FormattedMessage id="car.4" />
        </h1>
      </Modal>
      {console.clear()}
    </div>
  );
}

export default Home;
