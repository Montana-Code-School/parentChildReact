import React, { Component } from 'react';

class ChildTwo extends Component {
  constructor(props){
    super(props);
    this.state = {
      exclamation: "you suck",
    }
    this.passesToApp = this.passesToApp.bind(this);
    //binding passesToApp to this
  }
  passesToApp(e) {
    this.props.getsFromChildTwo(this.state.exclamation);
  } //retrieves function from parent (app.js) and sets it to the value
  //in this.state.exclamation in constructor
  render() {
    return (
      <div>
      <h2 onClick={this.passesToApp}>I'm ChildTwo!! Spoiled.</h2>
      </div>
      //onClick{} activates passesToApp
    );
  }
}

export default ChildTwo;
