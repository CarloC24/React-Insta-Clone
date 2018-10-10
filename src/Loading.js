import React, { Component } from 'react';
import styled ,{ css } from 'styled-components';
import {
    Button,
    Input
} from 'reactstrap';

class Loading extends Component {
    render(){
        return(
           <form onSubmit={this.props.submit}>
              <Input type="text" placeholder="username" name="username" onChange={this.props.usernameInput}/>
              <Input type="text" placeholder="password" name="password" onChange={this.props.passwordInput}/>
              <Button type="submit" value="submit" onSubmit={this.props.submit}>Log In</Button>
           </form>
        )
    } 

}

export default Loading;




