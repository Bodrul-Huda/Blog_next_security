import Image from "next/image";

const Error = () => {
  return (
    <div className="text-center py-14">
      <h1 className="font-bold r py-2 text-orange-600 text-md">
        Something went Wrong
      </h1>
      <Image
        className="mx-auto"
        src="/404_Not_found.png"
        width={300}
        height={300}
        alt="404"
      ></Image>
    </div>
  );
};

export default Error;
