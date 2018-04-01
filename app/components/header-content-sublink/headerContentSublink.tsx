import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ILinkData } from '../../shared/interfaces/ILinkData';

export class HeaderContentSublink extends React.Component<ILinkData, null> {
    render() {
        return (
            <a className="nav-link" href={window.location.origin + this.props.pageAddress}>{this.props.title}</a>
        );
    }
}