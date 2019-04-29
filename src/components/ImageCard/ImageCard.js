import React from 'react';
import './ImageCard.css';

function ImageCard({description, likes, user, url, location}){

    return (
		<div className="container-fluid">
			<div className="row">
            <div className="col-sm-6">
                <img src={url} alt='' title='' className="w-100"/>
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
            </div>
				<div className="col-sm-6">
                <img src={url} alt='' title='' className="w-100"/>
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
            </div>
        </div>
		</div>
    );
}

export default ImageCard;