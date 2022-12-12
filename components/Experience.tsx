import React from "react";
import CustomTimeline from "./CustomTimeline";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="max-w-[var(--max-width-outer)] justify-around items-center m-auto p-2 flex py-16">
      <div className="max-w-[var(--max-width-inner)]  gap-8 items-center">
        {/* Title and subtitle */}
        <div className="col-span-3 text-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="title uppercase tracking-widest">Experience</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="subtitle py-3">What I have done</h2>
          </motion.div>
        </div>
        {/* Timeline */}
        <div className="">
          <div className="py-5">
            <CustomTimeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
