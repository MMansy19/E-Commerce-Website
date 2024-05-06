import { useState, useEffect } from "react";
import { Grid, Typography, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { ITEMS } from "../components/common/functions/items";
import FlashSaleItem from "../components/common/components/FlashSaleItem";
import i18n from "../components/common/components/LangConfig";
import RedButton from "../components/common/components/RedButton";
import WhiteButton from "../components/common/components/WhiteButton";

const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [displayedItems, setDisplayedItems] = useState(8);
  const duplicatedItems = Array.from({ length: 2 }, () => ITEMS).flat();
  const totalItems = duplicatedItems.length;

  const handleLoadMore = () => {
    window.scrollTo({
      top: window.scrollY - 1500,
      behavior: "smooth",
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDisplayedItems(displayedItems + 3);
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto mt-40 flex flex-col gap-5">
      <Typography variant="h3" align="center" gutterBottom>
        {i18n.t("allProducts.title")}
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {loading
          ? Array.from({ length: displayedItems }).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={200}
                  animation="wave"
                />
              </Grid>
            ))
          : duplicatedItems.slice(0, displayedItems).map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                <FlashSaleItem
                  item={item}
                  totalItems={totalItems}
                  stars={item.stars}
                  rates={item.rates}
                />
              </Grid>
            ))}
      </Grid>
      {displayedItems < totalItems && (
        <div className="mt-4 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLoadMore}
            // onClick={() =>
            //   window.scrollTo({
            //     top: window.scrollY - 1000,
            //     behavior: "smooth",
            //   })
            // }
          >
            Load More
          </button>
        </div>
      )}
      <div className="mt-6 flex justify-around items-center md:mx-12">
        <Link to="..">
          <WhiteButton name={i18n.t("redButtons.backToHomePage")} />
        </Link>
        <Link to="/category">
          <RedButton name={i18n.t("Explore By Category")} />
        </Link>
      </div>
    </div>
  );
};

export default AllProducts;
