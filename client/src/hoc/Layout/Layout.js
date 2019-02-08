import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import style from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <main className={style['chat-container']}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
