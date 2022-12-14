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
          className,
          companyLinkedIn,
          companyWebsite,
          projectUrl,
        } = experience;
        if (index % 2 === 0) {
          return (
            <TimelineCardLeft
              key={id}
              title={title}
              subtitle={subtitle}
              bodyText={bodyText}
              dateString={dateString}
              imgProps={imgProps}
              skills={skills}
              className={className}
              companyLinkedIn={companyLinkedIn}
              companyWebsite={companyWebsite}
              projectUrl={projectUrl}
            />
          );
        }
        return (
          <TimelineCardRight
            key={id}
            title={title}
            subtitle={subtitle}
            bodyText={bodyText}
            dateString={dateString}
            imgProps={imgProps}
            skills={skills}
            className={className}
            companyLinkedIn={companyLinkedIn}
            companyWebsite={companyWebsite}
            projectUrl={projectUrl}
          />
        );
      })}
    </div>
  );
};

export default CustomTimeline;
