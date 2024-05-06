import FlashSaleItem from "../common/components/FlashSaleItem";
import PropTypes from "prop-types";
import RedTitle from "../common/components/RedTitle";
import Arrows from "../common/components/Arrows";
import ViewAll from "../common/components/ViewAll";
import i18n from "../common/components/LangConfig";
import { Grid, Typography } from "@mui/material";

const AllProducts = ({ items }) => {
  return (
    <>
      <div className="py-12">
        <RedTitle title={i18n.t("allProducts.redTitle")} />
        <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
          <div className="flex gap-20 flex-col md:flex-row ">
            <h2 className="text-2xl md:text-3xl font-semibold ">
              {i18n.t("allProducts.title")}
            </h2>
          </div>
          <Arrows />
        </div>
        <div className="relative mt-10 flex flex-row gap-2 md:gap-12 transition-transform duration-300 transform ">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {items.slice(0, 6).map((item, index) => (
              <Grid item key={item.id} xs={0} sm={6} md={4} lg={3}>
                <FlashSaleItem
                  item={item}
                  index={index}
                  totalItems={items.length}
                  stars={item.stars}
                  rates={item.rates}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className=" flex justify-center">
        <ViewAll name={i18n.t("redButtons.viewAllProducts")} />
      </div>
    </>
  );
};

AllProducts.propTypes = {
  items: PropTypes.array.isRequired,
};

export default AllProducts;
