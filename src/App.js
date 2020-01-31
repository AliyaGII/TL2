import React from 'react'
import Tele from './Tele/Tele'

export default function App(){
    const arr = [
        {name: 'Мой онлайн+', price: 700, limit:"безлимит на Tele2 в России", min: 800, gb: 30 , button: 'Купить SIM' },
        {name: 'Везде онлайн', price: 500, limit:"безлимит на Tele2 в России", min: 500, gb: 40, button: 'Купить SIM'},
        {name: 'Мой онлайн', price: 400, limit:"безлимит на Tele2 в России", min: 500, gb: 15, button: 'Купить SIM'},
    ];
    return(
        <div>
        <Tele name={arr[0].name} price={arr[0].price} limit={arr[0].limit} min={arr[0].min} gb={arr[0].gb} button={arr[0].button} />
        <Tele name={arr[1].name} price={arr[1].price} limit={arr[1].limit} min={arr[1].min} gb={arr[1].gb} button={arr[1].button} />
        <Tele name={arr[2].name} price={arr[2].price} limit={arr[2].limit} min={arr[2].min} gb={arr[2].gb} button={arr[2].button} />
        </div>
    )
}