import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Login.css";
import axios from "axios";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9090/api/users/login",
        formData
      );
      if (response.status === 200) {
        alert("로그인 성공!");
        localStorage.setItem("username", response.data.username);
        navigate("/");
      } else {
        alert("로그인 실패. 아이디와 비밀번호를 확인하세요.");
      }
    } catch (error) {
      console.error("로그인 중 오류 발생", error);
      alert("로그인 실패. 서버 오류가 발생했습니다.");
    }
  };

  const handleSnsClick = (platform) => {
    alert(`준비중 입니다. 😅`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="BBQ Logo" className="login-logo" />
        <h2 className="login-title">로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="username"
              placeholder="아이디를 입력하세요."
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요."
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="remember-me-container">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label>로그인 상태유지</label>
          </div>
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
        <div className="login-links">
          <a href="/forgot-password">비밀번호 찾기</a> |
          <a href="/find-username">아이디 찾기</a> |
          <a href="/signup">회원가입</a>
        </div>
        <div className="sns-login">
          <p>SNS 회원가입</p>
          <div className="sns-icons">
            <a
              href="#"
              className="sns-icon naver"
              onClick={() => handleSnsClick("naver")}
            ></a>
            <a
              href="#"
              className="sns-icon kakao"
              onClick={() => handleSnsClick("kakao")}
            ></a>
            <a
              href="#"
              className="sns-icon google"
              onClick={() => handleSnsClick("google")}
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
