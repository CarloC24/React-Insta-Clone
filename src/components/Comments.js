import React, {Component} from 'react';
import PropTypes from 'prop-types';
import heart from "./HeaderImg/heart.png"; 
import chat from './HeaderImg/chat.png';
import styled from 'styled-components';



const CommentsWrapper = styled.div`margin-top:10px;`;

const Likes = styled.p` font-weight: bold;
                        padding-left:10px;
                        font-size:24px;
                        margin-bottom:10px;`
const LikesSpan = styled.span`margin-left:5px;`                        

const HeartComment = styled.img`padding-left:10px`;
const ChatComment = styled.img`padding-left:15px`;

const CommentsSection = styled.div`width:97%
                                    margin:0 auto;`;
const SectionP = styled.p`padding-left:5px;
                          padding-top:10px;
                          font-size:18px;
                          margin-bottom:0px;`
const SectionSpan = styled.span`font-weight:bold;
                                font-size:20px;
                                padding-right:10px;`
const CommentsInput = styled.input` padding:5px;
                                    width:97%;
                                    margin:10px;`                                
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
            <CommentsWrapper>
                <form onSubmit={this.addComment}>
                <Likes>{this.state.count}<LikesSpan>likes</LikesSpan></Likes>
                <HeartComment src={heart} alt="heartcontent" onClick={this.incrementLikes} />
                <ChatComment src={chat} alt="chatcontents" />
                {this.state.comments.map( (item,index) => {
                    return(
                        <CommentsSection key={index}>
                        <SectionP><SectionSpan>{item.username}</SectionSpan>{item.text}</SectionP>
                        </CommentsSection>
                    )
                })}               
                    <CommentsInput type="text" name={props.dataProp.username} onChange={this.setComment} />
                </form>               
            </CommentsWrapper>
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