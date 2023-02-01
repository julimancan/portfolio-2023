"use client";
import Image from "next/image";
import content from "./content.json";
import DescriptionWriter from "./DescriptionWriter";
import Projects from "./Projects";
// import Writer from "./Writer";
import localFont from "@next/font/local";
import About from "./About";

const reversedProjects = [...content.projects.list.reverse()];
const techs: string[] = [];
content.projects.list.map((project) =>
  project.technologies.map((tech) => {
    if (techs.includes(tech)) return;
    techs.push(tech);
  })
);

const astroFont = localFont({
  src: "./fonts/astro-regular.ttf",
  display: "swap",
});
const marchFont = localFont({
  src: "./fonts/march.otf",
  display: "swap",
});

export default function Home() {
  return (
    <main className="bg-black text-white h-screen w-screen snap-y overflow-y-scroll overflow-x-hidden">
      <section className="relative snap-start min-h-[50vh] max-h-[1000px] overflow-hidden w-full py-20  grid place-content-center px-5 md:px-20 z-50 gap-10">
        <div className="h-fit w-fit min-h-full   absolute top-0 left-0">
          <div className="w-full h-full z-30 bg-red-300 absolute opacity-50 left-0 top-0"></div>
          <Image
            src={content.hero.image.url}
            alt={content.hero.image.alt}
            width={667}
            height={1000}
            className={`object-cover min-h-[50vh] max-h-[1000px] object-center w-screen md:object-top shadow-md shadow-gray-800 z-0`}
          />
        </div>
        <h1
          className={`${marchFont.className} text-7xl md:text-8xl text-center relative z-40`}
        >
          Julian Bustos
        </h1>
        <DescriptionWriter />
        <a
          className={`${astroFont.className} relative z-40 text-center bg-primary px-4 py-2 w-fit mx-auto mt-10 rounded-sm shadow-md shadow-gray-800`}
          target={"_blank"}
          href={`mailto:${content.email}`}
        >
          {" "}
          Let's get in touch!
        </a>
      </section>
      <About technologies={techs} />
      <Projects
        projectList={reversedProjects}
        projects={content.projects}
        // windowSize={windowSize}
      />
    </main>
  );
}
