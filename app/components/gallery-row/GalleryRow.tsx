import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './galleryRow.module.scss';
import { IGalleryRowProps } from './IGalleryRowProps';

export class GalleryRow extends React.Component<IGalleryRowProps, null> {
    render() {
        return(
            <div className="row">
            </div>
        )
    }
}