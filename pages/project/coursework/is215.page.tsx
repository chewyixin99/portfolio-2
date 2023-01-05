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
      return p.projectPath === "/project/coursework/is215";
    })
    .shift();
  return {
    props: proj,
  };
};

const is215 = ({
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
          subtitle="Digital transformation strategy"
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
              {/* Description paragraphs */}
              <p className="py-3">
                This project was done as part of a module IS215 - Digital
                Business, Technologies and Transformation (DBTT) in SMU.
              </p>
              <p className="py-3">
                The main outcome of this project was to allow students to
                formulate a digital transformation strategy on an existing
                company or organization, or a new initiative with a societal or
                national impact.
              </p>
              <p className="py-3">
                We chose{" "}
                <Link
                  href="https://snipavenue.com/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  Snip Avenue
                </Link>
                , a hair salon franchise as our case study for this project,
                aiming to forumulate a digital transformation strategy for the
                organization with the help of analytics, web, and mobile
                technology.
              </p>
              <p className="py-3">
                Relevant links can be accesed here:
                <span className="project-description-list-item">
                  <Link
                    href="https://www.figma.com/proto/h26oicyy3vDeKsy5dzOqcX/Snip-Avenue?page-id=0%3A1&node-id=8%3A346&viewport=241%2C48%2C0.35&scaling=scale-down&starting-point-node-id=2%3A171&hide-ui=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Figma prototype
                  </Link>
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://lohkokwee-snip-avenue-dashboard-app-9k6amo.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Analytics dashboard application deployed on Streamlit
                  </Link>
                  : Dashboard analytics are based on mock data, and acts only as
                  a proof of concept.
                </span>
                <span className="project-description-list-item">
                  <Link
                    href="https://github.com/lohkokwee/Snip-Avenue-Dashboard#table-of-contents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Analytics dashboard source code
                  </Link>
                </span>
              </p>
            </div>
            {/* Analysis */}
            <div>
              <div className="project-page-section-title" id="analysis">
                {"{* Analysis *}"}
              </div>
              <p className="py-3">
                Analysis of the organization was mainly done using the{" "}
                <Link
                  href="https://www.businessnewsdaily.com/4245-swot-analysis.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Strengths, weaknesses, opportunities and threats (SWOT)
                  analysis
                </Link>{" "}
                framework and{" "}
                <Link
                  href="https://www.business-to-you.com/porters-five-forces/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Michael Porter&rsquo;s Five Forces
                </Link>
                .
              </p>
              <p className="paragraph-title">SWOT Analysis</p>
              <p className="pb-3">
                The SWOT analysis helps organizations develop a full awareness
                of all the factors involved in making a business decision. The
                following is our (simple) SWOT analysis on Snip Avenue.
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/swot.jpg"}
                  width={550}
                  height={550}
                  alt="swot"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  SWOT Analysis for Snip Avenue
                </p>
              </div>
              <p className="py-3">
                Relative to other competitors, Snip Avenue has the edge by
                having a more established name, as well as having more
                resources. However, it trails in areas such as having poor
                customer service and outdated business processes.
              </p>
              <p className="paragraph-title">Porter&rsquo;s Five Forces</p>
              <p className="pb-3">
                Michael Porter&rsquo;s Five forces are namely
                <span className="project-description-list-item">
                  Rivalry among existing competitors
                </span>
                <span className="project-description-list-item">
                  Threat of new entrants
                </span>
                <span className="project-description-list-item">
                  Bargaining power of suppliers
                </span>
                <span className="project-description-list-item">
                  Bargaining power of buyers
                </span>
                <span className="project-description-list-item">
                  Threat of substitute products
                </span>
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/five-forces-porter-model.jpg"}
                  width={550}
                  height={550}
                  alt="five-forces-porter-model"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Porter Five Forces Model. Taken from{" "}
                  <Link
                    href="https://www.business-to-you.com/porters-five-forces/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    business-to-you
                  </Link>
                </p>
              </div>
              <p className="pt-3">
                We narrowed our analysis to two of the five forces, namely -{" "}
              </p>
              <p className="pt-3 color-text-accent">Competitive rivalry</p>
              <p className="py-3">
                In the budget range, there are some competitors, although Snip
                Avenue easily takes the lowest price. Examples of competitors
                include{" "}
                <Link
                  href="https://ecoin.sg/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  ecoin.sg
                </Link>{" "}
                and{" "}
                <Link
                  href="https://sch.kimage.com.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Kimage hairdressing school
                </Link>
                , among many others.
              </p>
              <p className="pt-3 color-text-accent">Power of buyers</p>
              <p className="py-3">
                Power of buyers is high among fuss-free customers who are
                looking for cheap cuts. Substitutability of haircut service is
                high, and switching costs are low.
              </p>
              <p className="paragraph-title">Further analysis</p>
              <p className="pb-3">
                Competitors were adopting an{" "}
                <Link
                  href="https://www.salesforce.com/eu/blog/2020/12/omnichannel-strategy-benefits.html#:~:text=What%20is%20an%20omnichannel%20strategy,without%20encountering%20any%20dead%20ends."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  omnichannel strategy
                </Link>
                , differentiating themselves from the rest mainly using{" "}
                <span className="color-text-accent">custom applications</span>,
                which were packed with features for convenience and customer
                lock-in.
              </p>
              <p className="py-3">
                At it&rsquo;s core, Snip Avenue was lagging behind due to
                it&rsquo;s inefficient processes, which wre largely manual and
                paper-based. There was a lack of{" "}
                <span className="color-text-accent">
                  franchise-wide standardization
                </span>
                , which led to inconsistencies and longer time taken to complete
                a transaction, which resulted in a{" "}
                <span className="color-text-accent">
                  negative customer experience
                </span>
                .
              </p>
            </div>
            {/* Solution */}
            <div>
              <div className="project-page-section-title" id="solution">
                {"{* Proposed solution *}"}
              </div>
              <p className="py-3">
                Our team&rsquo;s proposed solution centrals around two key
                actions - developing and integrating an application into the
                business process, and adopting a data-driven decision making
                approach.
              </p>
              <p className="paragraph-title">Application</p>
              <p className="pb-3">
                Since the focus of this module is not on development, only a
                prototype was created. The link for the figma prototype can be
                found{" "}
                <Link
                  href="https://www.figma.com/proto/h26oicyy3vDeKsy5dzOqcX/Snip-Avenue?page-id=0%3A1&node-id=8%3A346&viewport=241%2C48%2C0.35&scaling=scale-down&starting-point-node-id=2%3A171&hide-ui=1"
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
                  src={"/assets/projects/dbtt/prototype-poster.jpg"}
                  width={800}
                  height={800}
                  alt="prototype-poster"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Application prototype poster
                </p>
              </div>
              <p className="py-3">
                More infographics on the application prototype can be found at
                the{" "}
                <Link href="#appendix" className="link">
                  appendix
                </Link>{" "}
                down below.
              </p>
              <p className="py-3">
                The main motivation for developing an application was to create
                a smoother and hassle-free experience for customers. This also
                allows the company to move away from paper-based processes
                digitizing their records and data, and digitalizing their
                appointment booking process.
              </p>
              <p className="py-3">
                However, to proceed with this implementation, it will require
                efforts to ensure customer and employee buy-in , and of course,
                there is also the cost of implementation and maintenance of the
                application.
              </p>
              <p className="paragraph-title">Analytics</p>
              <p className="py-3">
                We also proposed an analytics solution so that the company can
                adopt a more data-driven approach when making business
                decisions. Most of the work done here were by my teammates,{" "}
                <Link
                  href="https://github.com/lohkokwee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Kok Wee
                </Link>{" "}
                and{" "}
                <Link
                  href="https://github.com/hellobiondi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Biondi
                </Link>
                .
              </p>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/analytics-poster.jpg"}
                  width={800}
                  height={800}
                  alt="analytics-poster"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Analytics prototype poster
                </p>
              </div>
              <p className="py-3">
                Again, this was more of a proof-of-concept prototype, and hence
                the data used for this application were mocked up using excel.
              </p>
              <p className="py-3">
                Within the analytics prototype, we also have a simple logistic
                regression model implemented to predict whether a customer will
                repeat a transaction based on certain features input within the
                model, such as
                <span className="project-description-list-item">
                  Wait time (in mins)
                </span>
                <span className="project-description-list-item">
                  Process duration (in mins)
                </span>
                <span className="project-description-list-item">
                  Queue length: number of people in the queue when customer gets
                  their queue ticket
                </span>
                <span className="project-description-list-item">
                  Rating: customer&rsquo;s rating on the transaction
                </span>
                <span className="project-description-list-item">
                  Price paid for service (in $)
                </span>
              </p>
              <p className="py-3">
                More infographics on the analytics application prototype can be
                found at the{" "}
                <Link href="#appendix" className="link">
                  appendix
                </Link>{" "}
                down below.
              </p>
            </div>
            {/* Conclusion */}
            <div>
              <div className="project-page-section-title" id="conclusion">
                {"{* Conclusion *}"}
              </div>
              <p className="py-3">
                Overall, really insightful module and it definitely{" "}
                <span className="color-text-accent">
                  achieved it&rsquo;s learning outcomes of
                </span>
                <span className="project-description-list-item">
                  Evaluating opportunities and challenges of different digital
                  technologies
                </span>
                <span className="project-description-list-item">
                  Analysing digital transformation case studies
                </span>
                <span className="project-description-list-item">
                  Ideate how an existing organization can become digital, and
                  formulate a digital transformation strategy accordingly
                </span>
              </p>
              <p className="p-y">
                Personally, I tend to lean towards modules that are more
                technical and development-based, but this module really shows me
                how an end-to-end digital transformation strategy would look
                like,{" "}
                <span className="color-text-accent">
                  focusing not just on technical solutions, but also business
                  considerations and design
                </span>
                .
              </p>
              <p className="py-3">
                This really wraps things up nicely and I was able to have a
                clearer, fuller picture on what goes on in a business, and would
                definitely help me gain an understanding on the{" "}
                <span className="color-text-accent">
                  how&rsquo;s and why&rsquo;s
                </span>{" "}
                that goes into developing a product for a business.
              </p>
            </div>
            {/* Appendix */}
            <div>
              <div className="project-page-section-title" id="appendix">
                {"{* Appendix *}"}
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/login.jpg"}
                  width={200}
                  height={200}
                  alt="login"
                  className="image-static"
                />
                <p className="project-page-image-caption">Login screen</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/homepage.jpg"}
                  width={200}
                  height={200}
                  alt="homepage"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Home / landing page
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/locations.jpg"}
                  width={200}
                  height={200}
                  alt="locations"
                  className="image-static"
                />
                <p className="project-page-image-caption">Locations</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/location-preview.jpg"}
                  width={200}
                  height={200}
                  alt="location-preview"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Specific location page
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/bookings.jpg"}
                  width={200}
                  height={200}
                  alt="bookings"
                  className="image-static"
                />
                <p className="project-page-image-caption">My bookings page</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/queue-ticket.jpg"}
                  width={200}
                  height={200}
                  alt="queue-ticket"
                  className="image-static"
                />
                <p className="project-page-image-caption">Queue ticket page</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/services.jpg"}
                  width={200}
                  height={200}
                  alt="services"
                  className="image-static"
                />
                <p className="project-page-image-caption">Services page</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/loyalty-program.jpg"}
                  width={200}
                  height={200}
                  alt="loyalty-program"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Loyalty program page
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/profile-page.jpg"}
                  width={200}
                  height={200}
                  alt="profile-page"
                  className="image-static"
                />
                <p className="project-page-image-caption">Profile page</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/analytics-home.jpg"}
                  width={700}
                  height={700}
                  alt="analytics-home"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Analytics application homepage
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/service-dashboard.jpg"}
                  width={700}
                  height={700}
                  alt="service-dashboard"
                  className="image-static"
                />
                <p className="project-page-image-caption">Service dashboard</p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/customer-retention-model.jpg"}
                  width={700}
                  height={700}
                  alt="customer-retention-model"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Customer retention model
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/geospatial-dashboard.jpg"}
                  width={700}
                  height={700}
                  alt="geospatial-dashboard"
                  className="image-static"
                />
                <p className="project-page-image-caption">
                  Geospatial dashboard
                </p>
              </div>
              <div className="project-page-image-container">
                <Image
                  src={"/assets/projects/dbtt/data-information.jpg"}
                  width={700}
                  height={700}
                  alt="data-information"
                  className="image-static"
                />
                <p className="project-page-image-caption">Data information</p>
              </div>
            </div>
          </div>
          <div className="project-page-sidebar-col">
            <StickySidebar
              links={{
                "#introduction": "Intro",
                "#analysis": "Analysis",
                "#solution": "Solution",
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

export default is215;
