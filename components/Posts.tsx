import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';
import Link from 'next/link';




interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  section: string;
  pauthor:string;
  articleNumber: number
}

const Posts: React.FC<PostProps> = ({ pimg, pheading , articleNumber, section, pauthor}) => {
   
  return (
    <div className=" flex justify-center md:justify-around items-center  sm:px-0 mt-8">
      
        <div className="bg-white rounded-md w-full md:w-auto">
        <div className="relative overflow-hidden inline-block group">
  <Image
    src={pimg}
    alt="Post Image"
    title="Post"
    width={1200}
    height={1200}
    className="h-[400px] w-auto sm:h-[300px] md:h-[250px] xl:h-[450px] object-cover 
               transition-transform duration-500 ease-in-out 
               group-hover:scale-105 group-hover:brightness-110"
  />
</div>

          <h5 className='text-red-500 font-bold bg-white text-left capitalize mt-1 mb-2 '>/ / {section}</h5>
          <h4 className=" text-xl  hover:underline line-clamp-2 sm:text-2xl lg:text-xl  text-left text-black
             font-bold title-font mb-4">
          {pheading}
          </h4>

          <div className="w-[30%]  border-t-[1px] border-red-500  " />
                  <div className="mt-3 flex items-center">
                    <Image
                      src={`/authors/${pauthor}.jpg`}
                      alt={pauthor}
                      width={32}
                      height={32}
                      className="rounded-full object-cover size-8"
                    />
          
                    
                    <div className="ml-3">
                      <Link href={`/authors/${pauthor.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
                        <p className=" hover:text-red-500 text-sm font-medium tracking-widest text-black uppercase ">By {pauthor}</p>
                      </Link>
                      <p className="text-[12px] text-gray-500">
                        <CreationDate articleNumber={articleNumber} />
                      </p>
                       
                    </div>
                  </div>

          
        </div>
      
    </div>
  );
};

export default Posts;

 