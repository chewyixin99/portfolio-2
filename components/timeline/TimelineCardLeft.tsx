import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TimelineCardLeftProps = {
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

const TimelineCardLeft = ({
  dateString,
  imgProps,
  title,
  subtitle,
  bodyText,
}: TimelineCardLeftProps) => {
  const { alt, src, width, height, className } = imgProps;

  return (
    <div className="md:grid grid-cols-12 gap-8 items-center">
      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.0 }}
        viewport={{ once: true }}
        className="col-span-6 text-right shadow-xl p-6 color-shadow color-bg"
      >
        <p className="text-xl color-text-primary">{title}</p>
        <p className="text-lg py-1 color-text-accent">{subtitle}</p>
        <hr />
        <p className="text-sm pt-2">{bodyText}</p>
      </motion.div>
      {/* year */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="col-span-3 m-auto text-center"
      >
        {dateString}
      </motion.div>
      {/* image / logo */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
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
    </div>
  );
};

export default TimelineCardLeft;
