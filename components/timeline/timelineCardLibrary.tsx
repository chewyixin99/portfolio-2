import Link from "next/link";
import { AiFillLinkedin, AiOutlineArrowRight } from "react-icons/ai";

export const renderSkills = (skills: string[], showSkills: boolean) => {
  if (!showSkills) {
    return "";
  }
  const skillsString = skills.join(" • ");
  return (
    <div className="pt-4">
      <span className="color-text-primary">Stack:&nbsp;&nbsp;</span>{" "}
      {skillsString}
    </div>
  );
};

export const renderWebsite = (siteUrl: string, showSite: boolean) => {
  if (!showSite) {
    return "";
  }
  return (
    <Link
      className="timeline-link"
      rel="noopener noreferrer"
      target={"_blank"}
      href={siteUrl}
    >
      Website
    </Link>
  );
};

export const renderLinkedIn = (linkedInUrl: string, showLinkedIn: boolean) => {
  if (!showLinkedIn) {
    return "";
  }
  return (
    <Link
      href={linkedInUrl}
      rel="noopener noreferrer"
      target={"_blank"}
      className="color-text-primary"
    >
      <AiFillLinkedin />
    </Link>
  );
};

export const renderProjectUrl = (projectUrl: string, showProjectUrl: boolean) => {
  if (!showProjectUrl) {
    return "";
  }
  return (
    <Link
      href={projectUrl}
      rel="noopener noreferrer"
      target={"_blank"}
      className="timeline-link"
    >
      <div className="flex items-center">
        <span>Read more&nbsp;</span>
        <span>
          <AiOutlineArrowRight />
        </span>
      </div>
    </Link>
  );
};
