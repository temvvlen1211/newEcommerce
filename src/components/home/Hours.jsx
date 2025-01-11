import React from "react";

function Hours() {
  return (
    <>
      <section className="relative my-10 font-bold">
        <img
          className="relative object-cover h-[500px] w-full"
          src="/img/room.jpg"
          alt="image description"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white ">
          <div className="container grid gap-5 md:flex md:justify-between ">
            <div className="md:max-w-2xl">
              <h1 className=" text-4xl">
                Team of professionals is waiting for you
              </h1>
              <p className="tracking-normal my-3 text-gray-500 md:text-lg">
                Risus odio lobortis ullamcorper felis vitae bibendum mi.
                Penatibus fusce consequat donec vitae porttitor elementum
                volutpat gravida. Tellus hac tristique nisi, id amet cras
                tempor, amet.
              </p>
              <button
                type="button"
                className="p-3   font-medium text-center text-red-700 uppercase border border-red-700 rounded-lg hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Learn more
              </button>
            </div>
            <div className="md:max-w-2xl">
              <h1 className="mb-2 text-4xl">Special Opening Hours</h1>
              <p>Monday: 9:00 am – 7:30 pm</p>
              <p>Tuesday: 9:00 am – 7:30 pm </p>
              <p>Wednesday: 9:00 am – 7:30 pm</p>
              <p>Thursday: 9:00 am – 7:30 pm </p>
              <p>Friday: 9:00 am – 7:30 pm </p>
              <p>Sat/sun: CLOSED </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hours;
