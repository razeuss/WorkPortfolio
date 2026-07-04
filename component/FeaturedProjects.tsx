"use client";

import Image, { StaticImageData } from "next/image";
import SlideUp from "@/component/Slideup";

import Anthill from "@/public/designs/anthill.png";
import unibudget from "@/public/designs/unib.png";
import newtabicon from "@/public/icons/newtab.svg";

type ProjectType = "mobile" | "web";

type ProjectLink = {
  show: boolean;
  href?: string;
};

type Project = {
  title: string;
  type: ProjectType;
  category: string;
  image: StaticImageData;
  imageAlt: string;
  tech: string[];
  description: string;
  links: {
    demo?: ProjectLink;
    code?: ProjectLink;
    design?: ProjectLink;
  };
};

const projects: Project[] = [
  {
    title: "UniBudget",
    type: "mobile",
    category: "Design Project",
    image: unibudget,
    imageAlt: "UniBudget mobile app design",
    tech: ["Figma"],
    description:
      "Designed a mobile application prototype in Figma aimed at helping students manage their finances effectively. The app allows users to track income, set spending limits, categorize expenses, and visualize their budget through intuitive charts and summaries.",
    links: {
      demo: {
        show: true,
        href: "https://youtu.be/6396Tqet8HM",
      },
      code: {
        show: false,
      },
      design: {
        show: true,
        href: "https://www.figma.com/design/dpFATJ036dPW76OrtMp0Mk/UniBudget?node-id=0-1&t=tSixzDPLnYMOwujB-1",
      },
    },
  },
  {
    title: "Anthill",
    type: "web",
    category: "Website Project",
    image: Anthill,
    imageAlt: "Anthill website project",
    tech: ["Flask", "Python", "Bootstrap"],
    description:
      "Designed and developed a web-based platform made exclusively for IIT students to connect with employers and find opportunities such as part-time jobs, one-time projects, and on-the-job training offers. It allows students to create profiles, showcase their skills, and apply for job postings, while employers can post job opportunities, review applicants, and manage engagements.",
    links: {
      demo: {
        show: true,
        href: "https://youtu.be/_rOwAOZ62zI?si=8GLDZ-KbxW7VJUj4",
      },
      code: {
        show: true,
        href: "https://github.com/razeuss/AntHill",
      },
      design: {
        show: true,
        href: "https://www.figma.com/design/HHo2LSlDqYcMS93JMyKj05/CCC181?node-id=160-29&t=OEsGBzWeUwGbbrCO-1",
      },
    },
  },
];

const actionLabels = {
  demo: "Demo",
  code: "View Code",
  design: "View Design",
};

function ProjectActions({ project }: { project: Project }) {
  const actionOrder: Array<keyof Project["links"]> = ["demo", "code", "design"];

  const visibleActions = actionOrder.filter((key) => {
    const link = project.links[key];
    return link?.show && link.href;
  });

  if (visibleActions.length === 0) return null;

  return (
    <div className="w-[90%] flex flex-wrap gap-3 justify-center min-[1440px]:justify-start">
      {visibleActions.map((key) => {
        const link = project.links[key];

        if (!link?.href) return null;

        const isPrimary = key === "demo";

        return (
          <a
            key={key}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isPrimary
                ? "inline-flex gap-2 px-3 sm:px-6 py-2 bg-[#333333] text-white font-semibold rounded-[10px] shadow-[0_0px_10px_rgba(0,0,0,0.1)] hover:bg-black duration-100 transition"
                : "inline-block px-3 sm:px-6 py-2 bg-white border border-[#333333] text-[#333333] font-semibold rounded-[10px] shadow-[0_0px_10px_rgba(0,0,0,0.1)] hover:bg-[#333333] hover:text-white duration-100 transition"
            }
          >
            {isPrimary && <Image src={newtabicon} alt="" />}
            <span>{actionLabels[key]}</span>
          </a>
        );
      })}
    </div>
  );
}

function ProjectTech({ tech }: { tech: string[] }) {
  return (
    <div className="flex justify-center min-[1440px]:justify-start text-sm tracking-normal border-[#333333] opacity-50">
      {tech.map((item, index) => (
        <span
          key={item}
          className={
            index === 0
              ? "pr-2"
              : index === tech.length - 1
              ? "px-2"
              : "px-2 border-r border-l"
          }
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-center items-center min-[1440px]:items-start w-full">
      <div className="w-[90%] text-center min-[1440px]:text-left text-[#333333] tracking-tight mb-5">
        <div className="pb-5">
          <span className="text-md sm:text-lg font-medium">
            {project.category}
          </span>

          <div className="font-bold text-2xl sm:text-5xl pb-2">
            {project.title}
          </div>

          <ProjectTech tech={project.tech} />
        </div>

        <p className="font-regular text-md sm:text-xl max-w-150 min-[1440px]:mx-0 mx-auto">
          {project.description}
        </p>
      </div>

      <ProjectActions project={project} />
    </div>
  );
}

function ProjectImage({ project }: { project: Project }) {
  if (project.type === "mobile") {
    return (
      <SlideUp className="flex justify-center min-[1440px]:justify-end">
        <div className="w-75 min-[1440px]:w-100 min-[1920px]:w-150 flex justify-end">
          <Image
            src={project.image}
            alt={project.imageAlt}
            className="object-center"
          />
        </div>
      </SlideUp>
    );
  }

  return (
    <SlideUp className="flex justify-end">
      <Image
        src={project.image}
        alt={project.imageAlt}
        className="object-center w-[1100px] min-[1920px]:w-[1400px]"
      />
    </SlideUp>
  );
}

function ProjectSection({ project }: { project: Project }) {
  if (project.type === "mobile") {
    return (
      <div className="w-[90%] flex flex-col min-[1440px]:flex-row justify-center min-[1440px]:w-[70%]">
        <ProjectImage project={project} />

        <SlideUp className="flex">
          <div className="flex flex-col justify-center items-center min-[1440px]:items-start w-full min-[1920px]:pb-40">
            <ProjectContent project={project} />
          </div>
        </SlideUp>
      </div>
    );
  }

  return (
    <div className="min-[1440px]:w-full w-[90%] flex flex-col min-[1440px]:flex-row justify-between items-center min-[1440px]:pl-[15%]">
      <div className="flex flex-col order-2 min-[1440px]:order-1 justify-center items-center min-[1440px]:items-start w-full min-[1440px]:w-[60%] min-[1920px]:w-[35%] pb-10 min-[1920px]:pb-40">
        <SlideUp className="flex justify-center items-center flex-col">
          <ProjectContent project={project} />
        </SlideUp>
      </div>

      <div className="order-1 min-[1440px]:order-2 flex py-15">
        <ProjectImage project={project} />
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <div className="h-auto flex flex-col justify-center items-center w-full bg-white py-20 sm:py-30">
      <SlideUp className="flex justify-center">
        <div className="w-[90%] min-[1440px]:w-[70%] min-[1440px]:pb-20">
          <div className="font-bold text-3xl sm:text-6xl text-[#333333] tracking-tighter">
            Featured projects.
          </div>
        </div>
      </SlideUp>

      {projects.map((project) => (
        <ProjectSection key={project.title} project={project} />
      ))}
    </div>
  );
}