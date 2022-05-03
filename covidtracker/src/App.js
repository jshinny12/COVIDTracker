import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Testing from "./components/Testing";
import Data from "./components/Data";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import "antd/dist/antd.min.css";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div style={{ minWidth: "650px" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/data" element={<Data />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
