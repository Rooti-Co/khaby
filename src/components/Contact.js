import React from "react";
import "./contactAssets/contact_style.css";
import icon_phone  from './contactAssets/icon_phone.svg'
import icon_mail  from './contactAssets/icon_mail.svg'
import icon_instagram  from './contactAssets/icon_insagram.svg'
import icon_facebook  from './contactAssets/icon_facebook.svg'







export default function Contact(){
  return (
   <div className="Contact container">
       <div className="Contact__title">КОНТАКТИ</div>    
    

    <div className="Contact__box">
      <div className="Contact__box__phone"> <img src={icon_phone} alt=""></img> +38 096 620 2081</div>
      <div className="Contact__box_mail"> <img src={icon_mail} alt=""></img> itatarchuk90@gmail.com</div>
      <div className="Contact__box__contacts__social">
                <a href="https://www.facebook.com/khabybase/">
                    <img src={icon_facebook} alt=""></img>{"www.facebook.com/khabybase/"}
                </a>
                <a href="https://www.instagram.com/khaby_/?hl=ru">
                    <img src={icon_instagram} alt=""></img>{"www.instagram.com/khaby_/?hl=en"}
                </a>
                
                
            </div>
    </div>
    </div>
    );
};



