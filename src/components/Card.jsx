import React from "react";

function Card({ title, price, features }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-price">{price}</p>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="card-button">Select</button>
    </div>
  );
}

export default Card;
