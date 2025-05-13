import html from "../../../public/skills/html5-original 1.png";
import css from "@/../public/skills/css3-original 1.png";
import js from "@/../public/skills/javascript-original 1.png";
import react from "@/../public/skills/react-original 1.png";
import redux from "@/../public/skills/redux-original 1.png";
import nextJs from "@/../public/skills/nextjs-original 1.png";
import nodeJs from "@/../public/skills/nodejs-original 1.png";
import ts from "@/../public/skills/typescript-original 2.png";
import mongoDb from "@/../public/skills/pngwing.com.png";
import mongoose from "@/../public/skills/Mongoose.js.png";
import Express from "@/../public/skills/Express.png";
import Tailwind from "@/../public/skills/Tailwind CSS.png";
import daisyUI from "@/../public/skills/daisyUI.png";
import shadCN from "@/../public/skills/shadCN UI.png";
import Image from "next/image";

const skills = [
  {
    title: "HTML5",
    image: html,
  },
  {
    title: "CSS",
    image: css,
  },
  {
    title: "JavaScript",
    image: js,
  },
  {
    title: "React",
    image: react,
  },
  {
    title: "Redux",
    image: redux,
  },
  {
    title: "NextJs",
    image: nextJs,
  },
  {
    title: "NodeJs",
    image: nodeJs,
  },
  {
    title: "TypeScript",
    image: ts,
  },
  {
    title: "MongoDb",
    image: mongoDb,
  },
  {
    title: "Mongoose",
    image: mongoose,
  },
  {
    title: "Express",
    image: Express,
  },
  {
    title: "Tailwind CSS",
    image: Tailwind,
  },
  {
    title: "Daisy UI",
    image: daisyUI,
  },
  {
    title: "ShadCn UI",
    image: shadCN,
  },
];

export default function Skills() {
  return (
    <div className="bg-[#161616] md:px-12 px-8 py-10">
      <h2 className="text-3xl font-bold text-[#70FF00] mb-4">Skills()</h2>
      <div className="flex flex-wrap gap-10 my-5">
        {skills.map((skill) => (
          <div key={skill.title} className="flex flex-col items-center">
            <Image
            data-aos="zoom-in"
              src={skill.image}
              alt={skill.title}
              width={60}
              height={60}
              title={skill.title}
              priority
            />
            <span className="text-white text-sm mt-2">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
