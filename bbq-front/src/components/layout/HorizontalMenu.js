import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faBox,
  faCrown,
  faDrumstickBite,
  faPepperHot,
  faExchangeAlt,
  faRobot,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/HorizontalMenu.css";

const HorizontalMenu = ({ setSelectedCategory }) => {
  const menuItems = [
    { name: "🍴 신메뉴", icon: faUtensils, category: "신메뉴" },
    { name: "📦 세트메뉴", icon: faBox, category: "세트메뉴" },
    { name: "👑 치킨왕", icon: faCrown, category: "치킨왕" },
    { name: "🍗 후라이드", icon: faDrumstickBite, category: "후라이드" },
    { name: "🌶️ 양념", icon: faPepperHot, category: "양념" },
    { name: "🔄 반반", icon: faExchangeAlt, category: "반반" },
    { name: "🤖 AI추천", icon: faRobot, category: "AI추천메뉴" },
    { name: "🌱 시즈닝", icon: faSeedling, category: "시즈닝" },
  ];

  const handleCategoryClick = (category) => {
    if (category === "신메뉴") {
      setSelectedCategory(category);
    } else {
      alert("🐱 준비중입니다! 🐶");
    }
  };

  return (
    <div className="horizontal-menu">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="menu-item"
          onClick={() => handleCategoryClick(item.category)}
        >
          <FontAwesomeIcon icon={item.icon} className="menu-icon" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default HorizontalMenu;
