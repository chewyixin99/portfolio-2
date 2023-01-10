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
        <p className="py-3">Work in progress. Check back again at a later date!</p>
        {/* <div className="project-page-grid">
          <div className="project-page-body-col">
            <div>
              <div className="project-page-section-title" id="introduction">
                {"{* Introduction *}"}
              </div>
              <p className="py-3">
                This project was done as part of the coursework for IS211 -
                Interaction Design and Prototyping (IDP) in SMU.
              </p>
              <p className="py-3">
                The main focus was on interaction design using an iterative
                process, through{" "}
                <span className="project-description-list-item">
                  <span className="color-text-accent">Observation</span>:
                  Determining user needs through watching
                </span>
                <span className="project-description-list-item">
                  <span className="color-text-accent">Prototyping</span>:
                  Creating prototypes that users can interact with, from low to
                  high-fidelity prototypes
                </span>
                <span className="project-description-list-item">
                  <span className="color-text-accent">Evaluation</span>:
                  Evaluating how well our design meets the user&rsquo;s needs
                </span>
              </p>
            </div>
            <div>
              <div className="project-page-section-title" id="introduction">
                {"{* Introduction *}"}
              </div>
            </div>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={{
                "#introduction": "Intro",
                "#requirements": "Requirements",
                "#process": "Process",
                "#learnings": "Learnings",
                "#appendix": "Appendix",
              }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default is211;
