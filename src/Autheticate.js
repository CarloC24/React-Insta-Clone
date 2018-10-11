import  React, { Component } from 'react';
import Loading from './Loading';



const Authenticate = App => 
    class extends Component {
        constructor(){
            super();
            this.state = {
                authenticated: false,
            }
        }

        submit = event => {
            event.preventDefault();
            if(localStorage.getItem('user') && localStorage.getItem('pass')){
                this.setState(() => {
                    return {authenticated:true}
                })
                localStorage.clear();
            } else {
                alert('Please put a username and password');
            }
        }

        render(){
            return (this.state.authenticated ?<App /> :<Loading submit={this.submit} />)         
        }
    }

export default Authenticate