"use client";

import contents from "@/constants";
import Image from "next/image";
import Link from "next/link";

const CertifCard = () => {
  return (
    <>
      <div className="px-6 text-color-white md:px-[9.5rem]">
        <div className="text-md mb-5 flex w-full justify-start text-color-primary md:text-3xl">
          <h2 data-aos="flip-up">Certificate</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          {contents.certificateContent.map((category, index) => (
            <div key={index} className="flex w-full flex-col gap-8 py-6 ">
              <Image
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="700"
                src={category.src}
                width={860}
                height={540}
                className="w-full md:h-[20rem] md:w-[30rem] "
              />
              <div className="flex flex-col justify-center gap-8">
                <div
                  data-aos="flip-up"
                  data-aos-delay="500"
                  data-aos-duration="700"
                  className="flex flex-col gap-2"
                >
                  <h2 className="text-[0.95rem] md:text-3xl">
                    {category.title.includes("Udemy") ? (
                      <>
                        <span className="text-color-udemy">Udemy</span>
                        {category.title.replace("Udemy", "")}
                      </>
                    ) : category.title.includes("Hackerrank") ? (
                      <>
                        <span className="text-color-primary">Hackerrank</span>
                        {category.title.replace("Hackerrank", "")}
                      </>
                    ) : (
                      category.title
                    )}
                  </h2>
                  <h2 className="text-color-slate">{category.technique}</h2>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-delay="500"
                  data-aos-duration="700"
                  className="flex flex-col gap-2 "
                >
                  <div className="group flex flex-row gap-2 transition ease-in-out">
                    <Link
                      href={category.firstLink}
                      target="_blank"
                      className=" from-current via-transparent to-current hover:bg-to-right bg-gradient-to-r bg-bottom bg-no-repeat no-underline transition-all duration-100 ease-in-out group-hover:text-color-primary"
                    >
                      {category.firstButtonText}
                    </Link>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 200 200"
                      className="h-[1.0rem] w-[1.0rem] fill-color-white transition ease-in-out group-hover:fill-color-primary "
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M68.786 64.6432C68.786 59.1204 73.2632 54.6432 78.786 54.6432L135.355 54.6432C140.877 54.6432 145.355 59.1204 145.355 64.6432L145.355 121.212C145.355 126.735 140.877 131.212 135.355 131.212C129.832 131.212 125.355 126.735 125.355 121.212L125.355 88.7853L71.715 142.425C67.8097 146.33 61.4781 146.33 57.5728 142.425C53.6676 138.52 53.6676 132.188 57.5728 128.283L111.212 74.6432L78.786 74.6432C73.2632 74.6432 68.786 70.1661 68.786 64.6432Z"
                      />
                    </svg>
                  </div>
                  <div className="group flex flex-row gap-2 transition ease-in-out">
                    <Link
                      href={category?.secondLink}
                      target="_blank"
                      className=" transition ease-in-out group-hover:text-color-primary"
                    >
                      {category?.secondButtonText}
                    </Link>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 200 200"
                      className="h-[1.0rem] w-[1.0rem] fill-color-white transition ease-in-out group-hover:fill-color-primary"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M68.786 64.6432C68.786 59.1204 73.2632 54.6432 78.786 54.6432L135.355 54.6432C140.877 54.6432 145.355 59.1204 145.355 64.6432L145.355 121.212C145.355 126.735 140.877 131.212 135.355 131.212C129.832 131.212 125.355 126.735 125.355 121.212L125.355 88.7853L71.715 142.425C67.8097 146.33 61.4781 146.33 57.5728 142.425C53.6676 138.52 53.6676 132.188 57.5728 128.283L111.212 74.6432L78.786 74.6432C73.2632 74.6432 68.786 70.1661 68.786 64.6432Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CertifCard;
