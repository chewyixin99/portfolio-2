import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";

export const renderSkills = (skills: string[], showSkills: boolean) => {
  if (!showSkills) {
    return "";
  }
  const skillsString = skills.join(" • ");
  return (
    <div>
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

export const renderGithub = (gitHubUrl: string, showGitHub: boolean) => {
  if (!showGitHub) {
    return "";
  }
  return (
    <Link
      href={gitHubUrl}
      rel="noopener noreferrer"
      target={"_blank"}
      className="color-text-primary"
    >
      <div className="flex justify-between items-center">
        <div className="pr-2">Source code</div>
        <div className="text-lg">
          <AiFillGithub />
        </div>
      </div>
    </Link>
  );
};

// project path is the url to deployed projects
export const renderProjectPath = (
  projectUrl: string,
  showProjectUrl: boolean,
  target: string = "_blank"
) => {
  if (!showProjectUrl) {
    return "";
  }
  return (
    <Link
      href={projectUrl}
      rel="noopener noreferrer"
      target={target}
      className="timeline-link"
    >
      <div className="flex items-center">
        <span className="pr-2">Read more</span>
        <span>
          <AiOutlineArrowRight />
        </span>
      </div>
    </Link>
  );
};
