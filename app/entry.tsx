import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from "./components/header/header";
import { ILinkData } from './shared/interfaces/ILinkData';
import { Billboard } from './components/billboard/Billboard';
import { Gallery } from './components/gallery/Gallery';
import { Links } from './components/links/Links';
import { ImageAndTextBlock } from './components/image-and-text-block/ImageAndTextBlock';

const linkData: ILinkData[] = [
    {title: 'Обзор', pageAddress: '/main.html'},
    {title: 'Галлерея', pageAddress: '/pages/gallery.html'},
    {title: 'Характеристики'},
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
    title: 'Чем больше вы смотрите, тем больше инноваций вы видите.',
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

const blocksData = [
    {
        imgName: 'tracking.jpg',
        title: 'Track control system',
        text: 'Наслаждайтесь спокойствием с помощью Track control system, когда погода или дорожные условия становятся неблагоприятными - снег больше не является преградой для получения удовольствия от вождения!',
        isWhiteBackground: true,
        isTextOnLeft: false,
        link: {
            title: 'Характеристики',
            pageAddress: '/pages/technologiesAndCharacteristics.html'
        }
    },
    {
        imgName: 'car-service.jpg',
        title: 'Обслуживание',
        text: 'Машина обслуживалась только в хороших сервисных центрах, например, АСПЭК-Моторс. Более того, в наличии есть все документы на запчасти, работы и накладные, и Вы сможете точно знать, что в машине менялось и когда.',
        additionalText: 'По запросу возможно предоставление доступа к электронной таблице с историей работ.',
        isWhiteBackground: false,
        isTextOnLeft: true,
        link: {
            title: 'История',
            pageAddress: '/pages/technologiesAndCharacteristics.html'
        }
    }
]

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
if (document.querySelectorAll('.image-and-text-block').length > 0) {
    const blocks = document.querySelectorAll('.image-and-text-block')
    blocks.forEach((element, index) => ReactDOM.render(<ImageAndTextBlock {...blocksData[index]} />, element));
}
if (document.getElementById('links')) {
    ReactDOM.render(<Links links={links} />, document.getElementById('links'));
}