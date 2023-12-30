import Image from "next/image";

const WishCard = () => {
  return (
    <>
      <div className="flex flex-col gap-16 md:flex-row">
        <div data-aos="flip-left" data-aos-delay="300" className="flex flex-col items-center gap-8">
          <Image
            src={"/photo/1.png"}
            width={200}
            height={200}
            className="rounded-full"
          />
          <h2 className="max-w-[20rem] text-justify text-color-white">
            Semoga semua bad news yang terjadi dapat sembuh dan pulih secara
            perlahan.{" "}
            <span className="text-color-primary">
              Everything happen for a reason...
            </span>{" "}
            semoga hal tersebut membuat mu menjadi pribadi yang lebih baik dari
            kemarin!
          </h2>
        </div>
        <div data-aos="flip-left" data-aos-delay="500" className="flex flex-col items-center gap-8">
          <Image
            src={"/photo/IISMA.png"}
            width={200}
            height={200}
            className="rounded-full"
          />
          <h2 className="max-w-[20rem]  text-justify text-color-white">
            I hope semua perihal IISMA 2024 dilancarkan and you manage to be one
            of the awardee!{" "}
            <span className="text-color-primary">
              You are ready for this and i believe in you.
            </span>
          </h2>
        </div>
        <div data-aos="flip-left" data-aos-delay="700" className="flex flex-col items-center gap-8">
          <Image
            src={"/photo/2.png"}
            width={200}
            height={200}
            className="rounded-full"
          />
          <h2 className="max-w-[20rem] text-justify text-color-white">
            Semua tujuan masa depan mengenai karir dan impian, semoga mereka
            semua dapat diraih secara perlahan...
            <span className="text-color-primary">
              No need to rush but i know you’ll get them one by one.
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default WishCard;
