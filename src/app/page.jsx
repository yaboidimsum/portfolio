"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import HomeLogo from "@/components/HomeLogo";
import Image from "next/image";
import ToolsCard from "@/components/ToolsCard";
import Link from "next/link";
import PortoCard from "@/components/PortoCard";
import CertifCard from "@/components/CertifCard";

export default function Home() {
  return (
    <>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="flex flex-col justify-start gap-4 md:gap-8">
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
                src={"/logo/Linkedin.png"}
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
              <h2 className="text-md text-color-primary md:text-xl">
                Get to know me
              </h2>
              <p className="max-w-2xl text-justify text-sm text-color-white md:text-base">
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
              src={"/logo/IF_Logo.png"}
              width={100}
              height={100}
              className="w-[5rem] md:w-[10rem]"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="mx-32 py-32">
            <ToolsCard />
          </div>
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <CertifCard />
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <PortoCard />
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-start justify-center px-8 md:pl-32">
          <div className="flex flex-col gap-8 text-sm md:text-base">
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <h2 className="text-color-white">Availability:</h2>
              <Link
                href={"mailto:dprihadisetiawan@gmail.com"}
                target="_blank"
                className="animate-pulse px-2 text-color-primary hover:animate-none hover:bg-color-primary hover:text-color-secondary"
              >
                Open for business. Click to contact me
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-color-blue">
                Institut Teknologi Sepuluh Nopember
              </h2>
              <p className="max-w-xl text-justify text-color-white">
                Teknik Kimia Street - Teknik Informatika Departement Building
                Campus Institut Teknologi Sepuluh Nopember Surabaya Highway ITS,
                Sukolilo, Surabaya 60111, Indonesia Surabaya
              </p>
            </div>
            <h2 className="text-color-slate">Copyright ©️ 2023 Awan Website</h2>
          </div>
        </div>
      </section>
    </>
  );
}
