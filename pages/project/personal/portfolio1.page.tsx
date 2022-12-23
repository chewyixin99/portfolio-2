import React from "react";
import { projects } from "../../../data/constants";
import { ProjectType } from "../../../data/types";
import Image from "next/image";
import ProjectHead from "../../../components/pages/ProjectHead";
import StickySidebar from "../../../components/pages/StickySidebar";
import Link from "next/link";

// Only runs at build time
export const getStaticProps = () => {
  const proj = projects
    .filter((p) => {
      return p.projectPath === "/project/personal/portfolio1";
    })
    .shift();
  return {
    props: proj,
  };
};

const portfolio1 = ({
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
          subtitle="Attempt at creating a web-app with database"
          readMins="5"
          dateString={dateString}
          skills={skills}
          githubUrl={githubUrl}
          projectUrl={projectUrl}
        />
        <div className="project-page-grid">
          <div className="project-page-body-col">
            {/* Description paragraphs */}
            <div>
              <div className="project-page-section-title" id="introduction">
                {"{* Introduction *}"}
              </div>
              <p className="py-3">
                This is my very{" "}
                <span className="color-text-accent">first attempt</span> at
                creating a web-application from scratch, and I wasn&lsquo;t too
                sure how or even where to even start from. The inertia is real.
                After weeks of procrastination since the start of my holidays, I
                finally decided to create my first application (
                <em>of course it would be a portfolio website, right?</em>).
              </p>
              <p className="py-3">
                Prior to this, I only had basic knowledge in{" "}
                <span className="color-text-accent">
                  Python, HTML, MySQL, and PHP
                </span>
                . I was absolutely clueless as to what a framework or even what
                JavaScript is. Therefore it would make sense that I used
                whatever knowledge I have and attempt to apply it onto some sort
                of website.
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/portfolio1/landing-page.jpg"}
                  width={600}
                  height={600}
                  alt="landing-page"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Landing page for final app
                </p>
              </div>
              <div className="project-page-section-title" id="process">
                {"{* Process *}"}
              </div>
              <p className="py-3">
                To be completely honest, I started by just going to Youtube,
                searching &ldquo;how to build a portfolio website from
                scratch&rdquo;, browsed through a few videos, and finally chose
                the one design that I liked the most, nothing too fancy of a
                process. The tutorial that ultimately led to the start of my
                web-application journey is one by{" "}
                <Link
                  href="https://www.freecodecamp.org/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  freeCodeCamp.org
                </Link>
                , which can be viewed{" "}
                <Link
                  href={
                    "https://www.youtube.com/watch?v=_xkSvufmjEs&t=36s&ab_channel=freeCodeCamp.org"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  here
                </Link>
                .
              </p>
              <p className="py-">
                <em>
                  &lsquo;Programming is 80% googling, and 20% actual
                  coding&rsquo;.
                </em>
              </p>
              <p className="py-3">
                I never really understood the meaning of the quote until this
                project. Even though I was following the tutorial, I did not
                want to blindly copy without understanding a single thing, and
                had to pause the video almost every 5-10 minutes and start
                googling on what the the presenter was talking about.
              </p>
              <p className="py-3">
                I had no choice but to gradually become comfortable with being
                lost and confused all the time. I started becoming acquainted
                with sites like{" "}
                <Link
                  href={"https://www.w3schools.com/"}
                  rel="noopener noreferrer"
                  target={"_blank"}
                  className="color-text-accent hover:underline"
                >
                  W3Schools
                </Link>
                ,{" "}
                <Link
                  href={"https://developer.mozilla.org/en-US/"}
                  rel="noopener noreferrer"
                  target={"_blank"}
                  className="color-text-accent hover:underline"
                >
                  MDN web docs
                </Link>
                , and other documentation websites. Safe to say almost 80% of
                the time was spent on Google, and a 2.5 hours tutorial took
                close to a week to complete.
              </p>
              <div className="project-page-section-title" id="learnings">
                {"{* Learnings *}"}
              </div>
              <div className="py-3">
                <p>
                  There were definitely plenty of lessons taken away from this
                  simple tutorial alone. To name a few -
                </p>
                <span className="project-description-list-item">
                  Learning plain ol&lsquo; vanilla CSS
                </span>
                <span className="project-description-list-item">
                  Using CSS variables and learning about media queries like so -
                </span>
                <div className="project-page-image-container">
                  <Image
                    src={
                      "/assets/projects/portfolio1/code-snippet-css-variables.jpg"
                    }
                    width={350}
                    height={350}
                    alt="css-variables"
                    className="image-static"
                  />
                  <p className="project-page-image-caption">
                    Code snippet from style.css
                  </p>
                </div>
                <span className="project-description-list-item">
                  Importing fonts, styles, and javascript from local files and
                  using CDN
                </span>
                <span className="project-description-list-item">
                  Designing page layouts and navbar using grid and z-index
                </span>
                <span className="project-description-list-item">
                  CSS transition and animations
                </span>
                <span className="project-description-list-item">
                  Organizing code, assets, and files
                </span>
                <span className="project-description-list-item">
                  Simple javascript and event listeners and so on
                </span>
              </div>
              <p className="py-3">
                There is also a comments section under each showcase / project
                page which allows users to enter their name and a comment, which
                would then be stored in a MySQL database and reflected on the
                frontend after the user refreshes the page. Unfortunately, it is
                not working at the time of this writing.
              </p>
              <p className="py-3">
                I also made my first ever{" "}
                <span className="color-text-accent">deployment</span> on{" "}
                <Link
                  href={"https://www.infinityfree.net/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  InfinityFree
                </Link>
                , which has a free plan to host PHP sites as well as a MySQL
                backend database.
              </p>
              <p className="py-3">
                While editing the different pages, I realized that there were
                many{" "}
                <span className="color-text-accent">repeated components</span>{" "}
                such as the header, navbar, and footer, and making changes to
                either one would result in me having to painfully go through
                multiple files just to edit the component. This moment was when
                I had my first coding epiphany, and I proceeded to{" "}
                <span className="color-text-accent">componentize</span> these
                commonly used components into a seperate file, and import them
                into the various static PHP files.
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/portfolio1/code-snippet-component.jpg"}
                  width={500}
                  height={500}
                  alt="code-snippet-component"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Code snippet of a navbar component
                </p>
              </div>
              <p className="py-3">
                While this is definitely not the best way to do things, 2020 me
                was proud and thoroughly satisfied that I manage to reduce
                repetition in my code.
              </p>
              <div className="project-page-section-title" id="conclusion">
                {"{* Conclusion *}"}
              </div>
              <p className="py-3">
                While not the best, it was definitely a fulfilling experience
                being able to code a website from scratch{" "}
                <em>(well, granted I was following a tutorial)</em> and seeing
                my code <span className="color-text-accent">come to live</span>{" "}
                each time I made changes which was being reflected on the
                website immediately.
              </p>
              <p className="py-3">
                Completing this project also changed my perspective on things,
                that programming is a{" "}
                <span className="color-text-accent">
                  continuous learning journey
                </span>
                , and there is no single person who knows everything at the back
                of their hand. Technology is continuously improving and what I
                learn today may become obsolete tomorrow. This mindset shift was
                what allowed me to realize that{" "}
                <span className="color-text-accent">
                  it is ok to not know things
                </span>
                , and that what is important is to have a{" "}
                <span className="color-text-accent">
                  hunger for learning and constant improvement
                </span>
                .
              </p>
              <div className="project-page-section-title" id="appendix">
                {"{* Appendix *}"}
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/portfolio1/interests.jpg"}
                  width={700}
                  height={700}
                  alt="interests"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Interests section, with overlay and background image
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/portfolio1/about.jpg"}
                  width={700}
                  height={700}
                  alt="about"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  About section, with overlapping elements
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/portfolio1/gallery-showcase.jpg"}
                  width={700}
                  height={700}
                  alt="gallery-showcase"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Gallery showcase with CSS animations
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/portfolio1/mobile-nav.jpg"}
                  width={350}
                  height={350}
                  alt="mobile-nav"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Mobile navigation hamburger
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/portfolio1/comment-component.jpg"}
                  width={700}
                  height={700}
                  alt="comment-component"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Comment component for user interaction
                </p>
              </div>
            </div>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={{
                "#introduction": "Intro",
                "#process": "Process",
                "#learnings": "Learnings",
                "#conclusion": "Conclusion",
                "#appendix": "Appendix",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio1;
