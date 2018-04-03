import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ILinksProp } from './ILinksProp';
import { ILinkData } from '../../shared/interfaces/ILinkData';

import './links.module.scss';

export class Links extends React.Component<ILinkData[],null> {
    render() {
        return (
            <div className="links">
            </div>
        )
    }
}