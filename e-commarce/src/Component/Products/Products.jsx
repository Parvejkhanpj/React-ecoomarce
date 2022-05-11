// import styled from "styled-components";
// // import { popularProducts } from "../data";
// import Product from "./Product";

// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// const Products = ({ products }) => {
//   if(!products.length) return <p>Loading....</p>
//   return (
//     <Container>
//       {products.map((product) => (
//         <Product product={product} key={product.id} />
//       ))}
//     </Container>
//   );
// };

// export default Products;

import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ products }) => {
  const classes = useStyles();

  // if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
