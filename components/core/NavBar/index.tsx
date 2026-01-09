import Link from "next/link";
import React from "react";
import { navBarData } from "./data";

export const Navbar = () => {
  return (
    <nav className="flex items-center space-x-14">
      {navBarData.map((item) => {
        if (!item.isVisible) return null;

        return (
          <Link
            key={item.id}
            href={item.link}
            className="text-sm text-black hover:text-primary"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
