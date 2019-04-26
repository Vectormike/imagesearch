import React from 'react';
import ImageCard from '../ImageCard/ImageCard';


function ImageCardList({response}){

	return(
		<div>
			{
				response.map((res, i) => {
					return(
						<ImageCard
							key={i}
							likes={response[i].likes}
							description={response[i].alt_description}
							url={response[i].url[0].small}
						/>
					);
				})
			}
		</div>
	);

}

export default ImageCardList;
// user={response[i].user} url={response[i].url}