"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";

const Page = () => {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <span className="text-color-primary text-xl">
            404
          </span>
          <h3 className="text-color-primary text-xl">
            <Typewriter
              skipAddStyles={false}
              options={{
                strings: `You caught me, this page is unexistence`,
                autoStart: true,
                delay: "natural",
              }}
            />
            {/* You caught me, this page is{" "}
            <span className="text-color-primary">unexistence</span> */}
          </h3>
          <Link
            href={"/"}
            className="animate-bounce text-color-slate transition ease-in-out hover:text-color-primary"
          >
            <h2 className="text-xl">Take me home! {`>`}:{`(`}</h2>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
