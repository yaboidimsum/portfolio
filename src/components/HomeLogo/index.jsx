import Image from "next/image";
import Link from "next/link";

const HomeLogo = ({ link, src, alt }) => {
  return (
    <div className="flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-md md:rounded-lg bg-color-white transition duration-300 ease-in-out hover:bg-color-primary md:h-[3rem] md:w-[3rem]">
      {" "}
      <Link
        href={link}
        target="_blank"
        className="bg-white inline-block gap-2 sm:gap-8"
      >
        <Image
          src={src}
          alt={alt}
          width={100} // Adjust the width for smaller screens
          height={100} // Adjust the height for smaller screens
          className="h-[1rem] w-[1rem] md:h-[1.5rem] md:w-[1.5rem]"
        />
      </Link>
    </div>
  );
};

export default HomeLogo;
