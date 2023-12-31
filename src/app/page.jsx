"use client";

import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import HomeLogo from "@/components/HomeLogo";
import Image from "next/image";
import ToolsCard from "@/components/ToolsCard";
import PortoCard from "@/components/PortoCard";
import CertifCard from "@/components/CertifCard";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div
            data-aos="fade-in"
            data-aos-delay="500"
            data-aos-duration="500"
            className="flex flex-col justify-start gap-4 md:gap-8"
          >
            <div>
              <h2 className="text-xs leading-[2rem] text-color-white md:text-[1rem] md:leading-[2rem]">
                Awan is here to{" "}
              </h2>
              <div className="text-3xl leading-[2rem] md:text-[5rem] md:leading-[5rem]">
                <h2 className=" text-color-white">Develop Your</h2>
                <span className="text-color-primary">
                  <Typewriter
                    skipAddStyles={true}
                    options={{
                      strings: ["Website", "UI Design", "3D Model"],
                      autoStart: true,
                      loop: true,
                      delay: "natural",
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-4 md:gap-8">
              <HomeLogo
                link={"https://github.com/yaboidimsum"}
                src={"/logo/Github.png"}
                alt={"Github"}
              />
              <HomeLogo
                link={
                  "https://www.linkedin.com/in/dimas-prihady-setyawan-47a66821a/"
                }
                src={"/logo/linked.png"}
                alt={"Linkedin"}
              />
              <HomeLogo
                link={"https://www.instagram.com/dimasprihady/"}
                src={"/logo/Instagram.png"}
                alt={"Instagram"}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
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
                <span className="text-color-primary">
                  Front-End Development{" "}
                </span>
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
      </section>
      <section>
        <div
          className="flex min-h-screen flex-col items-center justify-center"
          id="tools"
        >
          <div className="px-32 py-32">
            <ToolsCard />
          </div>
        </div>
      </section>
      <section>
        <div
          className="flex min-h-screen flex-col items-center justify-center"
          id="certificate"
        >
          <div className="py-32">
            <CertifCard />
          </div>
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div
            className="flex flex-col items-center justify-center gap-8"
            id="portfolio"
          >
            <div className="py-32">
              <PortoCard />
            </div>
            <h2 className="md:text-md text-sm text-color-slate">
              Last update:
              <span className="text-color-primary">30/12/2023 23:14 GMT+7</span>
            </h2>
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
