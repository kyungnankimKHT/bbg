import React from 'react';
import '../../assets/css/style.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="top-section">
                    <div className="logo-phone">
                        <img src={logo} alt="BBQ Logo" className="logo" />
                        <div className="phone-number">1588 9282</div>
                    </div>
                    <div className="company-info">
                        <p>주식회사 우기시스비비큐</p>
                        <p>주문번호: 1588-9282 고객센터: 1588-9282 창업문의: 080-383-9000</p>
                        <p>대표자: 치킨시 비비큐로 통신판매업신고: 2010-치킨BBQ-1181 사업자등록번호: 207-81-43555</p>
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">페이스북</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">트위터</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">인스타그램</a>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 BBQ 치킨 | 모든 권리 보유
            </div>
        </footer>
    );
}

export default Footer;
