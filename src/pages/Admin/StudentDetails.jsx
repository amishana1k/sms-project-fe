import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(
        "https://eb32og6t25.execute-api.ap-south-1.amazonaws.com/dev/student-mangmt-sys"
      );
      const data = await response.json();
      console.log("Fetched data:", data);
      setStudents(data.students || []);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (usn, email) => {
    try {
      const res = await fetch(
        `https://eb32og6t25.execute-api.ap-south-1.amazonaws.com/dev/student-mangmt-sys?usn=${usn}&email=${email}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log("Deleted:", data);
        setStudents((prev) =>
          prev.filter((s) => !(s.usn === usn && s.email === email))
        );
      } else {
        const error = await res.text();
        console.error("Delete error:", error);
        alert("Failed to delete student.");
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert("An error occurred during deletion.");
    }
  };

  const handleEdit = (student) => {
    navigate(`/edit-student/${student.usn}`, { state: student }); 
  };


  return (
    <div className="p-4 bg-white shadow rounded">
      <h4 className="text-3xl font-bold text-center text-indigo-700 mb-8">Students Lists</h4>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Course</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td className="border p-2">
                {`${s.first_name || ""} ${s.last_name || ""}`}
              </td>
              <td className="border p-2">{s.email}</td>
              <td className="border p-2">{s.course}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEdit(s)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(s.usn, s.email)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;
