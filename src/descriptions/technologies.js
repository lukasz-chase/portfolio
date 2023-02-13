//icons
import { FaReact } from "react-icons/fa";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiStyledComponents,
  SiRedux,
  SiMaterialUi,
  SiTypescript,
  SiJest,
  SiTailwindcss,
} from "react-icons/si";
import { DiJavascript1, DiCss3, DiSass, DiNodejsSmall } from "react-icons/di";

export const technologies = [
  {
    icon: <AiFillHtml5 className="icon" />,
    label: "HTML",
  },
  {
    icon: <DiCss3 className="icon" />,
    label: "CSS",
  },
  {
    icon: <SiStyledComponents className="icon" />,
    label: "styled-components",
  },
  {
    icon: <DiSass className="icon" />,
    label: "Sass",
  },
  {
    icon: <SiMaterialUi className="icon" />,
    label: "Material-UI",
  },
  {
    icon: <DiJavascript1 className="icon" />,
    label: "JavaScript",
  },
  {
    icon: <SiTypescript className="icon" />,
    label: "TypeScript",
  },
  {
    icon: <FaReact className="icon" />,
    label: "React",
  },
  {
    icon: <FaReact className="icon" />,
    label: "React Native",
  },
  {
    icon: <SiRedux className="icon" />,
    label: "Redux",
  },
  {
    label: "Zustand",
  },
  {
    icon: <AiFillGithub className="icon" />,
    label: "git",
  },
  {
    icon: <DiNodejsSmall className="icon" />,
    label: "Node.js",
  },
  {
    label: "Express.js",
  },
  {
    icon: <SiJest className="icon" />,
    label: "Jest",
  },
  {
    label: "React Testing Library",
  },
  {
    label: "Next.js",
  },
  {
    label: "TanStack Query",
  },
  {
    icon: <SiTailwindcss className="icon" />,
    label: "Tailwind css",
  },
];
