import React, { Component } from "react";
import { Link } from "react-router-dom";
import './signup.css'
import { Form, Input, Button } from 'semantic-ui-react'
import authService from "../../services/authService";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
      <h3>Sign Up</h3>
          <Form.Field>
          <label htmlFor="name">Name</label>
          <input
            placeholder="John Doe"
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={this.handleChange}
          />  
          </Form.Field>
          <br/>
          <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            placeholder="email@domain.com"
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          </Form.Field>
          <br/>
          <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          </Form.Field>
          <br/>
          <Form.Field>
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          </Form.Field>
          <Button disabled={this.isFormInvalid()}>Sign Up</Button>
        </Form>
    );
  }
}

export default SignupForm;