import { DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
const PJS = Plus_Jakarta_Sans({ subsets: ["latin"] });
const dm_mono = DM_Mono({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Dimas Prihady S.",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="overflow-x-hidden scroll-smooth focus:scroll-auto"
    >
      <body className={dm_mono.className}>
        <Navbar />
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
