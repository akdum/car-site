import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from "./components/header/header";
import { IHeaderLinkData } from './shared/interfaces/IHeaderLinkData';

const LinkData: IHeaderLinkData[] = [
    {tab: {title: 'Обзор', id: 'general'}},
    {tab: {title: 'Дизайн', id: 'design'}},
    {tab: {title: 'Характеристики', id: 'characteristics'}},
    {tab: {title: 'История', id: 'history'}},
    {tab: {title: 'Ссылки', id: 'links'}}
]

if (document.getElementById('header')) {
    ReactDOM.render(<Header title='Volga Siber' links={LinkData}/>, document.getElementById('header'));
}