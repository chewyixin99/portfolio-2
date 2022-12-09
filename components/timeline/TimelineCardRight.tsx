import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TimelineCardRightProps = {
  dateString: string;
  imgProps: ImageProps;
  title: string;
  subtitle: string;
  bodyText: string;
};

type ImageProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
  className?: string;
};

const TimelineCardRight = ({
  dateString,
  imgProps,
  title,
  subtitle,
  bodyText,
}: TimelineCardRightProps) => {
  const { alt, src, width, height, className } = imgProps;

  return (
    <div className="md:grid grid-cols-12 gap-8 items-center">
      {/* image / logo */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0.6 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="col-span-3 m-auto text-center"
      >
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          className={className}
        />
      </motion.div>
      {/* year */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="col-span-3 m-auto text-center"
      >
        {dateString}
      </motion.div>
      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.0 }}
        viewport={{ once: true }}
        className="col-span-6 text-left shadow-xl p-6 color-shadow color-bg"
      >
        <p className="text-xl color-text-primary">{title}</p>
        <p className="text-lg py-1 color-text-accent">{subtitle}</p>
        <hr />
        <p className="text-sm pt-2">{bodyText}</p>
      </motion.div>
    </div>
  );
};

export default TimelineCardRight;
