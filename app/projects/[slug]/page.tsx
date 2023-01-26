"use client";
import content from "../../content.json";

type PageProps = {
  params: {
    slug: string;
  };
};

const SlugPage = ({ params }: PageProps) => {
  const project = content.projects.list.find(
    (project) => project.slug === `/projects/${params.slug}`
  );
  return (
    <div className="text-black">
      <h1 className="">{project?.name}</h1>
      <ul className="flex">
        {project?.screenshots.map((screenshot) => (
          <li key={screenshot}>
            <img src={screenshot} alt="" />
          </li>
        ))}
      </ul>
      <p className="">{project?.description}</p>
      <a href={project?.liveLink} target="_blank">
        See it live!
      </a>
      <a href={project?.githubLinks[0]} target="_blank">
        Check out the code!
      </a>
      <p className="">Team Size: {project?.teamSize}</p>
      <ul>
        {project?.responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>

      <ul>
        <h2>Technologies Used</h2>
        {project?.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  );
};

export default SlugPage;
