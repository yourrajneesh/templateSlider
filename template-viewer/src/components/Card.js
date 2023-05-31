import React, { useState, useEffect, useRef } from 'react';



const  Card  = ({ focusTemplate }) => {

  console.log(focusTemplate);
  if (focusTemplate != null) {

    return (
      

<div id="large">
			<div className="group">
				<img src={focusTemplate != null ? require(`../images/large/${focusTemplate.image}`) : ''} alt="Large Image" width="430" height="360" />
				<div className="details">
					<p><strong>Title</strong> {focusTemplate.title}</p>
					<p><strong>Description</strong> {focusTemplate.description}</p>
					<p><strong>Cost</strong> {focusTemplate.cost}</p>
					<p><strong>ID #</strong> {focusTemplate.image.split('-')[0]}</p>
					<p><strong>Thumbnail File</strong> {focusTemplate.image}</p>
					<p><strong>Large Image File</strong> {focusTemplate.thumbnail}</p>
				</div>
			</div>
		</div>


    );
  }
  else {
    return (

      <div className='focusImageContainer'>

      </div>
    );
  }

}
export default Card;