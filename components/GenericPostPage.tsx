'use client';

import React, { useState } from 'react';
import Post2 from '@/components/Post2';
import Post2Chota from '@/components/Post2Chota';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Outbrain from '@/components/ads/outbrain';

interface Post {
  title: string;
  imgUrl: string;
  contents: string[];
  category: string;
  articleNumber: number;
}

interface GenericPostPageProps {
  title: string;
  posts: Post[];
}

const GenericPostPage: React.FC<GenericPostPageProps> = ({ title, posts }) => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 9);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-7xl mt-40 lg:p-4 mx-auto">
      <div className="text-black">
        <Breadcrumb />
      </div>


       

      <div className="text-center mt-20 px-4">
        <span className="inline-block text-2xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-wider text-gray-900 border-b-4 border-red-600 pb-2 transition-colors duration-300">
          {title}
        </span>
      </div>

    


      <div className="grid mt-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4">
       {posts.slice(0, visibleCount).map((post, index) => (
  <React.Fragment key={index}>
    <Link
      href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
      passHref
    >
      <div className="bg-white mt-4">
        {index % 3 === 0 ? (
          <Post2Chota
            pimg={`/articles/${post.imgUrl}`}
            pheading={post.title}
            pcontent={post.contents}
            section={post.category}
            articleNumber={post.articleNumber}
          />
        ) : (
          <Post2
            pimg={`/articles/${post.imgUrl}`}
            pheading={post.title}
            pcontent={post.contents}
            section={post.category}
            articleNumber={post.articleNumber}
          />
          
        )}
      </div>
    </Link>
    

    
  </React.Fragment>
))}

      </div>

    

    <aside className="max-w-7xl mt-30 mx-auto">
       <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
      <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>
     

      {visibleCount < posts.length && (
        <div className="flex justify-center mt-10">
          {isLoading ? (
            <div className="flex justify-center items-center space-x-2 h-20">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
              <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
            </div>
          ) : (
            <button
              onClick={loadMore}
              className="bg-red-600 text-white px-10 py-4 rounded-md 
                hover:bg-red-700 hover:scale-105 
                transition-transform duration-300 ease-in-out 
                shadow-md hover:shadow-lg hover:cursor-pointer 
                 tracking-wider"
            >
              Load More Posts
            </button>
          )}
          
        </div>
      )}

      <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />
    </div>
  );
};

export default GenericPostPage;
