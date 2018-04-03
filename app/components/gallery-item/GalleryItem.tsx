import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './galleryPicture.module.scss';
import { IGalleryItemProps } from './IGalleryItemProps';

export class GalleryItem extends React.Component<IGalleryItemProps, null> {
    render() {
        return(
            <div className={this.props.className}>
            </div>
        )
    }
}