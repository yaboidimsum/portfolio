import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const PJS = Plus_Jakarta_Sans({ subsets: ["latin"] });

// const Page = () => {
//   return (
//     <div
//       className={`flex min-h-screen items-center justify-center ${PJS.className}`}
//     >
//       <div className="grid min-h-screen w-full grid-cols-2">
//         <div className="flex flex-1 items-center justify-center bg-color-primary">
//           <div className="relative h-full w-full">
//             <Image
//               src="/photo/det.png"
//               alt="Logo"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </div>
//         <div className="flex flex-1 items-center justify-center bg-[#E07A5F]">
//           <div className="relative h-full w-full">
//             <h2 className="text-[8rem] font-semibold text-[#FFFFFF]">
//               Here you Might Wanna Read!
//             </h2>
//           </div>
//         </div>
//         <div className="flex flex-1 items-center justify-center bg-[#E07A5F]">
//           <div className="flex flex-1 items-center justify-center">
//             <div className="relative h-full w-full">
//               <h2 className="text-[8rem] font-semibold text-[#FFFFFF]">
//                 Odeta Mutia Adlina
//               </h2>
//               <div className="flex flex-row items-center justify-between bg-color-white px-4 py-4 text-[#E07A5F]">
//                 <h2 className="font-semibold">Happy Birthday Odeta!</h2>
//                 <hr class=" w-[20rem]"></hr>
//                 <h2 className="font-semibold">05/02/2024</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-1 items-center justify-center bg-[#3D405B]">
//           <div className="px-[8rem] text-color-white flex flex-col gap-4">
//             <h2 className="font-semibold italic text-color-white text-3xl">
//               Dear Odeta
//             </h2>
//             <p className="text-justify text-lg">
//               Hai OHDETT! Serta mulia yang ke 21! Semoga hal-hal yang kamu yang
//               harapkan tercapai di tahun ini! No need to rush but you’ll get
//               them one by one! Thanks for always trying and achieving something
//               in your life. You are the best! Althought we barely talk and meet
//               anymore thanks for keeping in touch with me! If you ever need help
//               for me, just text me aightt especially in tech or web programming!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Page = () => {
  return (
    <div
      className={`flex min-h-screen items-center justify-center ${PJS.className}`}
    >
      <div
        className="grid min-h-screen w-full grid-cols-2"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <div className="flex flex-1 items-center justify-center bg-color-primary">
          {/* ... */}
          <div className="relative h-full w-full">
            <Image
              src="/photo/det.png"
              alt="Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center bg-[#E07A5F]">
          {/* ... */}
          <div className="relative h-full w-full">
            <h2 className="text-[8rem] font-semibold text-[#FFFFFF]">
              Here you Might Wanna Read!
            </h2>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center bg-[#E07A5F]">
          {/* ... */}
          <div className="relative h-full w-full">
            //{" "}
            <h2 className="text-[8rem] font-semibold text-[#FFFFFF]">
              Odeta Mutia Adlina
            </h2>
            <div className="flex flex-row items-center justify-between bg-color-white px-4 py-4 text-[#E07A5F]">
              <h2 className="font-semibold">Happy Birthday Odeta!</h2>
              <hr class=" w-[20rem]"></hr>
              <h2 className="font-semibold">05/02/2024</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center bg-[#3D405B]">
          {/* ... */}
          <div className="flex flex-col gap-4 px-[8rem] text-color-white">
            <h2 className="text-3xl font-semibold italic text-color-white">
              Dear Odeta
            </h2>

            <p className="text-justify text-lg">
              Hai OHDETT! Serta mulia yang ke 21! Semoga hal-hal yang kamu yang
              harapkan tercapai di tahun ini! No need to rush but you’ll get
              them one by one! Thanks for always trying and achieving something
              in your life. You are the best! Althought we barely talk and meet
              anymore thanks for keeping in touch with me! If you ever need help
              for me, just text me aightt especially in tech or web programming!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
