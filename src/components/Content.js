import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments.js';
import './css/content.scss';
import styled from 'styled-components';




const ContentWrapper = styled.div`
                                  width:100%;
                                  box-shadow: 2px 3px #737a73;
                                  border:1px solid grey;
                                  border-radius:4px;
                                  margin-bottom: 10px;
                                  `
const NavContent = styled.nav`  display:flex;
                                flex-wrap: wrap;
                                margin: 20px 0px 5px 0px;` 
const ThumbnailImg = styled.img`border-radius: 50%;
                                height:40px;
                                width:40px;`
const Username = styled.p`padding:10px 0px 0px 15px;
                          font-size:18px;`
const MainImg = styled.img`width:100%;
                            `

class Content extends React.Component {



    render(){
        const props = this.props
        return(
            <ContentWrapper>
                <NavContent>
                    <ThumbnailImg src={props.data.thumbnailUrl} alt="img1" />
                    <Username>{props.data.username}</Username>
                </NavContent>
                <MainImg src={props.data.imageUrl} alt="mainimg" />
                <div className="section">            
                    <Comments dataProp={props.data} />
                </div>
            </ContentWrapper>
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
