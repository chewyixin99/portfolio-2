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
      return p.projectPath === "/project/personal/smufbs";
    })
    .shift();
  return {
    props: proj,
  };
};

const smufbs = ({
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
          subtitle="Telegram facility booking bot"
          readMins="5"
          dateString={dateString}
          skills={skills}
          githubUrl={githubUrl}
          projectUrl={projectUrl}
        />
        <div className="project-page-grid">
          <div className="project-page-body-col">
            {/* Introduction */}
            <div>
              <div className="project-page-section-title" id="introduction">
                {"{* Introduction *}"}
              </div>
              <p className="py-3">
                This project was created during the after the first wave of the
                Covid-19 period, and the school was starting to open up and
                allow hybrid teaching modes. Facilities were being booked up
                very quickly and most of the time, facilities during popular
                time slots (e.g., 2-5pm) had to be booked 3-4 days in advance.
              </p>
              <p className="py-3">
                Back then, the Facility Booking System (FBS) for SMU does not
                have a mobile-friendly interface yet. Hence, the purpose for
                starting this project was to create a solution for my personal
                use, to automate the booking of a facility every week, booking a
                facility up to two weeks in advance.
              </p>
              <p className="py-3">
                The project is nothing fancy, but serves as a learning
                opportunity for me to work with Telgram&rsquo;s{" "}
                <Link
                  href="https://core.telegram.org/bots/tutorial"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  Botfather
                </Link>{" "}
                API, as well as learn how to webscrape information and automate
                testing using Python&rsquo;s{" "}
                <Link
                  href={"https://selenium-python.readthedocs.io/index.html"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Selenium Webdriver
                </Link>
                .
              </p>
            </div>
            {/* Process */}
            <div>
              <div className="project-page-section-title" id="process">
                {"{* Process *}"}
              </div>
              <p className="py-3">
                Generate an API key using Telegram&rsquo; Botfather API, which
                can be done by following this{" "}
                <Link
                  href="https://tutorial.cytron.io/2021/09/01/how-to-create-a-telegram-bot-get-the-api-key-and-chat-id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  guide
                </Link>{" "}
                here, and then we will have to initialize the bot using this key
                like so -
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/initialize-bot.jpg"}
                  width={700}
                  height={700}
                  alt="initialize-bot"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Initializing bot variable code snippet
                </p>
              </div>
              <p className="py-3">
                Next, in order to store user inputs, we create a simple User
                class like so -
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/user-class.jpg"}
                  width={450}
                  height={450}
                  alt="user-class"
                  className="image-static"
                />
                <p className="project-page-image-caption">User class</p>
              </div>
              <p className="py-3">
                In order to target the various form elements within the
                interface, a lot of{" "}
                <span className="color-text-accent">
                  inspecting of HTML elements
                </span>{" "}
                had to be done, which was entirely new to me as I have little to
                no experience in web development and debugging.
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/login-error.jpg"}
                  width={400}
                  height={400}
                  alt="login-error"
                  className="image-static"
                />
                <p className="project-page-image-caption">Login error text</p>
              </div>
              <p className="py-3">
                The first challenge here was to key into telegram the user
                details in order to access the system. Once the user has
                confirmed their details, the script will automatically open a
                new window and do some validation checks before proceeding -
                which looks something like that.
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/login-validation.jpg"}
                  width={700}
                  height={700}
                  alt="login-validation"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Login validation code snippet
                </p>
              </div>
              <p className="py-3">
                After logging in, the interface looked a little something like
                this -
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/fbs-interface.jpg"}
                  width={700}
                  height={700}
                  alt="fbs-interface"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Interface for SMU FBS
                </p>
              </div>
              <p className="py-3">
                Subsequently, most of the script will use Selenium&rsquo;s{" "}
                <Link
                  href="https://selenium-python.readthedocs.io/locating-elements.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  find_element_by_x
                </Link>{" "}
                method to locate elements in a page in order to proceed to the
                next step in booking.
              </p>
              <p className="py-3">
                Another challenge which blocked me for a while was the use of{" "}
                <Link
                  href="https://www.w3schools.com/html/html_iframe.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  inline frames (iframes)
                </Link>
                , which prevents the script from targeting an element and
                &lsquo;clicking&rsquo; on it properly. You can read more{" "}
                <Link
                  href="https://www.guru99.com/handling-iframes-selenium.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  here
                </Link>{" "}
                on how to handle iframes when using Selenium, which was what I
                did as well.
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/iframe-example.jpg"}
                  width={350}
                  height={350}
                  alt="iframe-example"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Example of an iFrame
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/iframe-example-code.jpg"}
                  width={700}
                  height={700}
                  alt="iframe-example-code"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Handling iFrame using &lsquo;switch_to&rsquo; method
                </p>
              </div>
              <p className="py-3">
                Most of the booking process can be completed by repeating the
                same steps again
                <span className="project-description-list-item">
                  Obtaining user input from telegram
                </span>
                <span className="project-description-list-item">
                  Locating the HTML element on the site
                </span>
                <span className="project-description-list-item">
                  Selecting / filling the form with user input
                </span>
                <span className="project-description-list-item">
                  Proceeding to the next step and repeat
                </span>
              </p>
              <p className="py-3">
                Another caveat of using an automation testing suite like
                Selenium is that there may be multiple instances where the
                software is executing faster than the browser can load, which
                may result in a{" "}
                <span className="color-text-accent">
                  <em>Element not found error</em>
                </span>{" "}
                or something similar. There are multiple ways to handle this
                issue, such as using{" "}
                <span className="color-text-accent">exception handling</span>,{" "}
                <Link
                  href="https://www.selenium.dev/documentation/webdriver/waits/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  explicit and implicit waits
                </Link>
                , or Python&rsquo;s{" "}
                <Link
                  href="https://www.programiz.com/python-programming/time/sleep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  time.sleep()
                </Link>{" "}
                method. More on a possible solution can be read{" "}
                <Link
                  href="https://stackoverflow.com/questions/38800473/element-not-found-error-in-selenium-webdriver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  here
                </Link>
                .
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/exception-handling-code.jpg"}
                  width={700}
                  height={700}
                  alt="exception-handling-code"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Handling exceptions code snippet
                </p>
              </div>
            </div>
            {/* Conclusion */}
            <div>
              <div className="project-page-section-title" id="conclusion">
                {"{* Conclusion *}"}
              </div>
              <p className="py-3">
                This was a really interesting project and I was able to learn a
                great deal of things by doing it, like
                <span className="project-description-list-item">
                  Using callback functions
                </span>
                <span className="project-description-list-item">
                  Exception handling
                </span>
                <span className="project-description-list-item">
                  Inspecting HTML elements and debugging
                </span>
                <span className="project-description-list-item">
                  Storing and passing user inputs to the next step
                </span>
                <span className="project-description-list-item">
                  Input and form validation
                </span>
              </p>
              <p className="py-3">
                Unfortunately, due to{" "}
                <span className="color-text-accent">
                  privacy and security concerns
                </span>
                , I was not able to allow others to use this application since
                users were required to input sensitive information such as their
                password, in order to make use of the application.
              </p>
              <p className="py-3">
                Nevertheless, it was a good learning opportunity for me to learn
                some of the key concepts in web development . While there are
                definitely better way to do things, it was not a priority at
                that point in time, so please do not be too critical of the
                script!😬😬
              </p>
              <p className="py-3">
                Code can be found{" "}
                <Link
                  href="https://github.com/chewyixin99/selenium-telebot-booking-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  here
                </Link>
                .
              </p>
            </div>
            {/* Appendix */}
            <div>
              <div className="project-page-section-title" id="appendix">
                {"{* Appendix *}"}
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/calendar-input.jpg"}
                  width={450}
                  height={450}
                  alt="calendar-input"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Calendar user input
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/time-input.jpg"}
                  width={450}
                  height={450}
                  alt="time-input"
                  className="image-static"
                />
                <p className="project-page-image-caption">Time user input</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/fbsbot/summary-details.jpg"}
                  width={700}
                  height={700}
                  alt="summary-details"
                  className="image-static"
                />
                <p className="project-page-image-caption">Summary details</p>
              </div>
            </div>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={{
                "#introduction": "Intro",
                "#process": "Process",
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

export default smufbs;
