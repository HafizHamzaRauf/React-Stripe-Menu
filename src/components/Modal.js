import classes from "./Modal.module.css";
import { arr, navLinks } from "../static/data";
import { icons } from "../static/data";
import { FaTimes } from "react-icons/fa";
function Modal({ close, showModal }) {
  const modalContent = navLinks.map((val, index) => {
    return (
      <div className={classes.container}>
        <h1>{val}</h1>
        <div className={classes["icons-container"]}>
          {arr[index].map((item, ind) => (
            <div className={classes.contain}>
              {icons[index]}
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  });
  return (
    <div className={`${classes.backdrop}`}>
      <div className={`${classes.modal}`}>
        <FaTimes
          onClick={close}
          className={classes.cross}
          size={"20"}
        ></FaTimes>
        <div className={classes["modal-content"]}>{modalContent}</div>
      </div>
    </div>
  );
}
export default Modal;
