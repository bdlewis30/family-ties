import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './reset.css';
import './App.css';
import Login from './Components/Pages/Login';
import CreateFamily from './Components/Admin/CreateFamily';
import FamilyMember from './Components/Pages/Members/FamilyMember';
import Family from './Components/Pages/Family';
import Posts from './Components/Pages/Posts';
import NotFamily from './Components/Pages/NotFamily';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/Admin" component={CreateFamily} />
          <Route path="/create-family" component={FamilyMember} />
          <Route path="/Family" component={Family} />
          <Route path="/Posts" component={Posts} />
          <Route path="/NotFamily" component={NotFamily} />
        </Switch>
        <section className="margin"></section>
        <Footer />
      </div>
    );
  }
}

export default App;
