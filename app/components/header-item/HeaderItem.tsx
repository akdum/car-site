import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ILinkData } from "../../shared/interfaces/ILinkData";

import './headerItem.module.scss';
import { IHeaderItemProps } from './IHeaderItemProps';

export class HeaderItem extends React.Component<IHeaderItemProps, null> {
    render() {
        return(
            <div>
                <a className="dropdown-item" href={window.location.origin + this.props.link.pageAddress}>{this.props.link.title}</a>
                {!this.props.isLast && <div className="dropdown-divider"></div>}
            </div>
        )
    }
}