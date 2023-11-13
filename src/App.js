import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser"
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
    <div id="theme_container" className={`${isDark ? "dark" : "light"}`}>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <div className="w-full overflow-hidden">
            <Navbar setIsDark={setIsDark} isDark={isDark} />
            <div className="p-2 h-[calc(100vh-64px)]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/add_user" element={<AddUser />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
