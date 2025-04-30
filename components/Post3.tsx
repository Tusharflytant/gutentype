import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  articleNumber: number
}


const truncateWords = (text: string, wordLimit: number): string => {
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};


const Posts: React.FC<PostProps> = ({ pimg, pheading , articleNumber}) => {
 
  
  return (
    <div className="flex  space-x-4 py-2 px-2">
  {/* Image on the left */}
  <div className="flex-shrink-0 w-24 h-24 overflow-hidden ">
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
    <h4 className="text-base font-semibold text-black leading-snug">
      {truncateWords(pheading, 7)}
    </h4>
    <p className="text-gray-500 text-sm mt-1">
      <CreationDate articleNumber={articleNumber} />
    </p>
  </div>
</div>

  );
};

export default Posts;

 