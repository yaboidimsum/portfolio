"use client"

import Image from "next/image";

const Introduction = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col-reverse items-center justify-start gap-8 px-8 contrast-less:w-full md:px-0 xl:flex-row xl:gap-24">
        <div className="flex flex-col gap-2">
          <h2
            data-aos="flip-up"
            className="text-md text-color-primary md:text-xl"
          >
            Get to know me
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="500"
            className="max-w-2xl text-justify text-sm text-color-white md:text-base"
          >
            My name is Awan, an Informatics Engineering Student at Institut
            Teknologi Sepuluh Nopember. I’m pursuing my career on{" "}
            <span className="text-color-primary">UI/UX Design</span> and
            implement it with{" "}
            <span className="text-color-primary">Front-End Development </span>
            and some of{" "}
            <span className="text-color-primary">Back-End Development</span>
          </p>
        </div>
        <Image
          data-aos="flip-left"
          data-aos-delay="500"
          data-aos-duration="500"
          src={"/logo/IF_Logo.png"}
          width={100}
          height={100}
          className="w-[5rem] md:w-[10rem]"
        />
      </div>
    </div>
  );
};

export default Introduction;
