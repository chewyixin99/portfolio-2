import Link from "next/link";
import React, { useState } from "react";

type Section = {
  [link: string]: string;
};

type StickySidebarProps = {
  links: Section;
};

const StickySidebar = ({ links }: StickySidebarProps) => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = () => {
    setActiveLink(window.location.hash);
  };

  return (
    <div className="project-page-sidebar-col">
      <div className="sticky top-[100px] text-right">
        <div className="py-1 title">Sections</div>
        <ul className="opacity-50">
          {Object.keys(links).map((link, index) => {
            return (
              <li onClick={handleClick} key={index} className="py-1">
                <Link
                  href={link}
                  className={
                    link === activeLink ? "color-text-accent underline" : ""
                  }
                >
                  {links[link]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StickySidebar;
