import React from 'react';
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import CategoryMenu from "./CategoryMenu"; 
import '../../assets/css/style.css';

const BannerWithSidebar = () => {
  return (
    <div className="content-container">
      <div className="banner-sidebar-container">
        <Banner />
        <Sidebar />
      </div>
      <CategoryMenu />  
    </div>
  );
}

export default BannerWithSidebar;
