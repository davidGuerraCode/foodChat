import React, { Component } from 'react';
import style from './UserData.module.css';

class UserData extends Component {
    componentDidMount() {
        console.log('[!!]', this.props);
    }
    render() {
        return (
            <div className={style['user-details']}>
                <img className={style['avatar-image']} src={this.props.userData['avatar_url']} alt="User Avatar" />
                <div className={style['user']}>
                    <p className={style['username']}>{this.props.userData.username}</p>
                    <p className={style['status']}>{this.props.status}</p>
                </div>
            </div>
        );
    }
}

export default UserData;
