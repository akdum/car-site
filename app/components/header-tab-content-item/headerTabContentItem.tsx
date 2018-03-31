import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './header.module.scss';
import { IHeaderTabContentItemProps } from './IHeaderTabContentItemProps';

export class HeaderTabContentItem extends React.Component<IHeaderTabContentItemProps,null> {
    render() {
        return (
            <div className="tab-pane fade show" id={this.props.id} role="tabpanel" aria-labelledby={this.props.tabId}>
            {this.props.tabId}
            </div>
        );
    }
}