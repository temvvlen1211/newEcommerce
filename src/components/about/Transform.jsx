import React from "react";

const Transform = () => {
  return (
    <>
      <section className="relative my-10 font-bold">
        <img
          className="relative object-cover h-96 w-full"
          src="/img/promo.jpg"
          alt="image description"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white ">
          <div className="container grid md:flex justify-end ">
            <div className="md:max-w-lg ">
              <h1 className=" text-4xl">Ready to transform?</h1>
              <p className="my-3">
                Tincidunt ante faucibus in dui quam aliquam integer nunc neque.
                Augue in nullam urna nulla. Sed nisi habitant elementum cras
                duis placerat egestas nisl. Vestibulum molestie tellus facilisi
                id. Sed id. Book now
              </p>
              <button
                type="button"
                class="bg-gradient-to-r from-red-400 via-red-700 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm  p-3 text-center "
              >
                View services
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transform;
