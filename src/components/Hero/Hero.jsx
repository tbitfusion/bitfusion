import React from "react";
import HerroImg from "../../assets/hero.svg";
const Hero = () => {
  return (
    <div className="h-[650px] md:h-[500px]  bg-gradient-to-r from-violet-950 to-violet-900 pt-20">
      <section className="container flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white">
          {/* hero container */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
              We Build Software That Trends On Top Platforms
            </h1>
            <p className="">
              Transforming business online with ease. Simplifying complex
              systems into seamless solutions. Custom apps and software tailored
              to your needs.
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Let's Start
              </button>
              <button className="border-1  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 ">
                Connect With Us
              </button>
            </div>
          </div>
          {/* hero image container */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={HerroImg} alt="not found" className="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
