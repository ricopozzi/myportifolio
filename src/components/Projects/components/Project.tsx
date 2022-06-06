import React, { HTMLAttributes } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";

interface ProjectProps extends HTMLAttributes<any> {
  imgSrc: string;
  title: string;
  stack: string[];
  accessURL: string;
  GHSource: string;
  observation?: string;
}

export const Project: React.FC<ProjectProps> = ({
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
        <Image
          src={`/${imgSrc}`}
          className='object-cover h-[25vh] lg:w-[35vw] lg:h-[44vh] rounded-xl shadow-2xl shadow-blue-400/30'
          width={600}
          height={400}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ margin: "0px", once: true }}
        className='font-DMSans text-3xl font-bold lg:w-1/2 lg:p-10 flex justify-center items-center text-gray-200 flex-col'
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
        <div className='flex gap-x-4 mt-10'>
          <button
            onClick={() => router.push(accessURL)}
            className='text-lg w-24 h-10 bg-emerald-400/20 border border-emerald-400 text-emerald-300 rounded-lg '
          >
            Acessar
          </button>
          <button
            onClick={() => router.push(GHSource)}
            className='text-lg w-24 h-10 bg-emerald-400/20 border border-emerald-400 text-emerald-300 rounded-lg flex items-center px-1 '
          >
            <FaGithub size={16} className='mr-1' />
            Source
          </button>
        </div>
      </motion.div>
    </div>
  );
};
