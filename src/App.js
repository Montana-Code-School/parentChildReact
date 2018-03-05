import React, { Component } from 'react';
import ChildOne from './Comp/ChildOne.js';
import ChildTwo from './Comp/ChildTwo.js';
//this is the parent
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hi: "allo",
      messageFromChildTwo: ""
    }
    this.getsFromChildTwo = this.getsFromChildTwo.bind(this);
    //binds getsFromChildTwo to this
  }
  getsFromChildTwo(stringFromChildTwo){
    this.setState({messageFromChildTwo: stringFromChildTwo});
//declaring the function of getsFromChildTwo with an argument of stringFromChildTwo
// that sets this.state.messageFromChildTwo to whatever arguement its given
  }
  render() {
    return (
      //<p> displays the state of messageFromChildTwo
      //passes props without actually saying props
      //this is why it sucks number 534
      <div>
      <h1>I'M THE PARENT!! TIRED</h1>
        <p>{this.state.messageFromChildTwo}</p>
      <ChildOne greeting={this.state.hi} messageFromChildTwoToChildOne={this.state.messageFromChildTwo} />
      <ChildTwo getsFromChildTwo={this.getsFromChildTwo} />
      </div>
    );
  }
}

export default App;
