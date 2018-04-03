import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IGalleryProps } from './IGalleryProps';

import './gallery.module.scss';
import { GalleryRow } from '../gallery-row/GalleryRow';

export class Gallery extends React.Component<IGalleryProps, null> {    
    render() {
        return(
            <div className="gallery">
                <h2 className="section-title">{this.props.title}</h2>
                <div className="gallery__content">
                    {this.props.rows.map((row) => <GalleryRow pictures={row.pictures} pageLink={row.pageLink} />)}                                
                </div>
            </div>
        )
    }
}