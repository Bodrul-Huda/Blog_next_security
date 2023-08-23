import Image from "next/image";

const Section1 = () => {
  const bg = {
    background: "url('/graph.png') no-repeat",
    // backgroundPosition: "0% 100%",
    backgroundPosition: "left",
    backgroundSize: "600px",
    // opacity: 0.5,
  };
  return (
    <>
      <div className="bg-slate-500 w-full h-auto py-8 px-4">
        <div className="md:flex justify-between gap-4">
          <div className="relative h-[500px] w-[500px] flex-shrink-0">
            <Image
              src="/wepik-export-202308230911327yKb.png"
              layout="fill"
              alt="about"
              objectFit="contain"
            />
          </div>

          <div className="p-4 space-y-3" style={bg}>
            <h1 className="text-3xl font-bold uppercase text-slate-200">
              About Us
            </h1>
            <div className="border-[1px] border-slate-200 w-10 my-4" />
            <h1 className="text-xl text-slate-200 font-bold">Lorem Ipsum</h1>
            <p className="text-slate-200 pr-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
