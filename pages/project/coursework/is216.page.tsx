import React from "react";
import { projects } from "../../../data/constants";
import { ProjectType } from "../../../data/types";
import Image from "next/image";
import Link from "next/link";
import ProjectHead from "../../../components/pages/ProjectHead";
import StickySidebar from "../../../components/pages/StickySidebar";

// Only runs at build time
export const getStaticProps = () => {
  const proj = projects
    .filter((p) => {
      return p.projectPath === "/project/coursework/is216";
    })
    .shift();
  return {
    props: proj,
  };
};

const is216 = ({
  title,
  dateString,
  skills,
  githubUrl,
  projectUrl,
}: ProjectType) => {
  return (
    <div className="project-page-outer-container">
      <div className="project-page-inner-container">
        <ProjectHead
          title={title}
          subtitle="Frontend focused, mobile-friendly web application"
          readMins="5"
          dateString={dateString}
          skills={skills}
          githubUrl={githubUrl}
          projectUrl={projectUrl}
        />
        <div className="project-page-grid">
          <div className="project-page-body-col">
            {/* Description paragraphs */}
            <div className="project-page-section-title" id="introduction">
              {"{* Introduction *}"}
            </div>
            <p className="py-3">
              This project was done as part of a requirement for a module I took
              in SMU, Web Application and Development II (WAD II). It is the
              school&rsquo;s introductory module to webpage and frontend design,
              and it was also my first touch point with a frontend framework
              which was{" "}
              <Link
                href="https://vuejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                VueJS
              </Link>{" "}
              in this case.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/wad2/credits.jpg"}
                width={650}
                height={650}
                alt="credits"
                className="image-static"
              />
              <p className="project-page-image-caption">Developer team</p>
            </div>
            <p className="paragraph-title">Problem</p>
            <p className="py-3">
              The team came up with the following problem statement.
            </p>
            <p className="pb-3 italic">
              &ldquo;There are a limited number of basketball courts, and
              players will either have to share the courts or join a pickup
              game. However, there are currently no reliable avenues to
              facilitate this. It is therefore a common sight to see players
              heading down to multiple basketball courts to check the
              availability of games and courts.&rdquo;
            </p>
            <p className="paragraph-title">Solution</p>
            <p className="italic pb-3">
              &ldquo;To organise this fragmented network of basketball games in
              Singapore to help users better visualise the availability of
              courts/games and reduce wasted time.&rdquo;
            </p>
            <p className="py-3">
              Our resources can be found in the Github source code&rsquo;s{" "}
              <Link
                href="https://github.com/chewyixin99/is216-wad2-21"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                README
              </Link>
              , or be accessed in the following links{" "}
              <span className="project-description-list-item">
                <Link
                  href="https://www.youtube.com/watch?v=Ii1-ESWN8tg&ab_channel=Gan"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  Video demo
                </Link>
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://www.figma.com/file/O5EaYzT19cAZYyO9pd1L1d/NEXT?node-id=113%3A41"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  Figma overview
                </Link>
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://wad2-d251f.web.app/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  Deployed application (may not be working properly)
                </Link>
                : Use &ldquo;ts@gmail.com&rdquo; and &ldquo;Password&rdquo; to
                log in
              </span>
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/wad2/walkthrough-gif.gif"}
                width={650}
                height={650}
                alt="walkthrough-gif"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Application walkthrough gif
              </p>
            </div>
            <div className="project-page-section-title" id="requirements">
              {"{* Requirements *}"}
            </div>
            <p className="py-3">
              The requirements for this project were fairly straightforward.
              <span className="project-description-list-item">
                Identify any specific problem / pain point
              </span>
              <span className="project-description-list-item">
                Make use of data from at least{" "}
                <span className="underline">one</span> API within the
                application
              </span>
              <span className="project-description-list-item">
                Make use of a frontend framework (such as{" "}
                <Link
                  href="https://vuejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  VueJS
                </Link>
                )
              </span>
              <span className="project-description-list-item">
                Make use of a CSS framework (such as{" "}
                <Link
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Bootstrap
                </Link>
                )
              </span>
              <span className="project-description-list-item">
                Application must be responsive, i.e., mobile-friendly
              </span>
            </p>
            <p className="paragraph-title">Tech stack</p>
            <p className="pb-3">
              For this project, we used the following tech stack.
              <span className="project-description-list-item">
                <Link
                  href="https://vuejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  VueJS
                </Link>
                : Primary frontend framework
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  TailwindCSS
                </Link>
                : Primary CSS framework
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://www.chartjs.org/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  ChartJS
                </Link>
                : Displaying activity charts
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://firebase.google.com/docs/firestore"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  Firebase
                </Link>
                : Database with free plan, beginner-friendly and fast and safe
                hosting
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://developers.google.com/maps/documentation"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  Google Maps API
                </Link>
                : Retrieving court locations in Singapore
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://ui-avatars.com/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  UI Avatars
                </Link>
                : Creating default avatars
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://www.balldontlie.io/#introduction"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  balldontlie API
                </Link>
                : Retrieving NBA players data
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  NodeJS
                </Link>
                : Backend server
              </span>
            </p>
            <div className="project-page-section-title" id="features">
              {"{* Application Features *}"}
            </div>
            <p className="paragraph-title">Court searching</p>
            <p className="pb-3">
              By entering an area, or clicking on &lsquo;Courts Near Me&rsquo;,
              users will be able to easily visualize and select a court on the
              user interface. This is made possible using Google Maps API. The
              relevant code snippet can be found in the file{" "}
              <span className="color-text-accent italic">courtMiniMap.js</span>{" "}
              in the source code.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/wad2/find-court.jpg"}
                width={650}
                height={650}
                alt="find-court"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Finding a basketball court
              </p>
            </div>
            <p className="paragraph-title">Team management</p>
            <p className="pb-3">
              Users will be able to visualize the current traffic of people who
              have checked in at a specific basketball court, and thereafter
              decide if they wish to create, join or leave a team as they see
              fit. Users are also able to separately bookmark a court should
              they foresee themself visiting the court again in the future.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/wad2/check-in.jpg"}
                width={650}
                height={650}
                alt="check-in"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Team management interface
              </p>
            </div>
            <p className="paragraph-title">Community</p>
            <p className="pb-3">
              Frequent ballers and regulars have the option to form a community
              to facilitate organizing and scheduling of pickup games. There is
              also a message board which acts as a announcement broadcast for
              members within a group.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/wad2/form-group.jpg"}
                width={650}
                height={650}
                alt="form-group"
                className="image-static"
              />
              <p className="project-page-image-caption">Group interface</p>
            </div>
            <div className="project-page-section-title" id="conclusion">
              {"{* Conclusion *}"}
            </div>
            <p className="py-3">
              This was my first{" "}
              <span className="color-text-accent">
                full-stack development project
              </span>{" "}
              done in SMU, utilising a frontend framework such as Vue, and also
              me and my team&rsquo;s first time developing a web application
              that is{" "}
              <span className="color-text-accent">
                both web and mobile friendly
              </span>
              .
            </p>
            <p className="py-3">
              In order for all team members to be aligned, the importance of a{" "}
              <span className="color-text-accent">
                single source of truth (with respect to design and
                documentation)
              </span>{" "}
              cannot be stressed upon more heavily. My team and I were
              inexperienced when it came to collaborative coding projects, and
              our first (and most major) mistake was to start coding ASAP{" "}
              <span className="color-text-accent">
                without finalizing the design and requirements
              </span>
              , which led to many hours of debugging, fixing bugs, and wasted
              work done.
            </p>
            <p className="py-3">
              Having said that, overall, this was a pretty fun and interesting
              project, from ideating all the way till the first release and demo
              day.
            </p>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={{
                "#introduction": "Intro",
                "#requirements": "Requirements",
                "#features": "App Features",
                "#conclusion": "Conclusion",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default is216;
