import React from "react";
import "animate.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Portfolio() {
  return (
    <section id="portfolio" className="pb-48 px-5 circles">
      <AnimationOnScroll
        class="mx-auto"
        animateIn="animate__fadeInUp"
        animateOnce="true"
      >
        <h3 class="text-center mb-3 text-4xl md:text-5xl font-extrabold leading-tight">
          Our <span className="text-gradient">work</span>
        </h3>
        <p className="text-center text-lg md:mx-64 pb-12">
          We cater to any industry, and match our branding and styling to your
          business' specific needs.
        </p>
      </AnimationOnScroll>
      <div class="mx-auto">
        <div className="grid sm:items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center px-12 pb-12 gap-5">
          <div class="flex-shrink-0 text-center block max-w-sm bg-white shadow-lg">
            <picture>
              <source
                srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1738006987/Oasis_SS.webp"
                type="image/webp"
              />
              <img
                src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1738006987/Oasis_SS.jpg"
                className="mx-auto"
                loading="lazy"
                decoding="async"
                alt="oasis integrated health solutions"
                width="400px"
                height="220px"
              />
            </picture>
            <div className="text-left pl-3">
              <h5 class="flex pt-4 pb-1 text-lg tracking-tight text-black font-bold">
                Oasis Integrated Health Solutions
              </h5>
              <p class="flex text-md text-gray-700 pb-5">El Paso, TX</p>
              <p class="flex text-lg text-black">
                Oasis Integrated Health Solutions is a health optimization
                company catering to clients throughout the Southwest.
              </p>
              <div className="py-8 text-left">
                <p>
                  <a
                    href="https://oi-health.com"
                    class="rounded-3xl inline-block bg-blue-600 border border-blue-600 hover:bg-white hover:text-blue-600 text-white text-lg px-5 py-2 justify-center text-center"
                  >
                    Visit page
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="flex-shrink-0 text-center block max-w-sm bg-white shadow-lg">
            <picture>
              <source
                srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1738007089/IAH_SS.webp"
                type="image/webp"
              />
              <img
                src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1738007089/IAH_SS.jpg"
                className="mx-auto"
                loading="lazy"
                decoding="async"
                alt="i'm almost home animal rescue"
                width="400px"
                height="220px"
              />
            </picture>
            <div className="text-left pl-3">
              <h5 class="pt-4 pb-1 text-lg tracking-tight text-black font-bold">
                I'm Almost Home Animal Rescue
              </h5>
              <p class="text-md text-gray-700 pb-5">Anthony, NM</p>
              <p class="text-lg text-black">
                I'm Almost Home Animal Rescue is a non-profit in the Southwest.
                They house, rehabilitate, and transport dogs in need.
              </p>
              <div className="py-8 text-left">
                <p>
                  <a
                    href="https://www.imalmosthome.org"
                    class="rounded-3xl inline-block bg-blue-600 border border-blue-600 hover:bg-white hover:text-blue-600 text-white text-lg px-5 py-2 justify-center text-center"
                  >
                    Visit page
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="flex-shrink-0 text-center block max-w-sm bg-white shadow-lg">
            <picture>
              <source
                srcset="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_2000/v1738006716/Clean_and_Honest_SS.webp"
                type="image/webp"
              />
              <img
                src="https://res.cloudinary.com/dm8nr1vwr/image/upload/c_scale,w_2000/v1738006716/Clean_and_Honest_SS.jpg"
                className="mx-auto"
                loading="lazy"
                decoding="async"
                alt="Clean and Honest"
                width="400px"
                height="220px"
              />
            </picture>
            <div className="text-left pl-3">
              <h5 class="flex pt-4 pb-1 text-lg tracking-tight text-black font-bold">
                Clean and Honest
              </h5>
              <p class="flex text-md text-gray-700 pb-5">Austin, TX</p>
              <p class="flex text-lg text-black">
                Clean & Honest is your resource for living a non-toxic, organic,
                and sustainable lifestyle.
              </p>
              <div className="flex py-8 text-left">
                <p>
                  <a
                    href="https://cleanandhonest.com"
                    class="rounded-3xl inline-block bg-blue-600 border border-blue-600 hover:bg-white hover:text-blue-600 text-white text-lg px-5 py-2 justify-center text-center"
                  >
                    Visit page
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
