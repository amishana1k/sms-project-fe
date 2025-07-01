import { useState } from "react";
import StudentDetails from "./StudDetails";
import { Link } from "react-router-dom";
import StudDetails from "./StudDetails";

const AdminDashboard = () => {
  const [studView, setView] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-center text-indigo-800 bg-blue-100 text-center py-6 mb-8">
        Student Dashboard
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20 gap-6">
        <div
          onClick={() => setView(!studView)}
          className="cursor-pointer bg-green-200 hover:bg-green-300 shadow-md rounded-lg p-6 text-center transition duration-300"
        >
          <h2 className="text-xl font-semibold text-gray-800">View Info</h2>
        </div>

        <div
          className="bg-blue-200 hover:bg-blue-300 shadow-md rounded-lg p-6 text-center transition duration-300"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            View Markscard
          </h2>
        </div>

        <div className="bg-yellow-200 hover:bg-yellow-300 shadow-md rounded-lg p-6 text-center transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800">
            TimeTable
          </h2>
        </div>

        <div className="bg-red-200 hover:bg-red-300 shadow-md rounded-lg p-6 text-center transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800">
            Fees
          </h2>
        </div>
      </div>

      {studView && (
        <div className="mt-20">
          <StudDetails />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
