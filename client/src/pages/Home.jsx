import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProd } from "../JS/actions/productAction";
import ListProd from "../components/ListProd";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  // console.log(products)
  useEffect(() => {
    dispatch(getAllProd());
  }, [dispatch]);
  return (
    <div className="page">
      <h1>Our Store...</h1>
      {/* <img
        src="https://media.istockphoto.com/id/1397398956/fr/photo/digital-shield-3d-rendu-photo-darchives.jpg?b=1&s=612x612&w=0&k=20&c=WBqoMplxEsTOM3xAKDqrdfmlfEgI8jVeVgVwg-RHxeU="
        alt="security"
      /> */}
      <ListProd products={products} isProfile={false } />
    </div>
  );
};

export default Home;
