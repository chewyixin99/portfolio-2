import React from "react";
import { experiences } from "../../data/constants";
import { ExperienceType } from "../../data/types";
import Image from "next/image";
import BlogHead from "../../components/pages/BlogHead";

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
