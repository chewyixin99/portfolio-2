import React from "react";
import TimelineCardRight from "./TimelineCardRight";
import TimelineCardLeft from "./TimelineCardLeft";
import { experiences } from "../../data/constants";

const CustomTimeline = () => {
  return (
    <div>
      {experiences.map((experience, index) => {
        if (index % 2 === 0) {
          return (
            <div className="py-5" key={index}>
              <TimelineCardLeft experienceObject={experience} />
            </div>
          );
        }
        return (
          <div className="py-5" key={index}>
            <TimelineCardRight experienceObject={experience} />
          </div>
        );
      })}
    </div>
  );
};

export default CustomTimeline;
