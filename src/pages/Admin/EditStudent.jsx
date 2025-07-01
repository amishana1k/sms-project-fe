import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state;

  const [formData, setFormData] = useState({ ...student });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      usn: formData.usn,
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      aadhaar_no: formData.aadhaar_no,
      course: formData.course,
      semester: formData.sem,
      admissionDate: formData.admission_date,
      contact: formData.contact,
      address: formData.address,
      fatherName: formData.fathers_name,
      motherName: formData.mothers_name,
      dob: formData.dob,
      gender: formData.gender,
      bloodGroup: formData.blood_grp,
      emergency_contact: formData.emergency_contact,
    };

    try {
      const res = await fetch(
        "https://eb32og6t25.execute-api.ap-south-1.amazonaws.com/dev/student-mangmt-sys",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        alert("Student updated successfully!");
        navigate("/student-details");
      } else {
        const error = await res.json();
        console.error("Update error:", error);
        alert("Update failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Edit Student</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="usn" value={formData.usn} />
        <input type="hidden" name="email" value={formData.email} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">First Name</label>
            <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Last Name</label>
            <input type="text" name="last_name" value={formData.last_name } onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Aadhaar Number</label>
            <input type="text" name="aadhaar_no" value={formData.aadhaar_no} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Course</label>
            <select name="course" value={formData.course } onChange={handleChange} className="w-full border px-3 py-2 rounded">
              <option value="">Select Course</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="BCA">BCA</option>
              <option value="BE">BE</option>
              <option value="BTech">BTech</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Semester</label>
            <select name="sem" value={formData.sem} onChange={handleChange} className="w-full border px-3 py-2 rounded">
              <option value="">Select Semester</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>{sem}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Admission Date</label>
            <input type="date" name="admission_date" value={formData.admission_date} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Date of Birth</label>
            <input type="date" name="dob" value={formData.dob } onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Contact</label>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Address</label>
            <input type="text" name="address" value={formData.address } onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Father's Name</label>
            <input type="text" name="fathers_name" value={formData.fathers_name } onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Mother's Name</label>
            <input type="text" name="mothers_name" value={formData.mothers_name } onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1">Gender</label>
            <select name="gender" value={formData.gender } onChange={handleChange} className="w-full border px-3 py-2 rounded">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Blood Group</label>
            <input type="text" name="blood_grp" value={formData.blood_grp } onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Emergency Contact</label>
            <input type="text" name="emergency_contact" value={formData.emergency_contact} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div className="pt-6 text-center">
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Update Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
