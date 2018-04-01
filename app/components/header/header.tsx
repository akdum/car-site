import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './header.module.scss';
import { ILinkData } from '../../shared/interfaces/ILinkData';
import { HeaderTabItem } from '../header-tab-item/headerTabItem';
import { IHeaderProps } from './IHeaderProps';
import { HeaderTabContentItem } from '../header-tab-content-item/headerTabContentItem';

export class Header extends React.Component<IHeaderProps,null> {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <a className="navbar-brand" href="#">{this.props.title}</a>
                <ul className="nav nav-tabs">
                    {this.props.links.map((item) => <li className="nav-item" key={item.tab.title}><HeaderTabItem isHasSublinks={item.subLinks ? true : false} linkData={item.tab}/></li>)}
                </ul>
                <div className="tab-content" id="myTabContent">
                    {this.props.links.map((item) => <div className="tab-pane fade" id={item.tab.id} role="tabpanel" aria-labelledby={item.tab.id + "-tab"} key={item.tab.id}><HeaderTabContentItem {...item} /></div>)}
                </div>
            </nav>
        );
    }
}