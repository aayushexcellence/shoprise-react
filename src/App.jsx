import React from "react";
import { Menu, ChevronDown, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-[#D3D3D3] bg-white font-inter text-[#333]">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#D3D3D3]" />
          <span className="text-lg font-semibold">ShopRise</span>
        </div>

        {/* Center: Main Nav */}
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#" className="text-orange-500 font-medium">All listing</a>
          <a href="#" className="hover:text-black">About us</a>
          <a href="#" className="hover:text-black">FAQ</a>
          <a href="#" className="hover:text-black">Blog</a>
        </nav>

        {/* Right: Sign In */}
        <button className="bg-[#1F3A93] hover:bg-[#15307A] text-white px-6 py-2 rounded-full text-sm">
          Sign In
        </button>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-8 py-3 border-t border-[#D3D3D3]">
        {/* Left: Categories & Filters */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm mb-3 md:mb-0">
          <button className="flex items-center gap-2 text-black">
            <Menu size={18} />
            Categories
            <ChevronDown size={14} />
          </button>

          <span className="h-6 w-px bg-gray-400 hidden md:inline-block" />

          <a href="#" className="hover:text-black">For you</a>
          <a href="#" className="hover:text-black">Local</a>
          <a href="#" className="hover:text-black">Selling</a>
          <a href="#" className="hover:text-black">Buying</a>

          <button className="flex items-center gap-1 text-black">
            More
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Right: Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full md:w-auto max-w-full">
          <div className="px-3 text-gray-500">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 text-sm outline-none flex-grow min-w-0"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 text-sm rounded-full">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
