import Image from "next/image";
import React from "react";
import { renderProjectUrl } from "../timeline/timelineCardLibrary";

type ProjectCardProps = {
  projectUrl: string;
  imgProps: ImageProps;
};

type ImageProps = {
  src: string;
  imageClassName: string;
  alt: string;
  width: number;
  height: number;
};

const ProjectCard = ({ projectUrl, imgProps }: ProjectCardProps) => {
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
        <p className="project-title font-bold">Project title</p>
        <p className="project-subtitle">Subtitle</p>
        <hr />
        <p className="project-body-text">
          this is some short description this is some short description
        </p>
        <div className="project-link flex justify-end text-xs pt-3">
          {/* add option for target to not be _blank */}
          {renderProjectUrl(projectUrl, projectUrl.length !== 0)}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;