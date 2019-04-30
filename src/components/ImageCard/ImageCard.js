import React from 'react';
import './ImageCard.css';

function ImageCard({description, likes, user, url, location}){
    return (
        <div className="pa3 ma">
                <img src={url} alt='' title='' className="shadow-3"/>
                <dl className="f7 pa2 ma br3 ">
                    <dt className="clip">Image</dt>        
                    <dd className="ml0 black w-100">Photo by {user}</dd>
                    <dt className="clip">Description</dt>
                    <dd className="ml0 black w-100">{description}</dd>
                    <dt className="clip">Likes</dt>
                    <dd className="ml0 black w-100">{likes} <i className="fas fa-heart"></i> </dd>
                </dl>
        </div>
    );
}

export default ImageCard;