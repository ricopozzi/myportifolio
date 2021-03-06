import Image from "next/image";

export function Certifications() {
  return (
    <>
      <section className='min-h-[30vh] w-full flex flex-col items-center mt-28'>
        <h1 className='text-center font-DMSerif font-bold text-5xl'>
          Aprendizado:
        </h1>
        <div className='w-full lg:w-1/2 min-h-12 flex flex-wrap lg:flex-row gap-y-10 gap-x-9 justify-center items-center mt-12 '>
          <Image src='/ignite.svg' width={170} height={60} />
          <Image src='/rocketseat.svg' width={170} height={50} />
          <Image src='/udacity.svg' width={170} height={50} />
          <Image src='/ghlogo.png' width={170} height={40} />
        </div>
      </section>
    </>
  );
}
