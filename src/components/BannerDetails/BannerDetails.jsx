import React from "react";

const BannerDetails = ({ reverse, props, Img }) => {
  const { title } = props;
  const { intro, key1, key2, key3 } = props;
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2 px-2">
            {/* text container */}
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">{title}</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {intro}
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">{key1}</li>
                  <li className="font-medium">{key2}</li>
                  <li className="font-medium">{key3}</li>
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Preview
                </button>
              </div>
            </div>
            {/* image container */}
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                // src="https://picsum.photos/400/300"
                src={Img}
                alt="Not found"
                className="mx-auto w-full p-4 md:max-w-[400px] rounded-lg transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
