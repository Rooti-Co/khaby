import React from "react";
import "./pageAboutUsAssets/AboutUs.css";

export default function PageAboutUs() {
    return (
        <div className="about-us container">
            <div className="about-us__image-box">
                <img
                    className="about-us__image"
                    src="/about-us-img.jpg"
                    alt="About us"
                />
            </div>

            <div className="about-us__info-box">
                <h3 className="about-us__title">Про нас</h3>
                <div className="about-us__text">
                    Khaby це молодий український бренд базового жіночого одягу.
                    Концепція простоти та мінімалізму продумана і реалізована
                    засновником і дизайнером марки Іриною ще на початку
                    створення. Ідея розробки кежуал моделей з дизайнерськими
                    акцентами становить філософію бренду, який набуває
                    популярності серед своєї категорії людей.
                </div>
                <div className="about-us__text-italic">
                    Окрема увага приділяється якості: всі моделі бренду Khaby
                    виготовляються з якісних тканин на українських фабриках.
                </div>
                <div className="about-us__text">
                    Ключовими моделями колекцій Khaby є брючні костюми, сорочки,
                    спідниці та брюки з бездоганною посадкою, а також сукні та
                    светри, які вписуються в контекст будь-якого гардеробу і,
                    зберігають свою актуальність протягом кількох сезонів.
                    <br /> Наша ідея - допомогти дівчатам створити практичний і
                    продуманий базовий гардероб!
                </div>
            </div>
        </div>
    );
}
