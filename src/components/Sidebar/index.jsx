import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Sidebar = () => {
  console.log("work");

  return (
    <div className="right-0 bg-slate-800 w-1/12 absolute h-full left-0 drop-shadow-2xl ">
      <nav className="hidden md:flex flex-col ">
        <BrowserRouter>
          <Route path="/migue"></Route>
        </BrowserRouter>
        <a
          href="#"
          className="text-base font-medium m-auto text-gray-400 hover:text-gray-900">
          General
        </a>
        <a
          href="#"
          className="text-base m-auto font-medium text-gray-400 hover:text-gray-900">
          Dolores
        </a>
      </nav>
    </div>
  );
};
