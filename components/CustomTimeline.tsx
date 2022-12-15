import React from "react";
import TimelineCardRight from "./timeline/TimelineCardRight";
import TimelineCardLeft from "./timeline/TimelineCardLeft";
import { experiences } from "../data/constants";

const CustomTimeline = () => {
  return (
    <div>
      {experiences.map((experience, index) => {
        const {
          id,
          title,
          subtitle,
          bodyText,
          dateString,
          imgProps,
          skills,
          companyLinkedIn,
          companyWebsite,
          projectUrl,
        } = experience;
        if (index % 2 === 0) {
          return (
            <div className="py-5" key={index}>
              <TimelineCardLeft
                id={id}
                title={title}
                subtitle={subtitle}
                bodyText={bodyText}
                dateString={dateString}
                imgProps={imgProps}
                skills={skills}
                companyLinkedIn={companyLinkedIn}
                companyWebsite={companyWebsite}
                projectUrl={projectUrl}
              />
            </div>
          );
        }
        return (
          <div className="py-5" key={index}>
            <TimelineCardRight
              id={id}
              title={title}
              subtitle={subtitle}
              bodyText={bodyText}
              dateString={dateString}
              imgProps={imgProps}
              skills={skills}
              companyLinkedIn={companyLinkedIn}
              companyWebsite={companyWebsite}
              projectUrl={projectUrl}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CustomTimeline;
