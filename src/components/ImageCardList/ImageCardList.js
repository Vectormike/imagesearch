import React from 'react';
import ImageCard from '../ImageCard/ImageCard';


function ImageCardList({data}){
	// const {alt_description, urls, likes, user} = data;
	return(
		<div>
			{
				data.map((res, i) => {
					return(
						<ImageCard
							key={i}
							description={res.alt_description}
							likes={res.likes}
							user={res.user}
							url={res.url}
						/>
					);
				})
			}
		</div>
	);

}

export default ImageCardList;