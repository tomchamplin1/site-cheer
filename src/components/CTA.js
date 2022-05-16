import React from "react";
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function CTA() {

  return (
    <section id="contact">
    <div>
      <img src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1649932106/SiteCheer/curve-pad_ciyenb.svg" className="w-full" />
      <div class="py-12 w-full text-center md:text-left md:px-24 px-5 bg-blue-700">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <AnimationOnScroll animateIn="animate__backInLeft" animateOnce="true">
            <h5 class="py-8 text-4xl md:text-5xl font-bold text-white">
              Let us design a website you <span className="text-gradient">love</span>
            </h5>
            <p class="text-2xl text-white">
              A professional website for a low monthly fee. Unlimited changes,
              hosting, and site optimization included.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInRight" animateOnce="true" className="pt-12 lg:pt-0 justify-center">
            <form
              name="contact-form"
              method="POST"
              data-netlify="true"
              className="bg-white p-5 md:w-3/5 w-4/5 mx-auto rounded-3xl"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-black text-left">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required=""
                />
              </div>
              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-black text-left">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required=""
                />
              </div>
              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-black text-left">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  name="message"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required=""
                />
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 bg-white rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="font-medium text-black text-left">
                    I agree to the <a className="hover:underline" href="https://sitecheer.notion.site/SiteCheer-Terms-of-Service-db75581c55574dbe95994b8eb3a0f891">Terms of Service</a>
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm sm:w-auto px-5 py-2.5"
                  required="yes"
                >
                  Submit
                </button>
              </div>
            </form>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
    </section>
  );
}
