import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from "./components/header/header";
import { ILinkData } from './shared/interfaces/ILinkData';
// import { IHeaderLinkData } from './shared/interfaces/IHeaderLinkData';

// const LinkData: IHeaderLinkData[] = [
//     {tab: {title: 'Обзор', id: 'general', pageAddress: '/'}},
//     {tab: {title: 'Дизайн', id: 'design'}, subLinks: [{title: 'Внешний вид'}, {title: 'Интерьер'}]},
//     {tab: {title: 'Характеристики', id: 'characteristics'}, subLinks: [{title: 'Основные'}, {title: 'Конфигурация'}, {title: 'Безопасность'}]},
//     {tab: {title: 'История', id: 'history'}, subLinks: [{title: 'Обслуживание'}, {title: 'ДТП'}]},
//     {tab: {title: 'Ссылки', id: 'links', pageAddress: '/pages/links.html'}}
// ]

const linkData: ILinkData[] = [
    {title: 'Обзор'},
    {title: 'Галлерея'},
    {title: 'Технологии'},
    {title: 'История'}
]

if (document.getElementById('header')) {
    ReactDOM.render(<Header title={'Volga Siber 2008'} links={linkData} contactsPhone={'+7(912)467-08-12'}/>, document.getElementById('header'));
}