import React, { useEffect, useState } from 'react';
import SidebarButton from './sidebarButton';
import { MdFavorite } from 'react-icons/md';
import { FaGripfire, FaPlay } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import apiClient from '../../spotify';

const Sidebar = () => {

    const [image, setImage] = useState("https://i.pinimg.com/736x/d7/77/84/d77784d81ef5a601071fd803d8938307.jpg")
    useEffect(() => { 
     apiClient.get("me").then(response => {console.log(response);
        setImage(response.data.images[0].url);
     })
    }, [])
    
    return (
        <div className="h-[100%] p-5 flex flex-col items-center justify-between">
            <img 
            src={image}
            alt='profile' 
            className='w-24 h-24 rounded-full'/>
            {/* <div className="p-4">
                <h1 className="text-2xl font-bold">Music Player</h1>
            </div>
            <ul className="mt-6">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Playlists</li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Artists</li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Albums</li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
            </ul> */}
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
                <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>} />
                <SidebarButton title="Player" to="/player" icon={<FaPlay/>} />
                <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite/>} />
                <SidebarButton title="Library" to="/" icon={<IoLibrary/>} />
            </div>
            <SidebarButton title="Sign Out" to=""  icon={<FaSignOutAlt/>}/>
            
        </div>
    );
};

export default Sidebar;