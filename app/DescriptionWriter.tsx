"use client";
import { Typewriter } from "react-simple-typewriter";
import content from "./content.json";


const DescriptionWriter = () => {
  return (
    <div className="text-3xl font-bold min-w-full text-center relative z-40">
      <Typewriter words={[content.hero.description]} />
    </div>
  );
}

export default DescriptionWriter;
