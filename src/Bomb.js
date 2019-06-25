import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    // countdownTimer = () => {
    //     let newValue = this.props.initialCount --
    //     this.setState({
    //         secondsLeft: newValue
    //     })
    // }

    render() {
        return (
            <div>
                {this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>}
            </div>
        )
    }
}