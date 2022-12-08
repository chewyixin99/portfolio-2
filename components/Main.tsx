import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[var(--max-width-outer)] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="max-w-[var(--max-width-inner)]">
          <p className="uppercase text-sm tracking-widest title">
            Let&lsquo;s build something together
          </p>
          {/* Title */}
          <h1 className="py-5">
            <span>Hi, I&lsquo;m </span>
            <span className="color-text-primary">Yi Xin</span>
          </h1>
          {/* Subtitle */}
          <h3 className="subtitle pb-3">Aspiring software engineer</h3>
          {/* Description text */}
          <p className="body-text m-auto">
            I&lsquo;m an aspiring software engineer, currently enrolled in&nbsp;
            <span className="highlight-text">
              Singapore Management University (SMU)
            </span>
            &nbsp; under the Bachelor&lsquo;s of Science (BSc), Information
            Systems, with a second major in Cybersecurity.
          </p>
          {/* Connect icons */}
          <div className="flex items-center justify-around my-6 m-auto w-full max-w-[360px]">
            <div className="rounded-icon">
              <FaLinkedinIn />
            </div>
            <div className="rounded-icon">
              <FaGithub />
            </div>
            <div className="rounded-icon">
              <HiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
