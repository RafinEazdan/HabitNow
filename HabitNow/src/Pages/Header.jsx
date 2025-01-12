import React from "react";
import CurrentDate from "../CurrentDate";

const Header = ({ date }) => {
  return (
    <header className="bg-blue-500 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Daily Schedule</h1>
      <p className="text-xl font-semibold"><CurrentDate/></p>
    </header>
  );
};

export default Header;
