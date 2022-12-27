import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";

type BackToTopProps = {
  href: string;
};

const BackToTop = ({ href }: BackToTopProps) => {
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
          className="z-[1500] flex justify-end fixed right-10 bottom-14"
        >
          <Link href={href}>
            <div className="back-to-top-button">
              <HiChevronDoubleUp className="" />
            </div>
          </Link>
        </motion.div>
      );
    }
    return <div></div>;
  };

  return <div>{renderBackToTopButton()}</div>;
};

export default BackToTop;
