import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import classes from "../../styles/Login.module.css";
import Button from "../partials/Button";
import Form from "../partials/Form";
import TextInput from "../partials/TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  async function handelSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setIsLoading(false);
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError("Failed to login!");
      setIsLoading(false);
    }
  }
  return (
    <Form className={classes.login} onSubmit={handelSubmit}>
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button disable={isLoading} type="submit">
        <span>Submit now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
