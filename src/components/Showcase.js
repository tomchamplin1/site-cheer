import React from "react";

export default function Showcase() {
    return(
        <section class="hero py-32">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full lg:w-2/5 px-4 text-left self-center">
                    <h1 class="pt-12 md:pt-0 mb-4 text-3xl md:text-4xl font-extrabold leading-none text-white"><span className="text-gradient">Custom websites</span>. One simple monthly price.</h1>
                    <p class="mb-6 text-white text-xl">Hand-crafted websites built to help small businesses thrive</p>
                    <p class="mb-12">
                        <a href="#contact"
                            class="rounded inline-block bg-white hover:bg-blue-800 text-blue-800 text-sm tracking-wider py-4 px-8 shadow font-bold">
                            Start now
                        </a>
                    </p>
                </div>
                <div class="hidden lg:block w-full lg:w-3/5 px-4 text-center lg:text-right lg:text-left self-end">
                    <img class="w-full xl:w-4/5 z-50 inline-block" src="https://res.cloudinary.com/dm8nr1vwr/image/upload/v1649931787/SiteCheer/dev1-undraw_kebiwz.svg" decoding="async" loading="lazy" alt="website development" width="800px" height="500px" />
                </div>
            </div>
        </div>
    </section>
    )
}