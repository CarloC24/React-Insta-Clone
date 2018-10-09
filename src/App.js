import React, { Component } from 'react';
import Posts from './components/Posts';
import Authenticate from './Autheticate';

class App extends Component {
  render() {
    return (
     <Posts />
    );
  }
}

export default Authenticate(App);
