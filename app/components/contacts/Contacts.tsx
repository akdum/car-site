import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IContactsProp } from './IContactsProp';
import './contacts.module.scss';

export class Contacts extends React.Component<IContactsProp,null> {
    render() {
        return(
            <div className="contacts">
                <div className="contacts__icon">
                    <i className="material-icons">phone</i>
                </div>
                <div>
                    <span><a href={'tel:' + this.props.phoneNumber}>{this.props.phoneNumber}</a></span>
                </div>
            </div>
        )
    }
}