import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { _id, banner, price, name, desc } = item;

  return (
    <Link
      to={`/details/${_id}`}
      className="text-decoration-none"
      style={{ color: "inherit" }}
    >
      <div
        className="card"
        style={{
          width: "200px",
          height: "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={banner}
          alt={name}
          style={{
            width: "100%",
            height: "140px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
        <div>
          <h5
            style={{ fontSize: "1rem", marginBottom: "4px", color: "#3C3C3C" }}
          >
            {name}
          </h5>
          <p
            style={{ fontSize: "0.75rem", marginBottom: "6px", color: "#555" }}
          >
            {desc}
          </p>
          <strong style={{ fontSize: "1rem", color: "#4E8A37" }}>
            ₹{price}
          </strong>
        </div>
      </div>
    </Link>
  );
};

export { ProductCard };
