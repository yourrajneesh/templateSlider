import React, { useState, useEffect, useRef } from 'react';



const SliderArrow = ({ disablePreviousButton, disableNextButton }) => {
	return (
		<div >
			{disablePreviousButton ? <span class="previous disabled" title="Previous">Previous</span> : <a href="#" class="previous" title="Previous">Previous</a>}
			{disableNextButton ? <span class="next disabled" title="next">Next</span> : <a href="#" class="next" title="Next">Next</a>}
		</div>
	);


}
export default SliderArrow;