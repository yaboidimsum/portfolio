import contents from "@/constants";
import Image from "next/image";

const ExperienceCard = () => {
  return (
    <div className="w-[20rem] md:w-full md:px-32">
      <div className="mb-5 flex w-full justify-start text-sm text-color-primary md:text-3xl">
        <h2 data-aos="flip-up">Experience</h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Map over the skillContent array */}
        {contents.experienceContent.map((category, index) => (
          <div
            data-aos="fade-up"
            // data-aos-delay="500"
            // data-aos-duration="700"
            key={index}
            className="flex w-full flex-col gap-8"
          >
            {/* Render category title and hr */}
            <div className="flex w-full flex-col gap-2">
              <div className="flex flex-row items-center justify-between">
                <h2
                  className="text-[0.85rem] text-color-primary md:text-lg"
                  data-aos="flip-up"
                  data-aos-delay="500"
                  data-aos-duration="700"
                >
                  {category.title}
                </h2>
                <div
                  className="flex flex-row gap-2"
                  data-aos="flip-up"
                  data-aos-delay="500"
                  data-aos-duration="700"
                >
                  {category.techstack.map((tech, techIndex) => (
                    <Image
                      key={techIndex}
                      src={tech.image}
                      width={45}
                      height={45}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.category.map((cat, catIndex) => (
                  <div
                    data-aos="flip-up"
                    data-aos-delay="650"
                    data-aos-duration="700"
                  >
                    <div
                      key={catIndex}
                      className="flex w-auto rounded-lg border-2 border-color-primary bg-[#149D63] px-2 py-1 text-color-white transition duration-300 ease-in-out hover:cursor-pointer hover:bg-color-primary hover:text-color-secondary"
                    >
                      <h2 className="text-[0.8rem]">{cat}</h2>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-row gap-4"
                data-aos="flip-down"
                data-aos-delay="800"
                data-aos-duration="700"
              >
                <h2 className="text-[0.85rem] text-color-white md:text-lg">
                  {category.client}
                </h2>
                <span className="text-[0.85rem] text-color-white md:text-lg">
                  |
                </span>
                <h2 className="text-[0.85rem] text-color-white md:text-lg">
                  {category.location}
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <h2
                  className="text-[0.85rem] text-color-slate md:text-lg"
                  data-aos="flip-down"
                  data-aos-delay="800"
                  data-aos-duration="700"
                >
                  {category.year}
                </h2>
                {/* <span className="text-[0.85rem] text-color-white md:text-lg">
                  |
                </span> */}
              </div>

              <hr className="h-[0.5rem] w-full border-0 bg-color-primary" />
            </div>
            {/* Map over links in the category */}
            <div className="flex flex-col gap-4">
              {category.description.map((desc, descIndex) => (
                <div
                  key={descIndex}
                  className="flex flex-row items-center justify-start gap-4"
                >
                  <div className="flex pl-6">
                    <ul className="text-[0.75rem] text-color-white md:text-lg">
                      <li
                        className="list-disc"
                        data-aos="flip-down"
                        data-aos-delay="800"
                        data-aos-duration="700"
                      >
                        {desc}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
