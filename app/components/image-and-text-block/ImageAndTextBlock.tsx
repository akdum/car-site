import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './imageAndTextBlock.module.scss';
import { IImageAndTextBlockProps } from './IImageAndTextBlockProps';
import { ImageAndTextBlockText } from '../image-and-text-block-text/ImageAndtextBlockText';

export class ImageAndTextBlock extends React.Component<IImageAndTextBlockProps, null> {
    render() {
        const image = <img src={window.location.origin + '/images/blocks/' + this.props.imgName} />;
        const text = <ImageAndTextBlockText title={this.props.title} text={this.props.text} link={this.props.link} additionalText={this.props.additionalText} />; 
        return(
            <div className={'image-and-text-block-area row ' + (this.props.isWhiteBackground ? '' : ' background_gray')}>
                <div className="col-md-6">
                    { this.props.isTextOnLeft ? text : image}
                </div>
                <div className="col-md-6">
                    { this.props.isTextOnLeft ? image : text}
                </div>
            </div>
        )
    }
}