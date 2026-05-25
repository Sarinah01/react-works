import React from "react";
import px from "../assets/image.png"

const trips = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    caption: "Paris 2019 – Eiffel Tower at sunset"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Statue_of_Liberty_7.jpg",
    caption: "New York 2020 – Statue of Liberty visit"
  },
  
];

const TripGallery = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Past Trip Gallery</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {trips.map((trip, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}
          >
            <img
              src={trip.image}
              alt={trip.caption}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <p style={{ padding: "10px", color: "#555" }}>{trip.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripGallery;
