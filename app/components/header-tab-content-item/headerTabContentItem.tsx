import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './headerTabContentItem.module.scss';
import { IHeaderLinkData } from '../../shared/interfaces/IHeaderLinkData';
import { HeaderContentSublink } from '../header-content-sublink/headerContentSublink';

export class HeaderTabContentItem extends React.Component<IHeaderLinkData,null> {
    render() {
        return (
            this.props.subLinks ? <ul className="nav">{this.props.subLinks.map((link) => <li className="nav-item" key={link.title}><HeaderContentSublink {...link}/></li>)}</ul> : <div></div>
        );
    }
}