import  React, { Component } from 'react';
import styled from 'styled-components';

const AddPostForm = styled.form`display:flex;
                                flex-direction:column;
                                height:600px;
                                margin:50px auto;
                                width:60%;
                                 `

const AddPostInput = styled.input`padding:10px;
                                  margin:10px auto;
                                  width:60%;
                                  font-size:16px;  `

const PreviewerImage = styled.img`width:600px;
                                  height:300px;
                                  align-self:center;`                                  

 class AddNewPost extends Component {

  constructor(){
    super()
    this.state = {
      link:"",
    }
  }


  handleNewPost = event => {
    sessionStorage.setItem([event.target.name],(event.target.value))
   }

   displayImage = event => {
     this.setState({link:event.target.value});
   }
  render() {
    return (
        <AddPostForm onSubmit={this.props.addNewPost} >
            <PreviewerImage src={this.state.link} alt="your img should display" />
            <AddPostInput type="text" name="imageUrl" onChange={this.handleNewPost} onInput={this.displayImage} placeholder="imgUrl"/>
            <AddPostInput type="text" name="username" onChange={this.handleNewPost} placeholder="username"/> 
            <AddPostInput type="submit" value="submit" onSubmit={this.props.addNewPost} />   
        </AddPostForm>
    )
  }
}

export default AddNewPost
