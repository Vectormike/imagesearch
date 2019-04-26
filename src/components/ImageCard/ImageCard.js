import React from 'react';

function ImageCard({description, likes, user, url, location}){

    return (
        <div>
            <div>
                <span><img src={url} alt='' title='' /></span>
                <p>Image by {user}</p>
                <p>Description: {description}</p>
                <p>{likes} likes</p>
                <p>:{location}</p>
            </div>
        </div>
    );
}

export default ImageCard;