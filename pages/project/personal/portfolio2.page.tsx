import React from "react";
import { projects } from "../../../data/constants";
import { ProjectType } from "../../../data/types";
import Image from "next/image";
import ProjectHead from "../../../components/pages/ProjectHead";
import StickySidebar from "../../../components/pages/StickySidebar";

// Only runs at build time
export const getStaticProps = () => {
  const proj = projects
    .filter((p) => {
      return p.projectPath === "/project/personal/portfolio2";
    })
    .shift();
  return {
    props: proj,
  };
};

const portfolio2 = ({
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
          subtitle="Updated digital resume website"
          readMins="5"
          dateString={dateString}
          skills={skills}
          githubUrl={githubUrl}
          projectUrl={projectUrl}
        />
        <div className="project-page-grid">
          <div className="project-page-body-col">
            <div className="project-page-section-title" id="introduction">
              {"{* Introduction *}"}
            </div>
            {/* Description paragraphs */}
            <p className="py-3">
              Project still in progress. Write up not available, please check
              back again another time!
            </p>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={
                {
                  "#introduction": "Intro",
                  // "#process": "Process",
                  // "#learnings": "Learnings",
                  // "#conclusion": "Conclusion",
                  // "#appendix": "Appendix",
                }
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio2;
