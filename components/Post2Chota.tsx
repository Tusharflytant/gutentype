import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  section: string;
  articleNumber: number;
}

const Post2Chota: React.FC<PostProps> = ({
  pimg,
  pheading,
  articleNumber,
  section,
}) => {
  return (
    <div className="w-full">
      <div className="bg-white sm:px-4 lg:px-0 px-6 w-full">
        <Image
          src={pimg}
          className="h-[400px]  sm:h-[300px] md:h-[250px] xl:h-[350px] object-cover mb-2"
          width={1000}
          height={1000}
          alt="Post Image"
          title="Post"
        />
        <div className="flex">
          <h5 className="text-red-500 font-bold mt-2 capitalize text-sm mb-2 w-[20%]">
            / / {section}
          </h5>
          <span className="text-gray-500 text-left mt-3 ml-4 text-sm">
            <CreationDate articleNumber={articleNumber} />
          </span>
        </div>
        <h4 className="mt-2 text-xl line-clamp-2 hover:underline sm:text-2xl lg:text-xl tracking-wide text-left text-black font-bold title-font mb-4">
          {pheading}
        </h4>
      </div>
    </div>
  );
};

export default Post2Chota;