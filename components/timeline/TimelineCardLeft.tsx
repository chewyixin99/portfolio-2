import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  renderSkills,
  renderWebsite,
  renderLinkedIn,
  renderProjectUrl,
} from "./timelineCardLibrary";

type TimelineCardLeftProps = {
  dateString: string;
  imgProps: ImageProps;
  title: string;
  subtitle: string;
  bodyText: string;
  className?: string;
  skills?: string[];
  companyLinkedIn?: string;
  companyWebsite?: string;
  projectUrl?: string;
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
  skills = [],
  companyLinkedIn = "",
  companyWebsite = "",
  projectUrl = "",
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
          <div className="lg:ml-auto text-left lg:text-right">
            <p className="timeline-title">{title}</p>
            <p className="timeline-subtitle">{subtitle}</p>
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
        <p className="timeline-body-text">{bodyText}</p>
        {/* Skills */}
        <div className="text-xs md:sm">
          {renderSkills(skills, skills.length !== 0)}
        </div>
        <div
          className={`${
            projectUrl.length !== 0 ||
            companyWebsite.length !== 0 ||
            companyLinkedIn.length !== 0
              ? "pt-4"
              : ""
          } flex items-center justify-between`}
        >
          <div className="flex items-center">
            {/* Website */}
            <div className="pr-2 text-xs md:sm">
              {renderWebsite(companyWebsite, companyWebsite.length !== 0)}
            </div>
            {companyWebsite.length !== 0 && companyLinkedIn.length !== 0
              ? "|"
              : ""}
            {/* LinkedIn */}
            <div className="pl-2 text-2xl lg:text-3xl">
              {renderLinkedIn(companyLinkedIn, companyLinkedIn.length !== 0)}
            </div>
          </div>
          <div className="text-xs md:sm">
            {renderProjectUrl(projectUrl, projectUrl.length !== 0)}
          </div>
        </div>
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
