import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import DownloadResume from "./DownloadResume";
import Particle from "./Particle";

const typewriterOptions = {
  strings: ["Welcome", "Nice to meet you", "Let's build something together"],
  autoStart: true,
  loop: true,
  delay: 50,
  deleteSpeed: 50,
};

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <Particle />
      <div className="max-w-[1260px] w-full h-full mx-auto p-2 flex justify-center items-center">
        {/* Download resume button */}
        <DownloadResume />
        <div className="max-w-[var(--max-width-inner)]">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase text-base tracking-widest title flex justify-center"
          >
            <span className="mr-2 font-tags font-normal color-text-secondary lowercase">
              {"<p>"}
            </span>{" "}
            <TypewriterComponent options={typewriterOptions} />
            <span className="ml-2 font-tags font-normal color-text-secondary lowercase">
              {" </p>"}
            </span>{" "}
          </motion.div>
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="py-5 font-normal">
              <span>Hi, I&lsquo;m </span>
              <span className="color-text-primary font-tags">Yi Xin</span>
            </h1>
          </motion.div>
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="subtitle py-3">Aspiring software engineer</h3>
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
              <Link
                href="https://www.smu.edu.sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Singapore Management University (SMU)
              </Link>
              &nbsp; under the Bachelor&rsquo;s of Science (BSc), Information
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
            <Link
              className="rounded-icon"
              href={"https://www.linkedin.com/in/chewyixin/"}
              target={"blank"}
              rel={"noopener noreferrer"}
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className="rounded-icon"
              href={"https://github.com/chewyixin99"}
              target={"blank"}
              rel={"noopener noreferrer"}
            >
              <FaGithub />
            </Link>
            <Link
              className="rounded-icon"
              href={"mailto:chewyixin1999@gmail.com"}
              target={"blank"}
              rel={"noopener noreferrer"}
            >
              <HiOutlineMail />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
