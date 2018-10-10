import React from 'react';
import PictureLogo from './HeaderImg/PictureLogo.png';
import Instagram from './HeaderImg/Instagram.png';
import chat from './HeaderImg/chat.png';
import heart from "./HeaderImg/heart.png";
import avatar from "./HeaderImg/avatar.png";
import styled from 'styled-components';

const Heading = styled.header`margin:0 auto;
                             width:100%;
                             background-color:whitesmoke;
                             `
const Nav = styled.nav` display:flex;
                        flex-wrap: wrap;
                        justify-content: space-between;`
const PictureLogoS = styled.img` width:60px;
                                height:40px;
                                margin:55px 0px 0px 20px;
                                padding-right:20px;
                                border-right:1px solid black`
const InstagramText = styled.img`width:15%;
                                 height:150px;`                                
const Input = styled.input` width:230px;
                            height:30px;
                            border-radius:5px;
                            margin-top:60px;`
const ChatImg = styled.img` width:30px;
                            height:30px;
                            margin:55px 0px 0px 10px;`
const HeartImg = styled.img`width:30px;
                            height:30px;
                            margin-top:55px;`
const AvatarImg = styled.img`width:30px;
                             height:30px;
                             margin:55px 40px 0px 0px;`                                                                                    
class Header extends React.Component {
    render() {
        return(
            <Heading>
                <Nav>
                    <PictureLogoS src={PictureLogo} alt="picturelogo" onClick={this.props.toggle}/>
                    <InstagramText src={Instagram} alt="instagramtext"/>
                    <Input type="text" placeholder="Search" onChange={this.props.filterposts} />
                    <ChatImg src={chat}  alt="chat"/>
                    <HeartImg src={heart} alt="heart" />
                    <AvatarImg src={avatar} alt="avatar"/>
                </Nav>
            </Heading>
        )
    }

}

export default Header