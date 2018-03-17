import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './reset.css';
import './App.css';
import Family from './Components/Pages/Family';
import Login from './Components/Pages/Login';
import NotFamily from './Components/Pages/NotFamily';
import Posts from './Components/Pages/Posts';
import Footer from './Components/Footer/Footer';
import logo from './assets/family-ties-logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Login} exact />
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
