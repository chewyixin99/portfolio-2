export type ImagePropsType = {
  src: string;
  width: number;
  height: number;
  alt: string;
  imageClassName?: string;
};

export type ExperienceType = {
  title: string;
  subtitle: string;
  bodyText: string;
  dateString: string;
  imgProps: ImagePropsType;
  skills: string[];
  companyLinkedIn: string;
  companyWebsite: string;
  projectUrl: string;
};

export type ProjectType = {
  type: string;
  dateString: string;
  title: string;
  subtitle: string;
  bodyText: string;
  githubUrl: string;
  skills: string[];
  projectUrl: string;
  projectPath: string;
  imgProps: ImagePropsType;
};

export type ParticleOptions = {
  enableLinks?: boolean;
  densityArea?: number;
};
