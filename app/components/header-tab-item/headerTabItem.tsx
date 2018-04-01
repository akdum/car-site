import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './headerTabItem.module.scss';
import { ILinkData } from '../../shared/interfaces/ILinkData';

export class HeaderTabItem extends React.Component<ILinkData,null> {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" id={this.props.id + "-tab"} data-toggle="tab" href={'#' + this.props.id} role="tab" aria-controls={this.props.id} aria-selected="false">{this.props.title}</a>
            </li>
        )
    }
}