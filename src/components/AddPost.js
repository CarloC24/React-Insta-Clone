import  React, { Component } from 'react';
import PictureLogo from './HeaderImg/PictureLogo.png';

 class AddNewPost extends Component {
  constructor(){
    super()
  }
  handleNewPost = event => {
    sessionStorage.setItem([event.target.name],(event.target.value))
   }
  render() {
    return (
      <div>
        <form onSubmit={this.props.addNewPost}>
            <img src={PictureLogo} onClick={this.props.toggle} alt="mainimg"></img>
            <input type="text" name="imageUrl" onChange={this.handleNewPost} placeholder="imgUrl"/>
            <input type="text" name="username" onChange={this.handleNewPost} placeholder="username"/> 
            <input type="submit" value="submit" onSubmit={this.props.addNewPost}/>   
        </form>
      </div>
    )
  }
}

export default AddNewPost
