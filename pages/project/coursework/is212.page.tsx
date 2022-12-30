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
      return p.projectPath === "/project/coursework/is212";
    })
    .shift();
  return {
    props: proj,
  };
};

const is212 = ({
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
          subtitle="Agile and Scrum methodologies in practice"
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
                This project was done in a group of 6, as part of the coursework
                for IS212 - Software Project Management module in SMU.
              </p>
              <p className="py-3">
                The overall goal of the project is to allow students to gain
                hands-on experience running and applying{" "}
                <Link
                  href={"https://www.agilealliance.org/agile101/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  Agile
                </Link>{" "}
                and{" "}
                <Link
                  href={"https://www.scrum.org/resources/what-is-scrum"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  Scrum
                </Link>{" "}
                methodologies to a software project in a{" "}
                <span className="color-text-accent">collaborative</span>{" "}
                environment, as well as working with an external customer.
              </p>
              <p className="py-3">
                As such, frontend design is not a priority, but rather the focus
                was on the collaborative software development experience,
                adopting modern software development practices during the
                process such as{" "}
                <Link
                  href={"https://www.agilealliance.org/agile101/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  Agile
                </Link>
                ,{" "}
                <Link
                  href={"https://www.scrum.org/resources/what-is-scrum"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  Scrum
                </Link>
                ,{" "}
                <Link
                  href={"https://testdriven.io/test-driven-development/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  test-driven development (TDD)
                </Link>
                , and{" "}
                <Link
                  href={"https://about.gitlab.com/topics/ci-cd/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="color-text-accent hover:underline"
                >
                  Continuous Integration & Continuous Delivery (CI/CD)
                </Link>
                .
              </p>
              <div className="project-page-section-title" id="requirements">
                {"{* Requirements *}"}
              </div>
              <p className="py-3">
                The end product outcome from the project should be a (working)
                prototype of a learning journey planning system (LJPS) which
                would{" "}
                <span className="color-text-accent">minimally support</span>{" "}
                five core features, namely
                <span className="project-description-list-item">
                  Users should be able to select a role they want and see a list
                  of skills required
                </span>
                <span className="project-description-list-item">
                  Users should be able to see the courses they can take to
                  acquire those skills, and add/remove them on their learning
                  journey
                </span>
                <span className="project-description-list-item">
                  CRUD functionality for roles
                </span>
                <span className="project-description-list-item">
                  CRUD functionality for skills
                </span>
                <span className="project-description-list-item">
                  Assigning skills to roles and assigning skills to courses
                </span>
              </p>
              <p className="py-3">
                Other deliverables and requirements of the project include
                <span className="project-description-list-item">
                  Usage of a version control software (e.g., Git)
                </span>
                <span className="project-description-list-item">
                  Rough system design represented using the{" "}
                  <Link
                    href={"https://c4model.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Context, Container, Component, Code (C4) model
                  </Link>
                  .
                </span>
                <span className="project-description-list-item">
                  Test cases as evidence of TDD
                </span>
                <span className="project-description-list-item">
                  Any CI pipeline script that have been used
                </span>
                <span className="project-description-list-item">
                  Documentation of sprint meetings, planning, retrospective, and
                  backlog items
                </span>
              </p>
              <div className="project-page-section-title" id="process">
                {"{* Process *}"}
              </div>
              <div className="py-3">
                <p className="pb-3 color-text-accent font-bold text-lg">
                  Initial setup and planning
                </p>
                <p className="pb-3">
                  Before diving into coding, we had to do a initial setup and
                  planning for our project. This meant setting up the coding
                  environment, writing our user stories and then estimating
                  them, and then finally holding our first sprint planning
                  meeting.
                </p>
                <p className="py-3">
                  For our software tools, we decided to go with the following
                </p>
                <span className="project-description-list-item">
                  <Link
                    href={"https://github.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Github
                  </Link>
                  : Version control, one that is most familiar by everyone in
                  the team
                </span>
                <span className="project-description-list-item">
                  <Link
                    href={"https://www.atlassian.com/software/jira"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Jira
                  </Link>
                  : Issue tracking software, where the main bulk of our
                  documentation will be housed in
                </span>
                <p className="py-3">
                  Jira also has Github support, allowing the team to easily
                  track the branches, commits, and pull requests created for a
                  Jira ticket at a glance.
                </p>
                <p className="py-3">
                  After splitting the workload, we finally came up with most of
                  the user stories required to complete in order to achieve the
                  5 core functionalities of the first software release.
                </p>
                <div className="project-page-image-container">
                  <Image
                    src={"/assets/projects/spm/us-example.jpg"}
                    width={500}
                    height={500}
                    alt="us-example"
                    className="image-static"
                  />
                  <p className="project-page-image-caption">
                    Example of a User Story
                  </p>
                </div>
                <p className="py-3">
                  The bulk of the stories were estimated using the{" "}
                  <Link
                    href={
                      "https://www.mountaingoatsoftware.com/agile/planning-poker"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    planning poker estimation technique
                  </Link>
                  , while the rest of the stories were left to be assigned a
                  story point at a later date due to uncertainties.
                </p>
                <p className="py-3">
                  For our tech stack, we chose to use{" "}
                  <Link
                    href={"https://flask.palletsprojects.com/en/2.2.x/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Python and Flask
                  </Link>{" "}
                  with MySQL for the backend due to familiarity, and{" "}
                  <Link
                    href={"https://reactjs.org/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    ReactJS
                  </Link>{" "}
                  for the frontend as we wanted to pick up something new (and
                  widely-used within the industry) that was not taught in the
                  school curriculum, and what better way was there to learn a
                  new skill than applying it on a project, right? <br />
                  <br />
                  Other libraries we used alongside ReactJS include:
                  <span className="project-description-list-item">
                    <Link
                      href={"https://notistack.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="color-text-accent hover:underline"
                    >
                      Notistack
                    </Link>
                    : Snackbar alerts to reflect status change on the UI
                  </span>
                  <span className="project-description-list-item">
                    <Link
                      href={"https://mui.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="color-text-accent hover:underline"
                    >
                      Material UI
                    </Link>
                    : React component UI for quick styling
                  </span>
                  <span className="project-description-list-item">
                    <Link
                      href={"https://formik.org/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="color-text-accent hover:underline"
                    >
                      Formik
                    </Link>
                    : Form and input validation library
                  </span>
                </p>
                <p className="py-3">
                  We also set up a pre-commit linter using{" "}
                  <Link
                    href="https://www.npmjs.com/package/husky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    husky
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://flake8.pycqa.org/en/latest/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    flake8
                  </Link>
                  , to smoothen our developer experience and standardize code
                  written across the board.
                </p>
                <p className="py-3">
                  Finally, to practice TDD and increase the reliability of our
                  code, we used the following libraries / frameworks to do so:
                </p>
                <span className="project-description-list-item">
                  <Link
                    href={"https://jestjs.io/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Jest
                  </Link>
                  : Javascript testing framework
                </span>
                <span className="project-description-list-item">
                  <Link
                    href={"https://docs.python.org/3/library/unittest.html"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    UnitTest
                  </Link>
                  : Python testing framework
                </span>
                <p className="py-3 color-text-accent font-bold text-lg">
                  Sprint cycles
                </p>
                <p className="py-3">
                  Prior to the start of every sprint, the team would gather for
                  30mins to 1hour to conduct a{" "}
                  <span className="color-text-accent">Sprint Planning</span>{" "}
                  session, where we discuss and reestimate (if needed) user
                  stories that needs to be completed in the coming-up sprint,
                  before assigning them to members.
                </p>
                <p className="py-3">
                  As we are all juggling 3-4 other modules during the semester,
                  we decided to conduct a{" "}
                  <span className="color-text-accent">
                    daily-scrum meeting (DSM)
                  </span>{" "}
                  every 3-4 days instead of daily, where the team comes together
                  to report on what have been done, what will be done, and if
                  there are any blockers faced during the development process.
                </p>
                <p className="py-3">
                  To conclude, at the end of each sprint, a{" "}
                  <span className="color-text-accent">
                    Sprint Retrospective
                  </span>{" "}
                  is conducted to go over the work done during the sprint
                  (completed or not), so that the team can learn from any
                  mistakes or good practices exhibited by some members. This
                  allows us to be able to conduct subsequent sprints more
                  productively and efficiently. <br />
                  <br />
                  This becomes more evident as the team is able to see progress
                  towards the end of the term, when the{" "}
                  <span className="color-text-accent">
                    velocity of the team increased significantly
                  </span>
                  .
                </p>
                <div className="project-page-image-container">
                  <Image
                    src={"/assets/projects/spm/sprint2.jpg"}
                    width={450}
                    height={450}
                    alt="credits"
                    className="image-static"
                  />
                  <p className="project-page-image-caption">
                    Burndown chart (sprint 2): velocity of 42 points
                  </p>
                </div>
                <div className="project-page-image-container">
                  <Image
                    src={"/assets/projects/spm/sprint3.jpg"}
                    width={450}
                    height={350}
                    alt="credits"
                    className="image-static"
                  />
                  <p className="project-page-image-caption">
                    Burndown chart (sprint 3): velocity of 57 points
                  </p>
                </div>
                <p className="py-3 color-text-accent font-bold text-lg">
                  Unit and Integration tests
                </p>
                <p className="py-3">
                  The content for unit tests were gone through pretty late in
                  the semester, therefore we implemented these tests between
                  sprint 2 and sprint 3 of the process. Some code snippets of
                  tests will be shown below.
                </p>
                <div className="project-page-image-container">
                  <Image
                    src={"/assets/projects/spm/unit-test-snippet.jpg"}
                    width={450}
                    height={450}
                    alt="unit-test"
                    className="image-static"
                  />
                  <p className="project-page-image-caption">
                    Unit test snippet using Jest testing framework
                  </p>
                </div>
                <p className="py-3">
                  Unit tests using Jest are pretty straightforward, using the{" "}
                  <Link
                    href="https://www.valentinog.com/blog/jest/#:~:text=Our%20first%20friend%20is%20describe,for%20wrapping%20the%20actual%20test."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    describe
                  </Link>{" "}
                  method in Jest to check if a given input into a method gives
                  the expected output.
                </p>
                <div className="project-page-image-container">
                  <Image
                    src={"/assets/projects/spm/integration-test-snippet.jpg"}
                    width={450}
                    height={450}
                    alt="integration-test"
                    className="image-static"
                  />
                  <p className="project-page-image-caption">
                    Integration test snippet using Unittest testing framework
                  </p>
                </div>
                <p className="py-3">
                  Integration tests are slightly more tricky, and it is required
                  that we{" "}
                  <span className="color-text-accent">
                    mock certain API calls and data
                  </span>{" "}
                  and check if the return result from these calls are as
                  expected.
                  <br />
                  <br />
                  However, mocking API calls and data should not be used too
                  much since there is a chance that the API may change in the
                  future, and if the corresponding mock API in the tests are not
                  updated, it may give the developer the{" "}
                  <span className="color-text-accent">
                    &lsquo;illusion&rsquo;
                  </span>{" "}
                  that the new code is healthy, when in reality the tests were
                  not updated to match the change in code.
                </p>
                <p className="py-3 color-text-accent font-bold text-lg">
                  CI/CD
                </p>
                <p className="py-3">
                  Using{" "}
                  <Link
                    href={"https://devcenter.heroku.com/articles/cleardb"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="color-text-accent hover:underline"
                  >
                    Heroku&rsquo;s ClearDB
                  </Link>
                  , we were able to provide an environment that is always
                  updated with the latest build for testing among the
                  developers, as it is connected to the Github repository. This
                  allows developers to work with a &rsquo;single source of
                  truth&rsquo; (database-wise), so that we can be sure that our
                  changes will be working for the rest as well, instead of just
                  using localhost.
                </p>
                <div className="project-page-image-container">
                  <Image
                    src={"/assets/projects/spm/cicd-jira.jpg"}
                    width={600}
                    height={600}
                    alt="cicd-jira"
                    className="image-static"
                  />
                  <p className="project-page-image-caption">
                    Deployment status of database on Jira
                  </p>
                </div>
              </div>
            </div>
            <div className="project-page-section-title" id="learnings">
              {"{* Learnings *}"}
            </div>
            <p className="py-3">
              There were definitely a lot of learnings to be had, having to
              design a project from scratch and execute it using the agile
              software delivery process.
            </p>
            <p className="py-3">
              There are definitely many moving parts in a team, and only now
              that I realize the{" "}
              <span className="color-text-accent">
                challenge of co-ordinating many different moving parts
              </span>{" "}
              in a software-development process.
            </p>
            <p className="py-3">
              I&lsquo;ve also come to realize the importance of testing, to not
              only ensure the{" "}
              <span className="color-text-accent">reliability</span> of code,
              but also serves as a{" "}
              <span className="color-text-accent">form of documentation</span>{" "}
              for others, as well as a tool that can be used to{" "}
              <span className="color-text-accent">
                build up developer confidence
              </span>{" "}
              in their own code.
            </p>
            <div className="project-page-section-title" id="appendix">
              {"{* Appendix *}"}
            </div>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/spm/container-diagram.jpg"}
                width={700}
                height={700}
                alt="container-diagram"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Simple C4 container diagram
              </p>
            </div>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/spm/admin-dashboard.jpg"}
                width={600}
                height={600}
                alt="admin-dashboard"
                className="image-static"
              />
              <p className="project-page-image-caption">Admin dashboard</p>
            </div>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/spm/user-dashboard.jpg"}
                width={600}
                height={600}
                alt="user-dashboard"
                className="image-static"
              />
              <p className="project-page-image-caption">User/staff dashboard</p>
            </div>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/spm/create-role.jpg"}
                width={600}
                height={600}
                alt="create-role"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Role creation stepper form
              </p>
            </div>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/spm/create-lj.jpg"}
                width={600}
                height={600}
                alt="create-lj"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Learning journey creation stepper form
              </p>
            </div>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={{
                "#introduction": "Intro",
                "#requirements": "Requirements",
                "#process": "Process",
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

export default is212;
