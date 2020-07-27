import React from 'react';
import './App.css';
import NavBar from './navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import AboutUs from './about us';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={AboutUs} exact path='/about-us' />
      </Switch>
    </React.Fragment>
  );
}
export default App;
