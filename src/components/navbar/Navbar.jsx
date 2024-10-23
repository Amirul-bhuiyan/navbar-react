import React from 'react';

const Navbar = ({ bgColor, hoverEffect }) => {
  return (
    <nav className={`w-full p-4 ${bgColor} mb-4`}>
      <ul className="flex justify-around">
        <li className={`text-white ${hoverEffect} transition-transform duration-300`}>
          <a href="#">Home</a>
        </li>
        <li className={`text-white ${hoverEffect} transition-transform duration-300`}>
          <a href="#">About Us</a>
        </li>
        <li className={`text-white ${hoverEffect} transition-transform duration-300`}>
          <a href="#">Contact</a>
        </li>
        <li className={`text-white ${hoverEffect} transition-transform duration-300`}>
          <a href="#">Visit Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
