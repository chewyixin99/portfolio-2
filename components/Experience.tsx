import React from "react";
import CustomTimeline from "./CustomTimeline";

const Experience = () => {
  return (
    <div className="max-w-[var(--max-width-outer)] justify-around items-center m-auto p-2 flex py-16">
      <div className="max-w-[var(--max-width-inner)] md:grid grid-cols-3 gap-8 items-center">
        {/* Title and subtitle */}
        <div className="col-span-3 text-center">
          <div>
            <h3 className="title uppercase tracking-widest">Experience</h3>
          </div>
          <div>
            <h2 className="subtitle py-3">What I have done</h2>
          </div>
        </div>
        {/* Timeline */}
        <div className="col-span-3">
          <div className="py-5">
            <CustomTimeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
