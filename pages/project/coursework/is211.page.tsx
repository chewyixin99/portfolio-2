import React from "react";
import { projects } from "../../../data/constants";
import { ProjectType } from "../../../data/types";
import Image from "next/image";
import Link from "next/link";
import ProjectHead from "../../../components/pages/ProjectHead";
import StickySidebar from "../../../components/pages/StickySidebar";

// Only runs at build time
export const getStaticProps = () => {
  const proj = projects
    .filter((p) => {
      return p.projectPath === "/project/coursework/is211";
    })
    .shift();
  return {
    props: proj,
  };
};

const is211 = ({
  title,
  dateString,
  skills,
  githubUrl,
  projectUrl,
}: ProjectType) => {
  return (
    <div className="project-page-outer-container">
      <div className="project-page-inner-container">
        <ProjectHead
          title={title}
          subtitle="Introduction to creating enjoyable UX designs"
          readMins="7"
          dateString={dateString}
          skills={skills}
          githubUrl={githubUrl}
          projectUrl={projectUrl}
        />
        <p className="py-3">Write up in progress. Please check back again in a bit!</p>
      </div>
    </div>
  );
};

export default is211;
