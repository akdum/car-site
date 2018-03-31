import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from "./components/header/header";
import { ILinkData } from './shared/interfaces/ILinkData';

const LinkData: ILinkData[] = [
    {title: 'Обзор', id: 'general'},
    {title: 'Дизайн', id: 'design'},
    {title: 'Характеристики', id: 'characteristics'},
    {title: 'История', id: 'history' },
    {title: 'Ссылки', id: 'links'}
]

if (document.getElementById('header')) {
    ReactDOM.render(<Header title='Volga Siber' links={LinkData}/>, document.getElementById('header'));
}