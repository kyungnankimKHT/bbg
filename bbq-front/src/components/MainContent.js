import React from "react";
import "../assets/css/style.css";
import mainImage from "../assets/images/main-image.jpg";

const MainContent = () => {
  return (
    <main className="main-content">
      <img src={mainImage} alt="Main BBQ" className="main-image" />
      <div className="intro-text">
        <h1>Welcome to BBQ Chicken</h1>
        <p>Your favorite place for crispy and delicious chicken!</p>
      </div>
    </main>
  );
};

export default MainContent;
