import Image from "next/image";
import Link from "next/link";
import { details } from "../../../../lib/ApiRes";

export default async function Post({ params }) {
  const id = params.id;
  const detail = await details(id);
  const { title, img, content } = detail.postDetails;

  return (
    <section className="container mx-auto py-16 px-4 w-1/2">
      <Link href="/blog">
        <button className="py-2">&#60;&#60;Back</button>
      </Link>

      <div>
        <h1 className="text-gray-800 text-center font-bold text-xl">{title}</h1>
      </div>
      <div className="image m-3 pt-5 flex justify-center">
        <Image src={img} width={1000} height={1000} alt="image1" />
      </div>
      <div className=" p-2  flex justify-center text-justify">
        <p className="text-gray-600">{content}</p>
      </div>
    </section>
  );
}
