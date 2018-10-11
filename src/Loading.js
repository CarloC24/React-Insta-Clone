import React, { Component } from 'react';
import styled ,{ css } from 'styled-components';
import Logo from './components/HeaderImg/PictureLogo.png';


const Form = styled.form`
                            max-width:800px;
                            display:flex;
                            flex-direction:column;
                            border:1px dotted black;
                            border-radius:2px ;
                            margin:0 auto;
                            height:600px;   `
const Input1 = styled.input`
                            border-radius:2px;
                            padding:10px;
                            align-self:center;
                            width:80%;
                            margin:20px 0;
                            font-size:20px;`
const Button = styled.button `
                            width:80%;
                            align-self:center;
                            border:1px blue;
                            background-color:whitesmoke;
                            padding:20px;
                            :hover{
                                background-color:#778c78;
                                color:#ffffff;  
                            }`


const Img = styled.img`
                        width:100px;
                        align-self:center;
                        height:100px;    `
const HeadingText = styled.h1`align-self:center
                              font-size:30px;
                              margin:10px 0  `


class Loading extends Component {
   
    usernameInput = event => {
        localStorage.setItem('user',event.target.value);
    }
    passwordInput = event => {
        localStorage.setItem('pass',event.target.value);
    }


    render(){
        return(
           <Form onSubmit={this.props.submit}>
                <Img src={Logo} alt="Insta Logo" />
                <HeadingText>Username:</HeadingText>
              <Input1 type="text" placeholder="username" name="username" onChange={this.usernameInput}/>
                <HeadingText>Password:</HeadingText>
              <Input1 type="text" placeholder="password" name="password" onChange={this.passwordInput}/>
              <Button type="submit" value="submit" onSubmit={this.props.submit}  >Log In</Button>
           </Form>
        )
    } 

}

export default Loading;




