import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOne } from "../JS/actions/productAction";

const DescriptionProd = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);
  //   console.log(params);
//   console.log(product);
  useEffect(() => {
    dispatch(getOne(params.id));
  }, [dispatch, params.id]);
    return (
      <div>
            <img src={product.image} alt={product.title} />
            <h1>{product.title }</h1>
      </div>
    );
};

export default DescriptionProd;
