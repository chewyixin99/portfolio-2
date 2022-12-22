import React from "react";
import { experiences } from "../../data/constants";
import { ExperienceType } from "../../data/types";
import Image from "next/image";
import BlogHead from "../../components/pages/BlogHead";
import StickySidebar from "../../components/pages/StickySidebar";
import Link from "next/link";

// Only runs at build time
export const getStaticProps = () => {
  const exp = experiences
    .filter((e) => {
      return e.projectUrl === "/experience/govtech";
    })
    .shift();
  return {
    props: exp,
  };
};

const govtech = ({
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
          subtitle="Tech for public good"
          readMins={"7"}
          dateString={dateString}
          skills={skills}
          websiteUrl={companyWebsite}
          linkedinUrl={companyLinkedIn}
        />
        <div className="project-page-grid">
          <div className="project-page-body-col">
            {/* Description paragraphs */}
            <div>
              <div className="project-page-section-title" id="introduction">
                {"{* Introduction *}"}
              </div>
              <p className="py-3">
                The Government Technology Agency of Singapore (GovTech) is a
                public sector tech company that{" "}
                <span className="color-text-accent">
                  spearheads Singapore&lsquo;s digital transformation and
                  development
                </span>{" "}
                to build a Smart Nation for the country&lsquo;s citizens and
                businesses.
              </p>
              <p className="py-3">
                For this internship, I have had the privilege of working in the
                Government Digital Services (GDS) tribe under the Engineering
                Productivity (ENP) team, specifically with the{" "}
                <Link
                  href="https://www.developer.tech.gov.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  Developer
                </Link>{" "}
                /{" "}
                <Link
                  href="https://docs.developer.tech.gov.sg/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="color-text-accent hover:underline"
                >
                  Documentation
                </Link>{" "}
                portal team, whose goal is to increase{" "}
                <span className="color-text-accent">availability</span>,{" "}
                <span className="color-text-accent">accessibility</span>, and{" "}
                <span className="color-text-accent">discoverability</span> of
                government-related products.
              </p>
              <div className="py-5 flex-col items-center justify-center">
                <Image
                  src={"/assets/experience/govtech/govtech-cohesion.jpg"}
                  width={550}
                  height={550}
                  alt="govtech-cohesion"
                  className="image-static"
                />
                <p className="text-xs text-center py-2 text-gray-400">
                  Dev/Doc Portal Team
                </p>
              </div>
              <div className="project-page-section-title" id="experience">
                {"{* Experience *}"}
              </div>
              <p className="py-3">
                The onboarding process here was very much different as compared
                to the previous time I interned, with a lot more security
                configurations required to set up (getting a dedicated company
                laptop definitely helped) during the initial onboard. The team
                actually came back to office on my first day to welcome and help
                me onboard onto the team, which took almost an entire day!
              </p>
              <p className="py-3">
                During the internship, I mainly worked on{" "}
                <Link
                  href="https://docs.developer.tech.gov.sg/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="color-text-accent hover:underline"
                >
                  Documentation Portal
                </Link>{" "}
                for most of my time there. I was in charge of{" "}
                <span className="color-text-accent">
                  improving the SEO of the site
                </span>{" "}
                which seemed fairly straightforward at first, but proved to be
                more complicated than it seems due to a variety of reasons. The
                main problem was with{" "}
                <Link
                  href="https://docsify.js.org/#/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  Docsify (Documentation Site Generator)
                </Link>
                , where a (supposedly simple) change from hash to{" "}
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/History_API"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  history
                </Link>{" "}
                mode to remove the hashbang (#) in the URL was not working as
                intended due to conflicting server configurations. This was
                important as Googlebot would otherwise be unable to crawl URLs
                with a hashbang (#) in it (more about the topic can be{" "}
                <Link
                  href="https://www.webapex.com.au/blog/does-google-index-hash-url/#:~:text=Google%20doesn't%20not%20index,different%20section%20of%20your%20page."
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  read here
                </Link>
                ). Ultimately, with the help of my manager, we had to make
                changes to the core Docsify library itself in order to support
                the use case of the team.
              </p>
              <p className="py-3">
                Thankfully, I managed to clear this before the end of the
                internship, and my manager actually updated me after I left the
                company, that there was an{" "}
                <span className="color-text-accent">approximately 1200%</span>{" "}
                increase in pages indexed by Google!
              </p>
              <div className="py-5 flex-col items-center justify-center">
                <Image
                  src={"/assets/experience/govtech/govtech-cy-me.jpg"}
                  width={350}
                  height={350}
                  alt="govtech-cy-me"
                  className="image-static"
                />
                <p className="text-xs text-center py-2 text-gray-400">
                  Me (left) and my internship manager (right)
                </p>
              </div>
              <p className="py-3">
                Another task assigned to me was to deploy an end-to-end system
                with{" "}
                <Link
                  href="https://opentelemetry.io/"
                  rel="noopener noreferrer"
                  target={"_blank"}
                  className="color-text-accent hover:underline"
                >
                  OpenTelemetry (OTEL)
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.elastic.co/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="color-text-accent hover:underline"
                >
                  Elastic Observability
                </Link>{" "}
                to collect telemetry data such as logs, traces, and metrics.
                Unfortunately, I had to hand over to a colleague after doing
                some initial preliminary research due to the lack of time, but
                it was still a great learning opportunity nonetheless.
              </p>
              <div className="project-page-section-title" id="learnings">
                {"{* Learnings *}"}
              </div>
              <p className="py-3">
                I was exposed to a great deal of new technologies during my time
                here, such as{" "}
                <Link
                  href="https://opentelemetry.io/"
                  rel="noopener noreferrer"
                  target={"_blank"}
                  className="color-text-accent hover:underline"
                >
                  OpenTelemetry (OTEL)
                </Link>
                ,{" "}
                <Link
                  href="https://www.elastic.co/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="color-text-accent hover:underline"
                >
                  Elastic Observability
                </Link>
                , and various cloud products (namely AWS ECS, Fargate, VPC). It
                was also in GovTech where I first experienced{" "}
                <span className="color-text-accent">
                  Test-Driven Development (TDD)
                </span>{" "}
                using{" "}
                <Link
                  className="color-text-accent hover:underline"
                  href="https://jestjs.io/"
                  rel="noopener noreferrer"
                  target={"_blank"}
                >
                  Jest
                </Link>
                .
              </p>
              <p className="py-3">
                The software development processes here were also a lot more
                mature when compared to my previous internship in a startup.
                There was a lot more{" "}
                <span className="color-text-accent">autonomy</span> given to
                team members here, and it took me awhile to learn that{" "}
                <span className="color-text-accent">
                  asking for help is normal
                </span>
                , and not deterministic of one&lsquo;s ability and proficiency
                in programming.
              </p>
              <p className="py-3">
                I also had the opportunity to have my code reviewed by others,
                as well as review some code my colleagues wrote. While each code
                review took me awhile to complete, it{" "}
                <span className="color-text-accent">
                  reinforced my understanding of the importance of writing clean
                  and readable code
                </span>
                , and I am grateful to have been given the opportunity to
                perform code reviews (inexperienced as I may be).
              </p>
              <div className="project-page-section-title" id="closing">
                {"{* Final thoughts *}"}
              </div>
              <p className="py-3">
                The GovTech internship program was in many ways an eye-opening
                experience, and I was appreciative of the fact that despite
                being an intern, I was able to work on normal tasks and
                experience the day-to-day life of being a employee at the
                company, rather than going through a separate, non-related
                program crafted just for interns.
              </p>
              <div className="py-5 flex-col items-center justify-center">
                <Image
                  src={"/assets/experience/govtech/govtech-grad.jpg"}
                  width={500}
                  height={500}
                  alt="govtech-grad"
                  className="image-static"
                />
                <p className="text-xs text-center py-2 text-gray-400">
                  Internship Graduation Ceremony hosted by Young Talent
                  Programme Office (YTPO)
                </p>
              </div>
              <p className="py-3">
                However, I would say that the best part of being in this company
                is the people that I&lsquo;ve met along the way, especially
                those in the team I was in, from the UI/UX designers, to the
                developers, to the one other fellow intern in my team, and
                finally my internship manager. Being able to witness the sharp
                minds and work ethic of these brilliant people in action have
                been nothing short of a humbling and inspiring escapade.
              </p>
            </div>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={{
                "#introduction": "Intro",
                "#experience": "Experience",
                "#learnings": "Learnings",
                "#closing": "Final thoughts",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default govtech;
