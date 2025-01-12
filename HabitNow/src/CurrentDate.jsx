import React from "react";

const CurrentDate = () => {
  // Get the current date
  const today = new Date();

  // Format the date (e.g., January 12, 2025)
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[today.getDay()];

  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <p>Date: {dayOfWeek}, {formattedDate}</p>
    </div>
  );
};

export default CurrentDate;
