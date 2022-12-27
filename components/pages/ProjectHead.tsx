import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Particle from "../Particle";

type ProjectHeadProps = {
  title: string;
  subtitle: string;
  pageType?: string;
  readMins: string;
  dateString: string;
  skills: string[];
  githubUrl: string;
  projectUrl: string;
};

const ProjectHead = ({
  title,
  subtitle,
  pageType = "Project",
  readMins,
  dateString,
  skills,
  githubUrl,
  projectUrl,
}: ProjectHeadProps) => {
  const showSourceCode = githubUrl.length !== 0;
  const showProject = projectUrl.length !== 0;
  const showDivider = showSourceCode && showProject;
  return (
    <div>
      <Particle enableLinks={false} densityArea={1200} />
      {/* Title, subtitle, date, pageType */}
      <h2 className="py-3 title">{title}</h2>
      <h4 className="pb-3 subtitle">{subtitle}</h4>
      <p className="pb-3 text-gray-400">{dateString}</p>
      {/* Website and LinkedIn */}
      <p
        className={`${
          showSourceCode || showProject ? "py-3" : "pb-3"
        } flex items-center justify-between`}
      >
        <span className="flex items-center">
          {showSourceCode ? (
            <Link
              className="timeline-link mr-3 flex items-center"
              rel="noopener noreferrer"
              target={"_blank"}
              href={githubUrl}
            >
              Source Code <AiFillGithub className="ml-1 text-2xl" />
            </Link>
          ) : (
            ""
          )}
          {showDivider ? "|" : ""}
          {showProject ? (
            <Link
              href={projectUrl}
              rel="noopener noreferrer"
              target={"_blank"}
              className={`timeline-link ${showSourceCode ? "ml-3" : ""}`}
            >
              Project link
            </Link>
          ) : (
            ""
          )}
        </span>
      </p>
      {/* Techstack */}
      <p className="pb-3">
        <span className="color-text-primary">Skills:</span> {skills.join(" • ")}
      </p>
      <div className="py-3 text-gray-400 flex items-center justify-between">
        <p>{pageType}</p>
        {/* read minutes */}
        <p>{readMins} min read</p>
      </div>
      <hr className="border-[var(--color-text-accent-light)] dark:border-[var(--color-text-accent-dark)]" />
    </div>
  );
};

export default ProjectHead;
