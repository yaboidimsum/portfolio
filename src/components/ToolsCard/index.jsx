import skillContent from "@/constants";
import Image from "next/image";

const ToolsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-6">
      {/* Map over the skillContent array */}
      {skillContent.map((category, index) => (
        <div key={index} className="flex w-full flex-col gap-8">
          {/* Render category title and hr */}
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-xl text-color-white">{category.title}</h2>
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
                  className="w-[4rem]"
                />
                <h2 className="text-lg text-color-white">{link.name}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsCard;
