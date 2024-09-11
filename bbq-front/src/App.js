import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/page/Main";
import SignUp from "./components/page/SignUp";
import Login from "./components/page/Login";
import Menu from "./components/page/Menu";
import ProductDetail from "./components/page/ProductDetail";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleLogin = (username) => {
    localStorage.setItem("username", username);
    setUsername(username);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };

  return (
    <Router>
      <div className="App">
        <Header username={username} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
