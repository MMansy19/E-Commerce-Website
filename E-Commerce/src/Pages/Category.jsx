import { useState } from "react";
import { Grid, Typography, Menu, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom";
import RedButton from "../components/common/components/RedButton";
import FlashSaleItem from "../components/common/components/FlashSaleItem";
import i18n from "../components/common/components/LangConfig";
import { ITEMS } from "../components/common/functions/items";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ViewAll from "../components/common/components/ViewAll";
import WhiteButton from "../components/common/components/WhiteButton";

const Category = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("General");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setAnchorEl(null);
  };

  // Filter ITEMS based on the selected category
  const filteredItems = ITEMS.filter((item) => item.type === selectedCategory);

  return (
    <div className="container mx-auto mt-40 flex flex-col gap-5">
      <Typography variant="h3" align="center" gutterBottom>
        {i18n.t("allProducts.title")}
      </Typography>
      <div className="flex justify-center mb-4">
        <Button
          style={{
            backgroundColor: "rgba(219, 68, 68, 1)",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "5px",
            textTransform: "capitalize",
            boxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
          }}
          variant="contained"
          startIcon={<ArrowDropDownIcon />}
          onClick={handleMenuOpen}
        >
          Choose By Category
        </Button>

        <Menu
          id="category-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {["General", "Technology", "Gaming", "Clothes", "New Arrival"].map(
            (category) => (
              <MenuItem
                key={category}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </MenuItem>
            )
          )}
        </Menu>
      </div>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {filteredItems.map((item, index) => (
          <Grid item key={item.id} xs={0} sm={6} md={4} lg={3}>
            <FlashSaleItem
              item={item}
              index={index}
              totalItems={filteredItems.length}
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
        <ViewAll name={i18n.t("redButtons.viewAllProducts")} />
      </div>
    </div>
  );
};

export default Category;
