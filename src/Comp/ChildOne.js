import React, { Component } from 'react';

class ChildOne extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h2>I'm ChildOne!! Trouble.</h2>
      <p>{this.props.greeting}</p>
      <p>{this.props.messageFromChildTwoToChildOne}</p>
      </div>
      //this.props.greeting brings greeting into ChildOne from parent (app.js)
      // using props
      //this.props.messageFromChildTwoToChildOne brings in messageFromChildTwoToChildOne
      // from ChildTwo after it was passed to ChildOne
    );
  }
}

export default ChildOne;
