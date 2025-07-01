import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import StudentDashboard from './pages/Students/Dashboard';
import StudDetails from './pages/Students/StudDetails';
import StudentRegister from './pages/Admin/StudentRegister';
import EditStudent from './pages/Admin/EditStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path='/student-details' element={<StudDetails />} />
        <Route path='/add-student' element={<StudentRegister/>} />
        <Route path="/edit-student/:usn" element={<EditStudent />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
