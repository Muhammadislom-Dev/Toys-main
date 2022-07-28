import React, { useState, useEffect, useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Modal from "react-modal";
import axios from "axios";
import { Context } from "../components/Wrapper";
import { useForm } from "react-hook-form";
import ReactTooltip from "react-tooltip";
import { FormattedMessage } from "react-intl";
import Barcode from "react-barcode";
const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function Offer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let fixDate = {
      price: offer?.price || 0,
      name: data.name,
      product_name: offer?.name,
      count: data.number,
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
      .then((response) => setIsOpen(false));
      let botMessege = `
      Assalomu aleykum😊%0A
        Name: ${fixDate.name}%0A
        Product_name: ${fixDate.product_name}%0A
        Number: ${fixDate.count}%0A
      `;
    axios({
      method: "get",
      url: `https://api.telegram.org/bot5018242502:AAFWwydRp4iH-Gav3-LFUS85dYd30CLI7EU/sendMessage?chat_id=-1001747510834&text=${botMessege}&parse_mode=HTML`,
    });
    
  };

  const context = useContext(Context);
  let location = useParams();
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
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
  let { id } = useParams();
  const activeIds = [Number(id)];
  const result = rest.filter(({ id }) => activeIds.includes(id));
  const offer = result[0];

  return (
    <>
      <div className="container offer__page">
        <div className="item__offer">
          <Carousel
            showThumbs={true}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            transitionTime={300}
            width="600px"
          >
            <div className="slide-holder">
              <img
                className={"img__one"}
                src={"https://api.dev.therepublicoftoys.uz" + offer?.img1}
              />
            </div>
            <div className="slide-holder">
              <img
                className={"img__one"}
                src={"https://api.dev.therepublicoftoys.uz" + offer?.img2}
              />
            </div>
            <div className="slide-holder">
              <img
                className={"img__one"}
                src={"https://api.dev.therepublicoftoys.uz" + offer?.img3  }
              />
            </div>
          </Carousel>
        </div>
        <div className="item__offer sp__around">
          <h1>
            {/* {context.locale === "uz"
              ? offer?.name_uz
              : context.locale === "ru"
              ? offer?.name_ru
              : offer?.name_en} */}
            {context.locale === "uz"
              ? offer?.title_uz
              : context.locale === "ru"
              ? offer?.title_ru
              : offer?.title_en}
          </h1>
          {/*<button className="blue">Характеристики</button>
          <p>
            {context.locale === "uz"
              ? offer?.title_uz
              : context.locale === "ru"
              ? offer?.title_ru
              : offer?.title_en}
            .{" "}
          </p>
          <span>
            {" "}
            <b>Внимание! </b>{" "}
            {context.locale === "uz"
              ? offer?.info_uz
              : context.locale === "ru"
              ? offer?.info_ru
              : offer?.info_en}
            .
          </span>
          <div className="flex">
            <div className="price">
              <span>{offer?.price} uzs</span>
            </div>
            <button onClick={openModal}>Заказать</button>
          </div> */}
          <table className="table table-striped">
            <tbody>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.1" />
                  <img
                    data-tip="test"
                    data-for="test"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test">
                    {" "}
                    <FormattedMessage id="prod.1" />
                  </ReactTooltip>
                </td>
                <td>{offer?.articul}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.2" />
                  <img
                    data-tip="test1"
                    data-for="test1"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test1">
                    {" "}
                    <FormattedMessage id="prod.2" />
                  </ReactTooltip>
                </td>
                <td style={{ padding: "0px" }}>
                  <Barcode
                    height="20"
                    width="1"
                    fontSize="10px"
                    value={offer?.qr}
                  />
                </td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.3" />
                  <img
                    data-tip="test2"
                    data-for="test2"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test2">
                    {" "}
                    <FormattedMessage id="prod.3" />
                  </ReactTooltip>
                </td>
                <td>{offer?.size_toy}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.4" />{" "}
                  <img
                    data-tip="test3"
                    data-for="test3"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test3">
                    {" "}
                    <FormattedMessage id="prod.4" />
                  </ReactTooltip>
                </td>
                <td>
                  {context.locale === "uz"
                    ? offer?.case_uz
                    : context.locale === "ru"
                    ? offer?.case_ru
                    : offer?.case_en}{" "}
                </td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.5" />{" "}
                  <img
                    data-tip="test4"
                    data-for="test4"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test4">
                    {" "}
                    <FormattedMessage id="prod.5" />
                  </ReactTooltip>
                </td>
                <td>{offer?.size_case}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.6" />{" "}
                  <img
                    data-tip="test6"
                    data-for="test6"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test6">
                    {" "}
                    <FormattedMessage id="prod.6" />
                  </ReactTooltip>
                </td>
                <td>
                  {context.locale === "uz"
                    ? offer?.casegroup_uz
                    : context.locale === "ru"
                    ? offer?.casegroup_ru
                    : offer?.casegroup_en}{" "}
                </td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.7" />{" "}
                  <img
                    data-tip="test7"
                    data-for="test7"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test7">
                    {" "}
                    <FormattedMessage id="prod.7" />
                  </ReactTooltip>
                </td>
                <td>{offer?.weight}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.8" />
                  <img
                    data-tip="test8"
                    data-for="test8"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test8">
                    {" "}
                    <FormattedMessage id="prod.8" />
                  </ReactTooltip>
                </td>
                <td>
                  {offer?.count}{" "}
                  {context.locale === "uz"
                    ? "ta"
                    : context.locale === "ru"
                    ? "шт"
                    : ""}
                </td>
              </tr>
              <tr>
                <td className="color-grey">
                  {" "}
                  <FormattedMessage id="prod.9" />
                </td>
                <td>
                  {offer?.file ? (
                    <a
                      className="btn btn-primary"
                      href={"https://api.dev.therepublicoftoys.uz//" + offer?.file}
                      download
                      target="_blank"
                    >
                      <FormattedMessage id="prod.10" />
                    </a>
                  ) : (
                    <a className="btn btn-primary" aria-disabled>
                      <FormattedMessage id="prod.10" />
                    </a>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={openModal}>
                    {context.locale === "uz"
                      ? "Buyurtma"
                      : context.locale === "ru"
                      ? "Заказать"
                      : "Order"}
                  </button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container offer__slider">
        <Slider {...settings2}>
          {rest.map((item) => (
            <a href={"/product/" + item.id}>
              <div className="offer">
                <img
                  src={"https://api.dev.therepublicoftoys.uz" + item.img1}
                  alt=""
                />
                <p>
                  {" "}
                  {context.locale === "uz"
                    ? item?.title_uz
                    : context.locale === "ru"
                    ? item?.title_ru
                    : item?.title_en}
                </p>
                <span>{item?.price} uzs</span>
                <div className="hover__offer">
                  <span>
                    <FormattedMessage id="home.more" />
                  </span>
                  <img src={"/img/home/cardar.svg"} alt="" />
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Example Modal"
      >
        {context.locale === "uz" ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Telefon raqam yoki e-mail"
              {...register("number")} required
            />
            <input type="text" placeholder="Ismingiz" {...register("name")} required/>
            <button>Buyurtma</button>
          </form>
        ) : context.locale === "ru" ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Ваш номер или e-mail"
              {...register("number")} required
            />
            <input type="text" placeholder="Ваша имя" {...register("name")} required/>
            <button>Заказать</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Phone number or e-mail"
              {...register("number")} required
            />
            <input type="text" placeholder="Name" {...register("name")} required/>
            <button>Order</button>
          </form>
        )}
      </Modal>
    </>
  );
}

export default Offer;
