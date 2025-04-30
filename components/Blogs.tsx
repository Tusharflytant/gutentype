"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CreationDate from './Date';

const Blogs = ({
  title,
  mainimg,
  maintitle,
  maincontent,
  maindesc,
  author,
  days,
  buttontext,
  buttoncolor,
  buttonhovercolor
}: {
  title: string;
  mainimg: string;
  maintitle: string;
  maincontent: string;
  maindesc: string;
  author: string;
  days: number;
  buttontext : string,
  buttoncolor : string,
  buttonhovercolor : string
}) => {
  return (
    
    <div className=''>
      {/* Title and Button */}
      <div className="flex justify-between items-center  ">
  <Link href={title}  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline cursor-pointer text-black font-bold">
      {title}
    </span>
  </Link>
  <Link href={title}>
    <button
      className={` px-6 py-2 text-white rounded-lg transition duration-300 ${buttoncolor} ${buttonhovercolor} `}
    >
      {buttontext}
    </button>
  </Link>
</div>


      {/* Main Blog Section */}
      <section className='text-gray-600 body-font  overflow-hidden '>
        <div className=' '>
          <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8'>
            <Image 
              alt='blog image' 
              className='w-full lg:aspect-square lg:max-w-xs object-cover '
              width={1000}
              height={1000}
              src={mainimg} 
            />
            
            <div className='lg:w-1/2 w-full ml-1.5 '>
              <h2 className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>{maintitle}</h2>
              
              <h1 className='text-gray-900  text-2xl md:text-4xl lg:text-3xl mt-4 font-bold tracking-wide mb-4
               hover:underline  hover:decoration-4 underline-offset-4'>
               {maincontent}
              </h1>

              <div className='mt-6 flex'>
              <Image 
                src={`/authors/${author}.jpg`} 
                alt="" 
                width={100} 
                height={100} 
                className="rounded-full object-cover object-center  size-8 "
  />
                <div className='flex'>

                
                <Link href={`/authors/${author.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
                <p className='text-red-600 hover:text-black font-medium mt-1 ml-4  text-sm md:text-sm'>By {author}</p>
                </Link>
                <p className='text-gray-500 ml-4 mt-1 text-sm md:text-sm'><CreationDate articleNumber={days}/> </p>
                </div>
              </div>

              <h5 className='text-md text-black line-clamp-2 mt-4'>{maindesc}</h5>
              <button
  className="mt-6 px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 
             bg-gradient-to-r from-red-600 via-red-500 to-rose-500 
             hover:from-rose-600 hover:via-red-600 hover:to-red-700 
             shadow-md hover:shadow-lg"
>
  Read More
</button>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs