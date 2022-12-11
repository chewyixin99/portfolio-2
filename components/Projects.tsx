import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[var(--max-width-outer)] justify-around items-center m-auto md:h-screen p-2 flex py-16">
      <div className="max-w-[var(--max-width-inner)] gap-8 items-center">
        <div>
          <h3 className="title uppercase tracing-widest">Projects</h3>
        </div>
        <div>
          <h2 className="subtitle py-3">What I have built</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
