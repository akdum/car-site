import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from "./components/header/header";
import { ILinkData } from './shared/interfaces/ILinkData';
import { Billboard } from './components/billboard/Billboard';
import { Gallery } from './components/gallery/Gallery';

const linkData: ILinkData[] = [
    {title: 'Обзор'},
    {title: 'Галлерея'},
    {title: 'Технологии'},
    {title: 'История'},
    {title: 'Ссылки'}
]

const billboardData = {
    imgName: "main_billboard.jpg",
    slogan: "Мы все едем. Некоторые из нас с гораздо большим стилем.",
    price: "270,000",
    priceDate: '01 апреля 2018',
    hwyFuel: 7,
    cityFuel: 15,
    seatCount: 5
}

const galleryMix = {
    title: 'Чем больше вы смотрите, тем больше инноваций вы видите',
    pictures: [
        {imgName: 'exterior1'},
        {imgName: 'interior1'},
        {imgName: 'exterior2'},
        {imgName: 'interior2'},
        {imgName: 'exterior3'},
        {imgName: 'interior3'},
        {imgName: 'exterior4'},
        {imgName: 'interior4'}
    ],
    pageLink: '/pages/gallery.html'
}

if (document.getElementById('header')) {
    ReactDOM.render(<Header title={'Volga Siber 2008'} links={linkData} contactsPhone={'+7(912)467-08-12'}/>, document.getElementById('header'));
}
if (document.getElementById('billboard')) {
    ReactDOM.render(<Billboard {...billboardData} />, document.getElementById('billboard'));
}
if (document.getElementById('galleryMix')) {
    ReactDOM.render(<Gallery {...galleryMix} />, document.getElementById('galleryMix'));
}