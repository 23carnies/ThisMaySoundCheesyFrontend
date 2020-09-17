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
import EditCheesePage from "../EditCheesePage/EditCheesePage"
import CheeseListPage from "../CheeseListPage/CheeseListPage"

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

  handleDeleteCheese = async id => {
    if(authService.getUser()){
      await cheeseAPI.deleteOne(id);
      this.setState(state => ({
        cheeses: state.cheeses.filter(m => m._id !== id)
      }), () => this.props.history.push('/cheeses'));
    } else {
      this.props.history.push('/login')
    }
  }

  handleUpdateCheese = async updatedCheeseData => {
    const updatedCheese = await cheeseAPI.update(updatedCheeseData);
    const newCheesesArray = this.state.cheeses.map(c => 
      c._id === updatedCheese._id ? updatedCheese : c
    );
    this.setState(
      {cheeses: newCheesesArray},
      () => this.props.history.push('/cheeses')
    );
  }

  async componentDidMount() {
    const cheeses = await cheeseAPI.getAll();
    console.log(cheeses)
    this.setState({cheeses})
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
              <h1>Welcome. This is a cheese selection.</h1>
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
          <Route 
            exact path="/cheeses" render={() => 
            <CheeseListPage 
              cheeses={this.state.cheeses}
              user={user}
              handleDeleteCheese={this.handleDeleteCheese}
            />}
          />
          
          <Route 
        exact path='/edit' render={({location}) =>
        authService.getUser() ?
          <EditCheesePage 
            handleUpdateCheese={this.handleUpdateCheese}
            location={location}
            user={user}
          />
          :
          <Redirect to='/login' />
        }/>

          
      </>
    );
  }
}
export default App;
