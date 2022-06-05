import {
  useElementScroll,
  motion,
  useTransform,
  useViewportScroll,
  m,
} from "framer-motion";

import { useEffect, useRef, useTransition } from "react";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import { FiInfo } from "react-icons/fi";
import { Project } from "./components/Project";
import { ProjectMobile } from "./components/ProjectMobile";

const svgVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

export const Projects = () => {
  const firstRef = useRef<any>();
  const router = useRouter();

  return (
    <>
      <h1 className='text-center text-6xl font-bold font-DMSerif text-black mt-32'>
        Projetos
      </h1>
      {/*@ts-ignore*/}
      <div className='min-h-screen lg:w-5/6 mx-auto bg-[#000126] pb-24 lg:rounded-3xl mt-12 '>
        <Project
          imgSrc='brainn.png'
          title='Brainn Front-end Challenge'
          stack={["Typescript", "NextJs", "ReactJs", "TailwindCSS", "Vercel"]}
          accessURL='https://brainn-frontend-challenge.vercel.app/'
          GHSource='https://github.com/ricopozzi/brainn-frontend-challenge'
          observation='* Foi utilizada uma api externa, portanto pode haver um pequeno delay da API na hora de abrir o site'
        />

        <Project
          imgSrc='blog.png'
          title='Blog'
          stack={[
            "PrismicCMS",
            "Typescript",
            "NextJs",
            "ReactJs",
            "TailwindCSS",
            "Vercel",
          ]}
          accessURL='https://tailwind-blog-gamma.vercel.app/'
          GHSource='https://github.com/ricopozzi/tailwindBlog'
          observation='* Os posts são aleatórios, feito como objeto de estudo.'
          style={{
            marginTop: "20px",
          }}
        />
        <ProjectMobile
          imgSrc='app.jpeg'
          title='Rhema App'
          stack={[
            "Supabase",
            "Typescript",
            "React Native",
            "Expo",
            "Moti(Animations)",
            "React Navigation",
            "Yup",
            "...",
          ]}
          accessURL='https://tailwind-blog-gamma.vercel.app/'
          GHSource='https://github.com/ricopozzi/tailwindBlog'
          observation='* Em breve na App Store e Google Play'
          style={{
            marginTop: "20px",
          }}
        />

        <div className='text-center text-gray-100 text-3xl mt-10 lg:mt-0 font-DMSerif flex justify-center items-center'>
          <p> Para mais:</p>
          <div
            onClick={() => router.push("https://github.com/ricopozzi")}
            className='w-44 h-12 bg-emerald-400/50 ml-4 rounded-lg border border-emerald-400 flex justify-center items-center
          text-xl font-DMSans font-bold tracking-wide text-emerald-400/90 cursor-pointer
          '
          >
            Github
          </div>
        </div>
      </div>
    </>
  );
};
