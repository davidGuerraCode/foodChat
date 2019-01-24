import React, { Component } from 'react';
import style from './UserData.module.css';

class UserData extends Component {
    render() {
        return (
            <div className={style['user-details']}>
                <div className={style['avatar-image']} />
                <div className={style['user']}>
                    <p className={style['username']}>{this.props.info.username}</p>
                    <p className={style['status']}>{this.props.info.placeholder}</p>
                </div>
            </div>
        );
    }
}

export default UserData;
