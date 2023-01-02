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
      return p.projectPath === "/project/coursework/is213";
    })
    .shift();
  return {
    props: proj,
  };
};

const is213 = ({
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
          subtitle="Exploring microservce architecture"
          readMins="7"
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
              This project was done as part of a requirement for the module
              IS213 - Enterprise Solution Development (ESD). It&rsquo;s main
              focus was to facilitate the learning of concepts such as the{" "}
              <Link
                href="https://microservices.io/patterns/microservices.html"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                microservices
              </Link>{" "}
              and{" "}
              <Link
                href="https://medium.com/@SoftwareDevelopmentCommunity/what-is-service-oriented-architecture-fa894d11a7ec"
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                service oriented architecture (SOA)
              </Link>
              ,{" "}
              <Link
                href="https://aws.amazon.com/what-is/containerization/#:~:text=Containerization%20is%20a%20software%20deployment,matched%20your%20machine's%20operating%20system."
                target={"_blank"}
                rel="noopener noreferrer"
                className="link"
              >
                containerization
              </Link>
              , writing, and documenting{" "}
              <Link
                href="https://aws.amazon.com/what-is/restful-api/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="link"
              >
                Representational State Transfer (REST) APIs
              </Link>
            </p>
            <div className="project-page-section-title" id="requirements">
              {"{* Requirements *}"}
            </div>
            <p className="py-3">
              The key learning outcome of the project was for the team to build
              an enterprise solution that is based on the{" "}
              <Link
                href="https://microservices.io/patterns/microservices.html"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                microservice architecture
              </Link>{" "}
              for a business scenario.
            </p>
            <p className="py-3">
              Other requirements include:
              <span className="project-description-list-item">
                Using a minimum of one external service or API
              </span>
              <span className="project-description-list-item">
                Use{" "}
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  HTTP
                </Link>{" "}
                communication between some microservices
              </span>
              <span className="project-description-list-item">
                Use{" "}
                <Link
                  href="https://www.rabbitmq.com/tutorials/amqp-concepts.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  AMQP
                </Link>{" "}
                based communication between some microservices
              </span>
              <span className="project-description-list-item">
                Create, read, update, delete (CRUD) functionalities for
                microservices
              </span>
              <span className="project-description-list-item">
                Have at least one web-based Graphical User Interface (GUI)
              </span>
              <span className="project-description-list-item">
                Usage of{" "}
                <Link
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Docker
                </Link>{" "}
                and{" "}
                <Link
                  href="https://docs.docker.com/get-started/08_using_compose/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Docker Compose
                </Link>
              </span>
              <span className="project-description-list-item">
                Using{" "}
                <Link
                  href="https://www.json.org/json-en.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  JavaScript Object Notation (JSON)
                </Link>{" "}
                data in some of the microservices
              </span>
            </p>
            <p className="paragraph-title">Business scenario</p>
            <p className="pb-3">
              The central problem that my team tackled was that hawker centers
              are always packed with long queues during peak hours, with
              customers having to stand and wait after ordering.
            </p>
            <p className="paragraph-title">Solution</p>
            <p className="pb-3">
              The team&rsquo;s solution was to develop a web aplpication that
              can replace both the manual ordering and payment processes, aiming
              to reduce the congestion and hassle experienced in hawkers during
              peak hours.
            </p>
            <p className="paragraph-title">Tech stack</p>
            <p className="pb-3">
              Our main technical stack and their use cases
              <span className="project-description-list-item">
                <Link
                  href="https://vuejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  VueJS
                </Link>
                : Main frontend framework for coding out the GUI
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Python
                </Link>{" "}
                and{" "}
                <Link
                  href="https://flask.palletsprojects.com/en/2.2.x/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Flask
                </Link>
                : Writing backend RESTful API routes and services
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Docker
                </Link>
                : Used for containerizing each service
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://docs.konghq.com/gateway/latest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Kong API Gateway
                </Link>
                : Used for managing, configuring, and routing requests to our
                APIs
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  MySQL
                </Link>
                : Backend database for storing data
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Tailwind CSS
                </Link>
                : CSS Framework for styling the user interface
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://www.rabbitmq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  RabbitMQ
                </Link>
                : Open source message broker that supports AMQP
              </span>
              <span className="project-description-list-item">
                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Twilio
                </Link>
                : External API used for it&rsquo;s messaging capabilities
              </span>
            </p>
            <div className="project-page-section-title" id="overview">
              {"{* Overview *}"}
            </div>
            <p className="paragraph-title">User interface</p>
            <p className="pb-3">
              A user is synonymous with a customer, and the main action a user
              performs is to browse the hawkers and menu, followed by placing an
              order.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/esd/user-design.png"}
                width={800}
                height={800}
                alt="user-design"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Microservices design (user view)
              </p>
            </div>
            <p className="pb-3">
              Functionalities include:
              <span className="project-description-list-item">
                Update user details such as email and password
              </span>
              <span className="project-description-list-item">
                Browse hawkers by categories i.e., halal or vegetarian
              </span>
              <span className="project-description-list-item">
                View a food item details
              </span>
              <span className="project-description-list-item">
                Update wallet to withdraw or top up money
              </span>
              <span className="project-description-list-item">
                Placing an order and subsequently viewing the status of the
                order
              </span>
            </p>
            <p className="paragraph-title">Hawker interface</p>
            <p className="pb-3">
              A hawker is a tenant in a hawker center, and the main actions the
              hawker performs include accepting, rejecting, and completing food
              orders, updating their food menu, and viewing all orders and order
              history.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/esd/hawker-design.png"}
                width={800}
                height={800}
                alt="hawker-design"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Microservices design (hawker view)
              </p>
            </div>
            <p className="paragraph-title">Process flow</p>
            <p className="pb-3">
              Let&rsquo;s go through a possible scenario of placing an order.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/esd/place-order.jpg"}
                width={800}
                height={800}
                alt="place-order"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Process when a user places an order
              </p>
            </div>
            <p className="py-3">
              When a customer places an order, the following steps happen:
              <span className="project-description-list-item">
                Customer uses the UI to invoke the hawker service, making a HTTP
                GET request. In this case, a GET request to{" "}
                <em>/hawker/halal/1</em> was made to get all hawkers that are
                halal-certified, illustrated by steps 1 and 2 on the left
                diagram.
              </span>
              <span className="project-description-list-item">
                Customer then chooses a hawker to order from, and then add items
                to a cart.
              </span>
              <span className="project-description-list-item">
                Customer invokes the <em>Place Order</em> microservice by making
                a POST request, which orchestrates the &lsquo;place order&rsquo;
                process.
              </span>
              <span className="project-description-list-item">
                A <span className="color-text-accent">validation check</span> is
                made to ensure that the customer has enough money in the wallet.
                The process ends if there is insufficient balance.
              </span>
              <span className="project-description-list-item">
                If there is sufficient balance, an order, as well as a escrow
                record is created. Money is deducted from the customer&rsquo;s
                wallet, and this amount is held in escrow.
              </span>
              <span className="project-description-list-item">
                If there are zero errors, the order is successfully created, and
                the customer get&rsquo;s an SMS notification confirming their
                order.
              </span>
            </p>
            <p className="py-3">
              Subsequently, a hawker will receive the order and can choose to
              either accept or reject the order.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/esd/hawker-order.jpg"}
                width={250}
                height={250}
                alt="hawker-order"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Hawker order management interface
              </p>
            </div>
            <div className="project-page-section-title" id="learnings">
              {"{* Learnings *}"}
            </div>
            <p className="py-3">
              Main takeaway for this project was definitely learning how to{" "}
              <span className="color-text-accent">write and document APIs</span>
              , while designing a solution based on the{" "}
              <Link
                href="https://microservices.io/patterns/microservices.html"
                target={"_blank"}
                rel="noopener noreferrer"
                className="link"
              >
                microservices
              </Link>{" "}
              architecture, which allows services to be loosely coupled and
              independently deployable.
            </p>
            <p className="py-3">
              Working in a collaborative environment has highlighted to me the{" "}
              <span className="color-text-accent">
                importance of proper documentation and standardization
              </span>{" "}
              across the board, reducing the time and resources spent on tasks
              such as figuring out how the code works, or debugging a certain
              error that can be easily solved with proper documentation.
            </p>
            <p className="py-3">
              Another big takeaway was making use of containerization platform
              such as{" "}
              <Link
                href="https://www.docker.com/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="link"
              >
                Docker
              </Link>
              , isolating applications so that developers do not have to deal
              with dependency and configuration issues which are pre-defined
              within{" "}
              <Link
                href="https://docs.docker.com/engine/reference/builder/"
                target="_blank"
                rel="noopener noreferrer"
                className="link italic"
              >
                Dockerfiles
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.redhat.com/en/topics/automation/what-is-yaml#:~:text=YAML%20is%20a%20data%20serialization,is%20for%20data%2C%20not%20documents."
                target={"_blank"}
                rel="noopener noreferrer"
                className="link italic"
              >
                yaml
              </Link>{" "}
              files.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/esd/dockerfile-example.jpg"}
                width={450}
                height={450}
                alt="dockerfile-example"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Dockerfile code snippet
              </p>
            </div>
            <p className="py-3">
              With the implementation of microservices, comes the usage of an
              API gateway, which in this case we used{" "}
              <Link
                href="https://github.com/Kong/kong"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Kong
              </Link>{" "}
              as it has an accompanying Graphical User Interface (GUI) which
              made it simple and easy to configure and manage our services.
              However, due to the steep learning curve and a lack of time, we
              were unable to dive too deep and fully utilise the{" "}
              <Link
                href="https://www.techtarget.com/whatis/definition/API-gateway-application-programming-interface-gateway#:~:text=An%20API%20gateway's%20primary%20benefit,Simplify%20services%20delivery."
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                benefits of having an API gateway
              </Link>{" "}
              in our application, but nevertheless, the exposure to such a
              software is a learning point in itself.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/esd/konga-gui.jpg"}
                width={550}
                height={550}
                alt="konga-gui"
                className="image-static"
              />
              <p className="project-page-image-caption">
                Konga GUI for managing services on localhost:1337
              </p>
            </div>
            <p className="py-3">
              Finally, this project also allowed me to learn a little more about
              the{" "}
              <Link
                href="https://www.cloudamqp.com/blog/what-is-amqp-and-why-is-it-used-in-rabbitmq.html"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Advanced Message Queuing Protocol (AMQP)
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.rabbitmq.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                RabbitMQ (message broker)
              </Link>
              , but again, due to the lack of time and low priority, we were
              unable to explore and fully maximise the benefits of these
              technologies.
            </p>
            <div className="project-page-image-container">
              <Image
                src={"/assets/projects/esd/rabbitmq-gui.jpg"}
                width={550}
                height={550}
                alt="rabbitmq-gui"
                className="image-static"
              />
              <p className="project-page-image-caption">
                RabbitMQ GUI on localhost:15672
              </p>
            </div>
            <div className="project-page-section-title" id="conclusion">
              {"{* Conclusion *}"}
            </div>
            <p className="py-3">
              I thoroughly enjoyed and took away many lessons from this module,
              and it is without a doubt one of my favorite module in SMU.
              However, for a simple project such as this, making use of
              microservices may be a little bit of an overkill and I doubt I
              will be applying many concepts learnt here on other projects. But
              hey, it doesn&rsquo;t hurt to learn new things, does it? 😄
            </p>
            <p className="py-3">
              This is just a introductory module to the world of backend
              development and hosting applications, just to get our feet wet. I
              know that the project is (in many ways) neither perfect nor
              well-written, so do take this post as just a personal reflection
              and documentation of my journey!
            </p>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={{
                "#introduction": "Intro",
                "#requirements": "Requirements",
                "#overview": "Overview",
                "#learnings": "Learnings",
                "#conclusion": "Conclusion",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default is213;
