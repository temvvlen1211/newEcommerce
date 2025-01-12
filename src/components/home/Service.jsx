import React from "react";
import Logo from "../../svg/Logo";

function Service() {
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
      <section className="flex items-center justify-center px-10 md:px-0 py-10 text-white">
        <div className="container">
          <div className="max-w-full pb-10 md:max-w-lg">
            <p className="hidden">Services</p>
            <h1 className="pb-5 text-5xl font-bold ">What we provide</h1>
            <p className="mb-10 tracking-normal text-gray-500 md:text-lg dark:text-gray-400">
              Risus odio lobortis ullamcorper felis vitae bibendum mi. Penatibus
              fusce consequat donec vitae porttitor elementum.
            </p>
          </div>
          <ul className="flex flex-wrap justify-between gap-5 ">
            {data.map((item, index) => {
              return (
                <>
                  <li key={index} className="flex max-w-full md:max-w-md">
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

export default Service;
