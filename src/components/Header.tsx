import { FaGithub } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";

export function Header() {
  const router = useRouter();

  return (
    <>
      <header className='absolute w-[99vw] h-16 backdrop-blur-lg bg-[transparent] top-0 z-50'>
        <nav className='mx-auto h-full md:w-3/4 flex px-4'>
          <div className='flex h-full w-1/5'>
            <Image src='/diamond.svg' alt='' width={80} height={56} />
            <h1 className='text-white font-bold tracking-wide h-full flex justify-start items-center text-2xl'>
              Enrico
            </h1>
          </div>

          <div className='flex-1 h-16  justify-start pl-11 hidden md:flex md:gap-x-16'>
            <button className='text-gray-200 font-medium cursor-not-allowed'>
              Trabalhos
            </button>
            <button
              onClick={() => window.open("https://blog.pozzi.dev")}
              className='text-gray-200 font-medium cursor-pointer'
            >
              Posts
            </button>
            <button
              onClick={() => router.push("https://github.com/ricopozzi")}
              className='text-inherit font-medium w-28 h-8 my-auto bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-md flex
             justify-center items-center pl-4 pr-6 transition ease-in delay-50 duration-300 hover:opacity-75'
            >
              <FaGithub
                size={18}
                className='mr-auto transition ease-in delay-50 duration-300 hover:animate-ping'
              />
              Github
            </button>
          </div>

          <Menu as='div' className='relative ml-auto pt-2 z-30'>
            <Menu.Button
              className='inline-flex md:hidden ml-auto mr-2 justify-center w-12 h-12 bg-emerald-400 rounded-md border shadow-sm px-4 text-center
                items-center text-white font-semibold border-none text-sm '
            >
              Menu
            </Menu.Button>
            <Menu.Items className='origin-top-right absolute right-0 mt-1 w-56 rounded-md drop-shadow-2xl bg-gray-100 border-2 z-20'>
              <div className='py-1 border-b cursor-pointer'>
                <a className='group flex items-center px-4 py-2 font-medium font-DMSans text-sm text-gray-700'>
                  Trabalhos
                </a>
              </div>
              <div
                onClick={() => window.open("https://blog.pozzi.dev")}
                className='py-1 border-b cursor-pointer'
              >
                <a className='group flex items-center px-4 py-2 text-sm font-medium font-DMSans text-gray-700'>
                  Posts
                </a>
              </div>
              <div className='py-1 border-b '>
                <button
                  className='text-inherit font-medium  flex
             justify-center items-center pl-4 pr-6 transition ease-in delay-50 duration-300 hover:opacity-75'
                >
                  <FaGithub
                    size={18}
                    className='mr-2 transition ease-in delay-50 duration-300 hover:animate-ping'
                  />
                  Github
                </button>
              </div>
            </Menu.Items>
          </Menu>
        </nav>
      </header>
    </>
  );
}
