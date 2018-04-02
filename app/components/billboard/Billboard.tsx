import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './billboard.module.scss';
import { IBillboardProps } from './IBillboardProps';

export class Billboard extends React.Component<IBillboardProps, null> {
    render() {
        return(
            <div className="billboard card bg-dark text-white">
                <img className="card-img" src={"../images/billboard/" + this.props.imgName} alt="Card image" />
                <div className="card-img-overlay">
                    <p className="card-title">{this.props.slogan}</p>
                </div>
            </div>
        )
    }
}