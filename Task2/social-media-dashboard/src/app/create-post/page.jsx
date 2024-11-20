// components/MainSection.js
'use client'
import { useState, useEffect } from "react";

const Notification = ({ message }) => (
    <div className="p-4 bg-green-600 text-white rounded shadow-md">
      {message}
    </div>
  );

const CreatePost = () => {

    const [posts, setPosts] = useState([]);
  const [notification, setNotification] = useState("");

  const addNewPost = () => {
    setPosts([...posts, "New notification received"]);
    setNotification("New post added to the feed!");
    setTimeout(() => setNotification(""), 3000); // Hide after 3 seconds
  };


  return (
    <div className="p-6">
      {/* Create New Post Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
        <form>
          <textarea
            placeholder="What's on your mind?"
            className="w-full p-4 border border-gray-300 rounded-lg mb-4"
            rows="4"
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Post
            </button>
          </div>
        </form>
      </section>

      {/* Recent Posts Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        <div className="space-y-4">
          {/* Example Post 1 */}
          <div className="border-b pb-4">
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span className="text-sm text-gray-500">2 hours ago</span>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:underline">Like</button>
                <button className="text-blue-600 hover:underline">Comment</button>
              </div>
              <button className="text-blue-600 hover:underline">Share</button>
            </div>
          </div>

          {/* Example Post 2 */}
          <div className="border-b pb-4">
            <p className="text-gray-700">Proin dapibus dolor ut leo malesuada, ac sollicitudin enim facilisis.</p>
            <span className="text-sm text-gray-500">5 hours ago</span>
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:underline">Like</button>
                <button className="text-blue-600 hover:underline">Comment</button>
              </div>
              <button className="text-blue-600 hover:underline">Share</button>
            </div>
          </div>
        </div>
      </section>





      <div className="space-y-6">
      {notification && <Notification message={notification} />}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="border-b pb-4">
              <p className="text-gray-700">{post}</p>
              <span className="text-sm text-gray-500">Just now</span>
            </div>
          ))}
        </div>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={addNewPost}
        >
          Add New Post
        </button>
      </section>
    </div>
    </div>
  );
};

export default CreatePost;
