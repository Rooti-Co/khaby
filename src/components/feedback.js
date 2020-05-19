import React, { Component } from "react";
import "../styles/feedback.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <svg
            className={"feedback__next"}
            onClick={onClick}
            width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-2.48845e-05 0.200003L15.6 10.678L-2.67029e-05 21L-2.48845e-05 0.200003Z" fill="black" />
        </svg>



    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <svg
            className={"feedback__prev"}
            onClick={onClick}
            width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.6 20.8L0 10.322L15.6 0L15.6 20.8Z" fill="black" />
        </svg>



    );
}
function Title() {
    return <h2 className="feedback-title">ваші відгуки про нас</h2>
}
class SliderBlock extends Component {
    render() {
        const settings = {
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
        return <div className="feedback-slider">
            <Slider {...settings}>
                <SliderItem src="W040_Feedback/feedback__test1.jpg" name="Ирина Пахнюк" comment="«Добрий вечір,отримала замовлення. Дякую за оперативність. Матеріал,щоправда,не джинс,але модель відповідає зовнішньому вигляду.Розмір теж підійшов. Дитина в захваті від упакування товару,за це окреме « Дякую» Будем у вас час від часу робити замовлення» " />
                <SliderItem src="W040_Feedback/feedback__test2.jpg" name="Julijaartemchuk" comment="Привіт! Костюм просто нереальний. Коли його одягнула на бранч, тоді розвіялись всі міфи про зручність в такому одязі. Погода була дуже холодна але мені в ньому було тепло і комфортно. Тканина на дотик така, ніби ти немовлятко гладиш, така м’ягесенька) І що саме основне, при сидячому положенні не віддуваються коліна. Думаю для тих кому важливий гарний вигляд, зацінить якість костюма. Тому дуже вдячна, дуже задоволена покупкою і хорошим сервісом " />
                <SliderItem src="W040_Feedback/feedback__test3.jpg" name="Vitalinaaostapiuk" comment="«Доброго дня, отримала сорочку! Якість прекрасна, приємна до тіла, розмір чудово підійшов. Дякую, обов'язково замовлю у вас ще!»" />
                <SliderItem src="W040_Feedback/feedback__test4.jpg" name="Test_Name" comment="Test_Comment" />
                <SliderItem src="W040_Feedback/feedback__test5.jpg" name="Test_Name" comment="Test_Comment" />
            </Slider>
        </div >
    }
}
function SliderItem(props) {
    return <div className="feedback-slider_item">
        <div className="feedback-slider_item__user-b">
            <div className="feedback-slider_item__avatar-b">
                <img src={props.src} className="feedback-slider_item__avatar" alt="avatar" />
            </div>
            <p className="feedback-slider_item__name">{props.name}</p>
        </div>
        <p className="feedback-slider_item__comment">{props.comment}</p>
    </div>
}
export default function Feedback() {
    return <div className="feedback-wrapper">
        <Title />
        <SliderBlock />

    </div>
}


