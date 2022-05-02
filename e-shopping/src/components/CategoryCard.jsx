import React, { useEffect } from "react";
// import { Grid } from "./Products";
import { Grid } from "./Styled";

export const CategoryCard = () => {
  useEffect(() => {
    // dispatch filter Products for every ID change
  }, []);
  return (
    <>
      <h1>Category</h1>
      <Grid data-testid="category-container">
        {/* Iterate and print product cards that are of this category */}
      </Grid>
    </>
  );
};
