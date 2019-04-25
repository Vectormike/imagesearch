import React from 'react';

function ImageCard({description, likes, user, url}){
console.log(description)
    return (
        <div>
            <div>
                <span><img src={url} alt='' /></span>
                <p>Image by {user}</p>
                <p>Description: {description}</p>
                <p>{likes} likes</p>
            </div>
        </div>
    );
}

export default ImageCard;