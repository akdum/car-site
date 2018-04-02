import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IGalleryProps } from './IGalleryProps';

import './gallery.module.scss';

export class Gallery extends React.Component<IGalleryProps, null> {
    render() {
        return(
            <div className="gallery">
                <h2 className="section-title">{this.props.title}</h2>
                <div className="gallery__content">                    
                </div>
            </div>
        )
    }
}