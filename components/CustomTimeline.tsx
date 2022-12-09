import React from "react";
import Image from "next/image";
import TimelineCardRight from "./timeline/TimelineCardRight";
import TimelineCardLeft from "./timeline/TimelineCardLeft";

const CustomTimeline = () => {
  return (
    <div>
      <TimelineCardRight
        dateString="2020 - Present"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/smu.png",
          width: 150,
          height: 150,
          className: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
        }}
        title="Singapore Management University"
        subtitle="Student"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardLeft
        dateString="Jan 21 - May 21"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/smu.png",
          width: 150,
          height: 150,
          className: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
        }}
        title="Singapore Management University"
        subtitle="Teaching Assistant"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardRight
        dateString="Aug 21 - Dec 21"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/quest.png",
          width: 150,
          height: 150,
        }}
        title="Quest-Inc"
        subtitle="Software Engineer Intern"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardLeft
        dateString="Aug 21 - Dec 21"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/smu.png",
          width: 150,
          height: 150,
          className: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
        }}
        title="Singapore Management University"
        subtitle="Teaching Assistant"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardRight
        dateString="Jan 22 - May 22"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/smu.png",
          width: 150,
          height: 150,
          className: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
        }}
        title="Singapore Management University"
        subtitle="Teaching Assistant"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardLeft
        dateString="May 22 - Aug 22"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/govtech.png",
          width: 125,
          height: 125,
        }}
        title="GOVTECH Singapore"
        subtitle="Software Engineer Intern"
        bodyText="Start of my coding journey in SMU. Prior to this, I had zero
        knowledge in tech."
      />
      <TimelineCardRight
        dateString="May 23 - Aug 23"
        imgProps={{
          alt: "smu",
          src: "/../public/assets/timeline/jpmc.png",
          width: 150,
          height: 150,
          className: "bg-[var(--color-text-secondary-dark)] p-3 rounded-lg",
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
