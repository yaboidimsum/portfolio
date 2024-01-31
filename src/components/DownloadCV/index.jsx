"use client";

import useDownloader from "react-use-downloader";

const DownloadCV = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/file/CV.pdf";
  const filename = "CV_Dimas Prihady.pdf";

  return (
    <div>
      <button
        onClick={() => download(fileUrl, filename)}
        className="flex h-[2rem] w-[8rem] cursor-pointer items-center justify-center rounded-md bg-color-white text-[0.7rem] font-medium transition duration-300 ease-in-out hover:bg-color-primary md:h-[3rem] md:w-[15rem] md:rounded-lg md:text-base"
      >
        Download CV
      </button>
    </div>
  );
};

export default DownloadCV;
