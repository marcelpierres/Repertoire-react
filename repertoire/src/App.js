import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga'
import "./css/App.css";
import MainPage from "./components/mainPage/index.js";
import Nav from "./components/navBar/Nav.js";
import ChatApp from "./components/chatApp/chat.js";




class App extends Component {
  render() {
    ReactGA.initialize('UA-125471762-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (

      <Switch>
        <div>
          <Nav />
          <Route exact path="/" component={MainPage} />
          <Route path="/chat" component={ChatApp} />
        </div>
      </Switch>


    );
  }
}


export default App;
