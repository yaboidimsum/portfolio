import contents from "@/constants";
import Image from "next/image";

const ToolsCard = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-16 xl:grid-cols-6 lg:grid-cols-3">
      {/* Map over the skillContent array */}
      {contents.skillContent.map((category, index) => (
        <div key={index} className="flex w-full flex-col gap-8">
          {/* Render category title and hr */}
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-[0.95rem] text-color-white md:text-xl">
              {category.title}
            </h2>
            <hr className="h-[0.5rem] w-full border-0 bg-color-primary" />
          </div>
          {/* Map over links in the category */}
          <div className="flex flex-col gap-4">
            {category.links.map((link, linkIndex) => (
              <div
                key={linkIndex}
                className="flex flex-row items-center justify-start gap-4"
              >
                {/* Use the Image component with link.image */}
                <Image
                  src={link.image}
                  width={100}
                  height={100}
                  className="w-[2.5rem] md:w-[4rem]"
                />
                <h2 className="text-[0.95rem] text-color-white md:text-lg">
                  {link.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsCard;
