// src/components/Navbar.jsx
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <input 
        type="text" 
        placeholder="Type here to search..."
        className="border rounded-full px-4 py-2 w-1/3"
      />
      <div className="flex space-x-4 items-center">
        <span>🔔</span>
        <span>✉️</span>
        <span>⚙️</span>
        <img
          src="https://cdn.hackr.io/uploads/posts/attachments/1678886164ZO82gcRXK3.png"
          alt="Profile" 
          className="rounded-full w-8 h-8"
        />
      </div>
    </div>
  );
};

export default Navbar;
