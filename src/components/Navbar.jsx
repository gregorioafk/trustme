import React from "react";

export const Navbar = () => (
  <div className="relative bg-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center py-3 md:justify-start md:space-x-8">
        <div className="md:hidden "></div>
        <nav className="hidden md:flex  space-x-10">
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900">
            Dashboard
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900">
            Canales
          </a>
        </nav>
      </div>
    </div>
  </div>
);
