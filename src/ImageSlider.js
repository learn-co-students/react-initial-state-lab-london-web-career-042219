// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {

 //   Use the contructor to set the initial state
    constructor(props) {
        super(props);
        this.state = { currentSlideIndex:0};
        }
  
    // Now render the cell
    render() {
        return (<p>I am on slide {this.state.currentSlideIndex}</p>);
    }
    
}

// Set default props
ImageSlider.defaultProps = {
    currentSlideIndex: 0
};
    
    