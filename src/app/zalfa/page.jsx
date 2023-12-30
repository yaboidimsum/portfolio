"use client";

import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Footer from "@/components/Footer";
import WishCard from "@/components/WishCard";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="flex flex-col justify-start gap-4 px-12 md:gap-8">
            <div data-aos="fade-down">
              <h2 className="text-xs leading-[2rem] text-color-white md:text-[1rem] md:leading-[2rem]">
                <div className="flex flex-row gap-2 ">
                  {" "}
                  <h2>Unless you are </h2>
                  <Typewriter
                    skipAddStyles={true}
                    options={{
                      strings: [
                        "Zalfa",
                        "Jalpa",
                        "zlfrthx",
                        "Miss Takagi ehe~",
                        "the one that i met from 10th Grade",
                        "||-//",
                        "the one who loves math!",
                        "wibu",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: "natural",
                    }}
                  />
                </div>
              </h2>
              <div className="text-3xl leading-[2rem] md:leading-[5rem] lg:text-[5rem]">
                <h2 className="  text-color-white">
                  You aren’t suppose to be{" "}
                  <span className="text-[#FC1174]">HERE</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="flex flex-col-reverse items-center justify-start gap-8 px-8 contrast-less:w-full md:px-0 xl:flex-row xl:gap-24">
            <div className="flex flex-col gap-2">
              <h2
                data-aos="fade-right"
                className="text-md text-color-primary md:text-xl"
              >
                So who’s this special person?
              </h2>
              <p
                data-aos="flip-up"
                className="max-w-2xl text-justify text-sm text-color-white md:text-base"
              >
                Her name is <span className="text-color-primary">Zalfa</span>,
                and she is celebrating her birthday on the{" "}
                <span className="text-color-primary">16th of December</span>{" "}
                (which I didn't manage to mention directly to her 🥲). From my
                perspective, she is a{" "}
                <span className="text-color-primary">highly accomplished</span>{" "}
                and{" "}
                <span className="text-color-primary">caring individual</span>{" "}
                who will do anything to{" "}
                <span className="text-color-primary">achieve her dreams!</span>
              </p>
            </div>
            <Image
              data-aos="fade-left"
              src={"/photo/Zalf.jpg"}
              width={200}
              height={200}
              className="w-[10rem] rounded-full md:w-[15rem]"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="mx-8 py-32 md:mx-16">
            <WishCard />
          </div>
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="mx-8 flex flex-col py-32 md:mx-16 md:gap-8">
              <h2 data-aos="fade-down" className="text-2xl text-color-white md:text-5xl">
                That's all i can give!
              </h2>
              <p data-aos="fade-up" className="text-2xl text-color-white md:text-5xl">
                Selamat jalan, selamat bertahan Zalf✨
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-start justify-center px-8 md:pl-32">
          <Footer />
        </div>
      </section>
    </>
  );
}
