"use client";
import Link from "next/link";
import MacIpadIphone from "./MacIpadIphone";
import localFont from "@next/font/local";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  teamSize: number;
  responsibilities: string[];
  githubLinks?: string[];
  screenshots: string[];
  slug: string;
  images: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
}
type ProjectsProps = {
  projects: {
    title: string;
    list: Project[];
  };
  projectList: Project[];
};

const astroFont = localFont({
  src: "./fonts/astro-regular.ttf",
  display: "swap",
});

const marchFont = localFont({
  src: "./fonts/march.otf",
  display: "swap",
});
const Projects = ({ projects, projectList }: ProjectsProps) => {
  const [currentItem, setCurrentItem] = useState(0);

  const carouselRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: carouselRef,
    // offset: ["start end", "end end"]
  });
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        viewNextProject();
      }
      if (event.key === "ArrowLeft") {
        viewPreviousProject();
      }
    });
    return () => window.removeEventListener("keydown", () => {});
  }, []);


  
  scrollXProgress.onChange((value) => {
    const initialItem = 1 / projectList.length;
    const lastItem = initialItem * (projectList.length - 1);

    for (let i = 0; i < projectList.length; i++) {
      if (value < initialItem) setCurrentItem(0);
      if (value > initialItem * i && value < initialItem * (i + 1)) {
        setCurrentItem(i);
      }
      if (value > lastItem) setCurrentItem(projectList.length - 1);
    }
  });

  const viewNextProject = () => {
    const projectList = document.getElementById("project-list");
    projectList?.scrollBy({
      top: 0,
      left: projectList?.clientWidth,
      behavior: "smooth",
    });
    setCurrentItem(currentItem + 1);
  };
  const viewPreviousProject = () => {
    const projectList = document.getElementById("project-list");
    projectList?.scrollBy({
      top: 0,
      left: -projectList?.clientWidth,
      behavior: "smooth",
    });
    setCurrentItem(currentItem - 1);
  };
  return (
    <section
      id="projects"
      className={`relative snap-start grid bg-black text-white no-scrollbar py-20`}
    >
      <h2
        className={`${marchFont.className} text-5xl font-semibold mt-10 mx-auto`}
      >
        {projects.title}
      </h2>
      <ul
        id="project-list"
        ref={carouselRef}
        className={`flex w-screen h-full snap-x snap-mandatory overflow-x-scroll no-scrollbar`}
      >
        {projectList.map((project, index) => {
          return (
            <li
              key={project.name}
              className={`snap-start min-w-[100vw] mx-4 grid`}
            >
              <h3 className="mx-auto mt-10 mb-5 text-5xl font-semibold text-center lg:mb-10">
                {project.name}
              </h3>
              <Link href={project.slug}>
                <MacIpadIphone
                  mac={project.images?.desktop}
                  iPad={project.images?.tablet}
                  iPhone={project.images?.mobile}
                />
              </Link>
              <Link href={project.slug} className="mt-10 text-center">
                Learn more
              </Link>
            </li>
          );
        })}

        <TbPlayerTrackPrev
          onClick={viewPreviousProject}
          className={`${
            currentItem <= 0 ? "hidden" : "inline"
          } z-40 text-white hover:cursor-pointer hover:animate-pulse text-4xl rounded-full inline absolute top-1/2 -translate-y-1/2 left-2`}
        />

        <TbPlayerTrackNext
          onClick={viewNextProject}
          className={`${
            currentItem >= projectList.length - 1 ? "hidden" : "inline"
          } z-40 text-white hover:cursor-pointer hover:animate-pulse text-4xl rounded-full inline absolute top-1/2 -translate-y-1/2 right-1`}
        />
      </ul>
    </section>
  );
};

export default Projects;
