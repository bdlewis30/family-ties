import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './reset.css';
import './App.css';
import Login from './Components/Pages/Login';
import CreateFamily from './Components/Admin/CreateFamily';
import Family from './Components/Pages/Family';
import FamilyPage from './Components/FamilyPage/FamilyPage';
import NotFamily from './Components/Pages/NotFamily';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/Admin" component={CreateFamily} />
          <Route path="/Family" component={Family} />
          <Route path="/Posts" component={FamilyPage} />
          <Route path="/NotFamily" component={NotFamily} />
        </Switch>
        <section className="margin"></section>
        <Footer />
      </div>
    );
  }
}

export default App;
