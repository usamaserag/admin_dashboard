import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const storedIsDark = localStorage.getItem("isDark");
    return storedIsDark ? storedIsDark === "true" : false;
  });

  useEffect(() => {
    localStorage.setItem("isDark", isDark.toString()); // Store as a string.
    document
      .getElementById("theme_container")
      .setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <div id="theme_container" data-theme={`${isDark ? "dark" : "light"}`}>
      <div className="container mx-auto">
        <BrowserRouter>
          <Navbar setIsDark={setIsDark} isDark={isDark} />
          <div className="content h-[calc(100vh-120px)]">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
