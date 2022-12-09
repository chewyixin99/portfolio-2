import React, { useState } from "react";
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

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="fixed w-full h-20 shadow-lg z-[100] color-bg color-shadow"
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
            <Link href="/">
              <li className="navbar-link">About</li>
            </Link>
            <Link href="/">
              <li className="navbar-link">Skills</li>
            </Link>
            <Link href="/">
              <li className="navbar-link">Projects</li>
            </Link>
            <Link href="/">
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
              h-screen 
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
                h-screen 
                p-10 ease-in duration-200
                bg-[var(--color-bg-light)] 
                dark:bg-[var(--color-bg-dark)]`
              : `fixed 
                left-[-100%] 
                top-0 
                p-10 ease-in duration-200`
          }
        >
          <div>
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
                Some placeholder text here
              </p>
              <ThemeToggle />
            </div>
          </div>
          <div className="py-4 flex flex-column">
            <ul>
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Project</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="py-40">
            <p className="uppercase tracking-widest color-text-primary">
              Let&lsquo;s connect
            </p>
            {/* Connect icons */}
            <div className="flex items-center justify-between my-4 w-full sm:w-[70%]">
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
    </motion.div>
  );
};

export default Navbar;
