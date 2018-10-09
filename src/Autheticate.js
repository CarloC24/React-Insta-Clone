import  React, { Component } from 'react';
import Loading from './Loading';

const Authenticate = App => 
    class extends Component {
        constructor(){
            super();
            this.state = {
                username: '',
                password: '',
                authenticated: false,
            }
        }

        usernameInput = event => {
            this.setState({[event.target.name]: event.target.value})
        }

        passwordInput = event => {           
            this.setState({[event.target.name]: event.target.value})
        }

        submit = event => {
            event.preventDefault();
            if(this.state.username.length > 0 && this.state.password.length > 0){
                this.setState(() => {
                    return {authenticated:true}
                })
            } else {
                alert('Please put a username and password');
            }
        }

        render(){
            return (this.state.authenticated ?<App />:<Loading submit={this.submit} usernameInput={this.usernameInput} passwordInput={this.passwordInput}/>)         
        }
    }

export default Authenticate