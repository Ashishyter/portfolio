import React, { useState, useEffect } from 'react';
import { FaPlayCircle, FaPauseCircle, FaArrowAltCircleLeft, FaArrowAltCircleRight  } from 'react-icons/fa';
import './ImageSlider.css';  
import img from '../../assets/slide.jpg'

const slidesData = [
  {
    imageUrl: `${img}`,
    text: 'Slide 1 Text',
  },
  {
    imageUrl: `${img}`,
    text: 'Slide 2 Text',
  },
  {
    imageUrl: `${img}`,
    text: 'Slide 3 Text',
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        goToNextSlide();
      }
    }, 3000); // Adjust interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [currentSlide, isPlaying]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1));
  };

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="image-slider">
      <div className="slides-container">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
            {/* <div className="text-overlay">
              <p>{slide.text}</p>
            </div> */}
          </div>
        ))}
      </div>
      
     
      <div className="image-shadow">
        <div className="image-text">
          <p className='hello'>Hello,</p>
          <h1>
            I'm <span>Ashish</span>
          </h1>
          <h1>Website Developer</h1>
          <p>I am a skilled passionate web developer with experience in creating visually appealing and user-friendly websites.</p>
          <button>Download CV</button>
        </div>
      </div>

      <div className="slider-dots">
        {slidesData.map((slide, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      <div className="controls">
        <button onClick={togglePlayPause} className='play-pause'>
          {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
        </button>
        <button onClick={goToPreviousSlide} className='previous'>
          <FaArrowAltCircleLeft />
        </button>
        <button onClick={goToNextSlide} className='next'>
          <FaArrowAltCircleRight  />
        </button>
      </div>

    </div>
  );
};

export default ImageSlider;
