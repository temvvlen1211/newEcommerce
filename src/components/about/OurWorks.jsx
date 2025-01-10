import React from "react";

function OurWorks() {
  return (
    <>
      <section className=" my-10 uppercase grid justify-center items-center w-full text-white">
        <div className="grid justify-center items-center">
          <h1 className="text-2xl font-extrabold">Our works</h1>
          <p className="hidden">our best works</p>
        </div>
        <div className=" overflow-hidden grid w-full md:flex my-5">
          <img
            class="h-auto  w-full transition-all hover:scale-105 duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description"
          />

          <img
            class="h-auto  transition-all duration-300  hover:scale-105 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description"
          />

          <img
            class="h-auto  transition-all duration-300 rounded-lg  hover:scale-105 cursor-pointer filter grayscale hover:grayscale-0"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description"
          />

          <img
            class="h-auto  transition-all duration-300 rounded-lg cursor-pointer hover:scale-105 filter grayscale hover:grayscale-0"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description"
          />
        </div>
      </section>
    </>
  );
}

export default OurWorks;
