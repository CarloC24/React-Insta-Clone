import React, { Component } from 'react';

class Loading extends Component {
    render(){
        return(
           <form>
              <input type="text" placeholder="username" onChange={this.props.usernameInput}/>
              <input type="text" placeholder="password" onChange={this.props.passwordInput}/>
              <input type="submit" value="submit" />
           </form>
        )
    } 

}

export default Loading;




