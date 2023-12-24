import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full outline outline-1 outline-color-white  ">
        <div className="flex flex-row items-center justify-between gap-8 px-8 py-4 md:px-40 md:py-8">
          <div>
            <Image
              src="/img/logo.png"
              alt="..."
              width={100}
              height={100}
              className="w-[2rem]  md:w-[5rem]"
            />
          </div>
          <div className="text-medium flex flex-row gap-8 text-color-white transition ease-in-out md:gap-32 md:text-xl ">
            <Link
              href={`#home`}
              className="group transition ease-in-out hover:text-color-primary"
            >
              home
            </Link>
            <Link
              href={`#tools`}
              className="group transition ease-in-out hover:text-color-primary"
            >
              tools
            </Link>
            <Link
              href={`#portfolio`}
              className="group transition ease-in-out hover:text-color-primary"
            >
              project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
