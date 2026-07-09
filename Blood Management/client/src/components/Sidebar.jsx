import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#1f2a3a",
        color: "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Blood Bank</h2>

      <p><b>Dashboard</b></p>
      <Link to="/dashboard" style={link}>Dashboard</Link>

      <p style={title}>Donor</p>
      <Link to="/donors" style={link}>Donor List</Link>
      <Link to="/add-donor" style={link}>Add Donor</Link>

      <p style={title}>Patients</p>
      <Link to="/patients" style={link}>Patient List</Link>
      <Link to="/add-patient" style={link}>Add Patient</Link>
      <Link to="/request-blood" style={link}>Request Blood</Link>

      <p style={title}>Blood</p>
      <Link to="/blood-inventory" style={link}>Blood Inventory</Link>
      <Link to="/add-blood" style={link}>Add Blood</Link>
      <Link to="/blood-history" style={link}>Blood History</Link>

      <p style={title}>Admin</p>
      <Link to="/admin-dashboard" style={link}>Admin Dashboard</Link>
      <Link to="/manage-users" style={link}>Manage Users</Link>
      <Link to="/manage-requests" style={link}>Manage Requests</Link>
    </div>
  );
}

const link = {
  display: "block",
  color: "white",
  textDecoration: "none",
  margin: "8px 0",
};

const title = {
  marginTop: "20px",
  fontWeight: "bold",
};

export default Sidebar;