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
       specificPosts: [],
    }
}

filterPosts = event => {
  const filtered = this.state.dummyData.filter(postItem => {
    if(postItem.username.includes(event.target.value)){
      return postItem;
    }
  })
  this.setState({specificPosts: filtered}); 
}

  render() {
    return (
      <div className="App">
      <Header filterposts={this.filterPosts}/>
      {this.state.specificPosts.length > 0 ? this.state.specificPosts.map( (item,index) => {
        return(
          <Content data={item} key={index} />
        )
      }):this.state.dummyData.map( (item,index) => {
        return(
          <Content data={item} key={index} />
        )
      })}
      </div>
    );
  }
}

export default App;
