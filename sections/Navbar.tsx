import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import { motion } from "framer-motion";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const variants = {
  open: { opacity: 0, x: "200%" },
  closed: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg z-[2000] color-bg color-shadow"
          : "fixed w-full h-20 z-[2000]  bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          className="ml-5"
          src="/../public/favicon.ico"
          alt="/"
          width="50"
          height="50"
        />

        {/* Browser Nav */}
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="navbar-link">Home</li>
            </Link>
            <Link href="/#about">
              <li className="navbar-link">About</li>
            </Link>
            <Link href="/#skills">
              <li className="navbar-link">Skills</li>
            </Link>
            <Link href="/#experience">
              <li className="navbar-link">Experience</li>
            </Link>
            <Link href="/#projects">
              <li className="navbar-link">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="navbar-link">Contact</li>
            </Link>
            <li className="mr-5 ml-10">
              <ThemeToggle width={20} height={20} />
            </li>
          </ul>

          {/* Mobile menu icon */}
          {/* Animated hamburger */}
          <motion.nav animate={navOpen ? "open" : "closed"} variants={variants}>
            <div onClick={handleNav} className="md:hidden mr-5">
              <AiOutlineMenu size={20} />
            </div>
          </motion.nav>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Overlay */}
      <div
        className={
          navOpen
            ? `md:hidden
              fixed 
              left-0 
              top-0 
              w-full 
              h-full 
              bg-black/50 
              dark:bg-white/30
              color-text-secondary`
            : ``
        }
      >
        {/* Side drawer menu */}
        <div
          className={
            navOpen
              ? `fixed 
                left-0 
                top-0 
                w-[75%] 
                sm:w-[60%] 
                md:w-[45%] 
                h-full 
                p-10 ease-in duration-200
                bg-[var(--color-bg-light)] 
                dark:bg-[var(--color-bg-dark)]`
              : `fixed 
                left-[-100%] 
                top-0 
                p-10 ease-in duration-200`
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/favicon.ico"
                alt="/"
                width={50}
                height={50}
              />
              <div
                onClick={handleNav}
                className="rounded-icon color-text-primary"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="flex align-center justify-around border-b border-gray-300 my-4 py-4">
              <p className="w-[85%] md:w-[90%] color-text-primary">
                Navigation
              </p>
              <ThemeToggle />
            </div>
          </motion.div>
          <div className="py-4 flex flex-column">
            <ul>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="/">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href="/#about">
                  <li onClick={handleNav} className="py-4 text-sm">
                    About
                  </li>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link href="/#skills">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/#experience">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Experience
                  </li>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Link href="/#projects">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/#contact">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <li onClick={handleNav} className="py-4 text-sm">
                  <a
                    rel="noopener noreferrer"
                    target={"_blank"}
                    href="/assets/resume.pdf"
                  >
                    Download resume
                  </a>
                </li>
              </motion.div>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="py-40"
          >
            <p className="uppercase tracking-widest color-text-primary">
              Let&lsquo;s connect
            </p>
            {/* Connect icons */}
            <div className="flex items-center justify-between my-4 w-full sm:w-[70%]">
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
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
