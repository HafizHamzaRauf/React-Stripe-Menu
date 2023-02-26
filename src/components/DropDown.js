import classes from "./DropDown.module.css";
function DropDown({ name, list, icon }) {
  const dropDownContent = list.map((item) => (
    <div className={classes["dropdown-container"]}>
      {icon}
      {item}
    </div>
  ));
  return (
    <div className={`${classes.dropdown} ${classes["left-slider"]}`}>
      <h2 className={classes["dropdown-heading"]}>{name}</h2>
      <div className={classes["dropdown-descriptions"]}> {dropDownContent}</div>
    </div>
  );
}
export default DropDown;
