import { DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
const PJS = Plus_Jakarta_Sans({ subsets: ["latin"] });
const dm_mono = DM_Mono({ subsets: ["latin"], weight: ["300", "400", "500"] });
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Awan Code",
  description:
    "Welcome to Awan Code, a portfolio website for Awan, a junior developer and designer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="overflow-x-hidden scroll-smooth focus:scroll-auto"
    >
      <meta property="og:url" content="https://yaboidimsum.vercel.app"></meta>
      <meta
        property="og:image"
        content="https://cdn.discordapp.com/attachments/693469512246362194/1203977052907380756/opengraph-image.png"
      ></meta>
      <body className={dm_mono.className}>
        <SpeedInsights />
        {/* <Navbar /> */}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
        />
        {children}
      </body>
    </html>
  );
}
