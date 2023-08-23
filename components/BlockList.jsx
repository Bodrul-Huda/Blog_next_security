import Image from "next/image";
import Link from "next/link";

const BlockList = ({ posts }) => {
  return (
    <>
      <div className="container mx-auto my-8 p-8">
        <div className="flex flex-grow flex-wrap gap-6">
          {posts.map((post, i) => (
            <Link
              href={`/details/${post.id}`}
              className="w-96"
              key={i.toString()}
            >
              <figure>
                <Image src={post.img} alt="image!" width={500} height={500} />
              </figure>
              <div>
                <h2>{post.short}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlockList;
