import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/content.scss';
import heart from "./HeaderImg/heart.png"; 
import chat from './HeaderImg/chat.png';

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.dataProp.comments,
            comment: "",
            count: props.dataProp.likes,
        }
    }

    setComment = event => {
        this.setState({comment:event.target.value})
    }
    addComment = event => {
        event.preventDefault();
        let commentsCopy = this.state.comments.slice();
        this.state.comment === "" ? alert('cannot enter a empty value') :  commentsCopy.push({
            text: this.state.comment,
            username: 'Carlo'
        })
        this.setState({comments: commentsCopy})      
    }

    incrementLikes = () => {
        this.setState(prevState => {
            return{
                count: prevState.count + 1,
            }
        })
    }
   
    
    render() {
        const props = this.props;
        return(           
            <div className="comments">
                <p className="likes">{this.state.count}likes</p>
                <img src={heart} alt="heartcontent" onClick={this.incrementLikes} />
                <img src={chat} alt="chatcontent" />
                {this.state.comments.map( (item,index) => {
                    return(
                        <div className="comments-section" key={index}>
                        <p><span>{item.username}</span>{item.text}</p>
                        </div>
                    )
                })}
                <form onSubmit={this.addComment}>
                    <input type="text" name={props.dataProp.username} onChange={this.setComment} />
                </form>               
            </div>
        )
    }
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text:PropTypes.string,
            username:PropTypes.string,
        })
    )
}

export default Comments