import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './headerTabItem.module.scss';
import { IHeaderTabItem } from './IHeaderTabItem';

export class HeaderTabItem extends React.Component<IHeaderTabItem,null> {
    render() {
        return (
            this.props.isHasSublinks ?
                <a className="nav-link" id={this.props.linkData.id + "-tab"} data-toggle="tab" href={'#' + this.props.linkData.id} role="tab" aria-controls={this.props.linkData.id} aria-selected="false">{this.props.linkData.title}</a>
            : 
                <a className="nav-link" href={window.location.origin + this.props.linkData.pageAddress}>{this.props.linkData.title}</a>
        )
    }
}