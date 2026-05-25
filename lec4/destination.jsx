import React from "react";
import im from '../assets/image.png'

const destinations = [
  {
    name: "Paris, France",
    image: img,
    description:
      "Known as the City of Light, Paris is home to the Eiffel Tower, world-class museums like the Louvre, and charming cafés along the Seine."
  },
  {
    name: "New York, USA",
    image: img,
    description:
      "The Big Apple offers iconic sights such as the Statue of Liberty, Times Square, and Central Park, along with diverse food and culture."
  },
  {
    name: "Tokyo, Japan",
    image: img,
    description:
      "Tokyo blends tradition and modernity with ancient temples, bustling Shibuya Crossing, and cutting-edge technology hubs."
  },
 
];

const TravelDestinations = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Popular Travel Destinations</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {destinations.map((dest, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={dest.image}
              alt={dest.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h2 style={{ margin: "0 0 10px" }}>{dest.name}</h2>
              <p style={{ color: "#555" }}>{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelDestinations;
