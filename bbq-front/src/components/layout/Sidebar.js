import React from 'react';
import '../../assets/css/style.css';

const Sidebar = () => {
  const newItems = [
    {
      name: "땡초찹쌀양념치킨",
      description: "땡초와 쫀득한 찹쌀의 완벽한 조화 !",
    },
    {
      name: "바사칸 윙",
      description: "바삭하고 고소한 맛이 일품인 윙 메뉴 !",
    }
  ];

  const specialSauces = [
    "갈릭 소이 소스",
    "스파이시 소스",
    "허니 머스터드 소스",
    "비비큐 시그니처 소스",
    
  ];

  return (
    <div className="sidebar">
      <div className="delivery-options">
        <button className="delivery-button">배달</button>
        <button className="pickup-button">포장</button>
      </div>
      <div className="coupon-section">
        <button className="coupon-button">쿠폰 등록</button>
      </div>
      <div className="new-menu">
       
        <div className="special-sauces">
        <h4 className="menu-title special-sauces-title">새로 나왔어요!</h4>
          {newItems.map((item, index) => (
            <div key={index} className="new-menu-item">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="special-sauces">
          <h4 className="menu-title special-sauces-title">특제 소스</h4>
          <ul className="sauce-list">
            {specialSauces.map((sauce, index) => (
              <li key={index} className="sauce-item">{sauce}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
