import  React, { Component } from 'react';
import PictureLogo from './HeaderImg/PictureLogo.png';

 class AddNewPost extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div>
        <form>
            <img src={PictureLogo} onClick={this.props.toggle} alt="mainimg"></img>
            <input type="text" name="imgUrl" onChange={this.handleNewPost}/>
            <input type="text" name="likes" onChange={this.handleNewPost}/>
            <input type="text" name="thumbnailUrl" onChange={this.handleNewPost}/>
            <input type="text" name="timestamp" onChange={this.handleNewPost}/>
            <input type="text" name="username" onChange={this.handleNewPost}/>    
        </form>
      </div>
    )
  }
}

export default AddNewPost
