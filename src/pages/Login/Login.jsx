import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login.css'
import { Form, Input, Button } from 'semantic-ui-react'
import authService from "../../services/authService";

class Login extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <main>
      <Form onSubmit={this.handleSubmit}>
      <h3>Log In</h3>
        <Form.Field>
          <label>Email</label>
          <input 
          placeholder='example@domain.com' 
          value={email} 
          onChange={this.handleChange}
          name="email"
          id="email"
          />
        </Form.Field>
        <br/>
        <Form.Field>
          <label>Enter Password</label>
          <input 
          type='password' 
          value={pw} 
          onChange={this.handleChange}
          name="pw"
          id="pass"
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      </main>
    )
  }
}

export default Login;