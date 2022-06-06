import { useRouter } from "next/router";

export function Contact() {
  const router = useRouter();

  return (
    <div className='min-h-[20vh] mt-20 md:mt-0 flex items-center md:pb-16 flex-col gap-x-10'>
      <h1 className='text-center font-DMSerif font-bold text-4xl'>Contato:</h1>
      <div className='w-11/12 md:w-1/2 min-h-24 flex justify-center mt-8 gap-x-4 gap-y-4 flex-wrap'>
        <div
          className='w-28 h-10 border-2 border-black rounded-sm flex items-center justify-center font-DMSans font-medium
        cursor-pointer
        '
          onClick={() => {
            return router.push("https://instagram.com/ricopozzi");
          }}
        >
          instagram
        </div>
        <div
          className='min-w-28 px-2 h-10 border-2 border-black rounded-sm flex items-center justify-center font-DMSans font-medium
        
        '
        >
          ricopozzi@hotmail.com
        </div>
        <div
          className='w-28 h-10 border-2 border-black rounded-sm flex items-center justify-center font-DMSans font-medium
        cursor-pointer 
        '
          onClick={() => {
            return router.push(
              "https://www.linkedin.com/in/enrico-pozzi-481b431a7/"
            );
          }}
        >
          LinkedIn
        </div>
      </div>
    </div>
  );
}
