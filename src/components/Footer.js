import React from "react";

export default function Footer() {
  return (
    <footer id="contact" class="px-4 py-4 bg-white lg:px-24">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="#" class="flex items-center">
            <img
              src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1650924167/SiteCheer/sitecheer_logo_peuwun.svg"
              loading="lazy"
              decoding="async"
              class="h-10 md:h-12"
              alt="logo"
            />
          </a>
        </div>
        <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-blue-600 uppercase">
              Navigation
            </h2>
            <ul class="text-gray-600">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Home
                </a>
              </li>
              <li class="mb-4">
                <a href="#services" class="hover:underline">
                  Services
                </a>
              </li>
              <li class="mb-4">
                <a href="#portfolio" class="hover:underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-blue-600 uppercase">
              Services
            </h2>
            <ul class="text-gray-600">
              <li class="mb-4">
                <a>Website Development</a>
              </li>
              <li class="mb-4">
                <a>SEO Optimization</a>
              </li>
              <li class="mb-4">
                <a>Logo Design & Branding</a>
              </li>
              <li>
                <a>Custom Designs</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-blue-600 uppercase">
              Contact
            </h2>
            <ul class="text-gray-600">
              <li class="mb-4 hover:underline">
                <a href="mailto:sitecheer@gmail.com">
                  Email: sitecheer@gmail.com
                </a>
              </li>
              <li class="mb-4 hover:underline">
                <a href="tel:+12105706305">Phone: (210) 570-6305</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">
          © 2025{" "}
          <a href="#" class="hover:underline">
            SiteCheer
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
