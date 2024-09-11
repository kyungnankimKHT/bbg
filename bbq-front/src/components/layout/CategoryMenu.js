import React from 'react';
import '../../assets/css/style.css';

const categories = [
  { name: "신메뉴", icon: require('../../assets/images/category-icons/new-menu.png') },
  { name: "세트메뉴", icon: require('../../assets/images/category-icons/set-menu.png') },
  { name: "치킨왕", icon: require('../../assets/images/category-icons/chicken-king.png') },
  { name: "후라이드", icon: require('../../assets/images/category-icons/fried.png') },
  { name: "양념", icon: require('../../assets/images/category-icons/seasoned.png') },
  { name: "사이드메뉴", icon: require('../../assets/images/category-icons/side-menu.png') },
];

const newMenuItems = [
  { name: "땡초찹쌀양념치킨", image: require('../../assets/images/menu/new-menu-item-1.png'), price: "25,000원" },
  { name: "바사칸 윙", image: require('../../assets/images/menu/new-menu-item-2.png'), price: "23,000원" },
];

const recommendedMenuItems = [
  { name: "자메이카 소떡만나치킨", image: require('../../assets/images/menu/recommended-item-1.png'), price: "24,000원" },
  { name: "황금올리브치킨™", image: require('../../assets/images/menu/recommended-item-2.png'), price: "23,000원" },
];

const CategoryMenu = () => {
  return (
    <div className="category-menu-container">
      <div className="category-menu">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.icon} alt={category.name} className="category-icon" />
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      <div className="menu-section new-menu-section">
        <h3>새로 나왔어요!</h3>
        <div className="menu-items">
          {newMenuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-section recommended-menu-section">
        <h3>이런 메뉴는 어때요?</h3>
        <div className="menu-items">
          {recommendedMenuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryMenu;
