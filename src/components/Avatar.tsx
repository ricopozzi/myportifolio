import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Avatar() {
  const [avatarUrl, setAvatarUrl] = useState("/vercel.svg");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/ricopozzi"
      );

      return setAvatarUrl(data.avatar_url);
    })();
  }, []);

  return (
    <>
      <div className='w-48 h-48 bg-emerald-400 mx-auto mb-16 rounded-full flex justify-center items-center mt-12 md:mt-0'>
        <Image
          src={`${avatarUrl}`}
          alt=''
          className='rounded-full'
          width={182}
          height={182}
        />
      </div>
    </>
  );
}
