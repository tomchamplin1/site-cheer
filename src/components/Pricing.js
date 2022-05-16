import React from "react";
import "animate.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Offerings() {
  return (
    <section id="pricing" className="md:px-0 px-5 pb-24 waves">
      <AnimationOnScroll
        class="mx-auto"
        animateIn="animate__fadeInUp"
        animateOnce="true"
      >
        <h3 class="text-center mb-3 text-4xl md:text-5xl font-extrabold leading-tight">
          Simple, <span className="text-gradient">clear</span> pricing
        </h3>
        <p className="text-center text-lg md:mx-64 pb-12">
          We believe that every business should have access to a great website.
          Instead of charging $5,000-10,000, we offer a low, simple, monthly
          subscription starting at $150.
        </p>
      </AnimationOnScroll>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
        <div class="mb-5 mx-auto md:ml-32 p-4 max-w-sm rounded-lg border shadow-md sm:p-8 bg-white">
          <h5 class="mb-4 text-xl font-medium text-black">Standard plan</h5>
          <div class="flex items-baseline text-gray-900">
            <span class="text-3xl font-semibold text-black">$</span>
            <span class="text-5xl font-extrabold tracking-tight text-black">
              150
            </span>
            <span class="ml-1 text-xl font-normal text-black">/month</span>
          </div>
          <ul role="list" class="my-7 space-y-5">
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                decoding="async"
                loading="lazy"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-black">
                5 pages
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                decoding="async"
                loading="lazy"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-black">
                24/7 phone & email support
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                decoding="async"
                loading="lazy"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-black">
                Unlimited edits
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                decoding="async"
                loading="lazy"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-black">
                Unlimited updates
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                decoding="async"
                loading="lazy"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-black">
                Hosting fees included
              </span>
            </li>
          </ul>
        </div>

        <div class="mb-5 mx-auto p-4 max-w-sm rounded-lg border shadow-md sm:p-8 bg-gray-800 border-gray-700">
          <h5 class="mb-4 text-xl font-medium text-white">Pro plan</h5>
          <div class="flex items-baseline text-white">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">250</span>
            <span class="ml-1 text-xl font-normal text-white">/month</span>
          </div>
          <ul role="list" class="my-7 space-y-5">
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                decoding="async"
                loading="lazy"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-white">
                <span className="font-bold">10</span> pages
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                decoding="async"
                loading="lazy"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-white">
                Logo design (two revisions)
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-white">
                24/7 phone & email support
                <br />
                <span className="font-bold">(premium)</span>
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-white">
                Unlimited edits
                <br />
                <span className="font-bold">(same day turnaround)</span>
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-white">
                Unlimited updates
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-white">
                Hosting fees included
              </span>
            </li>
          </ul>
        </div>

        <div class="mb-5 mx-auto md:mr-32 p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8">
          <h5 class="mb-4 text-xl font-medium text-black">Custom plan</h5>
          <div class="flex items-baseline text-black">
            <span class="text-5xl font-extrabold tracking-tight">
              Contact us
            </span>
          </div>
          <ul role="list" class="my-7 space-y-5">
            <li class="flex space-x-3">
              <span class="text-base font-normal leading-tight text-black">
                Everything from Pro plus...
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-black">
                10+ pages
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-black">
                SEO optimized blog posts
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-black">
                Custom designs
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-black">
                Full branding package
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-12 text-center">
        <a
          href="#contact"
          class="rounded-3xl inline-block bg-blue-600 hover:bg-white border border-blue-600 text-white hover:text-blue-600 text-lg py-3 px-6 shadow-xl"
        >
          Start now <span className="font-extrabold">-></span>
        </a>
      </div>
    </section>
  );
}
