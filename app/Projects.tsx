"use client";
import Link from "next/link";
import MacIpadIphone from "./MacIpadIphone";
import localFont from "@next/font/local";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  teamSize: number;
  responsibilities: string[];
  githubLinks: string[];
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

const Projects = ({ projects, projectList }: ProjectsProps) => {
  const [currentItem, setCurrentItem] = useState(0);

  const carouselRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: carouselRef,
    // offset: ["start end", "end end"]
  });
  useEffect(() => {
    window.addEventListener("keydown", event => {
      if (event.key === "ArrowRight") {
        viewNextProject();
      }
      if (event.key === "ArrowLeft") {
        viewPreviousProject();
      }
    })
    return () => window.removeEventListener("keydown", () => {})
  }, [])
  scrollXProgress.onChange((value) => {
    const initialItem = 1 / projectList.length;
    const lastItem = initialItem * (projectList.length - 1);
    
    for (let i = 0; i < projectList.length; i++) {
      if (value < initialItem) setCurrentItem(0)
      if (value > initialItem * i && value < initialItem * (i + 1)) {
        setCurrentItem(i)
      }
      if (value > lastItem) setCurrentItem(projectList.length - 1);
    }
  })
  // scrollXProgress.on("scroll", (value) => console.log("scrolled", value))
  // scrollXProgress.on("scroll", (value) => console.log("scrolled", value))
    // if (value < .14) setCurrentItem(0)
    // if (value )
  // );
  const viewNextProject = () => {
    const projectList = document.getElementById("project-list");
    // console.log("view next project", projectList?.clientWidth);
    
    projectList?.scrollBy({
      top: 0,
      left: projectList?.clientWidth,
      behavior: "smooth",
    });
    setCurrentItem(currentItem + 1);
  };
  const viewPreviousProject = () => {
    const projectList = document.getElementById("project-list");
    // console.log("view prev project", projectList?.clientWidth);
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
      <h2 className="text-5xl font-semibold mt-10 mx-auto">{projects.title}</h2>
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
              <h3 className="text-2xl font-semibold mt-10 mx-auto text-center mb-5 lg:mb-10">
                {project.name}
              </h3>
              <Link href={project.slug}>
                <MacIpadIphone
                  mac={project.images?.desktop}
                  iPad={project.images?.tablet}
                  iPhone={project.images?.mobile}
                />
              </Link>
              <Link href={project.slug} className="text-center mt-10">
                Learn more
              </Link>
            </li>
          );
        })}
        <button
          onClick={viewPreviousProject}
          className={`${astroFont.className} ${
            currentItem <= 0 ? "hidden" : "inline"
          } bg-primary z-40 text-white capitalize py-2 px-4 shadow-sm  absolute top-1/2 -translate-y-1/2 left-0`}
        >
          previous
        </button>
        <button
          onClick={viewNextProject}
          className={`${astroFont.className} ${
            currentItem >= projectList.length - 1 ? "hidden" : "inline"
          } bg-primary z-40 text-white capitalize py-2 px-4 shadow-sm inline absolute top-1/2 -translate-y-1/2 right-0`}
        >
          next
        </button>
      </ul>
    </section>
  );
};

export default Projects;
