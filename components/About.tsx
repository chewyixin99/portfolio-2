import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-w-[var(--max-width-outer)] justify-around items-center m-auto md:h-screen p-2 flex py-16">
      <div className="max-w-[var(--max-width-inner)] md:grid grid-cols-3 gap-8 items-center">
        <div className="col-span-2">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="title uppercase tracking-widest">
              <span className="font-tags font-normal color-text-secondary lowercase">
                {"< "}
              </span>{" "}
              About
              <span className="font-tags font-normal color-text-secondary lowercase">
                {" />"}
              </span>{" "}
            </h3>
          </motion.div>
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="subtitle py-3">Who I am</h2>
          </motion.div>
          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="body-text pb-5"
          >
            <p className="py-3">
              I have a keen interest in all things technology, but more so in
              software development where I can{" "}
              <span className="underline color-text-accent">
                witness my code come to life
              </span>
              .
            </p>
            <p className="pb-3 font-tags">
              <em className="color-text-primary">
                &quot;To improve is to change; to be perfect is to change
                often.&quot;
              </em>{" "}
              <em>- Winston Churchill</em>
            </p>
            <p className="pb-3">
              I have always been a big fan of{" "}
              <span className="underline color-text-accent">
                experiential learning
              </span>
              , believing that one can learn best by doing and practicing. As
              such, I find myself gravitating towards the tech industry, where
              learning never stops.
            </p>
            <p className="pb-3">
              In my free time, I enjoy{" "}
              <span className="underline color-text-accent">
                spending time with my loved ones
              </span>
              , going to the{" "}
              <span className="underline color-text-accent">gym</span>, as well
              as practicing{" "}
              <span className="underline color-text-accent">Judo</span> in order
              to maintain my fitness.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="col-span-1 flex justify-center"
        >
          <Image
            src="/assets/about.jpg"
            alt="individualPhoto"
            width={225}
            height={225}
            className="rounded-xl image-hover z-10"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
