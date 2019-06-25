// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    // // Use the contructor to set the initial state
    constructor(props) {
        super(props);
        this.state = { secondsLeft:this.props.initialCount};
        }
  
    // Now render the cell
    render() {
        return (
            this.state.secondsLeft>0 ? <p>{this.state.secondsLeft} seconds left before I go boom!</p> : <p>Boom!</p>
        );
    }
    
}

// Set default props
Bomb.defaultProps = {
    initialCount: 10
};
