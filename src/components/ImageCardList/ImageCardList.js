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
							url={response[i].urls['small']}
							user={response[i].user['name']}

						/>
					);
				})
			}
		</div>
	);

}

export default ImageCardList;
// user={response[i].user} url={response[i].url}