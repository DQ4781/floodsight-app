import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-gray-800'>
            <a href="/" className="flex items-center">
                <img src="/logo192.png" alt="Logo" className="w-8 h-8" />
                <span className="ml-2 text-xl font-bold">FloodSight</span>
            </a>
            <nav className="flex space-x-4">
                <a href="/" className="hover:text-gray-400">Home</a>
                <a href="/about" className="hover:text-gray-400">About</a>
                <a href="/emergency-info" className="hover:text-gray-400">Emergency Information</a>
            </nav>
        </div>
    );
};

export default Navbar;