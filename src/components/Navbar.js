import { React, useState } from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <section className="hero">
      <nav class="absolute p-5 py-3 lg:px-24 z-50 w-full bg-white border-gray-200 shadow-sm border-b border-gray-300">
        <div class="flex flex-wrap justify-between items-center mx-auto">
          <a href="#" class="flex items-center">
            <img src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650924167/SiteCheer/sitecheer_logo_peuwun.svg" class="h-10 md:h-12" alt="logo" decoding="async" />
          </a>
          <div class="flex md:order-2">
            <a
            href="#contact"
              class="rounded-3xl hidden md:block border border-blue-700 text-white bg-blue-600 hover:text-blue-600 hover:bg-white focus:ring-4 focus:ring-blue-300 text-sm px-4 py-2 text-center mr-3 md:mr-0 shadow-lg"
            >
              Get started
            </a>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class={"justify-between items-center w-full md:flex md:w-auto md:order-1" +
              (navbarOpen ? " " : " hidden")
            }
            id="mobile-menu-4"
          >
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md text-center">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 text-black"
                  aria-current="page"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  class="block py-2 pr-4 pl-3 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 text-black"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  class="block py-2 pr-4 pl-3 border-b border-gray-100 border-black md:hover:border-b md:border-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 text-black"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="block py-2 pr-4 pl-3 text-white bg-blue-700 border-black md:hover:border-b md:border-black border-gray-100 md:bg-transparent md:text-black md:p-0"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="pt-12 md:pt-48 pb-40 md:pb-32 mx-auto px-5 md:px-24">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div class="w-full text-left self-center">
            <h1 class="pt-12 md:pt-0 mb-4 text-4xl md:text-5xl text-white">
              <span className="text-gradient">Custom websites</span>. One simple
              monthly price.
            </h1>
            <p class="mb-6 text-white text-xl">
              Hand-crafted websites built to help small businesses thrive
            </p>
            <p class="mb-12">
              <a
                href="#contact"
                class="rounded-3xl inline-block bg-white hover:bg-blue-600 border border-blue-600 text-blue-600 hover:text-white text-lg py-3 px-6 shadow-xl"
              >
                Start now <span className="font-extrabold">-></span>
              </a>
            </p>
          </div>
          <div class="w-full text-center lg:text-right lg:text-left self-end">
            <img class="w-full z-50 inline-block" src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1649931787/SiteCheer/dev1-undraw_kebiwz.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
