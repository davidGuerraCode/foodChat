import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import style from './Sigin.module.css';

class Sigin extends Component {
  constructor(props) {
    super(props);

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
    const { history } = this.props;
    event.preventDefault();

    history.push('/conversation-list');
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
                  nameField: (prevState.toValidate[0].nameField = true),
                  passwordField: prevState.toValidate[0].passwordField
                }
              ]
            };
          }, this.validate);
          currentTarget.style.border = 'none';
        } else {
          this.setState(prevState => {
            prevState.toValidate[0].nameFiled = false;
          }, this.validate);
          currentTarget.style.border = '1.5px solid red';
        }
        break;
      case 'password':
        if (value && value.length > 7) {
          this.setState(prevState => {
            return {
              toValidate: [
                {
                  nameField: prevState.toValidate[0].nameField,
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
          currentTarget.style.border = '1.5px solid red';
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
            <label htmlFor="name">
              <h1>Sign in</h1>
            </label>
            <div className={style['input-container']}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.handleChangeEvent}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.handleChangeEvent}
              />
              <button
                className={`${style['submit-btn']} ${style['disable-button']}`}
                type="submit"
                disabled={this.state.isNotValid}
                ref={el => (this.submitButton = el)}>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </Aux>
    );
  }
}

export default Sigin;
