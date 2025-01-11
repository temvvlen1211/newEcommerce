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
    <section className="relative w-full h-full mx-auto ">
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
              className=" h-[700px] flex-shrink-0 object-cover w-full md:h-[700px]\"
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 flex items-center justify-center w-full font-bold text-white">
        <div className="container grid md:max-w-lg gap-3">
          <div className=" grid md:max-w-lg gap-3">
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
      </div>

      <button
        onClick={handlePrev}
        className="absolute hidden p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 left-4 hover:bg-opacity-75 md:block"
      >
        <svg
          class="w-5 h-5 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          ></path>
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute hidden p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full top-1/2 right-4 hover:bg-opacity-75 md:block"
      >
        <svg
          class="w-5 h-5 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          ></path>
        </svg>
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
    </section>
  );
};

export default Carousel;
