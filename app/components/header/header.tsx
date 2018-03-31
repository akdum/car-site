import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './header.module.scss';
import { ILinkData } from '../../shared/interfaces/ILinkData';
import { HeaderTabItem } from '../header-tab-item/headerTabItem';
import { IHeaderProps } from './IHeaderProps';

export class Header extends React.Component<IHeaderProps,null> {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <a className="navbar-brand" href="#">{this.props.title}</a>
                <ul className="nav nav-tabs" role="tablist">
                    {this.props.links.map((item) => <HeaderTabItem {...item} />)}
                </ul>
            </nav>
        );
    }
}