import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./projects/ProjectCard";
import { projects } from "../data/constants";

const Projects = () => {
  return (
    <div className="max-w-[var(--max-width-outer)] justify-around items-center m-auto lg:h-full p-2 flex py-16">
      <div className="max-w-[var(--max-width-inner)] gap-8 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="title uppercase tracking-widest">Projects</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="subtitle py-3">What I have built</h2>
        </motion.div>
        {/* Start of project display */}
        <div className="grid lg:grid-cols-2 gap-8 py-5 items-center">
          <div className="pl-3 lg:col-span-2 text-xl color-text-secondary tracking-wide">
            Personal Projects
          </div>
          {projects.map((proj, index) => {
            const {
              id,
              type,
              title,
              subtitle,
              bodyText,
              githubUrl,
              skills,
              projectUrl,
              imgProps,
            } = proj;
            // const xOffset = index % 2 === 0 ? -100 : 100;
            return type === "personal" ? (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  key={id}
                  title={title}
                  subtitle={subtitle}
                  bodyText={bodyText}
                  githubUrl={githubUrl}
                  skills={skills}
                  projectUrl={projectUrl}
                  imgProps={imgProps}
                />
              </motion.div>
            ) : (
              ""
            );
          })}
          <div className="pl-3 lg:col-span-2 text-xl color-text-secondary tracking-wide">
            Coursework
          </div>
          {projects.map((proj, index) => {
            const {
              id,
              type,
              title,
              subtitle,
              bodyText,
              githubUrl,
              skills,
              projectUrl,
              imgProps,
            } = proj;
            // const xOffset = index % 2 === 0 ? -100 : 100;
            return type === "coursework" ? (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  key={id}
                  title={title}
                  subtitle={subtitle}
                  bodyText={bodyText}
                  githubUrl={githubUrl}
                  skills={skills}
                  projectUrl={projectUrl}
                  imgProps={imgProps}
                />
              </motion.div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
