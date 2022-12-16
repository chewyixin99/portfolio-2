import React from "react";
import { experiences } from "../../data/constants";
import { ExperienceType } from "../../data/types";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
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
  const showLinkedIn = companyLinkedIn.length !== 0;
  const showWebsite = companyWebsite.length !== 0;
  const showDivider = showLinkedIn && showWebsite;
  return (
    <div className="project-page-outer-container">
      <div className="project-page-inner-container">
        {/* Title, subtitle, date */}
        <div>
          <h2 className="py-3 title">{title}</h2>
          <h4 className="pb-3 subtitle">My time at the company as an intern</h4>
          <p className="pb-3">{dateString}</p>
          {/* Website and LinkedIn */}
          <p className="py-3 flex items-center">
            {showWebsite ? (
              <Link
                className="timeline-link mr-3"
                rel="noopener noreferrer"
                target={"_blank"}
                href={companyWebsite}
              >
                Website
              </Link>
            ) : (
              ""
            )}
            {showDivider ? "|" : ""}
            {showLinkedIn ? (
              <Link
                href={companyLinkedIn}
                rel="noopener noreferrer"
                target={"_blank"}
                className={`color-text-primary ${
                  showWebsite ? "ml-4" : ""
                } text-2xl`}
              >
                <AiFillLinkedin />
              </Link>
            ) : (
              ""
            )}
          </p>
          {/* Techstack */}
          <p className="py-3">
            <span className="color-text-primary">Technologies used:</span>{" "}
            {skills.join(" • ")}
          </p>
        </div>
        <hr className="border-[var(--color-text-accent-light)] dark:border-[var(--color-text-accent-dark)]" />
        {/* Description paragraphs */}
        <div>
          <p className="py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="py-2 flex items-center justify-center">
            <Image
              src={"/assets/experience/govtech/govtech.png"}
              width={200}
              height={200}
              alt="govtech"
            />
          </div>
          <p className="py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="py-2 flex items-center justify-center">
            <Image
              src={"/assets/experience/govtech/govtech.png"}
              width={200}
              height={200}
              alt="govtech"
            />
          </div>
          <p className="py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="py-2 flex items-center justify-center">
            <Image
              src={"/assets/experience/govtech/govtech.png"}
              width={200}
              height={200}
              alt="govtech"
            />
          </div>
          <p className="py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default govtech;
