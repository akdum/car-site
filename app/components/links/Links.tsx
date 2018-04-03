import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ILinksProp } from './ILinksProp';

import './links.module.scss';
import { LinkItem } from '../link-item/LinkItem';

export class Links extends React.Component<ILinksProp,null> {
    render() {
        return (
            <div className="links">
                <div className="links__links-area row">
                    {this.props.links.map((link) => <LinkItem {...link} />)}
                </div>
            </div>
        )
    }
}