import React, { Component } from 'react';
import './App.scss';
import dummyData from './dummy-data';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
       dummyData: dummyData,
    }
}
  render() {
    return (
      <div className="App">
      <Header />
      {this.state.dummyData.map( (item,index) => {
        return(
          <Content data={item} key={index} />
        )
      })}
      </div>
    );
  }
}

export default App;
