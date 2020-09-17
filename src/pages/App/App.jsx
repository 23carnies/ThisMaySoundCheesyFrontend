import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Users from "../Users/Users";
import authService from "../../services/authService";
import "./App.css";
import * as cheeseAPI from "../../services/cheeses-api"
import AddCheese from "../AddCheese/AddCheese"

class App extends Component {
  state = {
    cheeses: [],
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddCheese = async newCheeseData => {
    const newCheese = await cheeseAPI.create(newCheeseData)
    newCheese.addedBy = {name: this.state.user.name, _id: this.state.user._id}
    this.setState(state => ({
      cheeses: [...state.cheeses, newCheese]
    }), () => this.props.history.push('/cheeses'))
  }

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route 
          exact path="/addcheese"
          render={() =>
            authService.getUser() ?
            <AddCheese 
              handleAddCheese = {this.handleAddCheese}
              user={user}
            />
            :
            <Redirect to ='/login' />
          }
        />
      </>
    );
  }
}
export default App;
