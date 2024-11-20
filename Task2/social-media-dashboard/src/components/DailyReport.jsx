// src/components/DailyReport.jsx
import React from 'react';

const DailyReport = () => {
  const reports = [
    { title: "Engagement Rate", value: "12.5k", change: "+1.12%", color: "bg-purple-500" },
    { title: "Account Likes", value: "24.3k", change: "+2.34%", color: "bg-blue-500" },
    { title: "User Comments", value: "27.8k", change: "+4.42%", color: "bg-red-500" },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 mt-10">
      {reports.map((report, index) => (
        <div key={index} className={`p-4 shadow-sm shadow-gray-700 rounded-lg ${report.color} text-white`}>
          <div className="text-lg font-semibold">{report.value}</div>
          <div>{report.title}</div>
          <div className="text-sm mt-2">{report.change}</div>
        </div>
      ))}
    </div>
  );
};

export default DailyReport;
