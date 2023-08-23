import Image from "next/image";
import Link from "next/link";
import Error from "../Error";

const Section2 = ({ newest }) => {
  if (newest.length < 0) return <Error></Error>;

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-2xl text-center text-gray-800 ">
          Recent Post
        </h1>

        <div className="grid md:grid-cols2 lg:grid-cols-3 gap-14 py-5">
          {newest.map((value, index) => (
            <Post data={value} key={index}></Post>
          ))}
        </div>
      </div>
    </section>
  );
};

function Post({ data }) {
  const { title, id, img, short } = data;

  return (
    <div className="item border rounded p-2 shadow-md hover:border-blue-500">
      <div className="image">
        <Image
          src={img || "/blogs/${id}"}
          width={500}
          height={500}
          alt="image1"
        />
      </div>
      <div className="info py-2 flex justify-center flex-col ">
        <div className="title py-2">
          <Link legacyBehavior href={"/blogs/${id}"}>
            <h1 className="text-gray-800 font-bold text-xl p-2 text-justify">
              {title || "Unknown"}
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section2;
