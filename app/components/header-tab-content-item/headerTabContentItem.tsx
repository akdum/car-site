import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './headerTabContentItem.module.scss';
import { IHeaderLinkData } from '../../shared/interfaces/IHeaderLinkData';
import { HeaderContentSublink } from '../header-content-sublink/headerContentSublink';

export class HeaderTabContentItem extends React.Component<IHeaderLinkData,null> {
    render() {
        return (
            <div className="tab-pane fade" id={this.props.tab.id} role="tabpanel" aria-labelledby={this.props.tab.id + "-tab"}>
                {this.props.subLinks && this.props.subLinks.map((link) => <HeaderContentSublink />)}
            </div>
        );
    }
}