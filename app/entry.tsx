import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from "./components/header/header";
import { ILinkData } from './shared/interfaces/ILinkData';
import { Billboard } from './components/billboard/Billboard';
import { Gallery } from './components/gallery/Gallery';
import { Links } from './components/links/Links';

const linkData: ILinkData[] = [
    {title: 'Обзор', pageAddress: '/main.html'},
    {title: 'Галлерея', pageAddress: '/pages/gallery.html'},
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
    rows: [
        {
            pictures: [
                {imgName: 'exterior1.jpg', position: '-80px 400px'},
                {imgName: 'interior1.jpg', position: '-400px -50px'},
                {imgName: 'exterior2.jpg', position: '-570px -250px'},
                {imgName: 'interior2.jpg', position: '-150px -250px'}
            ]
        },
        {
            pictures: [
                {imgName: 'exterior3.jpg', position: '-700px 400px'},
                {imgName: 'interior3.jpg', position: '-700px 400px'},
                {imgName: 'exterior4.jpg', position: '-400px -200px'},
                {imgName: 'interior4.jpg', position: '-300px -300px'}
            ],
            pageLink: '/pages/gallery.html'
        }
    ]
}

const links = [
    {title: 'Auto.ru', iconName: 'auto.ru.jpg', pageAddress: 'https://auto.ru/'},
    {title: 'Avito', iconName: 'avito.jpg', pageAddress: 'https://avito.ru/'},
    {title: 'DRIVE2', iconName: 'drive2.jpg', pageAddress: 'https://drive2.ru/'}
]

if (document.getElementById('header')) {
    ReactDOM.render(<Header title={'Volga Siber 2008'} links={linkData} contactsPhone={'+7(912)467-08-12'}/>, document.getElementById('header'));
}
if (document.getElementById('billboard')) {
    ReactDOM.render(<Billboard {...billboardData} />, document.getElementById('billboard'));
}
if (document.getElementById('galleryMix')) {
    ReactDOM.render(<Gallery {...galleryMix} />, document.getElementById('galleryMix'));
}
if (document.getElementById('links')) {
    ReactDOM.render(<Links links={links} />, document.getElementById('links'));
}