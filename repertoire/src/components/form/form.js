import React, { Component } from "react";
import "../../scss/form.scss";
import Message from "../message/message";
//import SMS from "../twilio/send_sms";
import firebase from "firebase";
import Popup from "reactjs-popup";
//var SMS = require("../twilio/send_sms");
//import { Text } from "../twilio/send_sms";
const accountSid = "AC194c7ffc1cef3dba9c70f6ca65e128e1";
const authToken = "50d19067049c72e24662accece95ffb3";
const client = require("twilio")(accountSid, authToken);
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      message: "",
      list: [],
      press: false,
      verify: true,
      open: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.messageRef = firebase
      .database()
      .ref()
      .child("messages");
    this.listenMessages();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ userName: nextProps.user.displayName });
    }
    if (true) {
      this.setState({ verify: nextProps.verify });
    }
    if (true) {
      this.setState({ press: nextProps.press });
    }
  }
  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSend() {
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message
      };
      this.messageRef.push(newItem);
      this.setState({ message: "" });
      /*Edit in here for Text API*/
      // Text(this.state.message);
      /*client.messages
        .create({
          body: "hhj",
          from: "+16475606794",
          to: "+16479676790"
        })
        .then(message => console.log(message.sid));*/
    }
  }
  handleKeyPress(event) {
    if (event.key !== "Enter") return;
    this.handleSend();
  }
  listenMessages() {
    this.messageRef.limitToLast(10).on("value", message => {
      this.setState({
        list: Object.values(message.val())
      });
    });
  }
  //name change
  handleChange2(event) {
    this.setState({ userName: event.target.value });
  }
  handleSend2() {
    var name = this.state.userName;
    var regex = /^\s+$/gi;
    // check to make sure there is a name and not just a blank space
    if (!regex.test(name) && this.state.userName !== "") {
      // check if username exists in the database
      {
        /*
        if (!this.state.press) {
        this.messageRef
          .orderByChild("userName")
          .equalTo(this.state.userName)
          .once("value", snapshot => {
            if (snapshot.exists()) {
              this.setState({ open: true });
              return;
            } else {
              this.setState({ verify: false });
            }
          });
      }
    */
      }
      this.setState({ verify: false });
      if (this.state.userName) {
        var newItem = {
          userName: this.state.userName
        };
        this.setState({ message: "" });
      }
    }
  }
  handleKeyPress2(event) {
    if (event.key !== "Enter") return;
    this.handleSend2();
  }
  closeModal() {
    this.setState({ open: false });
  }
  render() {
    return (
      <div className="form">
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          UserName: {this.state.userName} is Already Taken Please Try Again.
        </Popup>
        <div className="form__row">
          <input
            className="form__input"
            type="text"
            placeholder="Guest Display Name"
            value={this.state.userName}
            disabled={!this.state.verify}
            onChange={this.handleChange2.bind(this)}
            onKeyPress={this.handleKeyPress2.bind(this)}
          />
          <button
            className="form__button"
            disabled={!this.state.verify}
            onClick={this.handleSend2.bind(this)}
          >
            set
          </button>
        </div>
        <div className="form__message">
          {this.state.list.map((item, index) => (
            <Message key={index} message={item} />
          ))}
        </div>
        <div className="form__row">
          <input
            className="form__input"
            type="text"
            placeholder="Type message"
            value={this.state.message}
            disabled={this.state.verify}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button
            className="form__button"
            disabled={this.state.verify}
            onClick={this.handleSend.bind(this)}
          >
            send
          </button>
        </div>
      </div>
    );
  }
}
