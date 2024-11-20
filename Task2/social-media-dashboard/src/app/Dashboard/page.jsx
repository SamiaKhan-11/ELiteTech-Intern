"use client"
import React from "react";
import Image from "next/image"; // Next.js Image component

// Sample images for next and icons
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Navbar />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard
          title="Followers"
          value="12K"
          change="+5%"
          bgColor="bg-green-100"
        />
        <DashboardCard
          title="Posts"
          value="1,024"
          change="+3%"
          bgColor="bg-blue-100"
        />
        <DashboardCard
          title="Engagement"
          value="87%"
          change="-2%"
          bgColor="bg-yellow-100"
        />
      </div>
    </div>
  </div>
);
};

export default HomePage;

