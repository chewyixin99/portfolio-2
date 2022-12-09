import React from "react";
import TagSphere from "./TagSphere";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="max-w-[var(--max-width-outer)] justify-around items-center m-auto md:h-screen p-2 flex py-16">
      <div className="max-w-[var(--max-width-inner)] md:grid grid-cols-5 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="col-span-2"
        >
          <TagSphere />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="col-span-3 text-right"
        >
          {/* Title */}
          <div>
            <h3 className="title uppercase tracking-widest">Skills</h3>
          </div>
          {/* Subtitle */}
          <div>
            <h2 className="subtitle py-3">What I can do</h2>
          </div>
          {/* Body text */}
          <div className="">
            <p className="py-3">
              Some of the skills I&lsquo;ve experimented or worked with in the
              past.
            </p>
            <p className="">
              <span className="underline color-text-primary">
                Proficient in:
              </span>
            </p>
            <p className="py-1 color-text-accent">
              Python • Flask • Javascript • Typescript • ReactJS • VueJS • Java
              • Springboot • Bootstrap • Tailwind • MySQL • PostgreSQL
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
