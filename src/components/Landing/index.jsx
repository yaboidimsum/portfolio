import Typewriter from "typewriter-effect";
import HomeLogo from "@/components/HomeLogo";

const Landing = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-duration="500"
        className="flex flex-col justify-start gap-4 md:gap-8"
      >
        <div>
          <h2 className="text-xs leading-[2rem] text-color-white md:text-[1rem] md:leading-[2rem]">
            Awan is here to{" "}
          </h2>
          <div className="text-3xl leading-[2rem] md:text-[5rem] md:leading-[5rem]">
            <h2 className=" text-color-white">Develop Your</h2>
            <span className="text-color-primary">
              <Typewriter
                skipAddStyles={true}
                options={{
                  strings: ["Website", "UI Design", "3D Model"],
                  autoStart: true,
                  loop: true,
                  delay: "natural",
                }}
              />
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-4 md:gap-8">
          <HomeLogo
            link={"https://github.com/yaboidimsum"}
            src={"/logo/Github.png"}
            alt={"Github"}
          />
          <HomeLogo
            link={
              "https://www.linkedin.com/in/dimas-prihady-setyawan-47a66821a/"
            }
            src={"/logo/linked.png"}
            alt={"Linkedin"}
          />
          <HomeLogo
            link={"https://www.instagram.com/dimasprihady/"}
            src={"/logo/Instagram.png"}
            alt={"Instagram"}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
