import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './headerTabItem.module.scss';
import { ILinkData } from '../../shared/interfaces/ILinkData';

export class HeaderTabItem extends React.Component<ILinkData,null> {
    render() {
        return (
            <li className="nav-item" role="tab" id={this.props.id} data-toggle="tab" aria-controls={this.props.id} aria-selected="true">
                <a className="nav-link" href={this.props.pageAddress ? (window.location.origin + this.props.pageAddress) : '#'}>{this.props.title}</a>
            </li>
        )
    }
}