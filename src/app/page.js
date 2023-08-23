import Hero from "../../components/home/Hero";
import Section2 from "../../components/home/Section2";
import Category from "../../components/home/Caterogy";
import { postCategorories, postList, postNewest } from "../../lib/ApiRes";
import Section3 from "../../components/home/Section3";

const Home = async () => {
  const categories = await postCategorories();
  const newest = await postNewest();
  // const list = await postList(id);

  return (
    <>
      <Hero />
      <Category categories={categories} />
      <Section2 newest={newest} />
      <Section3 newest={newest} />
    </>
  );
};

export default Home;
