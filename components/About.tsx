import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-w-[var(--max-width-outer)] justify-around items-center m-auto md:h-screen p-2 flex py-16">
      <div className="max-w-[var(--max-width-inner)] md:grid grid-cols-3 gap-8 items-center">
        <div className="col-span-2">
          <h3 className="title uppercase tracking-widest">About</h3>
          <h1 className="subtitle py-3">Who I am</h1>
          <div className="body-text pb-5">
            <p className="pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
              <span className="highlight-text">
                industry&lsquo;s standard dummy text
              </span> &nbsp;
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>{" "}
            <p className="pb-3">
              It has survived not only five centuries, but also the leap into
              electronic typesetting,{" "}
              <span className="highlight-text">
                remaining essentially unchanged
              </span>
              . It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software{" "}
              <span className="highlight-text">like Aldus PageMaker</span>{" "}
              including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="col-span-1 image-hover">
          <Image
            src="/../public/favicon.ico"
            alt="/"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
