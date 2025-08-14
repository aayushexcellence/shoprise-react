import React from 'react';
import faceImg from "../assets/facebook.png";
import instaImg from "../assets/insta.png";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] pt-8 pb-6">
      <div className=" mx-auto px-4">
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row gap-12 mb-4">
          
          {/* Left - Logo & Description */}
          <div className="lg:w-1/3">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#D3D3D3] rounded-full mr-3"></div>
              <h2 className="text-xl font-semibold text-gray-900">ShopRise</h2>
            </div>
            <p className="text-[#333333] text-sm leading-relaxed">
              ShopRise is not just a marketplace; it's a commitment.
              A commitment to uncompromised quality, unparalleled 
              user experience, and unwavering integrity. As we 
              continue to grow and evolve, our core principle 
              remains unchanged: to empower each user to buy and 
              sell with confidence.
            </p>
          </div>

          {/* Middle - Links */}
          <div className="lg:w-1/3 flex flex-row gap-16">
            <div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-[#FF7F50] text-sm">All listing</a>
                </li>
                <li><a href="#" className="text-[#333333] text-sm">About us</a></li>
                <li><a href="#" className="text-[#333333] text-sm">FAQ</a></li>
                <li><a href="#" className="text-[#333333] text-sm">Blog</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#333333] text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-[#333333] text-sm">Terms and Conditions</a></li>
                <li><a href="#" className="text-[#333333] text-sm">Shipping Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Right - Newsletter */}
          <div className="lg:w-1/3">
          <h3 className="text-[#333333] text-lg font-medium mb-2">
            Suscribe to our newsletter
          </h3>
          <div className="flex mb-4">
            <div className="flex w-full border border-gray-300 rounded-full overflow-hidden text-[#333333]">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2.2 text-sm focus:outline-none "
              />
              <button className="bg-[#FF7F50] text-white px-6 py-2 text-sm font-medium rounded-full mr-0.5">
                Suscribe
              </button>
            </div>
          </div>


            {/* Social Icons */}
            <div className='flex justify-end'>
            <div className="flex flex-col space-y-3 ">
              <img src={faceImg} alt="Facebook" className="w-8 h-8" />
              <img src={instaImg} alt="Instagram" className="w-8 h-8" />
            </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center  pt-4">
          <button className="bg-[#1F3A93] text-white px-6 py-2 rounded-full text-sm font-medium">
            Sell on ShopRise
          </button>
          <p className="text-[#000000] text-l mt-3 lg:mt-0">
            © All Right Reserved by | ShopRise | Copyright 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
