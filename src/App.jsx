import React from "react";
import Card from "./components/Card";

const plans = [
  {
    title: "Basic",
    price: "$10/mo",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Pro",
    price: "$20/mo",
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    title: "Enterprise",
    price: "$30/mo",
    features: ["Feature X", "Feature Y", "Feature Z"],
  },
];

function App() {
  return (
    <div className="app">
      <h1>Pricing Plans</h1>
      <div className="cards-container">
        {plans.map((plan) => (
          <Card
            key={plan.title}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}

export default App;