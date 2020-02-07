import React from 'react'

export default function Tariff(props) {
    return (
        <div className="main">
            <div className="tariff-h1">{props.name}</div>
            <div className="box-summa">
                <div className="price">{props.price}</div>
                <div className="price-box">
                    <div className="rubl">₽</div>
                    <div className="price-mount">/месяц</div>
                </div>
            </div>
            <div className="unlimited"><strong>безлимит</strong> на Теле2 России</div>
            <div className="russia"> мин на остальные номера Росии</div>
            <div className="gb"><strong> GB </strong> интернета</div><br />
             <center><a href="https://msk.tele2.ru/"><div className="button"></div></a></center>
        </div>
    )
}