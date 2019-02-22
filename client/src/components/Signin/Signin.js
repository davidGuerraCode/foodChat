import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import style from './Signin.module.css';
import axios from 'axios';

class Sigin extends Component {
  constructor(props) {
    super(props);

    this.emailRefEl = React.createRef();
    this.passRefEl = React.createRef();

    this.state = {
      isNotValid: true,
      toValidate: [
        {
          nameFiled: false,
          passwordField: false
        }
      ]
    };
  }

  handleSubmit = event => {
    const { history } = this.props.route;
    const { emailRefEl, passRefEl } = this;
    const data = {
      email: emailRefEl.current.value,
      password: passRefEl.current.value
    };

    event.preventDefault();
    axios
      .post('http://localhost:5000/auth/', data)
      .then(response => {
        const { token } = response.data;
        // Save token on cookies
        document.cookie = 'token=' + token;
        history.push('/conversation-list');
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleChangeEvent = event => {
    const inputType = event.target.type;
    const value = event.target.value;
    const currentTarget = event.target;

    switch (inputType) {
      case 'text':
        if (value) {
          this.setState(prevState => {
            console.log('[PREV_STATE]', prevState);
            return {
              toValidate: [
                {
                  nameField: (prevState.toValidate[0].nameField = true)
                }
              ]
            };
          }, this.validate);
          currentTarget.style.border = 'none';
        } else {
          this.setState(prevState => {
            prevState.toValidate[0].nameFiled = false;
          }, this.validate);
          currentTarget.style.border = '2px solid #CD4144';
        }
        break;
      case 'password':
        if (value && value.length > 7) {
          this.setState(prevState => {
            return {
              toValidate: [
                {
                  passwordField: (prevState.toValidate[0].passwordField = true)
                }
              ]
            };
          }, this.validate);
          currentTarget.style.border = 'none';
        } else {
          this.setState(prevState => {
            prevState.toValidate[0].passwordField = false;
          }, this.validate);
          currentTarget.style.border = '2px solid #CD4144';
        }
        break;

      default:
        break;
    }
  };

  validate = () => {
    const values = Object.values(this.state.toValidate[0]);
    const isValid = values.every(field => field === true);
    const disableClass = this.submitButton.classList[1] || 'disable-button';
    console.log('[current class]', disableClass);

    if (isValid) {
      alert('valid');
      this.setState(
        prevState => {
          return { isNotValid: (prevState.isNotValid = false) };
        },
        () => this.submitButton.classList.remove(disableClass)
      );
    } else {
      this.setState(
        prevState => {
          return { isNotValid: (prevState.isNotValid = true) };
        },
        () => this.submitButton.classList.add(disableClass)
      );
    }
  };

  render() {
    return (
      <Aux>
        <div className={style['container-bg']}>
          <div className={style['bg']} />
        </div>
        <div className={style['container']}>
          <form onSubmit={this.handleSubmit} className={style['form']}>
            <div className={style['truck-icon-container']}>
              <i className="fas fa-truck-moving" />
            </div>
            <label htmlFor="name">
              <h1>Sign In</h1>
            </label>
            <div className={style['input-container']}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="name"
                autoFocus
                onChange={this.handleChangeEvent}
                ref={this.emailRefEl}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.handleChangeEvent}
                ref={this.passRefEl}
              />
              <div className={style['form-actions']}>
                <button
                  className={`${style['submit-btn']}`}
                  type="submit"
                  disabled={this.state.isNotValid}
                  ref={el => (this.submitButton = el)}>
                  Sign In
                </button>
                <button type="button" className={style['sign-up-btn']}>
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </Aux>
    );
  }
}

export default Sigin;
