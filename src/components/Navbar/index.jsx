import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-20 w-full bg-color-secondary bg-opacity-100 outline outline-1 outline-color-white ">
        <div className="flex flex-row items-center gap-8 px-2 py-4 md:justify-between md:px-20 md:py-4">
          <div>
            <Image
              src="/img/logo.png"
              alt="..."
              width={100}
              height={100}
              className="w-[2rem]  md:w-[5rem]"
            />
          </div>
          <div className="md:text-md flex flex-row gap-8 text-xs text-color-white transition ease-in-out md:gap-32 ">
            <Link
              href={`/#home`}
              className="group transition ease-in-out hover:text-color-primary"
            >
              home
            </Link>
            <Link
              href={`/#tools`}
              className="group transition ease-in-out hover:text-color-primary"
            >
              tools
            </Link>
            <Link
              href={`/#certificate`}
              className="group transition ease-in-out hover:text-color-primary"
            >
              certificate
            </Link>
            <Link
              href={`/#portfolio`}
              className="group transition ease-in-out hover:text-color-primary"
            >
              project
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
