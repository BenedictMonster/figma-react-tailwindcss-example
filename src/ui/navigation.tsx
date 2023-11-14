import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="grid grid-cols-3 gap-x-4 gap-y-2 justify-start content-center my-1 p-1 text-sm">
      <div>
        <NavLink
          to="/page1"
          className={({ isActive, isPending }) =>
            [
              isPending ? "text-teal-500" : "",
              isActive ? "text-slate-900" : "text-slate-500",
              "hover:underline hover:text-teal-500",
            ].join(" ")
          }
        >
          Page 1.
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/page2"
          className={({ isActive, isPending }) =>
            [
              isPending ? "text-teal-500" : "",
              isActive ? "text-slate-900" : "text-slate-500",
              "hover:underline hover:text-teal-500",
            ].join(" ")
          }
        >
          Page 2.
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
