import { motion } from "framer-motion";

export function Main() {
  return (
    <>
      <section className='max-w-screen h-screen bg-[#001E26] flex justify-center items-center'>
        <video
          autoPlay
          loop
          muted
          playsInline
          width={"100vw"}
          height={"100vh"}
          className='absolute w-full h-screen object-cover'
        >
          <source src='bg-tunnel.mp4' type='video/mp4' />
        </video>
        <main
          className='bg-black/40 w-11/12 h-5/6 backdrop-blur-lg rounded-xl flex justify-center items-center flex-col
        shadow-none shadow-emerald-900'
        >
          <p className='font-DMSans text-lg text-white'>
            *não está totalmente pronto*
          </p>
          <h1 className='font-DMSerif text-4xl md:text-7xl text-white'>
            Enrico Pozzi
          </h1>
          <p className='font-DMSans text-xl md:text-2xl text-white'>
            Front-end Developer
          </p>
          <p className='font-DMSans text-center text-md md:text-lg text-white px-4 md:px-0 md:w-1/2 mt-4'>
            Eu sou um desenvolvedor frontend e freelancer morando em Ilhabela no
            estado de São Paulo - Brasil com paixão em desenvolver serviços
            digitais e projetos pessoais, tenho experiência em consumir APIs e
            fazer projetos desde o início sozinho e amo criar apps com a
            JAMStack. Quando não estou online os meus hobbies são tocar
            guitarra, ouvir música e ir à academia...
          </p>
        </main>
      </section>
    </>
  );
}
