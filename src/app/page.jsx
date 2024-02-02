import Landing from "@/components/Landing";
import ToolsCard from "@/components/ToolsCard";
import ExperienceCard from "@/components/ExperienceCard";
import PortoCard from "@/components/PortoCard";
import CertifCard from "@/components/CertifCard";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <>
      <section>
        <Landing />
      </section>
      <section>
        <Introduction />
      </section>
      <section>
        <div
          className="flex min-h-screen flex-col items-center justify-center"
          id="blogs"
        >
          <BlogCard />
        </div>
        <section>
          <div
            className="flex min-h-screen flex-col items-center justify-center"
            id="experience"
          >
            <div className="py-32">
              <ExperienceCard />
            </div>
          </div>
        </section>
      </section>
      <section>
        <div
          className="flex min-h-screen flex-col items-center justify-center"
          id="tools"
        >
          <div className="py-32">
            <ToolsCard />
          </div>
        </div>
      </section>
      <section>
        <div
          className="flex min-h-screen flex-col items-center justify-center"
          id="certificate"
        >
          <div className="py-32">
            <CertifCard />
          </div>
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div
            className="flex flex-col items-center justify-center gap-8"
            id="portfolio"
          >
            <div className="py-32">
              <PortoCard />
            </div>
            <h2 className="md:text-md text-sm text-color-slate">
              Last update:
              <span className="text-color-primary">30/12/2023 23:14 GMT+7</span>
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="flex min-h-screen flex-col items-start justify-center px-8 md:pl-32">
          <Footer />
        </div>
      </section>
    </>
  );
}
