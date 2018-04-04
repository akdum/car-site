import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IImageAndTextBlockText } from './IImageAndTextBlockText';

import './imageAndtextBlockText.module.scss';

export class ImageAndTextBlockText extends React.Component<IImageAndTextBlockText, null> {
    render() {
        return (
            <div className='image-and-text-block-text__header-and-text'>
                <div className='image-and-text-block-text__header  text-left'>
                    <h2 className='block-title'>{this.props.title}</h2>
                </div>
                <div className='image-and-text-block-text__text'>
                    {this.props.text}
                    {this.props.additionalText && <div className='image-and-text-block-text__additional-text'>{this.props.additionalText}</div>}
                </div>
                <div className="image-and-text-block-text__link">
                    <a className="btn btn-primary" href={window.location.origin + this.props.link.pageAddress}>{this.props.link.title}</a>
                </div>
            </div>
        )
    }
}