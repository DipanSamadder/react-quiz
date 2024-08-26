import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Quiz from "../components/pages/Quiz";
import Result from "../components/pages/Result";
import Signup from "../components/pages/Signup";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import PrivateRoute from "./inc/PrivateRoute";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/result" element={<PrivateRoute element={Result} />} />
            <Route path="/quiz" element={<PrivateRoute element={Quiz} />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
