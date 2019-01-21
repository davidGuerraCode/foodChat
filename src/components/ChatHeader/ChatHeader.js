import React from 'react';
import style from './ChatHeader.module.css';

const chatHeader = props => (
    <div>
        <header className={style['chat-header']}>
            <div className={style['header-content']}>
                <div className={style['left-section']}>
                    <span className={style['arrow-icon']}>
                        {' '}
                        <i className="fas fa-arrow-left" />{' '}
                    </span>
                    <div className={style['user-details']}>
                        <div className={style['avatar-image']} />
                        <div className={style['user']}>
                            <p className={style['username']}>{props.userData.username}</p>
                            <p className={style['status']}>En Línea</p>
                        </div>
                    </div>
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

export default chatHeader;
