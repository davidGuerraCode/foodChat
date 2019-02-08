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

  checkIsButtonIsValid() {}

  handleSubmit = event => {
    const { history } = this.props;
    event.preventDefault();

    history.push('/conversation-list');
  };

  handleChangeEvent = event => {
    const inputType = event.target.type;
    const value = event.target.value;
    const currentTarget = event.target;
    console.log('[!]val', inputType);

    switch (inputType) {
      case 'text':
        if (value) {
          this.setState(prevState => (prevState.toValidate[0].nameFiled = true));
          currentTarget.style.border = 'none';
        } else {
          this.setState(prevState => (prevState.toValidate[0].nameFiled = false));
          currentTarget.style.border = '1.5px solid red';
        }
        this.validate(this.state.toValidate);
        break;
      case 'password':
        if (value && value.length > 7) {
          this.setState(prevState => (prevState.toValidate[0].passwordField = true));
          currentTarget.style.border = 'none';
        } else {
          this.setState(prevState => (prevState.toValidate[0].passwordField = false));
          currentTarget.style.border = '1.5px solid red';
          console.log('[VAL]', value.length);
        }
        this.validate(this.state.toValidate);
        break;

      default:
        break;
    }
  };

  validate = arr => {
    const values = Object.values(arr[0]);
    const isValid = values.every(field => field === true);

    if (isValid) {
      // this.setState(prevState => (prevState.isNotValid = false));
      this.submitButton.removeAttribute('disabled');
    } else {
      // this.setState(prevState => (prevState.isNotValid = true));
      this.submitButton.setAttribute('disabled', true);
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
              <input type="text" placeholder="Username" name="username" onInput={this.handleChangeEvent} />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onInput={this.handleChangeEvent}
              />
              <button
                className={style['submit-btn']}
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
