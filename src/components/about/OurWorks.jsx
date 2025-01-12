import React from "react";

function OurWorks() {
  return (
    <>
      <section className=" py-10 uppercase px-10 md:px-0 w-full text-white">
        <div className="grid justify-center items-center py-5">
          <h1 className="text-2xl font-extrabold">Our works</h1>
          <p className="hidden">our best works</p>
        </div>
        <div className="overflow-hidden grid md:flex w-full">
          <img
            className="transition-all object-cover hover:scale-105 duration-300 filter grayscale hover:grayscale-0 md:w-1/4 h-auto"
            src="/img/work1.jpg"
            alt="Project 1 description"
          />
          <img
            className="transition-all duration-300 object-cover hover:scale-105 filter grayscale hover:grayscale-0 md:w-1/4 h-auto"
            src="/img/work2.jpg"
            alt="Project 2 description"
          />
          <img
            className="transition-all duration-300 object-cover hover:scale-105 filter grayscale hover:grayscale-0 md:w-1/4 h-auto"
            src="/img/work3.jpg"
            alt="Project 3 description"
          />
          <img
            className="transition-all duration-300 object-cover hover:scale-105 filter grayscale hover:grayscale-0 md:w-1/4 h-auto"
            src="/img/work4.jpg"
            alt="Project 4 description"
          />
        </div>
      </section>
    </>
  );
}

export default OurWorks;
