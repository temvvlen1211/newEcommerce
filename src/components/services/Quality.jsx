import React from "react";

function Quality() {
  const data = [
    {
      image: "/img/clean.jpg",

      name: "haircut",
      discription:
        "A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque. Convallis nec lectus mi nec eget odio ac tempor. Nunc egestas sed",
      top: "50",
      normal: "40",
    },
    {
      image: "/img/clean.jpg",

      name: "Moustache",
      discription:
        "Viverra duis ut orci mi id. Eget ultricies facilisi elementum nec vel a gravida facilisis in. Tellus felis sapien adipiscing. Vel amet ullamcorper tellus sed vel mattis volutpat, id ac.",
      top: "40",
      normal: "30",
    },
    {
      image: "/img/clean.jpg",

      name: "Shave",
      discription:
        "Lorem velit parturient consectetur cursus tincidunt tristique pretium volutpat urna. Vitae scelerisque quam eget. Imperdiet molestie magnis aenean ut orci suspendisse amet, faucibus.",
      top: "15",
      normal: "10",
    },
    {
      image: "/img/clean.jpg",

      name: "Stacking",
      discription:
        "Dapibus ac mattis semper hendrerit eu dolor aliquam. Vitae sem orci non diam. Venenatis augue arcu mauris id eros. Phasellus mauris at habitant tempus tristique hendrerit.",
      top: "20",
      normal: "10",
    },
    {
      image: "/img/clean.jpg",

      name: "Beard trim",
      discription:
        "Interdum tincidunt condimentum vestibulum feugiat arcu, in. Maecenas sit sem erat tellus pellentesque aliquet. Tellus morbi bibendum enim non a interdum sollicitudin pellentesque suspendisse.",
      top: "25",
      normal: "15",
    },
    {
      image: "/img/clean.jpg",

      name: "Hair dyeing",
      discription:
        "Congue pulvinar morbi pharetra tincidunt vel tincidunt. Amet, morbi neque tellus vivamus venenatis diam nisl.Odio orci accumsan, egestas senectus. Sit neque gravida donec.",
      top: "60",
      normal: "40",
    },
  ];
  return (
    <>
      <section className="flex items-center w-full justify-center px-10 md:px-0 text-white">
        <div className="container">
          <div className=" grid md:flex md:justify-between  py-10 ">
            <p className="hidden">Services</p>
            <h1 className=" text-5xl   md:max-w-3xl font-bold ">
              We provide the highest quality service
            </h1>
            <p className=" tracking-normal text-gray-500 md:max-w-2xl md:text-lg dark:text-gray-400">
              Eget ut sodales arcu aliquet diam nec laoreet fames. Urna, eu
              pharetra consequat, euismod iaculis tristique maecenas. Et enim
              iaculis suscipit nunc ultricies nunc fames. Phasellus massa, sed.
            </p>
          </div>
          <ul className="grid w-full gap-10 my-10   ">
            {data.map((item, index) => {
              return (
                <>
                  <li className="md:flex grid gap-10 even:flex-row-reverse  justify-between ">
                    <img
                      key={index}
                      src={item.image}
                      className="object-cover rounded-2xl grayscale shadow-2xl shadow-red-500 hover:scale-105 hover:grayscale-0 duration-300 transition-all md:max-w-2xl  "
                      alt="gg"
                    />
                    <div className="max-w-4xl  ">
                      <h1 className="text-4xl font-extrabold uppercase">
                        {item.name}
                      </h1>
                      <p className=" tracking-normal my-5 text-gray-500 md:text-lg dark:text-gray-400">
                        {item.discription}
                      </p>
                      <div className="grid my-5 md:flex gap-5 uppercase">
                        <span>top barber-${item.top}</span>
                        <span>barber-${item.normal}</span>
                      </div>
                      <p>
                        <button
                          type="button"
                          class=" p-3 text-sm font-medium text-center text-red-700 uppercase border border-red-700 rounded-lg  hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        >
                          Learn more
                        </button>
                      </p>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Quality;
