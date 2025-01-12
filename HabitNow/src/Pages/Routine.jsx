import React, { useState } from "react";

// Sample routine data
const routineData = [
  {
    id: 1,
    time: "7:00 AM - 7:30 AM",
    activity: "Morning Routine",
    completed: false,
  },
  { id: 2, time: "7:30 AM - 8:00 AM", activity: "Breakfast", completed: false },
  {
    id: 3,
    time: "8:00 AM - 10:00 AM",
    activity: "Study: Web Development",
    completed: false,
  },
  {
    id: 4,
    time: "10:00 AM - 12:00 PM",
    activity: "Study: Data Science",
    completed: false,
  },
  {
    id: 5,
    time: "12:00 PM - 1:00 PM",
    activity: "Lunch & Power Nap",
    completed: false,
  },
  {
    id: 6,
    time: "1:00 PM - 2:30 PM",
    activity: "Study: Machine Learning",
    completed: false,
  },
  {
    id: 7,
    time: "2:30 PM - 3:00 PM",
    activity: "Commute to Classes",
    completed: false,
  },
  { id: 8, time: "3:00 PM - 5:00 PM", activity: "Classes", completed: false },
  {
    id: 9,
    time: "5:00 PM - 5:30 PM",
    activity: "Commute Home",
    completed: false,
  },
  { id: 10, time: "5:30 PM - 6:30 PM", activity: "Dinner", completed: false },
  {
    id: 11,
    time: "6:30 PM - 8:30 PM",
    activity: "Academics",
    completed: false,
  },
  {
    id: 12,
    time: "8:30 PM - 10:30 PM",
    activity: "Project Work / Practical Application",
    completed: false,
  },
  {
    id: 13,
    time: "10:30 PM - 12:00 AM",
    activity: "Free Time / Wind Down",
    completed: false,
  },
];

const Routine = () => {
  const [routine, setRoutine] = useState(routineData);

  // Toggle completion status
  const toggleCompleted = (id) => {
    const updatedRoutine = routine.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setRoutine(updatedRoutine);
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Daily Routine</h1>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-4">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-green-200">
                <th className="border p-2 text-left">Time</th>
                <th className="border p-2 text-left">Activity</th>
                <th className="border p-2 text-center">Completed</th>
              </tr>
            </thead>
            <tbody>
              {routine.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="border p-2">{task.time}</td>
                  <td className="border p-2">{task.activity}</td>
                  <td className="border p-2 text-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleCompleted(task.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Routine;
