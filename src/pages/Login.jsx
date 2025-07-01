import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [usn, setUsn] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (role === 'student') {
      localStorage.setItem('usn', usn);
      navigate('/student');
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {!role ? (
        <div className="p-6 bg-white rounded shadow-md space-y-4 w-80">
          <h2 className="text-xl font-bold text-center">Login</h2>
          <button
            onClick={() => {navigate('/admin')}}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Login as Admin
          </button>
          <button
            onClick={() => handleRoleSelect('student')}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Login as Student
          </button>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-6 text-center capitalize">
            {role} Login
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">USN</label>
              <input
                type="text"
                required
                value={usn}
                onChange={(e) => setUsn(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter your USN"
              />
            </div>

            {/* Optional Password Field */}
            {/* <div className="mb-4">
              <label className="block mb-1 font-semibold">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
              />
            </div> */}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
