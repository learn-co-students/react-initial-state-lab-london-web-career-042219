// your Bomb code here!
//pass in a prop to our Bomb component to determine what the starting count should be.

import React, { Component } from "react";

export default class Bomb extends Component {
  constructor(props) {
    super(props); // Remember to call super() on the first line of the constructor
    //(this is required in React components if we are to use this in the constructor)

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    //return <div id="matrix">{this.genMatrix()}</div>;
    if (this.state.secondsLeft == 0) {
      return `Boom!`;
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`;
    }
  }
}
