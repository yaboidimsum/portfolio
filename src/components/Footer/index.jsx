import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 text-sm md:text-base">
      <div
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="500"
        className="flex flex-col gap-2 md:flex-row md:gap-4"
      >
        <h2 className="text-color-white">Availability:</h2>
        <Link
          href={"mailto:dprihadisetiawan@gmail.com"}
          target="_blank"
          className="animate-pulse px-2 text-color-primary hover:animate-none hover:bg-color-primary hover:text-color-secondary"
        >
          Open for business. Click to contact me
        </Link>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="500"
        className="flex flex-col gap-2"
      >
        <h2 className="text-color-blue">Institut Teknologi Sepuluh Nopember</h2>
        <p className="max-w-xl text-justify text-color-white">
          Teknik Kimia Street - Teknik Informatika Departement Building Campus
          Institut Teknologi Sepuluh Nopember Surabaya Highway ITS, Sukolilo,
          Surabaya 60111, Indonesia Surabaya
        </p>
      </div>
      <h2 className="text-color-slate">Copyright ©️ 2023 Awan Website</h2>
    </div>
  );
};

export default Footer;
