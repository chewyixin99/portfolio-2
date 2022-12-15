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
          <h3 className="title uppercase tracking-widest">
            <span className="font-tags font-normal color-text-secondary lowercase">
              {"< "}
            </span>{" "}
            Projects
            <span className="font-tags font-normal color-text-secondary lowercase">
              {" />"}
            </span>{" "}
          </h3>
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="pl-3 lg:col-span-2 text-xl color-text-secondary tracking-widest"
          >
            <p className="title">
              <span className="font-tags font-normal color-text-secondary lowercase">
                {"{/*  "}
              </span>{" "}
              Personal Projects
              <span className="font-tags font-normal color-text-secondary lowercase">
                {" */}"}
              </span>{" "}
            </p>
          </motion.div>
          {projects.map((proj, index) => {
            const { type } = proj;
            return type === "personal" ? (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <ProjectCard projectObject={proj} />
              </motion.div>
            ) : (
              ""
            );
          })}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="pl-3 lg:col-span-2 text-xl color-text-secondary tracking-widest"
          >
            <p className="title">
              <span className="font-tags font-normal color-text-secondary lowercase">
                {"{/*  "}
              </span>{" "}
              Coursework
              <span className="font-tags font-normal color-text-secondary lowercase">
                {" */}"}
              </span>{" "}
            </p>
          </motion.div>
          {projects.map((proj, index) => {
            const { type } = proj;
            return type === "coursework" ? (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <ProjectCard projectObject={proj} />
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
