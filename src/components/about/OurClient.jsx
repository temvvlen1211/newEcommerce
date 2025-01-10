import React, { useState, useEffect } from "react";
import DoubleCheck from "../../svg/DoubleCheck";

const OurClient = () => {
  const slides = [
    "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const comment = [
    [
      {
        icon: <DoubleCheck />,
        text: "Egestas tincidunt arcu pellentesque tortor vulputate. Diam nulla sollicitudin diam, rhoncus cursus faucibus mus ornare. Ut tincidunt ut eu amet sit ut magna. Tincidunt dignissim pharetra, sit ut dictum volutpat pharetra aenean blandit.",
        name: "Harry potter",
      },
      {
        icon: <DoubleCheck />,
        text: "Egestas tincidunt arcu pellentesque tortor vulputate. Diam nulla sollicitudin diam, rhoncus cursus faucibus mus ornare. Ut tincidunt ut eu amet sit ut magna. Tincidunt dignissim pharetra, sit ut dictum volutpat pharetra aenean blandit.",
        name: "Harry potter",
      },
    ],
    [
      {
        icon: <DoubleCheck />,
        text: "Egestas tincidunt arcu pellentesque tortor vulputate. Diam nulla sollicitudin diam, rhoncus cursus faucibus mus ornare. Ut tincidunt ut eu amet sit ut magna. Tincidunt dignissim pharetra, sit ut dictum volutpat pharetra aenean blandit.",
        name: "Harry potter",
      },
      {
        icon: <DoubleCheck />,
        text: "Egestas tincidunt arcu pellentesque tortor vulputate. Diam nulla sollicitudin diam, rhoncus cursus faucibus mus ornare. Ut tincidunt ut eu amet sit ut magna. Tincidunt dignissim pharetra, sit ut dictum volutpat pharetra aenean blandit.",
        name: "Harry potter",
      },
    ],
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
    <section className="  justify-center items-center flex my-10 text-white  ">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold ">What our clients say about us</h1>
          <div className="flex justify-center items-center">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className=" hidden p-2 text-4xl text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full  hover:bg-opacity-75 md:block"
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
              className=" hidden p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full  hover:bg-opacity-75 md:block"
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
          </div>
        </div>
        {/* Slides */}
        <div className="overflow-hidden  text-white">
          <div
            className="flex flex-wrap transition-transform duration-700"
            // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {comment.map((slide, index) => (
              <div
                key={index}
                alt={`Slide ${index + 1}`}
                className="flex  w-1/2 justify-between "
              >
                <div>{slide.icon}</div>
                <div>
                  <p>{slide.text}</p>
                  <p>{slide.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators
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
        </div> */}
      </div>
    </section>
  );
};

export default OurClient;
