import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./css/App.css";
import MainPage from "./components/mainPage/index.js";

class App extends Component {
  render() {
    return (
      <Switch>
        <div>
          <Route exact path="/" component={MainPage} />
        </div>
      </Switch>
    );
  }
}

export default App;
