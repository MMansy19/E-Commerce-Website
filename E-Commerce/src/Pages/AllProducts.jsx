import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ITEMS } from "../components/common/functions/items";
import FlashSaleItem from "../components/common/components/FlashSaleItem";
import i18n from "../components/common/components/LangConfig";
import RedButton from "../components/common/components/RedButton";
import WhiteButton from "../components/common/components/WhiteButton";

const AllProducts = () => {
  return (
    <div className="container mx-auto mt-40 flex flex-col gap-5">
      <Typography variant="h3" align="center" gutterBottom>
        {i18n.t("allProducts.title")}
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {ITEMS.map((item, index) => (
          <Grid item key={item.id} xs={0} sm={6} md={4} lg={3}>
            <FlashSaleItem
              item={item}
              index={index}
              totalItems={ITEMS.length}
              stars={item.stars}
              rates={item.rates}
            />
          </Grid>
        ))}
      </Grid>

      <div className="mt-6 flex  justify-around items-center md:mx-12 ">
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
