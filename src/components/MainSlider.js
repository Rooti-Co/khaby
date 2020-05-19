import React from "react";
import "./mainSliderAssets/MainSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
