import classes from "./Button.module.css";
function Button({ children, onClick, customClasses }) {
  return (
    <button className={`${classes.btn} ${customClasses}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
