import React from 'react';
import './ImageCard.css';

function ImageCard({description, likes, user, url, location}){

    return (
        <div className="cf pa2">
            <div className="fl w-50 w-25-m w-20-l pa2">
                <a href="#">
                    <img src={url} alt='' title='' className="w-100 db outline black-10"/>
                    <dl className="mt2 f6 lh-copy">
                        <dt className="clip">Image</dt>        
                        <dd className="ml0 black truncate w-100">Image from {user}</dd>
                        <dt className="clip">Description</dt>
                        <dd className="ml0 black truncate w-100">Description: {description}</dd>
                        <dt className="clip">Likes</dt>
                        <dd className="ml0 black truncate w-100">{likes} likes</dd>
                        <dt className="clip">Location</dt>
                        <dd className="ml0 black truncate w-100">:{location}</dd>
                    </dl>
                </a>
            </div>
        </div>
    );
}

export default ImageCard;