import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          className="ml-5"
          src="/../public/favicon.ico"
          alt="/"
          width="50"
          height="50"
        />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="navbarLink">Home</li>
            </Link>
            <Link href="/">
              <li className="navbarLink">About</li>
            </Link>
            <Link href="/">
              <li className="navbarLink">Skills</li>
            </Link>
            <Link href="/">
              <li className="navbarLink">
                Project
              </li>
            </Link>
            <Link href="/">
              <li className="navbarLink">
                Contact
              </li>
            </Link>
            <li className="mr-5 navbarLink">
              {/* <ThemeToggle width={20} height={20}/> */}
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
