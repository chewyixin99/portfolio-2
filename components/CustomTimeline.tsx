import React from "react";
import Image from "next/image";
import TimelineCardRight from "./timeline/TimelineCardRight";
import TimelineCardLeft from "./timeline/TimelineCardLeft";

const CustomTimeline = () => {
  // mobile responsiveness add here
  return (
    <div>
      <TimelineCardLeft
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
        bodyText="Start point of my coding journey. Prior to this, I have zero
        knowledge and experience in tech."
      />
      <TimelineCardRight
        skills={["Flutter", "Dart", "Firebase", "Telegraf.js"]}
        companyLinkedIn="https://www.linkedin.com/company/questhireahero/"
        companyWebsite="https://quest-inc.co/"
        projectUrl="/"
        className="py-5"
        dateString="Aug 21 - Dec 21"
        imgProps={{
          alt: "quest",
          src: "/../public/assets/timeline/quest.png",
          width: 125,
          height: 125,
        }}
        title="Quest-Inc"
        subtitle="Software Engineer Intern"
        bodyText="
          First tech-related and part-time internship! Dabbled in 
          mobile-development with Flutter and Dart, and it's also my first exposure
          to the software development process and lifecycle!
        "
      />
      <TimelineCardLeft
        skills={["Python", "Data Structures & Algorithms"]}
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
        bodyText="Teaching assistant for COR-IS1702 (Computational Thinking)."
      />
      <TimelineCardRight
        skills={["HTML", "PHP", "MySQL"]}
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
        bodyText="Teaching assistant for IS113 (Web Application Development I)."
      />
      <TimelineCardLeft
        skills={[
          "ReactJs",
          "VueJs",
          "ExpressJs",
          "Jest",
          "TypeScript",
          "Docker",
        ]}
        companyLinkedIn="https://www.linkedin.com/company/govtech-singapore/"
        companyWebsite="https://docs.developer.tech.gov.sg/"
        projectUrl="/"
        className="py-5"
        dateString="May 22 - Aug 22"
        imgProps={{
          alt: "govtech",
          src: "/../public/assets/timeline/govtech.png",
          width: 100,
          height: 100,
        }}
        title="GOVTECH Singapore"
        subtitle="Software Engineer Intern"
        bodyText="
          First exposure to a mid-sized firm with mature software development
          process. Fullstack web development with a full javascript tech-stack.
          Definitely learnt a lot, exciting times!
        "
      />
      <TimelineCardRight
        // skills={[
        // ]}
        // companyLinkedIn="https://www.linkedin.com/company/jpmorganchase/"
        // companyWebsite="https://www.jpmorganchase.com/"
        // projectUrl="/"
        className="py-5"
        dateString="May 23 - Aug 23"
        imgProps={{
          alt: "jpmc",
          src: "/../public/assets/timeline/jpmc.png",
          width: 150,
          height: 150,
          classNameImg: "bg-[var(--color-text-secondary-dark)] p-3 rounded-lg",
        }}
        title="JPMorgan Chase & Co"
        subtitle="Software Engineer Intern"
        bodyText="Have yet to start."
      />
    </div>
  );
};

export default CustomTimeline;
