import classes from "../../styles/Form.module.css";

export default function Form({ className, children, ...rest }) {
  return (
    <>
      <form class={`${className} ${classes.form}`} {...rest}>
        {children}
      </form>
    </>
  );
}
