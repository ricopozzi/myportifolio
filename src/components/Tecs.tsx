export function Tecs() {
  return (
    <>
      <section className='min-h-[40vh] flex flex-col items-center'>
        <h1 className='text-lg font-DMSans font-bold text-center mt-16 text-gray-500'>
          Tecs
        </h1>
        <p className='text-center mt-3 font-DMSerif text-4xl text-gray-900'>
          Ferramentas <span className='text-emerald-400'>Favoritas</span>
        </p>
        <div className='md:w-1/2 min-h-52 p-4 flex gap-x-16 gap-y-7 mt-6 md:mt-2 justify-center flex-wrap'>
          <img src='typescript.svg' alt='' className='w-16 rounded-lg' />
          <img src='react.svg' alt='' className='w-16 rounded-lg' />
          <img src='next.svg' alt='' className='w-16 rounded-lg' />
          <img
            src='react-native.svg'
            alt=''
            className='w-[4.5rem] rounded-lg'
          />
          <img src='tailwindcss.svg' alt='' className='w-16 rounded-lg' />
          <img src='sass.svg' alt='' className='w-16 rounded-lg' />
          <img src='node.svg' alt='' className='w-16 rounded-lg' />
        </div>
        <div className=' md:w-1/2 min-h-36 flex flex-col '>
          <h1 className='text-center font-DMSerif text-2xl text-gray-900 mt-4'>
            Outras experiências
          </h1>
          <div className='text-lg font-DMSans font-medium text-gray-600 gap-x-5 flex justify-center mt-6 flex-wrap'>
            <p>Supabase</p>
            <p>Prismic CMS</p>
            <p>Notion API</p>
            <p>Strapi</p>
            <p>Chakra UI</p>
            <p>Vercel</p>
            <p>Heroku</p>
            <p className='tracking-widest'> ...</p>
          </div>
        </div>
      </section>
    </>
  );
}
