import React from "react";
import { useSelector } from "react-redux";
import CardProd from "./CardProd";

const ListProd = ({ products, isProfile }) => {
  // const products = useSelector(state => state.productReducer.products)
  // console.log(products)
  console.log(isProfile);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {products.map((elt) => (
        <CardProd product={elt} key={elt._id} />
      ))}
    </div>
  );
};

export default ListProd;
