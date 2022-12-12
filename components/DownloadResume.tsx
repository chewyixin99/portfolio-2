import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDocumentDownload } from "react-icons/hi";

const DownloadResume = () => {
  const renderDownloadResumeButton = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="z-[1500] flex justify-start fixed left-10 bottom-10"
      >
        <Link
          href={"/assets/resume.pdf"}
          rel="noopener noreferrer"
          target={"_blank"}
          className="color-bg color-text-primary shadow-xl color-shadow hover:scale-110 ease-in-out duration-100 p-3 rounded-xl"
        >
          <div className="flex justify-center items-center">
            <div className="font-bold text-xs">Download resume&nbsp;</div>
            <div className="text-base">
              <HiDocumentDownload />
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return <div>{renderDownloadResumeButton()}</div>;
};

export default DownloadResume;
