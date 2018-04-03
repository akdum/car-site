import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './galleryRow.module.scss';
import { IGalleryRowProps } from './IGalleryRowProps';
import { GalleryItem } from '../gallery-item/GalleryItem';

export class GalleryRow extends React.Component<IGalleryRowProps, null> {
    render() {
        const picturesArrayLength = this.props.pictures.length;
        const cellClassName = (this.props.pictures.length === 4) ? 'col-md-3' : 'col-md-4';
        return(
            <div className="row">
                {this.props.pictures.map((picture, index) => <GalleryItem className={cellClassName} picture={picture} pageLink={(index === picturesArrayLength - 1) ? this.props.pageLink : ''} />)}
            </div>
        )
    }
}