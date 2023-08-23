import BlockList from "../../../../components/BlockList";
import { postList } from "../../../../lib/ApiRes";

const ByCategory = async ({ params }) => {
  let id = params.id;
  let data = await postList();
  console.log(data);

  return (
    <>
      <BlockList posts={data} />
    </>
  );
};

export default ByCategory;
