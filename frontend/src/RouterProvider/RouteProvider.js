import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../components/UserPages/Signup/Signup.js";
import Login from "../components/UserPages/Login/Login.js";
function RouteProvider() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*"   element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default RouteProvider;
