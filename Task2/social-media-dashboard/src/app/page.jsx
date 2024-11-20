'use client'
import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
const DailyReport = dynamic(() => import('../components/DailyReport'), { ssr: false });
const ChartSection = dynamic(() => import('../components/ChartSection'), { ssr: false });
const AnalyticsOverview = dynamic(() => import('../components/AnalyticsOverview'), { ssr: false });

const Dashboard = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 p-4">
      <Navbar />
      <AnalyticsOverview />
      <DailyReport />
      <ChartSection />
    </div>
  </div>
);

export default Dashboard;