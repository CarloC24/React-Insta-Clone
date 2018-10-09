import React, { Component } from 'react';
import '../App.scss';
import dummyData from '../dummy-data';
import Header from './Header';
import Content from './Content';


class Posts extends Component {
    constructor(props){
    super(props)
    this.state = {
       dummyData: [],
       specificPosts: [],
    }
    }

  componentDidMount = () => {
  setTimeout(()=> {
    this.setState({dummyData: dummyData})
  },2000)
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

export default Posts
