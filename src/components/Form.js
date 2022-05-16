import React from "react";

export default function Form() {
  return (
    <div className="py-24 justify-center">
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        className="bg-red-600 p-5 md:w-3/5 w-4/5 mx-auto rounded-3xl"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-white text-left">
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
          <label class="block mb-2 text-sm font-medium text-white text-left">
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
          <label class="block mb-2 text-sm font-medium text-white text-left">
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
            <label for="remember" class="font-medium text-white">
              I agree to our Terms of Service and Privacy Policy
            </label>
          </div>
        </div>
        <div>
        <button
          type="submit"
          class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
          required="yes"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}
