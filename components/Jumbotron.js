import React from "react";

const Jumbotron = () => {
  return (
    <div>
      <section className="bg-center bg-no-repeat bg-[url('/img/banner.jpg')] bg-gray-700 bg-blend-multiply -mt-16">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-56 min-h-screen">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            The RESTful Pokémon API
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            All the Pokémon data you'll ever need in one place, easily
            accessible through a modern RESTful API.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              // onClick={() => window.scrollTo({ top: 666, behavior: "smooth" })}
              href="#poke"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 cursor-pointer"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jumbotron;
