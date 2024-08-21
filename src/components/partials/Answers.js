import classes from "../../styles/Answer.module.css";
import Checkbox from "../partials/Checkbox";

export default function Answers() {
  return (
    <>
      <div class={classes.answers}>
        <Checkbox className={classes.answer} text="A New Hope 1" />
      </div>
    </>
  );
}
