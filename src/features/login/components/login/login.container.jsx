import React, { Component } from "react";
import {
  UIInput,
  UICheckbox,
  UIButton
} from '../../../../ui';

function FormLogin(props) {
  console.log('props', props)
  const {
    name,
    password,
    remember,
    onChange,
    onSubmit
  } = props;
  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div>
          <UIInput name="name" value={name} onChange={onChange} />
        </div>
        <div>
          <UIInput name="password" value={password} onChange={onChange}/>
        </div>
        <div>
          <UICheckbox name="remember" value={remember} checked={remember} onChange={onChange}/>
        </div>
        <div>
          <UIButton type="submit" color="primary">Login</UIButton>
        </div>
      </form>
    </React.Fragment>
  )
}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      remember: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log('value', value)
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('se envio!!')
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <FormLogin {...this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}

export {
  Login
}
