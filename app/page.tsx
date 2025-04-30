"use client"
import React from 'react'
import Image from 'next/image'
import CreationDate from '@/components/Date'
import entertainment from '@/constants/entertainment'
import Blogs from '@/components/Blogs'
import Posts from '../components/Posts'

import money from '@/constants/money'
import politics from '@/constants/politics'
import usNews from '@/constants/usnews'
import Link from "next/link";
import Post2 from '@/components/Post2'
import Post3 from '@/components/Post3'
import { motion } from 'framer-motion';

;  






const page = () => {

  


  return (
  <>

      <div className='max-w-7xl  mx-auto'>
      
      
      <div className="mt-10 lg:mt-40 px-4 lg:px-0  py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Left Big Post */}
  {politics.slice(0, 1).map((post, index) => (
    <Link
      key={index}
      href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
      passHref
      className="relative h-[500px] lg:col-span-2 block  overflow-hidden"
    >
      <div className="relative w-full h-full">
  {/* Image Layer */}
  <Image
    src={`/articles/${post.imgUrl}`}
    width={1000}
    height={1000}
    alt={post.title}
    className="w-full h-full object-cover"
  />

  {/* Overlay Layer */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Text Content Layer */}
  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
  <button className="text-white bg-red-500 px-2 py-2 rounded-xl capitalize  w-[20%] lg:w-[10%] mb-2  text-sm">
          / / {post.section}
        </button>
    <h2 className="text-white text-2xl lg:text-4xl font-bold">{post.title}</h2>
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mt-2">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 w-full">
            {/* Author Info */}
            <div className="flex items-center gap-2">
              <Link
                href={`/authors/${post.authorName
                  .replace(/[^A-Za-z0-9]+/g, '-')
                  .toLowerCase()}`}
              >
                <p
                  className=" hover:text-red-500 text-sm font-medium tracking-widest text-white capitalize"
                >
                  By {post.authorName}
                </p>
              </Link>
            </div>
            {/* Date + Read Time */}
            <div className="text-sm md:text-base text-gray-500 mt-2 lg:mt-0">
              <p className="text-white font-medium">
                <CreationDate articleNumber={post.articleNumber} />
              </p>
            </div>
          </div>
        </div>
  </div>
</div>
    </Link>
  ))}

  {/* Right Two Smaller Posts */}
  <div className="flex flex-col space-y-6">
    {politics.slice(1, 3).map((post, index) => (
      <Link
        key={index}
        href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
        passHref
        className="relative h-[238px] block  overflow-hidden"
      >
        <div className="relative w-full h-full">
        <Image
            src={`/articles/${post.imgUrl}`}
            width={1000}
            height={1000}
            alt={post.title}
            className= "w-full h-full object-cover"
          />

           {/* Overlay Layer */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end p-4">
          <button className="text-white bg-red-500 px-2 py-2 rounded-xl capitalize  w-[20%] mb-2 text-sm">
          / / {post.section}
        </button>
            <h3 className="text-white text-lg font-semibold">{post.title}</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mt-2">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 w-full">
            {/* Author Info */}
            <div className="flex items-center gap-2">
              <Link
                href={`/authors/${post.authorName
                  .replace(/[^A-Za-z0-9]+/g, '-')
                  .toLowerCase()}`}
              >
                <p
                  className=" hover:text-red-500 text-sm font-medium tracking-widest text-white capitalize"
                >
                  By {post.authorName}
                </p>
              </Link>
            </div>
            {/* Date + Read Time */}
            <div className="text-sm md:text-base text-gray-500 mt-2 lg:mt-0">
              <p className="text-white font-medium">
                <CreationDate articleNumber={post.articleNumber} />
              </p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

{/* // trending */}

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 px-4 bg-gray-100 my-20 items-start">
  {/* Trending Title */}
  <div className="md:col-span-1">
    <h2 className="text-2xl font-bold text-gray-700">Trending</h2>
  </div>

  {/* Posts */}
  <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {politics.slice(3, 6).map((post, index) => (
      <Link
        key={index}
        href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, '-')}`}
        className="flex items-center gap-3"
      >
        <Image
          src={`/articles/${post.imgUrl}`}
          width={1000}
          height={1000}
          alt={post.title}
          className="w-20 h-20 rounded-full object-cover"
        />
        <p className="text-md font-bold line-clamp-2 hover:text-gray-950 text-gray-700">
          {post.title}
        </p>
      </Link>
    ))}
  </div>
</div>



{/* // 1 section */}

<div className="flex justify-between py-18 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/finance"  >
    <span className="uppercase text-4xl  md:text-5xl hover:text-red-700 hover:underline cursor-pointer text-black font-bold">
      FINANCE
    </span>
  </Link>
  
</div>


<div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3  w-full  gap-4">
  {entertainment.slice(0,3).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white ">
        <Post2  
          pimg={`/articles/${post.imgUrl}`} 
          pheading={post.title}  
          pcontent={post.contents} 
          articleNumber={post.articleNumber}
          section={post.category}
        />
      </div>
    </Link>
  ))}
</div>
</div>  
        

{/* 3 section  */}

<div className='bg-gray-100 px-4 lg:px-0 mt-28'>
<div className="flex justify-between py-18 items-center max-w-7xl mx-auto    ">
  <Link href="/stock"  >
    <span className="uppercase text-4xl text-left  md:text-5xl hover:text-red-700 hover:underline cursor-pointer text-black font-bold">
      STOCK
    </span>
  </Link>
  
</div>

<div className="flex flex-col  max-w-7xl mx-auto  lg:flex-row gap-6 ">
  {/* Main Content (Posts) */}
  <div className="flex-1 ">
  {money.slice(0, 5).map((post, index) => (
    <motion.div
      key={index}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
          },
        }),
      }}
    >
      {index === 2 ? (
  <Link
    href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
    className=''
    passHref
  >
    <div className="relative w-full h-[400px] my-10  overflow-hidden shadow-md">
      <Image
        src={`/articles/${post.imgUrl}`}
        alt={post.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          {post.title}
        </h2>

        {/* Author and Date  */}
        <div className='flex '>
          <p className="text-white text-sm sm:text-base">
            By {post.authorName}
          </p>
          <p className="text-white text-sm ml-4 sm:text-base">
            <CreationDate articleNumber={post.articleNumber} />
          </p>
        </div>
      </div>
    </div>
  </Link>
) : (
        <Link
          href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          passHref
        >
          <Blogs
            maincontent={post.title}
            maindesc={post.contents[0]}
            mainimg={`/articles/${post.imgUrl}`}
            author={post.authorName}
            days={post.articleNumber}
            title=""
            maintitle=""
            buttontext=""
            buttoncolor=""
            buttonhovercolor=""
          />
        </Link>
      )}
    </motion.div>
  ))}
</div>


  {/* Sidebar: Popular Articles */}
  <div className="w-full lg:w-[350px] mb-24 bg-white sticky top-32 mt-16 lg:mt-10 rounded-xl shadow-lg px-6 h-fit">
    <h2 className="text-black mt-8 hover:text-red-500 cursor-pointer text-left font-bold tracking-wide text-3xl sm:text-xl mb-6">
      Trending Posts
    </h2>
    <div className="grid grid-cols-1 gap-6">
  {money.slice(5, 9).map((post, index) => (
    <Link
      key={index}
      href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
      passHref
    >
      {index === 3 ? (
        // Custom full-width image with overlay on the last item
        <div className="relative w-full h-[400px] mb-10  overflow-hidden shadow-md">
          <Image
            src={`/articles/${post.imgUrl}`}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
              {post.title}
            </h2>
            <p className="text-white text-sm">By {post.authorName}</p>
            <p className="text-white text-sm">
              <CreationDate articleNumber={post.articleNumber} />
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-grey-200 mt-2 w-full">
          <Post3
            pimg={`/articles/${post.imgUrl}`}
            pheading={post.title}
            pcontent={post.contents}
            articleNumber={post.articleNumber}
          />
        </div>
      )}
    </Link>
  ))}
</div>

  </div>
</div>
</div>

<div className="flex justify-between max-w-7xl mx-auto py-18 items-center px-4 lg:px-0  ">
  <Link href="/trading"  >
    <span className="uppercase text-4xl px-4 lg:px-0 md:text-5xl hover:text-red-700 hover:underline cursor-pointer text-black font-bold">
      TRADING
    </span>
  </Link>
  
</div>

<div className="grid max-w-7xl mx-auto  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4 lg:px-0 justify-items-center  ">
            {usNews.slice(0,8)
              .map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                >
                  <div className="bg-grey-200 px-4 md:px-0">
                    <Posts
                      pimg={`/articles/${post.imgUrl}`}
                      pheading={post.title}
                      pcontent={post.contents}
                      articleNumber={post.articleNumber}
                      section= {post.category}
                      pauthor= {post.authorName}
                    />
                  </div>
                </Link>
              ))}
          </div>

      






















































































































        



    </>


  )
}


export default page


