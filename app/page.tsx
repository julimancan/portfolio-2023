import Image from "next/image";
import Link from "next/link";
import content from "./content.json";

export default function Home() {
  return (
    <main className="bg-black text-white h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
      <section className="snap-start h-screen w-full grid place-content-center">
        <Image
          src={content.hero.image.url}
          alt={content.hero.image.alt}
          width={400}
          height={400}
          className="mx-auto -translate-x-[30px] bg-emerald-600 rounded-full"
        />
        <h1 className="text-3xl font-semibold mt-10">{content.hero.title}</h1>
      </section>
      <section className="snap-start grid place-content-center h-screen px-20 py-10 bg-cyan-800">
        <h2 className="text-2xl font-semibold mt-10 mx-auto">
          {content.about.title}
        </h2>
        <p className="mt-5">{content.about.description}</p>
      </section>
      <section className={`snap-start grid h-screen bg-amber-300 text-black`}>
        <h2 className="text-2xl font-semibold mt-10 mx-auto">
          {content.projects.title}
        </h2>
        <ul className={`flex w-screen h-full snap-x snap-mandatory overflow-x-scroll`}>
          {content.projects.list.map((project) => (
            <li key={project.name} className="snap-start min-w-[100vw] h-[80vh]  mx-4 grid place-content-center">
              <Link href={project.slug}>
                <h3 className="text-xl font-semibold mt-10 mx-auto">
                  {project.name}
                </h3>
                <Image
                  src={project.screenshots[0]}
                  alt={`${project.name} - Screenshot`}
                  width={400}
                  height={400}
                  className="object-cover rounded-lg w-[90vw]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
