import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiChevronDoubleUp } from "react-icons/hi";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";

const typewriterOptions = {
  strings: ["Welcome", "Nice to meet you", "Let's build something together"],
  autoStart: true,
  loop: true,
  delay: 50,
  deleteSpeed: 50,
};

const Main = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleBackToTopButton = () => {
      if (window.scrollY >= 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };
    window.addEventListener("scroll", handleBackToTopButton);
  }, []);

  const renderBackToTopButton = () => {
    if (backToTopButton) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-end py-12 px-12 fixed right-0 bottom-0"
        >
          <Link href={"/"}>
            <div className="rounded-icon-bg-primary">
              <HiChevronDoubleUp className="" />
            </div>
          </Link>
        </motion.div>
      );
    }
    return <div></div>;

    return (
      <div className="flex justify-end py-12 px-12 fixed right-0 bottom-0">
        <Link href={"/"}>
          <div className="rounded-icon-bg-primary">
            <HiChevronDoubleUp className="" />
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[var(--max-width-outer)] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="max-w-[var(--max-width-inner)]">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase text-base tracking-widest title"
          >
            <TypewriterComponent options={typewriterOptions} />
          </motion.div>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="py-5">
              <span>Hi, I&lsquo;m </span>
              <span className="color-text-primary">Yi Xin</span>
            </h1>
          </motion.div>
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="subtitle pb-3">Aspiring software engineer</h3>
          </motion.div>
          {/* Description text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="body-text m-auto">
              I&lsquo;m an aspiring software engineer, currently enrolled
              in&nbsp;
              <span className="color-text-accent underline">
                Singapore Management University (SMU)
              </span>
              &nbsp; under the Bachelor&lsquo;s of Science (BSc), Information
              Systems, with a second major in Cybersecurity.
            </p>
          </motion.div>
          {/* Connect icons */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-around my-6 m-auto w-full max-w-[360px]"
          >
            <div className="rounded-icon">
              <FaLinkedinIn />
            </div>
            <div className="rounded-icon">
              <FaGithub />
            </div>
            <div className="rounded-icon">
              <HiOutlineMail />
            </div>
          </motion.div>
        </div>
      </div>
      {/* <div className="flex justify-end py-12 px-12 fixed right-0 bottom-0">
        <Link href={"/"}>
          <div className="rounded-icon-bg-primary">
            <HiChevronDoubleUp className="" />
          </div>
        </Link>
      </div> */}
      {renderBackToTopButton()}
    </div>
  );
};

export default Main;
