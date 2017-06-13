import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Aside from './Aside';
import Footer from './Footer';

import Home from './Home'

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              <Switch>
                <Route path="/home" name="Home" component={Home}/>
                <Redirect from="/" to="/home"/>
              </Switch>
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
