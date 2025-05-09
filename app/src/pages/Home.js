import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { onGetProducts } from "../store/actions";

const Home = () => {
  const { categories, products } = useSelector(
    (state) => state.shoppingReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetProducts());
  }, [dispatch]);

  const listOfCategories = () => {
    return (
      <div
        className="d-flex flex-wrap justify-content-center my-3"
        style={{ gap: "10px" }}
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {}}
            className="btn btn-lg"
            style={{
              backgroundColor: "#4E8A37",
              borderRadius: 30,
              color: "#FFF",
            }}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
    );
  };

  const listOfProducts = () => {
    return (
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{
          gap: "1.5rem",
          padding: "1rem 2rem",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="container-fluid p-0">
      <img src="bg.jpg" className="img-fluid" alt="Background" />

      <div
        className="container-fluid mb-4"
        style={{
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#61AB4F",
        }}
      >
        {categories && listOfCategories()}
      </div>

      {products && listOfProducts()}
    </div>
  );
};

export { Home };
