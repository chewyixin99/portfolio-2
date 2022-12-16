import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

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
      {/* Title, subtitle, date, pageType */}
      <h2 className="py-3 title">{title}</h2>
      <h4 className="pb-3 subtitle">{subtitle}</h4>
      <p className="pb-3">{dateString}</p>
      <p className="pb-3 text-gray-400">{pageType}</p>
      {/* Techstack */}
      <p className="py-3">
        <span className="color-text-primary">Skills:</span> {skills.join(" • ")}
      </p>
      {/* Website and LinkedIn */}
      <p
        className={`${
          showSourceCode || showProject ? "py-3" : ""
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
        {/* read minutes */}
        <span className="text-gray-400">{readMins} min read</span>
      </p>
      <hr className="border-[var(--color-text-accent-light)] dark:border-[var(--color-text-accent-dark)]" />
    </div>
  );
};

export default ProjectHead;
