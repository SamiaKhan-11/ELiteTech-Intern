import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion"; // For animations (if needed)

// Sample images for next and icons
import next from "../../public/next.svg"; 

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={next} alt="next" width={40} height={40} />
            <h1 className="ml-2 text-2xl font-semibold">Social Media Dashboard</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Profile</a></li>
              <li><a href="#" className="hover:underline">Settings</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-4 shadow-md">
          <h2 className="text-xl font-medium mb-4">Menu</h2>
          <ul className="space-y-4">
            <li><a href="#" className="text-blue-600 hover:underline">Feed</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Messages</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Notifications</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Friends</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Settings</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Feed Section */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {/* Post 1 */}
              <div className="border-b pb-4">
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci ut metus lacinia varius.</p>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>

              {/* Post 2 */}
              <div className="border-b pb-4">
                <p className="text-gray-700">Proin dapibus dolor ut leo malesuada, ac sollicitudin enim facilisis. Vivamus vitae laoreet nisl.</p>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </div>

              {/* Post 3 */}
              <div>
                <p className="text-gray-700">Nullam sit amet metus nulla. Morbi non urna eu elit dapibus mollis.</p>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
