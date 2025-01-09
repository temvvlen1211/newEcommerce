import React from "react";

function Hours() {
  return (
    <>
      <section className="relative py-10 font-bold">
        <img
          className="relative object-cover w-full"
          src="/img/room.jpg"
          alt="image description"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white ">
          <div className="container grid md:flex text-wrap">
            <div className="w-1/2">
              <h1 className="pb-5 text-4xl">
                Team of professionals is waiting for you
              </h1>
              <p className="tracking-normal text-gray-500 md:text-lg dark:text-gray-400">
                Risus odio lobortis ullamcorper felis vitae bibendum mi.
                Penatibus fusce consequat donec vitae porttitor elementum
                volutpat gravida. Tellus hac tristique nisi, id amet cras
                tempor, amet.
              </p>
              <button
                type="button"
                className="p-3 mt-5 text-sm font-medium text-center text-red-700 uppercase border border-red-700 rounded-lg hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Learn more
              </button>
            </div>
            <div className="w-1/2">
              <h1 className="pb-5 text-4xl">Special Opening Hours</h1>
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
