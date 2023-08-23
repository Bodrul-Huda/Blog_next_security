import Image from "next/image";
import Link from "next/link";
import { postNewest } from "../../../lib/ApiRes";

const Blog = async () => {
  const newest = await postNewest();

  return (
    <>
      <div className=" container mx-auto py-8 px-5">
        <Link href="/">
          <button className="py-2">&#60;&#60;Back to Home</button>
        </Link>
        <h1 className="text-xl font-semibold py-2">Latest Posts</h1>
        <div className=" flex flex-wrap ">
          {newest.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className=" bg-slate-100 w-96 h-100 border rounded-md my-3 mx-3 shadow-md hover:scale-105 hover:ease-in-out hover:duration-700 "
            >
              <div className="relative w-full h-96">
                <Image src={post.img} layout="fill" alt="movies" />
              </div>
              <h3 className="text-lg font-semibold text-center py-2">
                {post.title}
              </h3>
              <p className="p-3">{post.short}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
