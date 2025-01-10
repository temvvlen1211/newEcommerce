import React from "react";

function MenOnly() {
  return (
    <>
      <section className="flex  items-center justify-center py-20 text-white bg-[#202020]">
        <div className="container grid justify-between md:flex gap-10 ">
          <div className="max-w-2xl uppercase ">
            <h1 className="text-4xl font-bold">
              professional barbershop for men only
            </h1>
            <span className="hidden">barbercrop</span>
          </div>
          <div className="max-w-2xl">
            <div className="flex gap-5 mb-10 ">
              <div>
                <p className="text-2xl font-bold mb-7">Since 2015</p>
                <p className="tracking-normal text-gray-500 md:text-lg dark:text-gray-400">
                  Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim
                  duis cras odio.
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold mb-7">1000+ clients</p>
                <p className="tracking-normal text-gray-500 md:text-lg dark:text-gray-400">
                  Metus varius vitae habitant lorem. Porta scelerisque facilisi.
                  learn more
                </p>
              </div>
            </div>

            <button
              type="button"
              className="hidden p-3 text-sm font-medium text-center text-red-700 uppercase border border-red-700 rounded-lg md:block hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenOnly;
