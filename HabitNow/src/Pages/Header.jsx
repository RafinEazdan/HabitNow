import React from "react";

const Header = ({ date }) => {
  return (
    <header className="bg-blue-500 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">My Daily Tasks</h1>
      <p className="text-sm">Date: {date}</p>
    </header>
  );
};

export default Header;
