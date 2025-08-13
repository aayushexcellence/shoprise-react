import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 border-b bg-white">
      <div className="flex items-center gap-6">
        <span className="font-bold text-lg">ShopRise</span>
        <nav className="flex gap-4 text-sm text-gray-600">
          <a href="#">All listing</a>
          <a href="#">About us</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-1 border rounded-md">Sign In</button>
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-1 rounded-md"
        />
      </div>
    </header>
  );
};

export default Header;
