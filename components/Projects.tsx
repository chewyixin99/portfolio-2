import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[var(--max-width-outer)] justify-around items-center m-auto md:h-screen p-2 flex py-16"
    >
      <div className="max-w-[var(--max-width-inner)] gap-8 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="title uppercase tracing-widest">Projects</h3>
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
        <div className="grid md:grid-cols-2 gap-8 py-5">
          <ProjectCard
            projectUrl="/"
            imgProps={{
              src: "/../public/assets/projects/oop/login.jpg",
              alt: "",
              imageClassName: "",
              width: 500,
              height: 500,
            }}
          />
          <ProjectCard
            projectUrl="/"
            imgProps={{
              src: "/../public/assets/projects/oop/login.jpg",
              alt: "",
              imageClassName: "",
              width: 500,
              height: 500,
            }}
          />
          <ProjectCard
            projectUrl="/"
            imgProps={{
              src: "/../public/assets/projects/oop/login.jpg",
              alt: "",
              imageClassName: "",
              width: 500,
              height: 500,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
