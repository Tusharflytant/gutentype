import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Barlow_Condensed } from 'next/font/google';

const barlow = Barlow_Condensed({
  weight: '600',
  subsets: ['latin'],
});

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  section: string;
  pauthor: string
}




const Posts: React.FC<PostProps> = ({ pimg, pheading , section , pauthor}) => {
 
  
  return (
    <div className="flex  space-x-4 py-2 px-2">
  {/* Image on the left */}
  <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md">
    <Image
      src={pimg}
      className="object-cover w-full h-full"
      width={100}
      height={100}
      alt="Post Image"
      title="Post"
    />
  </div>

  {/* Text content on the right */}
  <div className="flex flex-col justify-between">
  <h5 className="text-orange-500 font-bold capitalize text-sm  text-left mb-2">
          {section}
        </h5>
    <h4 className={`text-lg line-clamp-2 ${barlow.className} font-semibold text-black leading-snug`}>
     {pheading}
    </h4>
    <Link
                href={`/authors/${pauthor
                  .replace(/[^A-Za-z0-9]+/g, '-')
                  .toLowerCase()}`}
              >
                <p
                  className={`${barlow.className} hover:text-red-500 text-sm mt-1 font-medium tracking-widest text-black uppercase`}
                >
                  By {pauthor}
                </p>
              </Link>
  </div>
</div>

  );
};

export default Posts;

 