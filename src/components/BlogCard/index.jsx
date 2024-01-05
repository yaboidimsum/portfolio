"use client";

import contents from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const PJS = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const BlogCard = () => {
  return (
    <div className="w-full px-6 lg:px-10 xl:px-16 2xl:px-20">
      <div className="text-md mb-5 flex w-full justify-start text-color-primary md:text-3xl">
        <h2 data-aos="flip-up">I write too!</h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="500"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {contents.blogContent.map((category, index) => (
          <Link key={index} href={"/"} className={PJS.className}>
            <div className="flex flex-col gap-4 overflow-hidden rounded-xl border-2 border-[#10B670] transition ease-in-out hover:border-color-primary">
              <div className="relative h-52 overflow-hidden rounded-t-xl md:h-48 lg:h-56 xl:h-64">
                <Image
                  src={category.image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Image description"
                />
              </div>
              <div className="flex flex-col gap-4 px-4 pb-4">
                <div className="flex flex-col gap-3">
                  <div className="flex w-full">
                    <h2 className="text-xl font-bold tracking-wide text-color-primary">
                      {category.title}
                    </h2>
                  </div>
                  <div className="flex flex-row gap-4 text-xs font-semibold">
                    {category.genre.map((genre, genreIndex) => (
                      <div
                        key={genreIndex}
                        className="flex rounded-lg border-2 border-color-primary px-2 py-1"
                      >
                        <h2 className="text-color-primary">{genre}</h2>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 text-lg text-color-white md:gap-6 lg:gap-8">
                    <h2 className="font-bold">{category.date}</h2>
                    <h2 className="font-medium text-color-primary">
                      {category.readtime}
                    </h2>
                  </div>
                  <p className="w-full text-justify text-color-white">
                    {category.paragpraph}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
