import React, { useState } from "react";

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    usn: "",
    firstName: "",
    lastName: "",
    course: "",
    semester: "",
    admissionDate: "",
    contact: "",
    address: "",
    email: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    aadhaar: "",
    emergency_contact: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://eb32og6t25.execute-api.ap-south-1.amazonaws.com/dev/student-mangmt-sys",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to register student");

      const result = await response.json();
      alert("Student registered successfully!");
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg px-10 py-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Student USN</label>
              <input type="text" name="usn" value={formData.usn} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Course</label>
              <select name="course" value={formData.course} onChange={handleChange} required className="w-full border rounded px-3 py-2">
                <option value="">Select Course</option>
                <option value="MBA">MBA</option>
                <option value="MCA">MCA</option>
                <option value="BCA">BCA</option>
                <option value="BE">BE</option>
                <option value="BTech">BTech</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Semester</label>
              <select name="semester" value={formData.semester} onChange={handleChange} required className="w-full border rounded px-3 py-2">
                <option value="">Select Semester</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <option key={sem} value={sem}>{sem}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Admission Date</label>
              <input type="date" name="admissionDate" value={formData.admissionDate} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Contact</label>
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Father's Name</label>
              <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mother's Name</label>
              <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full border rounded px-3 py-2">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Blood Group</label>
              <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Aadhaar Number</label>
              <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Emergency Contact</label>
            <input type="text" name="emergency_contact" value={formData.emergency_contact} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
