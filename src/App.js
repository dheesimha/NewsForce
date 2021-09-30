import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  c = "John";
  render() {
    return <div>Hello class Component and {this.c}</div>;
  }
}
