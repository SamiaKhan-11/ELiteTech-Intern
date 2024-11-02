import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./library";
import Favourites from "./favourites";
import Player from "./player";
import Trending from "./trending";
import Feed from "./feed";
import Sidebar from "../components/sidebar/sidebar";
import Login from "./auth/login";
import { setClientToken } from "../spotify";

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <div className="bg-black">
      <Router>
        <div className="bg-orange-300 h-[100vh] w-[100vw] rounded-3xl flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Home;
