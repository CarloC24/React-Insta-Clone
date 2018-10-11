import React, { Component } from 'react';
import '../App.scss';
import dummyData from '../dummy-data';
import Header from './Header';
import Content from './Content';
import AddNewPost from './AddPost';


class Posts extends Component {
    constructor(props){
    super(props)
    this.state = {
       dummyData: [],
       specificPosts: [],
       addNewPosts: false,
    }
    }

componentDidMount = () => {  
    this.setState({dummyData: dummyData})
    alert('you can add a post using the instagram logo')
}

filterPosts = event => {
  const filtered = this.state.dummyData.filter((postItem) =>  {
    if(postItem.username.includes(event.target.value)){
      return postItem;
    }
  })
  console.log(filtered);
  this.setState({specificPosts: filtered}); 
}
//ADD NEW POST
toggle = () => {
  this.setState(prevState => { return {
    addNewPosts:!prevState.addNewPosts
  }
  })
}

addNewPost = event => {
  let newPosts = this.state.dummyData.slice();
  if(sessionStorage.getItem("imageUrl") && sessionStorage.getItem("username")){
  newPosts.push({
         username:sessionStorage.getItem("username"),
         timestamp:Date.now(),
         comments: [],
         imageUrl: sessionStorage.getItem("imageUrl"),
         thumbnailUrl: "https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg",
         likes:0,
  })
  sessionStorage.clear();
  this.setState(prevState => {
    return{
      dummyData: newPosts,
      addNewPosts:!prevState.addNewPosts
    }
  })
}else{
    alert('Please enter a valid imageUrl and Username');
  }
  event.preventDefault();
}
 


  render() {
    return (
      <div className="App">
      <Header filterposts={this.filterPosts} toggle={this.toggle}/>
      {this.state.addNewPosts ? <AddNewPost toggle={this.toggle} addNewPost={this.addNewPost} /> : this.state.specificPosts.length > 0 ? this.state.specificPosts.map( (item,index) => {
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
