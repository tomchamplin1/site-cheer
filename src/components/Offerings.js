import React from "react";
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Offerings() {
  return (
    <section id="services">
      <img
        src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650574942/SiteCheer/squares_q6evf1.svg"
        className="w-full"
        decoding="async"
        loading="lazy"
      />
      <div className="px-5 lg:px-24 pb-48">
      <AnimationOnScroll class="mx-auto" animateIn="animate__fadeInUp" animateOnce="true">
        <h3 class="text-center mb-3 text-4xl md:text-5xl font-extrabold leading-tight">
        How we can help <span className="text-gradient">today</span>
        </h3>
        <p className="text-center text-lg md:mx-64">
        We specialize in developing lightning fast, custom websites for
            small businesses and entrepreneurs. Our websites help you bring in
            more customers and increase revenue.
        </p>
      </AnimationOnScroll>
        <div class="lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div class="text-center rounded overflow-hidden">
            <div className="h1 pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10%"
                height="10%"
                fill="currentColor"
                class="mx-auto bi bi-laptop"
                viewBox="0 0 16 16"
                decoding="async"
                loading="lazy"
              >
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
              </svg>
            </div>

            <div class="py-4">
              <h5 class="mb-2 text-2xl md:text-3xl font-bold text-black">
                Website Design
              </h5>
              <p class="text-lg text-gray-700 dark:text-gray-400">
                We hand-code websites from the ground up using only HTML and
                CSS.
              </p>
            </div>
          </div>
          <div class="text-center rounded overflow-hidden">
            <div className="h1 pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10%"
                height="10%"
                fill="currentColor"
                class="mx-auto bi bi-search"
                viewBox="0 0 16 16"
                decoding="async"
                loading="lazy"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>

            <div class="py-4">
              <h5 class="mb-2 text-2xl md:text-3xl font-bold text-black">
                SEO Optimization
              </h5>
              <p class="text-lg text-gray-700 dark:text-gray-400">
                All content is fully SEO optimized, helping your site rank
                higher on Google.
              </p>
            </div>
          </div>
          <div class="text-center rounded overflow-hidden">
            <div className="h1 pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10%"
                height="10%"
                fill="currentColor"
                class="mx-auto bi bi-pencil-square"
                viewBox="0 0 16 16"
                decoding="async"
                loading="lazy"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </div>

            <div class="py-4">
              <h5 class="mb-2 text-2xl md:text-3xl font-bold text-black">
                Copywriting
              </h5>
              <p class="text-lg text-gray-700 dark:text-gray-400">
                All text is crafted to help turn site visitors into customers.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="#contact"
            class="rounded-3xl inline-block bg-blue-600 hover:bg-white border border-blue-600 text-white hover:text-blue-600 text-lg py-3 px-6 shadow-xl"
          >
            Start now <span className="font-extrabold">-></span>
          </a>
        </div>
      </div>
    </section>
  );
}
