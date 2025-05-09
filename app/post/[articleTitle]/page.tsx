// All your imports remain the same
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
import Breadcrumb from '@/components/Breadcrumb';
import Newsletter from "@/components/Newsletter";
import React from "react";
import Outbrain from "@/components/ads/outbrain";



function getRandomArticles(articles: TArticle[], count: number) {
  const shuffled = [...articles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const randomArticles = getRandomArticles(allArticles, 12);

const formatTitle = (title: string) => title.replace(/[^A-Za-z0-9]+/g, "-");

export function generateStaticParams(): { articleTitle: string }[] {
  return allArticles.map(({ title }) => ({
    articleTitle: formatTitle(title),
  }));
}

// Metadata generation function, synchronously
export async function generateMetadata({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );
 
  if (!article) {
    return {
      title: "Article Not Found",
      description: "No article found for the given title",
    };
  }
 
  const description = article.contents.at(-1) || "";
 
  return {
    title: article.title,
    description,
    openGraph: {
      url: `/${articleTitle}`,
      title: article.title,
      description,
      images: [`/article/${article.imgUrl}`],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [`/article/${article.imgUrl}`],
    },
  };
}

const PostPage = async ({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) => {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );

  if (!article) return <h1>Post not found</h1>;

  let headingCount = 0;


 

  return (
    <div className="bg-white max-w-7xl mx-auto mt-20">
      <div className="mt-10 flex flex-col lg:flex-row gap-10 px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Main Article Section */}
        <div className="flex-1 mt-20">
          <div className="max-w-7xl text-black mb-4">
            <Breadcrumb />
          </div>


          <h1 className="text-3xl mt-8 text-black  sm:text-4xl lg:text-4xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-6">
            <div className="text-gray-800 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between ">
              <div className="flex items-center gap-2">
                <Image
                  src={`/authors/${article.authorName}.jpg`}
                  alt={article.authorName}
                  width={50}
                  height={50}
                  className="rounded-full object-cover object-center size-8"
                />
                <Link href={`/authors/${article.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
                  <p className="text-md hover:text-red-500 uppercase tracking-widest ${barlow.className} lg:text-sm">
                   by {article.authorName}
                  </p>
                </Link>
              </div>

              <div className="w-full flex  items-center lg:mr-14 mt-2 lg:mt-0 lg:w-auto lg:justify-start gap-4 text-sm lg:text-base
               text-gray-500">
                <p>
                  <CreationDate articleNumber={article.articleNumber} />
                </p>
                <p>
                  Read Time: {article.readTime}
                </p>
              </div>
            </div>
          </div>

          <Image
            src={`/articles/${article.imgUrl}`}
            width={1000}
            height={1000}
            alt={article.title}
            className="w-full   "
          />

          

          
          <div className="flex flex-col xl:flex-row">
          <div className="text-black/85 tracking-normal mx-auto font-light mt-6 text-lg  leading-relaxed space-y-4 max-w-3xl">
            {article.contents.map((content, index) => {
              const isHeading = content.includes("***");
              if (isHeading) headingCount++;

              return (
                <React.Fragment key={index}>

                     {index === 2  &&(
                             <aside className="max-w-7xl mt-30 mx-auto">
       <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
      <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>
                  )}



            {headingCount === 3 && isHeading && (
  <div className="mt-16 mb-14 rounded-2xl bg-gray-50 p-4 ">
    <div className="border-t border-gray-300 mb-6" />
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Discover more stories like this:
    </h2>
    <div className="border-b border-gray-300 mb-6" />
    <div className="space-y-4">
      {allArticles
        .filter(
          (post) =>
            post.section === article.section && post.title !== article.title
        )
        .slice(0, 4)
        .map((item, idx) => (
          <Link
            key={idx}
            href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="block rounded-lg bg-white p-4 hover:bg-gray-100 transition shadow-sm"
          >
            <p className="text-lg font-medium text-gray-800 hover:text-red-600 transition">
              {item.title}
            </p>
          </Link>
        ))}
    </div>
  </div>
)}


                  {headingCount === 4 && isHeading && (
                    <div className="mt-12 mb-10 p-5 rounded-xl bg-red-50 ">
                      <h3 className="text-xl font-semibold text-red-900 mb-4">
                        💡 Discover More from {article.section}
                      </h3>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        {allArticles
                          .filter((post) => post.section === article.section && post.title !== article.title)
                          .slice(4, 5)
                          .map((item, index) => (
                            <Link
                              key={index}
                              href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                              className="flex items-center gap-4 w-full hover:bg-red-100 transition rounded-lg p-2"
                            >
                              <Image
                                src={`/articles/${item.imgUrl}`}
                                alt={item.title}
                                width={1000}
                                height={1000}
                                className="rounded-md object-cover w-[100px] h-[80px] shrink-0"
                              />
                              <div className="text-left">
                                <p className="text-sm uppercase text-red-600 font-medium mb-1">
                                  {item.section}
                                </p>
                                <p className="text-base text-gray-800 font-semibold">
                                  {item.title}
                                </p>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}
               

            

                  {/\.(webp)$/i.test(content) ? (
                    <Image
                      width={600}
                      height={400}
                      src={`/articles/${content}`}
                      alt="Image"
                      className="mt-4 w-full rounded-lg"
                    />
                  ) : isHeading ? (
                    <strong className="block font-bold text-2xl sm:text-3xl mt-8">
                      {content.replace(/\*\*\*/g, "")}
                    </strong>
                  ) : (
                    <p>{content}</p>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div>
              <aside className="max-w-7xl lg:ml-10  mt-10 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="SB_1"></div>
      </aside>
          </div>
         
          </div>
        </div>

       

        
      </div>

    
      <Newsletter/>

      <div className="max-w-4xl mx-auto mt-20 bg-white  rounded-2xl overflow-hidden border border-gray-200">
  <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 p-8">
    <div className="flex justify-center md:justify-start">
      <Image
        src={`/authors/${article.authorName}.jpg`}
        alt={article.authorName}
        width={140}
        height={140}
        className="rounded-full object-cover border-4 border-red-500 shadow-md"
      />
    </div>

    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        {article.authorName}
      </h2>
      <p className="text-sm text-red-600 font-medium mb-4">Senior Contributor</p>
      <p className="text-gray-700 leading-relaxed mb-6">
        {`${article.authorName} is passionate about impactful storytelling. With a unique voice and deep insights, they turn everyday stories into compelling reads that resonate and inform.`}
      </p>
      <Link
        href={`/authors/${article.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}
        className="inline-flex items-center self-start gap-2 text-red-600 font-semibold hover:underline"
      >
        Read Full Bio
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  </div>
</div>


     


      {/* EXPLORE MORE SECTION */}
      <div className="max-w-7xl my-20 mx-auto">
      
        <h2 className="text-4xl font-bold text-black text-center">You May Also Like</h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
          {randomArticles.map((post, index) => (
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
                  section={post.category}
                  pauthor={post.authorName}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

            <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain/>

    </div>
  );
};

export default PostPage;
