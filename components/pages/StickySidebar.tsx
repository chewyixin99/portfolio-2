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
    <div className="sticky top-[100px] text-right">
      <div className="py-1 title">Sections</div>
      <ul className="opacity-50">
        <li
          onClick={handleClick}
          className="py-1 hover:underline hover:color-text-accent"
        >
          <Link href={""}>Back to top</Link>
        </li>
        {Object.keys(links).map((link, index) => {
          return (
            <li
              onClick={handleClick}
              key={index}
              className="py-1 hover:underline hover:color-text-accent"
            >
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
  );
};

export default StickySidebar;
