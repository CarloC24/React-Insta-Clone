import React from 'react';
import PropTypes from 'prop-types';
import heart from "./HeaderImg/heart.png"; 
import chat from './HeaderImg/chat.png';
import Comments from './Comments.js';

class Content extends React.Component {

    render(){
        const props = this.props
        return(
            <div className="content">
                <nav>
                    <img src={props.data.thumbnailUrl} alt="img1" />
                    <p>{props.data.username}</p>
                </nav>
                <img src={props.data.imageUrl} alt="mainimg"/>
                <img src={heart} alt="heartcontent" />
                <img src={chat} alt="chatcontent" />
                <Comments dataProp={props.data}/>
            </div>
        )
    }
}


Content.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string
    })
}

export default Content
