import React, { Component } from "react";
import '../../scss/chat.scss';
import Form from '../form/form.js';
import firebase from 'firebase';
import firebaseConfig from '../../config';
firebase.initializeApp(firebaseConfig);
class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };


    }
    /* componentDidMount() {
         firebase.auth().onAuthStateChanged(user => {
             this.setState({ user });
         });
     }
     handleSignIn() {
         const provider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInWithPopup(provider);
     }
     handleLogOut() {
         firebase.auth().signOut();
     }*/

    render() {

        return (

            <div className="app">
                <div className="app__header">

                    <h2>
                        TALK TO ME
          </h2>

                </div>
                <div className="app__list">
                    <Form />
                </div>
            </div>
        );
    }
}

export default ChatApp;