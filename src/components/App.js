import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Quiz from "../components/pages/Quiz";
import Result from "../components/pages/Result";
import Signup from "../components/pages/Signup";
import "../styles/App.css";
import Layout from "./layouts/Layout";

import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/result" element={<Result />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
