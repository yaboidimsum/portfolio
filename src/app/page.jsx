"use client";

import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <section>
        <div className="flex min-h-screen items-center justify-center">
          <div>
            <h2 className="text-5xl leading-[4rem] text-color-white sm:text-[8rem] sm:leading-[9rem]">
              Develop Your{" "}
              <span className="text-color-primary">
                <Typewriter
                  skipAddStyles={true}
                  options={{
                    strings: ["Website", "UI Design", "3D Model"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
