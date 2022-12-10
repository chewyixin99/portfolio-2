import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TimelineCardRightProps = {
  dateString: string;
  imgProps: ImageProps;
  title: string;
  subtitle: string;
  bodyText: string;
  className?: string;
};

type ImageProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
  classNameImg?: string;
};

const TimelineCardRight = ({
  dateString,
  imgProps,
  title,
  subtitle,
  bodyText,
  className = "",
}: TimelineCardRightProps) => {
  const { alt, src, width, height, classNameImg } = imgProps;
  return (
    <div className={`lg:grid grid-cols-12 gap-8 items-center ${className}`}>
      {/* image / logo */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0.6 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="col-span-3 m-auto text-center hidden lg:block"
      >
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          className={classNameImg}
        />
      </motion.div>
      {/* year */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="col-span-3 m-auto text-center hidden lg:block "
      >
        {dateString}
      </motion.div>
      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.0 }}
        viewport={{ once: true }}
        className="col-span-6 shadow-xl p-6 color-shadow color-bg"
      >
        <div className="pb-3 flex justify-between items-center ">
          <div className="mr-4 lg:hidden">
            <Image
              alt={alt}
              src={src}
              width={width}
              height={height}
              className={classNameImg}
            />
          </div>
          <div className="text-right lg:text-left">
            <p className="timeline-title">
              {title}
            </p>
            <p className="timeline-subtitle">
              {subtitle}
            </p>
            <p className="lg:hidden pb-2 text-xs">{dateString}</p>
          </div>
        </div>
        <hr />
        <p className="timeline-body-text">{bodyText}</p>
      </motion.div>
    </div>
  );
};

export default TimelineCardRight;
