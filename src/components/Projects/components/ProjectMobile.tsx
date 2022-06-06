import React, { HTMLAttributes } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FiInfo } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface ProjectProps extends HTMLAttributes<any> {
  imgSrc: string;
  title: string;
  stack: string[];
  accessURL: string;
  GHSource: string;
  observation?: string;
}

export const ProjectMobile: React.FC<ProjectProps> = ({
  imgSrc,
  title,
  GHSource,
  accessURL,
  stack,
  observation,
  ...rest
}: ProjectProps) => {
  const router = useRouter();

  return (
    <div
      {...rest}
      className='min-h-[60vh] w-5/6 mx-auto flex flex-col lg:flex-row'
    >
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ margin: "0px", once: true }}
        className='w-full lg:w-1/2 flex flex-col justify-center items-center py-6 '
      >
        <div className='w-60'>
          <Image
            src={`/${imgSrc}`}
            className='object-fill rounded-xl shadow-2xl shadow-blue-400/30'
            width={350}
            height={600}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ margin: "0px", once: true }}
        className='font-DMSans text-3xl font-bold  lg:w-1/2 lg:p-10 flex justify-center items-center text-gray-200 flex-col'
      >
        <p className='flex items-center text-center text-2xl lg:text-3xl'>
          {title}
        </p>

        <p className='text-xl text-center lg:px-10 mt-10 font-normal'>
          Stack: {stack.map((item) => `${item} `)}
        </p>

        {observation ? (
          <p className='text-base text-center text-gray-100/50 px-10 mt-10 font-normal'>
            {observation}
          </p>
        ) : null}
        <div className='flex gap-x-4 mt-10 text-xl text-emerald-400/70'>
          Código ainda não disponível
        </div>
      </motion.div>
    </div>
  );
};
