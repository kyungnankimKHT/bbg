import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Header.css';
import logo from '../../assets/images/logo.png';

const Header = ({ username, onLogout }) => {
  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="BBQ Logo" className="logo" />
        </Link>
        
        <div className="order-toggle">
          <button className="order-button active">BBQ주문</button>
          <button className="order-button">BBQ몰</button>
        </div>
        
        <nav className="nav-menu">
          <ul className="nav-links">
          <li><Link to="/menu">메뉴</Link></li>
            <li><a href="/">매장 찾기</a></li>
            <li><a href="/">이벤트</a></li>
            <li><a href="/">비비큐 스토리</a></li>
          </ul>
        </nav>
        
        <div className="nav-actions">
          {username ? (
            <div className="user-info">
              <span>{username}님</span>
              <button className="logout-link" onClick={onLogout}>로그아웃</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="login-link">로그인</Link>  
              <span> | </span>
              <Link to="/signup" className="signup-link">회원가입</Link>  
            </div>
          )}
          <div className="icons">
            <a href="/" className="icon location-icon"></a>
            <a href="/" className="icon user-icon"></a>
            <a href="/" className="icon cart-icon"></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
