import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/css/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    birthdate: "",
    gender: "여성",
  });

  const [errors, setErrors] = useState({});
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: "유효한 이메일 주소를 입력하세요." });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }

    if (name === "password") {
      if (!validatePassword(value)) {
        setErrors({
          ...errors,
          password:
            "비밀번호는 최소 8자 이상, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.",
        });
      } else {
        setErrors({ ...errors, password: "" });
      }
    }

    if (name === "confirmPassword") {
      if (value !== formData.password) {
        setErrors({
          ...errors,
          confirmPassword: "비밀번호가 일치하지 않습니다.",
        });
      } else {
        setErrors({ ...errors, confirmPassword: "" });
      }
    }
  };

  const handleUsernameCheck = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9090/api/users/check-username",
        formData.username,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        setErrors({ ...errors, username: "사용 가능한 아이디입니다." });
        setUsernameAvailable(true);
      } else {
        setErrors({ ...errors, username: "이미 사용 중인 아이디입니다." });
        setUsernameAvailable(false);
      }
    } catch (error) {
      console.error("아이디 중복 확인 중 오류 발생", error);
      setErrors({ ...errors, username: "아이디 중복 확인에 실패했습니다." });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/register", formData);
      if (response.status === 201) {
        alert("회원가입이 완료되었습니다.");
        setFormData({
          username: "",
          password: "",
          confirmPassword: "",
          name: "",
          email: "",
          birthdate: "",
          gender: "여성",
        });
        setErrors({});
        setUsernameAvailable(false);
        navigate("/login");
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생", error);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="signup-container">
      <h2>신규 가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="check-duplicate">
          <input
            type="text"
            name="username"
            placeholder="아이디"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={handleUsernameCheck}>
            중복 확인
          </button>
        </div>
        {errors.username && <div className="error">{errors.username}</div>}

        <input
          type="password"
          name="password"
          placeholder="영문+숫자+특수문자 포함 8자 이상"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 재입력"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}

        <input
          type="text"
          name="name"
          placeholder="이름을 입력하세요."
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="이메일 주소 입력"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <input
          type="date"
          name="birthdate"
          placeholder="생년월일"
          value={formData.birthdate}
          onChange={handleChange}
          required
        />

        <div className="gender-container">
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="여성">여성</option>
            <option value="남성">남성</option>
          </select>
        </div>

        <button type="submit">가입 완료</button>
      </form>
    </div>
  );
};

export default SignUp;
