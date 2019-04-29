import React from 'react';
import './ImageCard.css';

function ImageCard({description, likes, user, url, location}){
    return (
        <div className="flex-container">
            <div className="flex-item">
                <img src={url} alt='' title='' className="shadow-3"/>
                <dl className="f7 pa2 ma br3 bg-near-white">
                    <dt className="clip">Image</dt>        
                    <dd className="ml0 black w-100">Photo by {user}</dd>
                    <dt className="clip">Description</dt>
                    <dd className="ml0 black w-100">{description}</dd>
                    <dt className="clip">Likes</dt>
                    <dd className="ml0 black w-100">{likes} likes</dd>
                </dl>
            </div>
        </div>
    );
}

export default ImageCard;