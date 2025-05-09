import React from "react";

const ProductCard = ({ item, onOrder }) => {
  const { _id, banner, price, name, desc } = item;

  const styles = {
    card: {
      width: "200px",
      height: "350px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "10px",
      padding: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s",
    },
    image: {
      width: "100%",
      height: "140px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "10px",
    },
    title: {
      fontSize: "1rem",
      marginBottom: "4px",
      color: "#3C3C3C",
    },
    description: {
      fontSize: "0.75rem",
      marginBottom: "6px",
      color: "#555",
    },
    price: {
      fontSize: "1rem",
      color: "#4E8A37",
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

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={banner} alt={name} style={styles.image} />
      <div>
        <h5 style={styles.title}>{name}</h5>
        <p style={styles.description}>{desc}</p>
        <strong style={styles.price}>₹{price}</strong>
      </div>
      <button style={styles.orderButton} onClick={() => onOrder(_id)}>
        Order Now
      </button>
    </div>
  );
};

export { ProductCard };
