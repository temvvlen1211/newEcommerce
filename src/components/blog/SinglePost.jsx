import React from "react";

const SinglePost = () => {
  return (
    <>
      <section className="flex items-center justify-center w-full text-white">
        <div className="container">
          <div className="grid md:gap-16 md:flex">
            <div className="w-2/3">
              <img src="/img/man1.jpg" className="object-cover w-full" alt="" />
              <h1 className="uppercase">
                5 advantages why you should visit barbershop
              </h1>
              <p></p>
            </div>
            <aside className="w-1/3">
              <form class="  ">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
              <div className="grid gap-10">
                <h1 className="uppercase">recent post</h1>
                <article className="flex justify-between">
                  <img className="w-1/3" src="/img/man1.jpg" alt="" />
                  <div className="w-2/4">
                    <h1>5 advantages why you should visit barbershop</h1>
                    <p>13 October, 2021</p>
                  </div>
                </article>
                <article className="flex justify-between">
                  <img className="w-1/3" src="/img/man1.jpg" alt="" />
                  <div className="w-2/4">
                    <h1>5 advantages why you should visit barbershop</h1>
                    <p>13 October, 2021</p>
                  </div>
                </article>
                <article className="flex justify-between">
                  <img className="w-1/3" src="/img/man1.jpg" alt="" />
                  <div className="w-2/4">
                    <h1>5 advantages why you should visit barbershop</h1>
                    <p>13 October, 2021</p>
                  </div>
                </article>
              </div>
              <div className=" uppercase">
                <h1>Categories</h1>
                <a href="">hairCut</a>
                <a href="">BeardCare</a>
                <a href="">cosmetics</a>
              </div>
              <div className="uppercase">
                <h1>
                  <button>hairstyle</button>
                  <button>shave</button>
                  <button> beard</button>
                  <button>cosmetics</button>
                  <button>dyeing</button>
                  <button>mustache</button>
                  <button>haircut</button>
                </h1>
              </div>
              <div>
                <h1>10%10%10%10%10%10%10%10%10%10%10%10%</h1>
                <div className="flex justify-center items-center">
                  <h1>Bring a friend and get a 10% discount card</h1>
                  <p>Nullam feugiat integer mi enim arcu, interdum faucibus.</p>
                  <button
                    type="button"
                    class="bg-gradient-to-r from-red-400 via-red-700 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm  p-3 text-center "
                  >
                    View services
                  </button>
                </div>
                <h1>10%10%10%10%10%10%10%10%10%10%10%10%</h1>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
