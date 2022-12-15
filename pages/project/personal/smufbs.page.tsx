import React from "react";
import { projects } from "../../../data/constants";
import { ProjectType } from "../../../data/types";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

// Only runs at build time
export const getStaticProps = () => {
  const proj = projects
    .filter((p) => {
      return p.projectPath === "/project/personal/smufbs";
    })
    .shift();
  return {
    props: proj,
  };
};

const smufbs = ({
  title,
  dateString,
  skills,
  githubUrl,
  projectUrl,
}: ProjectType) => {
  const showSourceCode = githubUrl.length !== 0;
  const showProject = projectUrl.length !== 0;
  const showDivider = showSourceCode && showProject;
  return (
    <div className="project-page-outer-container">
      <div className="project-page-inner-container">
        {/* Title, subtitle, date */}
        <div>
          <h1 className="py-3 title">{title}</h1>
          <h3 className="pb-3 subtitle">My time at the company as an intern</h3>
          <p className="pb-3">{dateString}</p>
          {/* Website and LinkedIn */}
          <p
            className={`${
              showSourceCode || showProject ? "py-3" : ""
            } flex items-center`}
          >
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
                className={`color-text-primary ${showSourceCode ? "ml-3" : ""}`}
              >
                Project link
              </Link>
            ) : (
              ""
            )}
          </p>
          {/* Techstack */}
          <p className="py-3">
            <span className="color-text-primary">Technologies used:</span>{" "}
            {skills.join(" • ")}
          </p>
        </div>
        <hr className="border-[var(--color-text-accent-light)] dark:border-[var(--color-text-accent-dark)]" />
        {/* Description paragraphs */}
        <div>
          <p className="py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="py-2 flex items-center justify-center">
            <Image
              src={"/assets/projects/fbsbot/home.jpg"}
              width={350}
              height={350}
              alt="govtech"
            />
          </div>
          <p className="py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="py-2 flex items-center justify-center">
            <Image
              src={"/assets/projects/fbsbot/home.jpg"}
              width={350}
              height={350}
              alt="govtech"
            />
          </div>
          <p className="py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="py-2 flex items-center justify-center">
            <Image
              src={"/assets/projects/fbsbot/home.jpg"}
              width={350}
              height={350}
              alt="govtech"
            />
          </div>
          <p className="py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default smufbs;
