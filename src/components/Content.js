import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments.js';
import './css/content.scss';

class Content extends React.Component {



    render(){
        const props = this.props
        return(
            <div className="content">
                <nav>
                    <img src={props.data.thumbnailUrl} alt="img1" />
                    <p>{props.data.username}</p>
                </nav>
                <div className="imagecontainer">
                <img src={props.data.imageUrl} alt="mainimg"/>
                </div>
                <div className="section">            
                    <Comments dataProp={props.data} />
                </div>
            </div>
        )
    }
}


Content.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
    })
}

export default Content
