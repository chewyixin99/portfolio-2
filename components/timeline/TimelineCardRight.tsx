import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExperienceType } from "../../data/types";
import {
  renderSkills,
  renderWebsite,
  renderLinkedIn,
  renderProjectPath,
} from "../cardComponentsLibrary";

type TimelineCardProps = {
  experienceObject: ExperienceType;
};

const TimelineCardRight = ({ experienceObject }: TimelineCardProps) => {
  const {
    dateString,
    imgProps,
    title,
    subtitle,
    bodyText,
    skills,
    companyLinkedIn,
    companyWebsite,
    projectUrl,
  } = experienceObject;
  const { alt, src, width, height, imageClassName } = imgProps;
  return (
    <div className={`lg:grid grid-cols-12 gap-8 items-center`}>
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
          className={`${imageClassName} rounded-lg`}
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
        className="col-span-6 shadow-xl p-6 color-shadow color-bg relative z-10"
      >
        <div className="pb-3 flex justify-between items-center ">
          <div className="mr-4 lg:hidden">
            <Image
              alt={alt}
              src={src}
              width={width}
              height={height}
              className={`${imageClassName} rounded-lg`}
            />
          </div>
          <div className="text-right lg:text-left">
            <p className="timeline-title">{title}</p>
            <p className="timeline-subtitle">{subtitle}</p>
            <p className="lg:hidden pb-2 text-xs">{dateString}</p>
          </div>
        </div>
        <hr />
        <p className="timeline-body-text">{bodyText}</p>
        {/* Skills */}
        <div className="text-xs md:sm pt-4">
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
            {renderProjectPath(projectUrl, projectUrl.length !== 0)}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineCardRight;
