import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './header.module.scss';
import { IHeaderProps } from './IHeaderProps';
import {HeaderItem} from '../header-item/HeaderItem';

export class Header extends React.Component<IHeaderProps, null> {
    render() {
        const linkCount = this.props.links.length;
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="dropdown header__menu">                
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.title}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">                                            
                        {this.props.links.map((link, index) =><HeaderItem link={link} isLast={(index === linkCount - 1) ? true : false} />)}
                    </div>
                </div>
            </nav>
        )
    }
}