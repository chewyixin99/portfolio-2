import React from "react";
import Image from "next/image";
import TimelineCardRight from "./timeline/TimelineCardRight";
import TimelineCardLeft from "./timeline/TimelineCardLeft";

const CustomTimeline = () => {
  // mobile responsiveness add here
  return (
    <div>
      <TimelineCardRight
        className="py-5"
        dateString="2020 - Present"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/smu.png",
          width: 150,
          height: 150,
          classNameImg: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
        }}
        title="Singapore Management University"
        subtitle="Student"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardLeft
        className="py-5"
        dateString="Jan 21 - May 21"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/smu.png",
          width: 150,
          height: 150,
          classNameImg: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
        }}
        title="Singapore Management University"
        subtitle="Teaching Assistant"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardRight
        className="py-5"
        dateString="Aug 21 - Dec 21"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/quest.png",
          width: 125,
          height: 125,
        }}
        title="Quest-Inc"
        subtitle="Software Engineer Intern"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardLeft
        className="py-5"
        dateString="Aug 21 - Dec 21"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/smu.png",
          width: 150,
          height: 150,
          classNameImg: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
        }}
        title="Singapore Management University"
        subtitle="Teaching Assistant"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardRight
        className="py-5"
        dateString="Jan 22 - May 22"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/smu.png",
          width: 150,
          height: 150,
          classNameImg: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
        }}
        title="Singapore Management University"
        subtitle="Teaching Assistant"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardLeft
        className="py-5"
        dateString="May 22 - Aug 22"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/govtech.png",
          width: 100,
          height: 100,
        }}
        title="GOVTECH Singapore"
        subtitle="Software Engineer Intern"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardRight
        className="py-5"
        dateString="May 23 - Aug 23"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/jpmc.png",
          width: 150,
          height: 150,
          classNameImg: "bg-[var(--color-text-secondary-dark)] p-3 rounded-lg",
        }}
        title="JPMorgan Chase & Co"
        subtitle="Software Engineer Intern"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
    </div>
  );
};

export default CustomTimeline;
