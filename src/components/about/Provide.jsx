import React from "react";
import Logo from "../../svg/Logo";

function Provide() {
  const data = [
    {
      icon: <Logo />,
      name: "haircut",
      discription:
        "A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque",
    },
    {
      icon: <Logo />,
      name: "Moustache",
      discription:
        "A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque",
    },
    {
      icon: <Logo />,
      name: "shave",
      discription:
        "A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque",
    },
    {
      icon: <Logo />,
      name: "stacking",
      discription:
        "A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque",
    },
    {
      icon: <Logo />,
      name: "beard trim",
      discription:
        "A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque",
    },
    {
      icon: <Logo />,
      name: "hair dyeing",
      discription:
        "A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque",
    },
  ];
  return (
    <>
      <section className="flex justify-center text-white   px-10 md:px-0 items-center py-10">
        <div className="container">
          <div className="md:flex grid items-center text-center w-full gap-5 md:justify-between">
            <h1 className="text-3xl font-bold">What we provide</h1>
            <p>
              <button
                type="button"
                class="bg-gradient-to-r from-red-400 via-red-700 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm  p-3 text-center "
              >
                View services
              </button>
            </p>
          </div>
          <ul className="flex flex-wrap justify-between gap-5  my-10">
            {data.map((item) => {
              return (
                <>
                  <li className="flex bg-[#2c2c2c] p-10 hover:border-red-500 duration-150 border-transparent border-4 rounded-md max-w-full md:max-w-md">
                    <p>{item.icon}</p>
                    <div className="flex flex-col gap-5">
                      <h1 className="text-4xl uppercase">{item.name}</h1>
                      <p className="mb-10 tracking-normal text-gray-500 md:text-lg dark:text-gray-400">
                        {item.discription}
                      </p>
                      <p>
                        <button className="text-red-500">From 30$</button>
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

export default Provide;
