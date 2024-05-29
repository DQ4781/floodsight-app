import React from 'react';
import { NavLink } from 'react-router-dom';

const TopSection: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 z-50 backdrop-blur-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="/FloodSight.png" alt="Logo" className="w-8 h-8" />
          <span className="ml-2 text-xl font-bold">FloodSight</span>
        </div>
        <nav className="absolute left-1/2 transform -translate-x-1/2 bg-[#0E0E0E] text-[#878787] rounded px-4 py-2">
          <div className="flex space-x-4">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                isActive ? 'bg-[#1B1B1B] text-[#FEFEFE] px-2 py-1 rounded' : 'hover:bg-[#1B1B1B] hover:text-[#FEFEFE] px-2 py-1 rounded'
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'bg-[#1B1B1B] text-[#FEFEFE] px-2 py-1 rounded' : 'hover:bg-[#1B1B1B] hover:text-[#FEFEFE] px-2 py-1 rounded'
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/emergency-info" 
              className={({ isActive }) => 
                isActive ? 'bg-[#1B1B1B] text-[#FEFEFE] px-2 py-1 rounded' : 'hover:bg-[#1B1B1B] hover:text-[#FEFEFE] px-2 py-1 rounded'
              }
            >
              Help
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TopSection;
