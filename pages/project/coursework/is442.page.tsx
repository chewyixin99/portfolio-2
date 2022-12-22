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
      return p.projectPath === "/project/coursework/is442";
    })
    .shift();
  return {
    props: proj,
  };
};

const is442 = ({
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
          subtitle="Some subtitle for project"
          readMins="5"
          dateString={dateString}
          skills={skills}
          githubUrl={githubUrl}
          projectUrl={projectUrl}
        />
        <div className="project-page-grid">
          <div className="project-page-body-col">
            {/* Description paragraphs */}
            <div>
              <div className="project-page-section-title" id="introduction">
                {"{* Introduction *}"}
              </div>
              <p className="py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="py-2 flex items-center justify-center">
                <Image
                  src={"/assets/projects/oop/home.jpg"}
                  width={350}
                  height={350}
                  alt="govtech"
                />
              </div>
              <div className="project-page-section-title" id="requirements">
                {"{* Requirements *}"}
              </div>
              <p className="py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="py-2 flex items-center justify-center">
                <Image
                  src={"/assets/projects/oop/home.jpg"}
                  width={350}
                  height={350}
                  alt="govtech"
                />
              </div>
              <div className="project-page-section-title" id="timeline">
                {"{* Timeline *}"}
              </div>
              <p className="py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="py-2 flex items-center justify-center">
                <Image
                  src={"/assets/projects/oop/home.jpg"}
                  width={350}
                  height={350}
                  alt="govtech"
                />
              </div>
              <div className="project-page-section-title" id="techstack">
                {"{* Tech stack *}"}
              </div>
              <p className="py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="py-2 flex items-center justify-center">
                <Image
                  src={"/assets/projects/oop/home.jpg"}
                  width={350}
                  height={350}
                  alt="govtech"
                />
              </div>
              <div className="project-page-section-title" id="learnings">
                {"{* Learnings *}"}
              </div>
              <p className="py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="py-2 flex items-center justify-center">
                <Image
                  src={"/assets/projects/oop/home.jpg"}
                  width={350}
                  height={350}
                  alt="govtech"
                />
              </div>
            </div>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={{
                "#introduction": "Intro",
                "#requirements": "Requirements",
                "#timeline": "Timeline",
                "#techstack": "Tech stack",
                "#learnings": "Learnings",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default is442;
