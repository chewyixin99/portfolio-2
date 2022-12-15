import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer flex w-full text-center justify-center items-center">
      <div className="text-xs flex items-center py-3">
        <BiCopyright className="mx-1" />
        Developed and created by Chew Yi Xin 2022
      </div>
    </div>
  );
};

export default Footer;
