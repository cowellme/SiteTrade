import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/250x150',
  'https://via.placeholder.com/100x80'
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevious() {
    setCurrentIndex((currentIndex - 1) % images.length);
  }

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img key={index} src={image} />
      ))}
      <button onClick={handlePrevious}>Предыдущее</button>
      <button onClick={handleNext}>Следующее</button>
    </div>
  );
}

export default Carousel;
