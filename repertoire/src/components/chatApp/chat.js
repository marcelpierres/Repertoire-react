import React, { Component } from "react";
import "../../scss/chat.scss";
import Form from "../form/form.js";
import firebase from "firebase";
import firebaseConfig from "../../config";
firebase.initializeApp(firebaseConfig);
class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      verify: true,
      press: false
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    this.setState({ verify: false });
    this.setState({ press: true });
  }
  handleLogOut() {
    firebase.auth().signOut();
    this.setState({ verify: true });
    this.setState({ press: false });
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h2>Talk To Me</h2>
        </div>
        <div className="app__list">
          <Form
            user={this.state.user}
            verify={this.state.verify}
            press={this.state.press}
          />
        </div>
      </div>
    );
  }
}

export default ChatApp;
