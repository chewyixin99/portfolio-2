import Image from "next/image";
import React from "react";
import { ProjectType } from "../../data/types";
import {
  renderGithub,
  renderSkills,
  renderProjectUrl,
} from "../cardComponentsLibrary";

const ProjectCard = ({
  githubUrl = "",
  skills = [],
  projectUrl = "",
  imgProps,
  title,
  subtitle,
  bodyText,
}: ProjectType) => {
  const { src, imageClassName, alt, width, height } = imgProps;

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl color-shadow rounded-xl group">
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        className={`w-full ease-in-out duration-200 group-hover:opacity-20 rounded-xl ${imageClassName}`}
      />
      <div className="hidden group-hover:block absolute p-3 ">
        <p className="project-title font-bold">{title}</p>
        <p className="project-subtitle">{subtitle}</p>
        <hr />
        <p className="project-body-text">{bodyText}</p>
        {/* Skills section */}
        <div className="project-body-text">
          {renderSkills(skills, skills.length !== 0)}
        </div>
        <div className="flex justify-between text-xs items-center">
          {/* add option for target to not be _blank */}
          {/* Github */}
          <div className="project-link project-body-text">
            {renderGithub(githubUrl, githubUrl.length !== 0)}
          </div>
          {/* Project url */}
          <div className="project-link project-body-text">
            {renderProjectUrl(projectUrl, projectUrl.length !== 0)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
