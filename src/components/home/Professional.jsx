import React from "react";

function Professional() {
  return (
    <>
      <section className="md:flex px-10 md:px-0 items-center justify-center py-10 text-white bg-[#202020]">
        <div className="container grid justify-between md:flex ">
          <div className="max-w-2xl uppercase ">
            <h1 className="text-4xl font-bold">
              professional barbershop for men only
            </h1>
            <span className="hidden">barbercrop</span>
          </div>
          <div className="max-w-2xl ">
            <p className="mb-10 tracking-normal text-gray-500 md:text-lg dark:text-gray-400">
              Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh
              pellentesque. Vitae nunc, dolor, blandit eget eleifend etiam id.
              Amet arcu lobortis sed pulvinar cursus pretium sit pretium.
            </p>
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

export default Professional;
