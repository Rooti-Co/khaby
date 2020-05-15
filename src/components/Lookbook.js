import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LookbookVideo from "../components/Youtube-video";
import "../styles/Lookbook.css";

  export default class LookbookSlider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }
    
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
    render() {
      let settings_2 = {
        responsive: [{
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            initialSlide: 2
          }
        }]
      }
      return (
        <div className="lookbook-wrapper container">
          <div className="lookbook">
            <h2 className="lookbook__title">LOOKBOOK</h2>
            <h4 className="lookbook__subtitle">сукня замшева вишнева</h4>

            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
              className="lookbook__slider-main"
              arrows={false}
            >
                <LookbookVideo />
                <LookbookVideo />
                <LookbookVideo />
                <LookbookVideo />
                <LookbookVideo />
                <LookbookVideo />

            </Slider>
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              prevArrow={<img src="/ar-left.svg"/>}
              nextArrow={<img src="/ar-right.svg"/>}
              className={"lookbook__slider-tape"}
              {...settings_2}
            >
              <LookbookVideo />
              <LookbookVideo />
              <LookbookVideo />
              <LookbookVideo />
              <LookbookVideo />
              <LookbookVideo />
            </Slider>
            </div>
        </div>
      );
    }
  }