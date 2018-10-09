import React, { Component } from 'react';

class Loading extends Component {
    render(){
        return(
           <form onSubmit={this.props.submit}>
              <input type="text" placeholder="username" name="username" onChange={this.props.usernameInput}/>
              <input type="text" placeholder="password" name="password" onChange={this.props.passwordInput}/>
              <input type="submit" value="submit" onSubmit={this.props.submit}/>
           </form>
        )
    } 

}

export default Loading;




