import React from 'react';
import ImageCard from '../ImageCard/ImageCard';


function ImageCardList({response}){

	return(
		<div className="row">
			{
				response.map((res, i) => {
					return(

						<div className="col-lg-3">
							<ImageCard
							key={i}
							likes={response[i].likes}
							description={response[i].alt_description}
							url={response[i].urls['regular']}
							user={response[i].user['name']}

						/>
							
						</div>
					);
				})
			}
		</div>
	);

}

export default ImageCardList;
// user={response[i].user} url={response[i].url}