import Row1 from "../components/Home/Row1";
import Deal from "../components/Home/Deal";
import FlashSale from "../components/Home/FlashSale";
import BestSelling from "../components/Home/BestSelling";
import Categories from "../components/Home/Categories";
import Services from "../components/common/components/Services";
import AllProducts from "../components/Home/AllProducts";
import Featured from "../components/Home/Featured";
import { ITEMS } from "../components/common/functions/items";

const Home = () => {
  return (
    <div className="flex flex-col md:mx-32 mt-28 gap-3">
      <Row1 />
      <FlashSale items={ITEMS} />
      <Categories />
      <BestSelling items={ITEMS} />
      <Deal />
      <AllProducts items={ITEMS} />
      <Featured />
      <Services />
    </div>
  );
};

export default Home;
