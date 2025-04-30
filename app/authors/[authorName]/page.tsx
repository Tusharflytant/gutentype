import allArticles from "@/constants/all";
import Image from "next/image";
import Link from "next/link";
import CreationDate from "@/components/Date";
import Post3 from "@/components/Post3";
import money from "@/constants/money";


const formatName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const AuthorPage = async ({
  params,
}: {
  params: Promise<{ authorName: string }>;
}) => {
  const { authorName } = await params;

  const authorArticles = allArticles.filter(
    (article) => formatName(article.authorName) === authorName
  );

  if (authorArticles.length === 0) {
    return (
        
      <div className="mt-20 text-center text-3xl font-bold text-gray-800">
        Author Not Found
      </div>
    );
  }

  const author = authorArticles[0];

  return (

    <>
    <div className="px-6 md:px-10  lg:px-16 xl:px-24 mt-10">
      {/* Author Info Section */}
      <div className="max-w-5xl mx-auto mt-40 mb-20 rounded-2xl overflow-hidden  flex flex-col md:flex-row bg-white border border-gray-300">
  {/* Sidebar Strip */}
  <div className="bg-red-600 w-full md:w-1/4 flex items-center justify-center py-10">
    <Image
      src={`/authors/${author.authorName}.jpg`}
      alt={author.authorName}
      width={120}
      height={120}
      className="rounded-full border-4 border-white shadow-lg object-cover size-28"
    />
  </div>

  {/* Content */}
  <div className="w-full md:w-3/4 p-8 sm:p-10">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
      {author.authorName}
    </h2>
    <p className="mt-3 text-sm uppercase tracking-widest text-red-600 font-semibold">
      Contributor | Writer | Storyteller
    </p>
    <div className="w-16 h-1 bg-red-500 my-4"></div>
    <p className="text-gray-700 text-base leading-relaxed">
      Passionate about meaningful storytelling,{" "}
      <span className="font-semibold">{author.authorName}</span> crafts content that’s both thought-provoking and accessible.
      With a deep understanding of the subject and a flair for clarity, they bring topics to life that resonate with readers of all backgrounds.
    </p>
  </div>
</div>





      {/* Articles List */}

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-10 mt-16 px-4">
  {/* Left Column – Author Posts */}
  <div className="w-full lg:w-2/3">
    

    <div className="grid grid-cols-1 gap-12">
      {authorArticles.map((post, index) => (
        <div key={index}>
          <Link
            href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="block"
          >
            <h2 className="text-xl md:text-3xl font-bold text-black mb-2">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              <CreationDate articleNumber={post.articleNumber} />
            </p>

            <Image
              src={`/articles/${post.imgUrl}`}
              width={2000}
              height={2000}
              alt={post.title}
              className="h-[250px] xl:h-[500px] w-full object-cover  shadow-md mb-4"
            />

            <div className="text-lg text-gray-600 line-clamp-3">{post.contents[0]}</div>
          </Link>

          {/* Separator */}
          {index !== authorArticles.length - 1 && (
      <div className="w-1/2 border-t-2 border-dashed border-gray-400 mt-10" />
    )}
        </div>
      ))}
    </div>
  </div>

  {/* Right Column – Trending Sidebar */}
  <div className="w-full lg:w-[350px] h-fit sticky top-32 self-start bg-white rounded-xl shadow-lg px-6 py-6">
    <h2 className="text-black text-2xl font-bold mb-6 border-b pb-2 border-gray-300">
      Other Authors To Explore
    </h2>

    <div className="space-y-8">
      {money.slice(0, 3).map((post, index) => (
        <Link
          key={index}
          href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          passHref
        >
          
            <div className="bg-gray-100 rounded-lg shadow-sm p-3">
              <Post3
                pimg={`/articles/${post.imgUrl}`}
                pheading={post.title}
                pcontent={post.contents}
                articleNumber={post.articleNumber}
              />
            </div>
          
        </Link>
      ))}
    </div>
  </div>
</div>


    </div>
     

    </>
  );
};

export default AuthorPage;
