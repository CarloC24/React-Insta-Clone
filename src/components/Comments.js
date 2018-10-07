import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/content.scss';

class Comments extends Component {
    
    render() {
        const props = this.props;
        return(
            <div className="comments">
                <p>{props.dataProp.likes} likes</p>
                {props.dataProp.comments.map( (item,index) => {
                    return(
                        <div className="comments-section" key={index}>
                        <p><span>{item.username}</span>{item.text}</p>
                        </div>
                    )
                })}
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