// your ImageSlider code here!
//need a valid render method to allow for our tests to properly import and use them.
//setting up the initial state of the slider.
//initial state should have a property called currentSlideIndex that starts at 0.
//It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.

import React, { Component } from "react";

export default class ImageSlider extends Component {
  constructor(props) {
    super(props); // Remember to call super() on the first line of the constructor
    //(this is required in React components if we are to use this in the constructor)

    this.state = {
      currentSlideIndex: 0
    };
  }

  render() {
    //return <div id="matrix">{this.genMatrix()}</div>;
    return <div>I am on slide {this.state.currentSlideIndex}</div>;
  }
}
//Matrix.defaultProps = { values: defaultpattern1 }; // MUST be outside the class
