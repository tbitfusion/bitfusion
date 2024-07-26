import React from "react";
import brand from "../../assets/brand.jpg";

const SimpleBanner = () => {
  return (
    <main className="bg-primary ">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className=" order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2  md:items-start md:text-left ">
            <h1 className="text-3xl font-bold ">Build Your Brand With Us</h1>
            <p className="">
              Transform your brand with our expertise and innovative solutions.
              We specialize in crafting tailored strategies that elevate your
              brand's identity and resonate with your audience. Trust us to
              bring your vision to life and drive meaningful results for your
              business.
            </p>
            <button className="rounded-md bg-white px-4 py-2 text-sm  text-black transition-colors duration-300 hover:bg-white/90">
              Get Started
            </button>
          </div>
          <div className="order-1">
            <img
              src={brand}
              alt="Not found"
              className="rounded-md transition duration-700 hover:skew-x-2 hover:scale-110"
            />
            {/* <iframe
              className="aspect-video w-full"
              // src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
              src={brand}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SimpleBanner;
