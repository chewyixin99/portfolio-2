import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TimelineCardLeftProps = {
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

const TimelineCardLeft = ({
  dateString,
  imgProps,
  title,
  subtitle,
  bodyText,
  className = "",
}: TimelineCardLeftProps) => {
  const { alt, src, width, height, classNameImg } = imgProps;

  return (
    <div className={`lg:grid grid-cols-12 gap-8 items-center ${className}`}>
      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.0 }}
        viewport={{ once: true }}
        className="col-span-6 shadow-xl p-6 color-shadow color-bg"
      >
        <div className="pb-3 flex justify-between items-center">
          <div className="text-left lg:text-right">
            <p className="text-md md:text-lg lg:text-xl color-text-primary">
              {title}
            </p>
            <p className="text-sm md:text-md lg:text-lg py-1 color-text-accent">
              {subtitle}
            </p>
            <p className="lg:hidden pb-2 text-xs">{dateString}</p>
          </div>
          <div className="ml-4 lg:hidden">
            <Image
              alt={alt}
              src={src}
              width={width}
              height={height}
              className={classNameImg}
            />
          </div>
        </div>
        <hr />
        <p className="text-xs md:text-sm pt-2">{bodyText}</p>
      </motion.div>
      {/* year */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="col-span-3 m-auto text-center hidden lg:block"
      >
        {dateString}
      </motion.div>
      {/* image / logo */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
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
    </div>
  );
};

export default TimelineCardLeft;
