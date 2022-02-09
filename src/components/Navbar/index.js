import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./index.css"
import { Home, Cart, AdvisorDetail, Category, WishList } from "../../pages"
export default function App() {
  return (
    <>
      <nav class="navBlock">
        <h2>FinComm</h2>
        <ul class="navList">
          <li className="navLink">
            <Link to="/">Home</Link>
          </li>
          <li className="navLink">
            <Link to="/category/All">category</Link>
          </li>
          <li className="navLink">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="navLink">
            <Link to="/WishList">WishList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:showCategoryType" element={<Category />} />
        <Route path="/AdvisorDetail/:advisorId" element={<AdvisorDetail />} />
        <Route path="/AdvisorDetail" element={<AdvisorDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
