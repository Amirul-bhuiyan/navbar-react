import React from 'react';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Red Menu Bar with Scale on Hover */}
      <Navbar bgColor="bg-red-500" hoverEffect="hover:scale-110 hover:text-gray-200" />

      {/* Blue Menu Bar with Rotate on Hover */}
      <Navbar bgColor="bg-blue-500" hoverEffect="hover:rotate-12 hover:text-gray-200" />

      {/* Green Menu Bar with Text Shadow Effect on Hover */}
      <Navbar bgColor="bg-green-500" hoverEffect="hover:text-yellow-300 hover:shadow-lg" />

      {/* Purple Menu Bar with Skew on Hover */}
      <Navbar bgColor="bg-purple-500" hoverEffect="hover:skew-y-3 hover:text-pink-300" />

      {/* Yellow Menu Bar with Border Expansion on Hover */}
      <Navbar bgColor="bg-yellow-500" hoverEffect="hover:border-b-4 hover:border-white" />

      {/* Content below menu bars */}
      <div className="pt-10">
        <h1 className="text-center text-3xl">Welcome to the Website</h1>
        <p className="text-center mt-4">This is the content of the page below the menu bars.</p>
      </div>
    </div>
  );
};

export default App;
