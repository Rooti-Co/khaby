import React from 'react'
import "./paymentAssets/payment.css";

export default function PaymentInfo() {
    return (
        <div className="order-wrapper">
            <div className="order-info">
                <h2 className="order__title">ОПЛАТА ТА ДОСТАВКА</h2>
                <div className="order__block">
                    <p className="order__sub-title">як оплатити товар</p>
                    <p className="order__text">Після того, як Ви здійснили замовлення, слідуйте інструкції. Вам потрібно ввести номер телефону і наш оператор зв’яжеться з Вами для узгодження деталей оплати</p>
                </div>
                <div className="order__block">
                    <p className="order__sub-title">способи оплати</p>
                    <div className="order__text-group">
                        <img src="check.png" className="order__check" />
                        <p className="text-group__text">ГОТІВКОЮ <br />Ви можете оплатити готівкою після огляду товару. Цей варіант оплати можливий при кур‘єрській доставці чи при отриманні товару у відділенні зручної для Вас кур’єрської служби</p>
                    </div>
                    <div className="order__text-group">
                        <img src="check.png" className="order__check" />
                        <p className="text-group__text">БАНКІВСЬКОЮ КАРТОЮ<br />Можна оплатити замовлення картками Visa та Mastercard. Після узгодження деталей оплати, дочекайтесь реквізитів картки, на яку потрібно надіслати кошти.</p>
                    </div>
                    <div className="order__text-group">
                        <img src="check.png" className="order__check" />
                        <p className="text-group__text">ПРИВАТ24 <br />Ви можете оплатити готівкою після огляду товару. Цей варіант оплати можливий при кур‘єрській доставці чи при отриманні товару у відділенні зручної для Вас кур’єрської служби</p>
                    </div>
                </div>
                <div className="order__block">
                    <p className="order__sub-title">Як відбувається доставка</p>
                    <p className="order__text"> Ми співпрацюємо з багатьма кур’єрськими службами. Ви можете вибрати зручний вам варіант та службу доставки:</p>
                    <div className="order__text-group order__text-group--circle">
                        <img src="check_circle.png" className="order__check" />
                        <p className="text-group__text">Доставка у відділення служби</p>
                    </div>
                    <div className="order__text-group order__text-group--circle">
                        <img src="check_circle.png" className="order__check" />
                        <p className="text-group__text">Доставка кур'єром за адресою</p>
                    </div>
                    <p className="order__text">Для вас діє безкоштовна доставка по всій Україні при замовленні на суму від 750 гривень. Ми намагаємося доставляти ваші замовлення протягом 1-3-х днів.</p>
                    <div className="order__block">
                        <div className="order__sub-title">Час здійснення доставки</div>
                        <div className="order__text-group order__text-group--delivery">
                            <p>Кур'єрська доставка</p>
                            <p>У робочі дні з 9:00 до 20:00.</p>
                            <p>У суботу та неділю з 9:00 до 16:00</p>
                        </div>
                        <div className="order__text-group order__text-group--delivery">
                            <p>Міжнародна доставка</p>
                            <p>Ми доставляємо товари по всьому світу.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
