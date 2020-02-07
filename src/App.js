import React from 'react'
import Tariff from './Tariff/Tariff'

export default function App(){
    const arr = [
        {name: 'Мой онлайн+', price: 700, limit:"безлимит на Tariff2 в России", min: 800, gb: 30 , button: 'Купить SIM' },
        {name: 'Везде онлайн', price: 500, limit:"безлимит на Tariff2 в России", min: 500, gb: 40, button: 'Купить SIM'},
        {name: 'Мой онлайн', price: 400, limit:"безлимит на Tariff2 в России", min: 500, gb: 15, button: 'Купить SIM'},
    ];
    return(
        <div>
        <Tariff name={arr[0].name} price={arr[0].price} gb={arr[0].gb} />
        <Tariff name={arr[1].name} price={arr[1].price} gb={arr[1].gb} />
        <Tariff name={arr[2].name} price={arr[2].price} gb={arr[2].gb} />
        </div>
    )
}