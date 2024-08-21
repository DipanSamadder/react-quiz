import classes from "../../styles/Signup.module.css";
import Button from "../partials/Button";
import Checkbox from "../partials/Checkbox";
import Form from "../partials/Form";
import Illustration from "../partials/Illustration";
import TextInput from "../partials/TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className="Signup" method="post">
          <TextInput type="text" placeholder="Enter name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>Submit now</Button>
          <div className={classes.info}>
            Already have an account? <a href="#">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
