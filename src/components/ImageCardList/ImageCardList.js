import React from 'react';
import ImageCard from '../ImageCard/ImageCard';


function ImageCardList({response}){
	console.log(response)

	return(
		<div>
			{
				response.map((res, i) => {
					return(
						<ImageCard
							key={i}
							likes={res[i].likes}
							user={res[i].user}
							url={res[i].url}
						/>
					);
				})
			}
		</div>
	);

}

export default ImageCardList;