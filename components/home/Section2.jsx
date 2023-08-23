"use client";
import Image from "next/image";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Error from "../Error";

const Section1 = ({ newest }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  if (newest.length < 0) return <Error></Error>;

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="text-gray-800 text-3xl font-bold pb-12 text-center">
          Trending
        </h1>

        <Splide options={splideOptions}>
          {newest.map((val, i) => (
            <SplideSlide key={i} className="mb-0.5">
              <div className="grid">
                <div className="image m-3">
                  <Image src={val.img} width={1000} height={1000} alt="image" />
                </div>
                <div className="Info m-3 flex justify-center flex-col">
                  <div className="title">
                    <Link href={"/blogs/${id}"}>
                      <p className="text-gray-800 font-bold text-3xl">
                        {val.title || "Unknown"}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Section1;
