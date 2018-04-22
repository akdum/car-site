import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './billboard.module.scss';
import { IBillboardProps } from './IBillboardProps';

export class Billboard extends React.Component<IBillboardProps, null> {
    render() {
        return(
            <div className="billboard card bg-dark text-white">
                <img className="card-img" src={"../images/billboard/" + this.props.imgName} alt="Card image" />
                {/* <div className="card-img-overlay">
                    <p className="card-title">{this.props.slogan}</p>
                </div> */}
                <div className="billboard__car-attributes row">
                    <div className="billboard__car-price col-md-5">
                        <div className="billboard__car-price-now">
                            <div>Цена сейчас</div>
                            <p>{this.props.price}<img src="../images/ruble.svg" /></p>                            
                        </div>
                        <div className="billboard__car-price-date">
                            <p>Цена действительна на</p>
                            <p>{this.props.priceDate}</p>
                        </div>
                    </div>
                    <div className="billboard__car-fuel col-md-4">
                        <div className="billboard__car-fuel-title">
                            <p>Расход трасса/город</p>
                        </div>
                        <div className="billboard__car-fuel-values">
                            <p>стандартно</p>
                            <div className="billboard__car-fuel-values-numbers">
                                {this.props.hwyFuel}/{this.props.cityFuel}
                            </div>
                            <p>литров 92</p>
                        </div>
                    </div>
                    <div className="billboard__car-seat col-md-3">
                        <div className="billboard__car-seat-values">
                            <p>Мест</p>
                            <div>{this.props.seatCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}