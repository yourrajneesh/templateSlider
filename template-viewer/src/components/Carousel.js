import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Card from "./Card"
// import SliderArrow from "./SliderArrow"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const [tempalteCards, setTempalteCards] = useState([]);
  const [focusTemplate, setFocusTemplate] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [currrentCount, setCurrrentCount] = useState(0);

  const sliderRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3001/templateData')
      .then(res => res.json())
      .then(tempalteCards => {
        setTempalteCards(tempalteCards);
        setFocusTemplate(tempalteCards[0]);
      });
  }, []);

  const next = () => {
    sliderRef.current.slickNext();
    setCurrrentCount(currrentCount + 1);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    setCurrrentCount(currrentCount - 1);

  };

  const updateSlideCount = (current, total) => {
    setSlideCount(total);
    setCurrentSlide(current);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    afterChange: (current) => setCurrentSlide(current),
    beforeChange: updateSlideCount
  
  };

  return (
    <div id='container'>
      <header>
        Code Development Project
      </header>
      <div id="main" role="main">
        <Card focusTemplate={focusTemplate} />

        {/* <div style={{ textAlign: "center", margin: "0 0 20px" }}>
          <button
            className="button"
            onClick={previous}
            disabled={currentSlide === 0}
          >
            Previous
          </button>
          <button
            className="button"
            onClick={next}
            disabled={currrentCount > (tempalteCards.length / sliderSettings.slidesToScroll - 1)}
          >
            Next
          </button>

        </div> */}
         
        <div className="thumbnails">
        {(currentSlide === 0) ? <span className="previous disabled" title="Previous">Previous</span> : <a href="#" className="previous"  onClick={previous} title="Previous">Previous</a>}
          <Slider ref={sliderRef} {...sliderSettings}>
            {tempalteCards.map((tempalteCard, index) => (
              <div className="group" key={index}>
                <a href="#"  className={focusTemplate.image === tempalteCard.image ? 'active' : ''} title={tempalteCard.image}>
                  <img
                   
                    onClick={() => setFocusTemplate(tempalteCard)}
                    src={require(`../images/thumbnails/${tempalteCard.thumbnail}`)}
                    alt={tempalteCard.image}
                    width="145" height="121"
                  />
                  <span>{focusTemplate.image.split('-')[0]}</span>
                </a>
                               
              </div>
            ))}
          </Slider>
          {(currrentCount > (tempalteCards.length / sliderSettings.slidesToScroll - 1)) ? <span className="next disabled" title="next">Next</span> : <a href="#"  onClick={next} className="next" title="Next">Next</a>}
        </div>
      </div>
    </div>
  );
}
