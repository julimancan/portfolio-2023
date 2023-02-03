"use client";
import MacIpadIphone from "../../MacIpadIphone";
import content from "../../content.json";
import localFont from "@next/font/local";

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
  const project = content.projects.list.find(
    (project) => project.slug === `/projects/${params.slug}`
  );
  return (
    <main
      className={`overflow-x-hidden  bg-black text-white py-20 grid gap-5`}
    >
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
      {/* <ul className="flex">
        {project?.screenshots.map((screenshot) => (
          <li key={screenshot}>
            <img src={screenshot} alt="" />
          </li>
        ))}
      </ul> */}
      <article className="px-10 pr-20 md:px-20 grid md:gap-10 grid-cols-1 md:grid-cols-2">
        <section>
          <h2 className={`${marchFont.className} text-5xl mt-5`}>
            Description:{" "}
          </h2>
          <p className="">{project?.description}</p>
          {project?.liveLink && (
            <>
              <a
                href={project?.liveLink}
                className="hover:text-gray-500"
                target="_blank"
              >
                Click here to see it live!
              </a>
              <br />
            </>
          )}
          {project?.githubLinks && (
            <a
              href={project?.githubLinks[0]}
              className="hover:text-gray-500"
              target="_blank"
            >
              Check out the code!
            </a>
          )}
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
      </article>
    </main>
  );
};

export default SlugPage;
