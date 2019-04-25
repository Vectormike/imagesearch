import React from 'react';

function ImageCard({description, likes, user, url}){

    return (
        <div>
            <div>
                <span><img src={url} alt='' title/></span>
                <p>Image by {user}</p>
                <p>{description}</p>
                <p>{likes} likes</p>
            </div>
        </div>
    );
}

export default ImageCard;