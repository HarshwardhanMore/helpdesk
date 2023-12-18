// src/components/Sidebar.tsx
import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
      <div className="p-4 text-xl font-bold">Sidebar</div>
      <div className="flex-1 overflow-y-auto">
        {/* Sidebar content goes here */}
        <ul>
          <li className="py-2 px-4 cursor-pointer hover:bg-gray-700">Item 1</li>
          <li className="py-2 px-4 cursor-pointer hover:bg-gray-700">Item 2</li>
          <li className="py-2 px-4 relative">
            {/* Improved Dropdown Example */}
            <div
              onClick={toggleDropdown}
              className="flex items-center cursor-pointer hover:bg-gray-700"
            >
              Dropdown
            </div>
            {isDropdownOpen && (
              <div className=" mt-2 bg-gray-700 text-white rounded-md p-2">
                <div className="py-2 px-4">Dropdown Item 1</div>
                <div className="py-2 px-4">Dropdown Item 2</div>
              </div>
            )}
            
          <li className="py-2 px-4 cursor-pointer hover:bg-gray-700">Item 2</li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
