import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from "./components/header/header";
import { ILinkData } from './shared/interfaces/ILinkData';
import { Billboard } from './components/billboard/Billboard';

const linkData: ILinkData[] = [
    {title: 'Обзор'},
    {title: 'Галлерея'},
    {title: 'Технологии'},
    {title: 'История'}
]

const billboardData = {
    imgName: "main_billboard.jpg",
    slogan: "Мы все едем. Некоторые из нас с гораздо большим стилем.",
    price: "270,000",
    priceDate: '01 апреля 2018'
}

if (document.getElementById('header')) {
    ReactDOM.render(<Header title={'Volga Siber 2008'} links={linkData} contactsPhone={'+7(912)467-08-12'}/>, document.getElementById('header'));
}
if (document.getElementById('billboard')) {
    ReactDOM.render(<Billboard {...billboardData} />, document.getElementById('billboard'));
}