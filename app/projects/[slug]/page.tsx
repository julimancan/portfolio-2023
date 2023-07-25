"use client";
import MacIpadIphone from "../../MacIpadIphone";
import content from "../../content.json";
import localFont from "@next/font/local";
import { useRouter } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

const marchFont = localFont({
  src: "../../fonts/march.otf",
  display: "swap",
});

const jollityFont = localFont({
  src: "../../fonts/jollity.ttf",
  display: "swap",
});

const SlugPage = ({ params }: PageProps) => {
  const { back } = useRouter();

  const project = content.projects.list.find(
    (project) => project.slug === `/projects/${params.slug}`
  );
  return (
    <main className={`overflow-x-hidden  bg-black text-white py-20 grid gap-5`}>
      <button
        className="fixed font-serif text-5xl font-bold top-8 left-8 hover:animate-heartBeat"
        type="button"
        onClick={() => back()}
      >
        {"<-"}
      </button>
      <h1 className={`text-7xl text-center ${marchFont.className} `}>
        {project?.name}
      </h1>
      <div className="translate-x-20">
        <MacIpadIphone
          mac={project?.images?.desktop}
          iPad={project?.images?.tablet}
          iPhone={project?.images?.mobile}
        />
      </div>
      <article className="grid grid-cols-1 px-10 pr-20 md:px-20 md:gap-10 md:grid-cols-2">
        <section>
          <h2 className={`${marchFont.className} text-5xl mt-5`}>
            Description:{" "}
          </h2>
          <p className="">{project?.description}</p>
        </section>
        <section>
          <h2 className={`${marchFont.className} text-5xl mt-5`}>
            Responsibilities:
          </h2>
          <p className="">
            <strong>Team Size:</strong> {project?.teamSize}
          </p>
          <ul>
            {project?.responsibilities.map((responsibility) => (
              <li key={responsibility}>* {responsibility}</li>
            ))}
          </ul>
        </section>
        <section className="md:col-span-2">
          <h2 className={`${marchFont.className} text-5xl mt-5`}>
            Technologies:
          </h2>
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {project?.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
        {project?.liveLink && (
          <a
            href={project?.liveLink}
            className="hover:text-gray-500 col-span-full"
            target="_blank"
          >
            {project.liveLink}
          </a>
        )}
        {project?.githubLinks && (
          <a
            href={project?.githubLinks[0]}
            className="hover:text-gray-500"
            target="_blank"
          >
            {project.githubLinks[0]}
          </a>
        )}
      </article>
    </main>
  );
};

export default SlugPage;
