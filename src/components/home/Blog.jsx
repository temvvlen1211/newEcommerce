import React from "react";

function Blog() {
  return (
    <section className="flex items-center justify-center my-10">
      <div className="container text-white">
        <div className="pb-10 uppercase ">
          <h1 className="text-4xl font-bold">Our blog</h1>
          <p className="hidden">recentPosts</p>
        </div>
        {/* cart */}
        <div className="grid justify-between gap-10 md:flex">
          <div class=" overflow-hidden inline-block max-w-lg ">
            <a href="#">
              <img
                className="object-cover duration-200 ease-in rounded-2xl hover:scale-105"
                src="/img/man1.jpg"
                alt="product image"
              />
            </a>
            <div class=" pt-10">
              <a href="#">
                <h5 class="text-3xl font-semibold tracking-tight  dark:text-white ">
                  5 advantages why you should visit barbershop
                </h5>
              </a>
              <div class="flex items-center justify-between">
                <a href="" class="  font-bold text-red-500">
                  04 August, 2021
                </a>
              </div>
            </div>
          </div>
          <div class=" overflow-hidden max-w-lg ">
            <a href="#">
              <img
                className="object-cover duration-200 ease-in rounded-2xl hover:scale-105"
                src="/img/man1.jpg"
                alt="product image"
              />
            </a>
            <div class=" pt-10">
              <a href="#">
                <h5 class="text-3xl font-semibold tracking-tight  dark:text-white">
                  5 advantages why you should visit barbershop
                </h5>
              </a>
              <div class="flex items-center justify-between">
                <a href="" class="  font-bold text-red-500">
                  04 August, 2021
                </a>
              </div>
            </div>
          </div>
          <div class="overflow-hidden max-w-lg ">
            <a href="#">
              <img
                className="object-cover duration-200 ease-in rounded-2xl hover:scale-105"
                src="/img/man1.jpg"
                alt="product image"
              />
            </a>
            <div class=" pt-10">
              <a href="#">
                <h5 class="text-3xl font-semibold tracking-tight  dark:text-white">
                  5 advantages why you should visit barbershop
                </h5>
              </a>
              <div class="flex items-center justify-between">
                <a href="" class="  font-bold text-red-500">
                  04 August, 2021
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
