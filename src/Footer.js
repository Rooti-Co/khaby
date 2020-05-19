import React from 'react';
import './styles/footer_style.css';
import footerLogo from './Footer_img/Footer__logo.svg';
import email from './Footer_img/Email.svg';
import phone from './Footer_img/Phone.svg';
import insta from './Footer_img/Insta.svg';
import fb from './Footer_img/Fb.svg';

function FooterMenuItem(props){
    return <div>
        <a href ={props.page}> {props.text} </a>
    </div>
}
function FooterMenu(){
    return (
    <div className="Footer__box__menu">
        <FooterMenuItem page="#" text="Каталог"/>
        <FooterMenuItem page="#" text="Про нас"/>
        <FooterMenuItem page="#" text="Lookbook"/>
        <FooterMenuItem page="#" text="Оплата та доставка"/>
    </div>
    )
}
function FooterLogoBox (){
    return (
        <div className="Footer__box__logo-box">
            <img src={footerLogo} alt="Logo"></img>
            <div>2018-2020 khaby bases clothes</div>
        </div>
    )
}
function FooterContacts(){
    return (
        <div className="Footer__box__contacts">
            <div className="Footer__box__contacts__container">
            <div className="Footer__box__contacts__container__email"> <img src={email} alt=""></img> khaby@gmail.com</div>
            <div className="Footer__box__contacts__container__phone"> <img src={phone} alt=""></img> +38012345678</div>
            </div>
            <div className="Footer__box__contacts__social">
                <a href="https://www.instagram.com/khaby_/?hl=ru"><img src={insta} alt=""></img> </a>
                <a href="https://www.facebook.com/khabybase/"><img src={fb} alt=""></img> </a>
            </div>
            <div className="Footer__box__contacts__design">
                <div>2018-2020 khaby bases clothes</div>
                <p>дизайн сайту:</p>
                <p><a href="https://www.behance.net/yul6_okb501">https://www.behance.net/yul6_okb501</a></p>
            </div>

        </div>
    )
}
export default function Footer() {
  return (
    <div className="Footer">
    <div className="Footer__box">
    <FooterLogoBox/>
    <FooterMenu/> 
    <FooterContacts/>
    </div>
    </div>
  )
}
