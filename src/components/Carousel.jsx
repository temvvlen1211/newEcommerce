import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-switch logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-full mx-auto ">
      {/* Slides */}
      <div className="overflow-hidden ">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className=" flex-shrink-0 object-cover w-full max-h-[800px]"
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 flex items-center justify-center w-full font-bold text-white">
        <div className="container grid gap-3">
          <h1 className="text-6xl ">We will keep you an impeccable look</h1>
          <span className="text-xl ">
            3891 Ranchview Dr. Richardson, California 62639
          </span>
          <p>
            <a
              className="text-2xl transition-colors duration-500 hover:text-red-500"
              href="tel:+97686993794"
            >
              86993794
            </a>
          </p>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute hidden p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 left-4 hover:bg-opacity-75 md:block"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute hidden p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 right-4 hover:bg-opacity-75 md:block"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
