"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const PJS = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const BlogCard = () => {
  return (
    <Link href={"/"} className={PJS.className}>
      <div className="flex w-[31.25rem] flex-col gap-8 overflow-hidden rounded-xl border-2 border-[#10B670] transition ease-in-out hover:border-color-primary">
        <div className="relative h-[15.625rem] w-full overflow-hidden rounded-t-xl">
          <Image
            src={"/photo/IISMA.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Image description"
          />
        </div>
        <div className="flex flex-col gap-8 px-4  pb-4">
          <div className=" flex flex-col gap-3">
            <h2 className="text-xl font-bold text-color-primary">
              Can coffee make you a better developer?
            </h2>
            <div className="flex flex-row gap-4 text-xs font-semibold">
              <div className="flex rounded-lg border-2 border-color-primary px-2 py-2">
                <h2 className="text-color-primary">Slice of Life</h2>
              </div>
              <div className="flex rounded-lg border-2 border-color-primary px-2 py-2">
                <h2 className="text-color-primary">Slice of Life</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-16 text-lg text-color-white">
              <h2 className="font-bold">January 4th, 2023</h2>
              <h2 className="font-medium text-color-primary">~12 min read</h2>
            </div>
            <p className="w-full text-justify text-color-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
