// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-gray-100 h-screen p-6 space-y-8">
      <div className="text-xl font-semibold">Data Integration</div>
      <ul className="space-y-4">
        <li className="text-gray-600">Analytics</li>
        <li className="text-gray-600">Visibility</li>
        <li className="text-gray-600">Content</li>
        <li className="text-gray-600">Media</li>
      </ul>
      <div className="text-xl font-semibold">Performance Monitoring</div>
      <ul className="space-y-4">
        <li className="text-gray-600">Daily Report</li>
        <li className="text-gray-600">Automation</li>
        <li className="text-gray-600">Templates</li>
      </ul>
      <div className="text-xl font-semibold">Other Menu</div>
      <ul className="space-y-4">
        <li className="text-gray-600">Settings</li>
        <li className="text-gray-600 text-red-500">Log Out</li>
      </ul>
    </div>
  );
};

export default Sidebar;
