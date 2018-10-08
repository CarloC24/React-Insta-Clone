import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/content.scss';

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.dataProp.comments,
            comment: ""
        }
    }
   
    
    addNewComment(event) {
        const textValue = event.target.value;
        const theComments = this.state.comments.slice();
        console.log(theComments);
        
        // theComments = theComments.push({
        //     text: textValue,
        //     username: [event.target.name],
        // })
        if(event.keyCode === 13){
        }
    }
    
    render() {
        const props = this.props;
        return(           
            <div className="comments">
                <p className="likes">{props.dataProp.likes} likes</p>
                {this.state.comments.map( (item,index) => {
                    return(
                        <div className="comments-section" key={index}>
                        <p><span>{item.username}</span>{item.text}</p>
                        </div>
                    )
                })}
                <input type="text" name={props.dataProp.username} onChange={this.addNewComment} />
            </div>
        )
    }
}

Comments.propTypes = {
    dataProp:PropTypes.shape({
        likes: PropTypes.number,
        comments: PropTypes.shape({
            username: PropTypes.string,
            text:PropTypes.string
        })
    })
}

export default Comments