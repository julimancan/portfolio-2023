"use client";
import { Typewriter } from "react-simple-typewriter";
import content from "./content.json";

const Writer = () => {
  return (
    <div className="text-3xl font-bold h-6 min-w-full text-center">
      <Typewriter words={content.hero.saludos} loop/>
    </div>
  );
};

export default Writer;
