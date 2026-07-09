import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// Main Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";

// Donor Pages
import DonorList from "./pages/Donor/DonorList";
import AddDonor from "./pages/Donor/AddDonor";
import DonorProfile from "./pages/Donor/DonorProfile";

// Patient Pages
import PatientList from "./pages/Patient/PatientList";
import AddPatient from "./pages/Patient/AddPatient";
import RequestBlood from "./pages/Patient/RequestBlood";

// Blood Pages
import BloodInventory from "./pages/Blood/BloodInventory";
import AddBlood from "./pages/Blood/AddBlood";
import BloodHistory from "./pages/Blood/BloodHistory";

// Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageUsers from "./pages/Admin/ManageUsers";
import ManageRequests from "./pages/Admin/ManageRequests";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div style={{ flex: 1 }}>

          {/* Header */}
          <Header />

          <div style={{ padding: "20px" }}>
            <Routes>

              {/* Auth Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Donor */}
              <Route path="/donors" element={<DonorList />} />
              <Route path="/add-donor" element={<AddDonor />} />
              <Route path="/donor-profile" element={<DonorProfile />} />

              {/* Patient */}
              <Route path="/patients" element={<PatientList />} />
              <Route path="/add-patient" element={<AddPatient />} />
              <Route path="/request-blood" element={<RequestBlood />} />

              {/* Blood */}
              <Route path="/blood-inventory" element={<BloodInventory />} />
              <Route path="/add-blood" element={<AddBlood />} />
              <Route path="/blood-history" element={<BloodHistory />} />

              {/* Admin */}
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/manage-users" element={<ManageUsers />} />
              <Route path="/manage-requests" element={<ManageRequests />} />

            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;