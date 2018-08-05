import React, { Component } from 'react';
import classes from './App.css';
import { BrowserRouter,Route, NavLink } from 'react-router-dom';
import Home from './Container/Home/Home';
import Signup from './Container/Signup/Signup';
import Login from './Container/Login/Login';
import Footer from './Container/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <header className={classes.appheader}>
            <nav className={classes.navigation}>
              <NavLink className={classes.navlinks} to="/">Home</NavLink>
              <NavLink className={classes.navlinks} to="/signup">Signup</NavLink>
              <NavLink className={classes.navlinks} to="/login">Login</NavLink>
            </nav>
          </header>
          <main>
            <Route exact path='/' component={ Home } />
            <Route exact path='/signup' component={ Signup } />
            <Route exact path='/login' component={ Login } />
          </main>
          <footer>
            <hr className={classes.line}/>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
