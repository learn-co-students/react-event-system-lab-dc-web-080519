// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesonMe extends Component {

  focusMe = () => {
    console.log("Good!")
  }

  blurMe = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button onFocus={this.focusMe} onBlur={this.blurMe}>BUTTON</button>

    )
  }

}
