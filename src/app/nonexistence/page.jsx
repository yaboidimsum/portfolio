import Link from "next/link";

const Page = () => {
  return (
    <>
      <section>
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-xl font-medium text-color-primary">
              You Caught Me!
            </h2>
            <p className="max-w-xl text-center text-color-white">
              The portfolio you are looking for is either{" "}
              <span className="text-color-primary">under development</span> or{" "}
              <span className="text-color-primary">
                being negotiate with client
              </span>{" "}
              to be seen by public! Don't worry,{" "}
              <span className="text-color-primary">
                i'll update this link ASAP!
              </span>{" "}
              Sorry for the inconvenience.
            </p>
            <Link href={"/#portfolio"} className="flex px-4 py-2 justify-center items-center bg-color-white rounded-md transition-all ease-in-out hover:bg-color-primary hover:text-color-white">Take me Home!</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
