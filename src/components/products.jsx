import React from "react";
import locationImg from "../assets/location.png"
import prodImg from "../assets/prod.png"

// Sample product data
const products = Array(36).fill({
  title: "Liter trolley sprayer",
  price: "$9.99",
  condition: "Used",
  location: "Los Angeles, CA",
  image: "https://via.placeholder.com/200x150.png?text=Sprayer",
});

const ProductGrid = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Filters */}
      <div className="flex items-center justify-between p-4 border-[#D3D3D3]">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="text-sm text-[#333333]">Sort by:</span>
            <select className="border border-[#D3D3D3] rounded px-3 py-2 ml-3 text-[#333333]">
              <option>Less viewed</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <img src={locationImg} alt="location" className="w-4 h-4" />
          <select className="text-[#1F3A93] text-l bg-transparent border-none outline-none cursor-pointer">
            <option>Los Angeles,CA - 10 miles</option>
            <option>New York, NY - 15 miles</option>
            <option>Chicago, IL - 20 miles</option>
          </select>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center justify-between p-2">
        <div className="flex gap-5 flex-wrap">
          {[
            "Arts & Crafts",
            "Antiques & Collectibles", 
            "Auto Parts",
            "Books, Movies & Music",
            "Electronics",
            "Furniture",
            "Home Improvement & Tools",
          ].map((cat, idx) => (
            <button
              key={idx}
              className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-100 flex items-center gap-1"
            >
              {cat}
              <span className="text-[#000000]">×</span>
            </button>
          ))}
        </div>
        <button className="text-[#FF7F50] text-m font-medium">Clear all categories</button>
      </div>

      {/* Products Grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
          >
            <img
              src={prodImg}
              alt={product.title}
              className="w-full h-40 object-cover rounded-2xl mb-2"
            />
            <h3 className="text-[#FF7F50] text-sm font-medium hover:underline cursor-pointer mb-1">
              {product.title}
            </h3>
             <div className="flex items-center gap-1 mb-1">
              <span className="text-blue-600 text-sm font-semibold">{product.price}</span>
              <span className="text-gray-500 text-xs">({product.condition})</span>
            </div>
            <p className="text-gray-500 text-xs">{product.location}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 p-4 mb-8">
        <button className="px-3 py-1  hover:bg-gray-100">
          &lt;
        </button>
        <button className="px-3 py-1 bg-[#D3D3D3]">
          1
        </button>
        <button className="px-3 py-1  hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 hover:bg-gray-100">
          3
        </button>
        <span className="px-2">...</span>
        <button className="px-3 py-1  hover:bg-gray-100">
          9
        </button>
        <button className="px-3 py-1 ">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;