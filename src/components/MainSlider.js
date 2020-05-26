import React from "react";
import "./mainSliderAssets/MainSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { wordPressAPIUrl } from "./configuration";

const Img1 = () => {
  const [data, setData] = useState(false);
  if (!data) {
    fetch(wordPressAPIUrl + "/wp/v2/pages/114")
      .then((response) => {
        return response.json();
      })
      .then((respData) => {
        let content = respData.content.rendered;
        setData(content);
      });
  }
  return <>{data && <img dangerouslySetInnerHTML={{ __html: data }}></img>}</>;
};

const Img2 = () => {
  const [data, setData] = useState(false);
  if (!data) {
    fetch(wordPressAPIUrl + "/wp/v2/pages/116")
      .then((response) => {
        return response.json();
      })
      .then((respData) => {
        let content = respData.content.rendered;
        setData(content);
      });
  }
  return <>{data && <div dangerouslySetInnerHTML={{ __html: data }}></div>}</>;
};

export default class MainSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1200,
      autoplaySpeed: 5500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
    };
    return (
      <div>
        <Slider {...settings} className="main-slider container">
          <div>
            <div className="main-slider__item">
              <Img1 />
            </div>
            <div className="main-slider__slide-text">
              Обирай свій мінімалізм
            </div>
          </div>
          <div>
            <div className="main-slider__item">
              <Img2 />
            </div>
            <div className="main-slider__slide-text">
              Обирай свій мінімалізм
            </div>
          </div>
          <div>
            <img
              className="main-slider__item"
              src="/main-slider-item1.jpg"
              alt="slider pic"
            />
            <div className="main-slider__slide-text">
              Обирай свій мінімалізм
            </div>
          </div>
          <div>
            <img
              className="main-slider__item"
              src="/main-slider-item1.jpg"
              alt="slider pic"
            />
            <div className="main-slider__slide-text">
              Обирай свій мінімалізм
            </div>
          </div>
          <div>
            <img
              className="main-slider__item"
              src="/main-slider-item1.jpg"
              alt="slider pic"
            />
            <div className="main-slider__slide-text">
              Обирай свій мінімалізм
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
