// src/components/AnalyticsOverview.jsx
import React from 'react';

const AnalyticsOverview = () => {
  const stats = [
    { icon: "👥", value: "12k", label: "Followers", change: "+0.8%" },
    { icon: "📈", value: "3k", label: "User Reach", change: "+1.5%" },
    { icon: "📊", value: "15%", label: "Account Views", change: "+2.5%" },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 mt-10">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-5 shadow-sm shadow-black rounded-lg">
          <div className="flex items-center space-x-5">
            <span className="text-3xl">{stat.icon}</span>
            <div>
              <div className="text-lg font-semibold">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          </div>
          <div className="text-green-500 mt-2">{stat.change}</div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsOverview;
