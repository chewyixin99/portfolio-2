import Link from "next/link";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

type BlogHeadProps = {
  title: string;
  subtitle: string;
  pageType?: string;
  readMins: string;
  dateString: string;
  skills: string[];
  websiteUrl: string;
  linkedinUrl: string;
};

const BlogHead = ({
  title,
  subtitle,
  pageType = "Blog",
  readMins,
  dateString,
  skills,
  websiteUrl,
  linkedinUrl,
}: BlogHeadProps) => {
  const showLinkedIn = linkedinUrl.length !== 0;
  const showWebsite = websiteUrl.length !== 0;
  const showDivider = showLinkedIn && showWebsite;

  return (
    <div>
      {/* Title, subtitle, date, pageType */}
      <h2 className="py-3 title">{title}</h2>
      <h4 className="pb-3 subtitle">{subtitle}</h4>
      <p className="pb-3 text-gray-400">{dateString}</p>
      {/* Website and LinkedIn */}
      <p className="py-3 flex items-center justify-between">
        <span className="flex items-center">
          {showWebsite ? (
            <Link
              className="timeline-link mr-3"
              rel="noopener noreferrer"
              target={"_blank"}
              href={websiteUrl}
            >
              Website
            </Link>
          ) : (
            ""
          )}
          {showDivider ? "|" : ""}
          {showLinkedIn ? (
            <Link
              href={linkedinUrl}
              rel="noopener noreferrer"
              target={"_blank"}
              className="color-text-primary ml-4 text-2xl"
            >
              <AiFillLinkedin />
            </Link>
          ) : (
            ""
          )}
        </span>
      </p>
      {/* Techstack */}
      <p className="pb-3">
        <span className="color-text-primary">Skills:</span> {skills.join(" • ")}
      </p>
      <div className="py-3 text-gray-400 flex items-center justify-between">
        <p>{pageType}</p>
        {/* read minutes */}
        <p>{readMins} min read</p>
      </div>
      {/* hr */}
      <hr className="border-[var(--color-text-accent-light)] dark:border-[var(--color-text-accent-dark)]" />
    </div>
  );
};

export default BlogHead;
