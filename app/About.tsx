import Image from "next/image";
import content from "./content.json";
import localFont from "@next/font/local";

const marchFont = localFont({
  src: "./fonts/march.otf",
  display: "swap",
});

const About = ({ technologies }: { technologies: string[] }) => {
  return (
    <section className="snap-start grid place-content-center px-5 md:px-20 py-10 md:py-20 bg-primary text-white">
      <article className="grid place-content-center md:grid-cols-2 max-w-[1500px] gap-4">
        <h2
          className={`${marchFont.className} text-center lg:hidden text-5xl font-semibold mx-auto`}
        >
          {content.about.title}
        </h2>
        <div className="order-last md:order-2">
          <h2
            className={`${marchFont.className} text-center hidden lg:block text-5xl font-semibold mx-auto`}
          >
            {content.about.title}
          </h2>
          {content.about.description.map((paragraph, index) => (
            <p key={index} className="mt-5">
              {paragraph}
            </p>
          ))}
          <h3 className={`text-4xl font-semibold mx-auto mt-10`}>
            These are some of the technologies I use to build:
          </h3>
          <ul className="md:col-span-2 grid grid-cols-2  xl:grid-cols-4">
            {technologies.map((technology, index) => (
              <li key={index} className="mt-5">
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={"/juli-catcher.jpg"}
          alt={"Julian Bustos"}
          width={600}
          height={1200}
          className="order-second mx-auto md:col-start-2 md:row-start-1 md:row-end-3 md:order-last place-self-center shadow-md shadow-gray-800"
        />
      </article>
    </section>
  );
};

export default About;
