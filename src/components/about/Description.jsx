import React from "react";

function Description() {
  return (
    <>
      <section className="flex justify-center items-center px-10 md:px-0 py-10">
        <div className="container">
          <img
            className="w-full object-cover"
            src="/img/aboBarber.jpg"
            alt="about"
          />
          <div className="flex my-10 justify-between text-gray-500 text-lg">
            <p>
              Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh
              pellentesque. Vitae nunc, dolor, blandit eget eleifend etiam id.
              Amet arcu lobortis sed pulvinar cursus pretium sit pretium.
            </p>
            <p>
              Mollis rhoncus sem nisl dictumst mauris. At faucibus arcu,
              scelerisque ultricies accumsan arcu, molestie. Sed ac elit varius
              enim venenatis ac, id. Ullamcorper non interdum posuere sit nibh
              id metus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
