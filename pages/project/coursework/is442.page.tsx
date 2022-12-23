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
      return p.projectPath === "/project/coursework/is442";
    })
    .shift();
  return {
    props: proj,
  };
};

const is442 = ({
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
          subtitle="Corporate pass booking application"
          readMins="10"
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
                This project was done as part of a course in SMU, IS442
                Object-Oriented Programming, which is an{" "}
                <Link
                  href={"https://x.smu.edu.sg/"}
                  target={"blank"}
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  SMU-X
                </Link>{" "}
                module, requiring students to &lsquo;
                <em>
                  take on real-world changes by collaborating on projects with
                  corporates, non-profit, and government organizations
                </em>
                &rsquo;. In the context of this module,{" "}
                <Link
                  href="https://www.sportsschool.edu.sg/"
                  rel="noopener noreferrer"
                  target={"_blank"}
                  className="color-text-accent hover:underline"
                >
                  Singapore Sports School (SSP)
                </Link>{" "}
                was the client sponsoring the projects within the module.
              </p>
              <p className="py-3">
                The main goal of the project is to build a system to facilitate
                the booking of corporate passes for staff in SSP, which allows
                staff / employees of SSP to visit attractions such as Art
                Science Museum, Singapore Flyer, Gardens by the Bay etc.
              </p>
              <div className="project-page-section-title" id="requirements">
                {"{* Requirements *}"}
              </div>
              <p className="py-3">
                As expected, we were required to use Java for our project since
                this is an object-oriented programming related module, as well
                as form groups of 5-6 members to complete the project together.
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/credits.jpg"}
                  width={600}
                  height={600}
                  alt="credits"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Project mates for this module
                </p>
              </div>
              <p className="py-3">
                The project requires 3 distinct groups of users with different
                access controls within the application, namely
                <span className="project-description-list-item">
                  <span className="color-text-accent">Borrower</span>: permanent
                  employee of SSP who is able to loan a pass.
                </span>
                <span className="project-description-list-item">
                  <span className="color-text-accent">Administrator</span>:
                  someone who configures the application parameters, and may
                  also be an employee of SSP (able to borrow passes)
                </span>
                <span className="project-description-list-item">
                  <span className="color-text-accent">
                    General-office personnel (GOP)
                  </span>
                  : responsible for issuance and collection of the loan pass
                  card
                </span>
              </p>
              <p className="py-3">
                All 3 kinds of users need to be authenticated with username and
                password as well. Our group made use of{" "}
                <Link
                  href="https://jwt.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  JSON Web Tokens (JWT)
                </Link>{" "}
                and{" "}
                <Link
                  href="https://spring.io/projects/spring-security"
                  target={"_blank"}
                  rel="noopner noreferrer"
                  className="color-text-accent hover:underline"
                >
                  Spring Security
                </Link>{" "}
                to fulfill this requirement.
              </p>
              <p className="py-3">
                There are certain requirements and verifications with regards to
                designing the Loan Pass entity, such as (not exhaustive)
                <span className="project-description-list-item">
                  Limiting to 2 passes per loan and 2 loans per month per user
                </span>
                <span className="project-description-list-item">
                  Capturing the details of the borrower
                </span>
                <span className="project-description-list-item">
                  Capturing the details of the previous borrower
                </span>
                <span className="project-description-list-item">
                  Confirmation email upon successful booking
                </span>
                <span className="project-description-list-item">
                  Reminder to collect and return pass to General Office (GO)
                </span>
                <span className="project-description-list-item">
                  Cancellation of booking with confirmation email
                </span>
              </p>
              <p className="py-3">
                There was also a requirement to allow administrators to see
                basic statistics / analytics within the applications such as:
                <span className="project-description-list-item">
                  <span className="color-text-accent">Monthly statistics</span>:
                  number of loans per month, number of borrowers per month etc.
                </span>
                <span className="project-description-list-item">
                  <span className="color-text-accent">
                    Number of loans per employee
                  </span>
                  : monthly, bi-annual, annual timeframe
                </span>
              </p>
              <p className="py-3">
                Part of the project requirements also required us to use a{" "}
                <span className="color-text-accent">relational database</span>,
                and in this case, our team decided to go with what we were most
                familiar with (
                <Link
                  href="https://www.mysql.com/"
                  rel="noopener noreferrer"
                  target={"_blank"}
                  className="color-text-accent hover:underline"
                >
                  MySQL
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.javatpoint.com/java-jdbc"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  JDBC
                </Link>
                ), to minimise initial learning curve and start the project in a
                shorter time since we had to manage our time spent on this with
                other modules (and projects) at the same time.
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/initial-uml.jpg"}
                  width={600}
                  height={600}
                  alt="initial-uml"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Initial UML diagram design for our relational database
                </p>
              </div>
              <p className="py-3">
                The image may not be very clear, but our initial design was
                based off the{" "}
                <Link
                  href="https://www.geeksforgeeks.org/mvc-design-pattern/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  Model-View-Controller (MVC)
                </Link>{" "}
                design pattern, grouping related application logic together in a
                controller.
              </p>
              <div className="project-page-section-title" id="timeline">
                {"{* Timeline *}"}
              </div>
              <p className="py-3">
                We split our team into frontend and backend, groups of 3 each. I
                was personally in the backend team, making use of Java,
                Springboot, and MySQL in the backend server application. The
                timeline is as such
                <span className="project-description-list-item">
                  <span className="color-text-accent">Week 7</span>: Consolidate
                  requirements and planning
                </span>
                <span className="project-description-list-item">
                  <span className="color-text-accent">Week 8</span>: Initial
                  setup and researching for libraries to use
                </span>
                <span className="project-description-list-item">
                  <span className="color-text-accent">Week 9-10</span>: frontend
                  and backend initial mockup
                </span>
                <span className="project-description-list-item">
                  <span className="color-text-accent">Week 11-12</span>: Coding
                  out features
                </span>
                <span className="project-description-list-item">
                  <span className="color-text-accent">Week 13</span>:
                  Refactoring, clean-up and bug-catching
                </span>
                <span className="project-description-list-item">
                  <span className="color-text-accent">Week 14</span>: Submission
                  and presentation
                </span>
              </p>
              <p className="py-3">
                The team held alignment meetings every 1-2 weeks to go over what
                have been done, what is needed to be done, and resolving any
                potential blockers that may come up.
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/system-overview.jpg"}
                  width={700}
                  height={700}
                  alt="system-overview"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  System overview of the application
                </p>
              </div>
              <div className="project-page-section-title" id="techstack">
                {"{* Tech stack and libraries *}"}
              </div>
              <p className="pt-3">For the frontend, we made use of mainly:</p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/fe-libraries.jpg"}
                  width={700}
                  height={700}
                  alt="fe-libraries"
                  className="image-static"
                />
                <p className="project-page-image-caption">Frontend libraries</p>
              </div>
              <p className="pb-3">
                <span className="project-description-list-item">
                  <Link
                    href="https://vuejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    VueJS
                  </Link>{" "}
                  : Main frontend framework
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Bootstrap
                  </Link>{" "}
                  : CSS Framework
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://jwt.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    JSON Web Tokens
                  </Link>{" "}
                  : Authentication
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://axios-http.com/docs/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Axios
                  </Link>{" "}
                  : Fetching data from APIs
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://www.npmjs.com/package/xlsx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    XLSX
                  </Link>{" "}
                  : Importing and exporting of data from XLSX/CSV files
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://fullcalendar.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Full Calendar
                  </Link>{" "}
                  : Calendar UI for booking
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://gridjs.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    GridJS
                  </Link>{" "}
                  : Displaying tables and data
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://www.chartjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    ChartJS
                  </Link>{" "}
                  : Displaying analytics charts
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://quilljs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    QuillJS
                  </Link>{" "}
                  : Rich text editor for admin to configure email templates
                </span>
              </p>
              <p className="pt-6">Backend libraries:</p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/be-libraries.jpg"}
                  width={700}
                  height={700}
                  alt="be-libraries"
                  className="image-static"
                />
                <p className="project-page-image-caption">Backend libraries</p>
              </div>
              <p className="pb-3">
                <span className="project-description-list-item">
                  <Link
                    href="https://www.java.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Java
                  </Link>{" "}
                  : Programming language
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://spring.io/projects/spring-boot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Spring Boot
                  </Link>{" "}
                  : Java framework
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://www.mysql.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    MySQL
                  </Link>{" "}
                  : Relational database
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://springdoc.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Springdoc OpenAPI
                  </Link>{" "}
                  : Open API 3 Documentation with Springdoc
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://projectlombok.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Project Lombok
                  </Link>{" "}
                  : Java library to reduce boilerplate code
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://javaee.github.io/javamail/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Java Mail
                  </Link>{" "}
                  : Sending emails to customers
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://spring.io/projects/spring-security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Spring Security
                  </Link>{" "}
                  : Authentication and authorization service
                </span>
              </p>
              <div className="project-page-section-title" id="learnings">
                {"{* Learnings *}"}
              </div>
              <p className="py-3">
                This module was my first time properly learning object-oriented
                programming, as well as touching both Java and Springboot. While
                it was challenging, I can safely say that I took away many key
                concepts and learnings with regards to program design and code
                writing, as well as integrating both frontend and backend
                together to form a working prototype.
              </p>
              <p className="py-3">
                As the frontend was moving a lot faster than the backend (due to
                the learning curve of using Springboot and writing Java code for
                the first time for most of us), the backend had to catchup and
                write APIs for the frontend to use. Initially, we made the
                mistake of writing code that we &lsquo;think&rsquo; might be
                useful, but would{" "}
                <span className="color-text-accent">
                  later end up being obsolete and not needed
                </span>{" "}
                by the frontend team.
              </p>
              <p className="py-3">
                One of the greatest learnings was definitely to keep{" "}
                <span className="color-text-accent">
                  constant communication
                </span>{" "}
                between both the frontend and backend, and writing code to suit
                the needs of one another.
              </p>
              <p className="py-3">
                Java and Springboot was also a lot more customizable and
                verbose, when compared to previous programming languages and
                frameworks that we have worked in the past. This was a big step
                out of our comfort zone and presented many challenges to us, but
                overall it was a great experience for the team, being able to{" "}
                <span className="color-text-accent">
                  experiment on new technologies
                </span>{" "}
                and{" "}
                <span className="color-text-accent">
                  takeaway software development experience and best practices
                </span>{" "}
                from this module / project.
              </p>
              <div className="project-page-section-title" id="appendix">
                {"{* Appendix *}"}
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/swagger-ui.jpg"}
                  width={550}
                  height={550}
                  alt="swagger-ui"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  OpenAPI documentation with Swagger
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/home.jpg"}
                  width={550}
                  height={550}
                  alt="home"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Application home page / login
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/password-reset.jpg"}
                  width={550}
                  height={550}
                  alt="password-reset"
                  className="image-static"
                />
                <p className="project-page-image-caption">Password reset</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/analytics-dashboard.jpg"}
                  width={550}
                  height={550}
                  alt="analytics-dashboard"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Analytics dashboard (admin)
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/booking-tables.jpg"}
                  width={550}
                  height={550}
                  alt="booking-tables"
                  className="image-static"
                />
                <p className="project-page-image-caption">Booking view</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/calendar-ui.jpg"}
                  width={350}
                  height={350}
                  alt="calendar-ui"
                  className="image-static"
                />
                <p className="project-page-image-caption">Booking UI</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/staff-mgmt.jpg"}
                  width={550}
                  height={550}
                  alt="staff-mgmt"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Staff management (admin)
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/rich-text-editor.jpg"}
                  width={550}
                  height={550}
                  alt="rich-text-editor"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Rich text editor for email templates (admin)
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/oop/pass-edit.jpg"}
                  width={550}
                  height={550}
                  alt="pass-edit"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Pass editor (admin)
                </p>
              </div>
            </div>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={{
                "#introduction": "Intro",
                "#requirements": "Requirements",
                "#timeline": "Timeline",
                "#techstack": "Tech stack",
                "#learnings": "Learnings",
                "#appendix": "Appendix",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default is442;
