import React, { Component } from 'react';
import style from './Header.module.css';

class Header extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    pushRoute = () => {
        console.log('[!]', this.props);
        // this.props.history.push('/conversations');
    };

    render() {
        const { children } = this.props;

        return (
            <div>
                <header className={style['chat-header']}>
                    <div className={style['header-content']}>
                        <div className={style['left-section']}>
                            <span className={style['arrow-icon']} onClick={this.pushRoute}>
                                {' '}
                                <i className="fas fa-angle-left" />{' '}
                            </span>
                            {children}
                        </div>
                        <div className={style['right-section']}>
                            <span className={style['menu-icon']}>
                                {' '}
                                <i className="fas fa-ellipsis-v" />{' '}
                            </span>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
