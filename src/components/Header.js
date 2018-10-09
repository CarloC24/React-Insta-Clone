import React from 'react';
import PictureLogo from './HeaderImg/PictureLogo.png';
import Instagram from './HeaderImg/Instagram.png';
import chat from './HeaderImg/chat.png';
import heart from "./HeaderImg/heart.png";
import avatar from "./HeaderImg/avatar.png";
import './css/header.scss';

class Header extends React.Component {
    render() {
        return(
            <header>
                <nav>
                    <img src={PictureLogo} alt="picturelogo"/>
                    <img src={Instagram} alt="instagramtext"/>
                    <input type="text" placeholder="Search" onKeyDown={this.props.filterposts} />
                    <img src={chat}  alt="chat"/>
                    <img src={heart} alt="heart"></img>
                    <img src={avatar} alt="avatar"></img>
                </nav>
            </header>
        )
    }

}

export default Header