import React from "react";
import "animate.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Why() {
  return (
    <section>
      <div class="container mx-auto pb-48 px-5">
        <AnimationOnScroll
          class="mx-auto"
          animateIn="animate__fadeInUp"
          animateOnce="true"
        >
          <h3 class="text-center mb-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Why <span className="text-gradient">us</span>?
          </h3>
          <p className="text-center text-lg md:mx-64">
            We offer top class websites for a fraction of the cost.
          </p>
        </AnimationOnScroll>

        <div class="lg:px-12 py-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div class="text-center rounded overflow-hidden">
            <div className="h1 pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8%"
                height="8%"
                fill="currentColor"
                class="mx-auto bi bi-lightning-charge-fill"
                viewBox="0 0 16 16"
                decoding="async"
                loading="lazy"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
              </svg>
            </div>
            <div class="py-4">
              <h5 class="mb-2 text-2xl md:text-3xl font-bold text-black">
                Our sites are lightning fast
              </h5>
              <p class="text-lg text-gray-700 dark:text-gray-400">
                Unlike website builders, we only use HTML and CSS. This means
                our sites load extremely fast (which Google likes).
              </p>
            </div>
          </div>
          <div class="text-center rounded overflow-hidden">
            <div className="h1 pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8%"
                height="8%"
                fill="currentColor"
                class="mx-auto bi bi-phone-fill"
                viewBox="0 0 16 16"
                decoding="async"
                loading="lazy"
              >
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
              </svg>
            </div>

            <div class="py-4">
              <h5 class="mb-2 text-2xl md:text-3xl font-bold text-black">
                We build everything mobile first
              </h5>
              <p class="text-lg text-gray-700 dark:text-gray-400">
                50% of all internet visits are now through mobile. We make sure
                everyone has a great experience.
              </p>
            </div>
          </div>
          <div class="text-center rounded overflow-hidden">
            <div className="h1 pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8%"
                height="8%"
                fill="currentColor"
                class="mx-auto bi bi-google"
                viewBox="0 0 16 16"
                decoding="async"
                loading="lazy"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </div>

            <div class="py-4">
              <h5 class="mb-2 text-2xl md:text-3xl font-bold text-black">
                SEO optimization
              </h5>
              <p class="text-lg text-gray-700 dark:text-gray-400">
                Our sites are fully optimized to rank on Google, helping people
                find you easier.
              </p>
            </div>
          </div>
          <div class="text-center rounded overflow-hidden">
            <div className="h1 pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8%"
                height="8%"
                fill="currentColor"
                class="mx-auto bi bi-telephone-fill"
                viewBox="0 0 16 16"
                decoding="async"
                loading="lazy"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </div>

            <div class="py-4">
              <h5 class="mb-2 text-2xl md:text-3xl font-bold text-black">
                Top notch customer service
              </h5>
              <p class="text-lg text-gray-700 dark:text-gray-400">
                Reach out anytime. We're personally available 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
