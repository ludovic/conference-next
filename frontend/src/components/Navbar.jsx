import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="border-b border-[#30363d] bg-[#0d1117] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 px-6 sm:px-10 lg:px-16 ">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center gap-10">
          <Link 
            to="/" 
            className="text-[#c9d1d9] text-2xl font-semibold tracking-tight hover:text-[#58a6ff] transition-colors"
          >
            Conference Next
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`px-4 text-sm font-medium transition-all rounded-md ${
                isActive('/') 
                  ? 'text-[#c9d1d9] bg-[#161b22]' 
                  : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/submit" 
              className={`px-4 text-sm font-medium transition-all rounded-md ${
                isActive('/submit') 
                  ? 'text-[#c9d1d9] bg-[#161b22]' 
                  : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'
              }`}
            >
              Submit Talk
            </Link>
            
            <Link 
              to="/talks" 
              className={`px-4 text-sm font-medium transition-all rounded-md ${
                isActive('/talks') 
                  ? 'text-[#c9d1d9] bg-[#161b22]' 
                  : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'
              }`}
            >
              Talks
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
