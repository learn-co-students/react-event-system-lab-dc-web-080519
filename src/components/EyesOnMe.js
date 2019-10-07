import React, { Component } from 'react';

class EyesOnMe extends React.Component {

  good = () => {
    console.log("Good!")
  }

  notgood = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
    return (
    <div>
    <button onFocus={this.good} onBlur={this.notgood}></button>
    </div>
    )
  }
}

export default EyesOnMe;
