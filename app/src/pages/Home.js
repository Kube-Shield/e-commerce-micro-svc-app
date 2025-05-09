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

  const styles = {
    homeContainer: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
    backgroundImage: {
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    categoriesSection: {
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#61AB4F",
    },
    categoriesContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
    },
    categoryBtn: {
      backgroundColor: "#4E8A37",
      borderRadius: "30px",
      color: "#FFF",
      padding: "10px 20px",
      border: "none",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    productsSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      margin: "2rem auto",
      maxWidth: "1200px",
      maxHeight: "500px",
      overflowY: "auto",
    },
    productsGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1.5rem",
      paddingTop: "30pw",
      paddingBottom: "30px",
    },
    orderButton: {
      marginTop: "10px",
      backgroundColor: "#FFA500",
      color: "#FFF",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
    },
  };

  const listOfCategories = () => {
    return (
      <div style={styles.categoriesContainer}>
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {}}
            style={styles.categoryBtn}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
    );
  };

  const handleOrder = (productId) => {
    alert(`Order placed for product ID: ${productId}`);
    // You can dispatch an action here to handle the order logic
  };

  const listOfProducts = () => {
    return (
      <div style={styles.productsGrid}>
        {products.map((item) => (
          <div key={item._id}>
            <ProductCard item={item} onOrder={handleOrder} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.homeContainer}>
      <img src="bg.jpg" alt="Background" style={styles.backgroundImage} />
      <div style={styles.categoriesSection}>
        {categories && listOfCategories()}
      </div>
      <div style={styles.productsSection}>{products && listOfProducts()}</div>
    </div>
  );
};

export { Home };
