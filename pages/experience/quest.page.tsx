import React from "react";
import { experiences } from "../../data/constants";
import { ExperienceType } from "../../data/types";
import Image from "next/image";
import BlogHead from "../../components/pages/BlogHead";
import StickySidebar from "../../components/pages/StickySidebar";

// Only runs at build time
export const getStaticProps = () => {
  const exp = experiences
    .filter((e) => {
      return e.projectUrl === "/experience/quest";
    })
    .shift();
  return {
    props: exp,
  };
};

const quest = ({
  title,
  dateString,
  skills,
  companyLinkedIn,
  companyWebsite,
}: ExperienceType) => {
  return (
    <div className="project-page-outer-container">
      <div className="project-page-inner-container">
        <BlogHead
          title={title}
          subtitle="My experience in a startup as an intern"
          dateString={dateString}
          readMins={"7"}
          skills={skills}
          websiteUrl={companyWebsite}
          linkedinUrl={companyLinkedIn}
        />
        <div className="project-page-grid">
          {/* Description paragraphs */}
          <div className="project-page-body-col">
            <div
              id="introduction"
              className="font-tags-2 text-gray-400 pt-3 text-3xl"
            >
              {"{* Introduction *}"}
            </div>
            <p className="py-3">
              Quest is a marketplce for digital services{" "}
              <span className="color-text-accent">
                supported by SMU Institute of Innovation & Entrepreneurship
                (IIE), and is a portfolio company under Antler
              </span>
              . The company focuses on connecting businesses and individuals
              with the best freelancers, marketers, and locals within minutes,
              redefining the ways people seek for help in the post-covid world.
            </p>
            <p className="py-3">
              After applying to over 10 companies, I managed to secure a
              position in this startup, and I am fortunate that Quest and her
              co-founders provided me this opportunity to get my feet wet. This
              opportunity with Quest gave me an insight with what it means to be
              a developer in the technology industry, and it was truly a
              fulfilling one to say the least.
            </p>
            <div className="py-5 flex-col items-center justify-center">
              <Image
                src={"/assets/experience/quest/quest-cofounders.jpg"}
                width={550}
                height={550}
                alt="quest-cofounders"
                className="image-static"
              />
              <p className="text-xs text-center py-2 text-gray-400">
                Co-founders of Quest-inc co. (Quest-inc.co)
              </p>
            </div>
            <div
              id="experience"
              className="font-tags-2 text-gray-400 pt-3 text-3xl"
            >
              {"{* Experience *}"}
            </div>
            <p className="py-3">
              Being a developer in a startup meant that I was able to be
              involved in the company more than usual, as{" "}
              <span className="color-text-accent">
                weekly alignment meetings
              </span>{" "}
              were held at the end of every week, where different departments
              (business, marketing, design, technology) come together and
              discuss about the progress and direction that the company is
              heading toward to.
            </p>
            <p className="py-3">
              I had absolutely no prior experience in mobile development, and it
              took me about a week into the company to get comfortable with the
              codebase. Thankfully, I was given a relatively simple starter task
              to get my hands dirty.
            </p>
            <p className="py-3">
              As this was my first time being involved in a project with a{" "}
              <span className="color-text-accent">
                software development team in a collaborative environment
              </span>
              , I have definitely made my fair share of Git and version control
              mistakes, but thankfully the mistakes were all not too serious.
            </p>
            <div className="py-5 flex-col items-center justify-center">
              <Image
                src={"/assets/experience/quest/flutter-mvc.jpg"}
                width={550}
                height={550}
                alt="flutter-mvc"
                className="image-static"
              />
              <p className="text-xs text-center py-2 text-gray-400">
                MVC Architecture for Flutter (FlutterAwesome.com)
              </p>
            </div>
            <p className="py-3">
              Because Dart is also an object-oriented language, it was initially
              tough for me to grasp certain coding design patterns such as{" "}
              <span className="color-text-accent">
                object-oriented programming
              </span>
              ,{" "}
              <span className="color-text-accent">seperation of concerns</span>,
              and the{" "}
              <span className="color-text-accent">
                model-view-controller (MVC) design pattern
              </span>
              . Fortunately, my colleagues and manager were all very helpful,
              providing me tips and documentation to refer to whenever I run
              into a roadblock!
            </p>
            <p className="py-3">
              Towards the tail-end of my journey, daily stand-up meetings were
              being introduced, and at that point in time, it added a lot of
              pressure on me as I was not producing work as fast as I would like
              to. I later learned that the company was adopting a more{" "}
              <span className="color-text-accent">
                Agile development process
              </span>
              , and these meetings were not there as a form of monitoring, but
              more so to aid in resolving any blockers the team members may face
              during development.
            </p>
            <div className="py-5 flex-col items-center justify-center">
              <Image
                src={"/assets/experience/quest/quest-feature.jpg"}
                width={250}
                height={250}
                alt="quest-feature"
                className="image-static"
              />
              <p className="text-xs text-center py-2 text-gray-400">
                Team member feature (Quest-inc.co)
              </p>
            </div>
            <div
              id="closing"
              className="font-tags-2 text-gray-400 pt-3 text-3xl"
            >
              {"{* Closing *}"}
            </div>
            <p className="py-3">
              Overall, it was a pretty solid journey over at Quest, and I
              managed to gain some insights on the{" "}
              <span className="color-text-accent">
                software development process, writing clean code, as well as
                adhering to certain coding design patterns and principles
              </span>
              . I am definitely thankful that a greenhorn like myself was
              extended an opportunity to intern at a company, and one that is no
              less helmed by 3 other students just like myself.
            </p>
            <p className="py-3">
              It was, beyond any doubt, an eye-opening and inspiring experience
              to be a part of Quest. Onwards to the next{" "}
              <span className="color-text-accent">Quest</span>!
            </p>
          </div>
          {/* Sticky bar */}
          <StickySidebar
            links={{
              "#introduction": "Intro",
              "#experience": "Experience",
              "#closing": "Closing",
            }}
          />
          {/* End of sticky bar */}
        </div>
      </div>
    </div>
  );
};

export default quest;
