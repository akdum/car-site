import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './galleryPicture.module.scss';
import { IGalleryItemProps } from './IGalleryItemProps';

export class GalleryItem extends React.Component<IGalleryItemProps, null> {   
    render() {
        const divImageStyle = {
            backgroundImage: 'url(' + window.location.origin + '/images/gallery/' + this.props.picture.imgName + ')',
            backgroundPosition: this.props.picture.position
        }
        return(
            <div className={'gallery__item  ' + this.props.className} style={divImageStyle}>                
            </div>
        )
    }
}