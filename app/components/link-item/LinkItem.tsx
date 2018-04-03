import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ILinkData } from '../../shared/interfaces/ILinkData';

import './linkItem.module.scss';

export class LinkItem extends React.Component<ILinkData,null> {
    render() {
        return (
            <div className="link col-md-4">
                <a href={this.props.pageAddress}>
                    <div className="link__icon">
                        <img src={window.location.origin + '/images/' + this.props.iconName} />
                    </div>
                    <div className="link__name text-center">
                        {this.props.title}
                    </div>
                </a>
            </div>
        )
    }
}