import classes from "./SingleLink.module.css";
import DropDown from "./DropDown";
import { useState } from "react";
import { arr } from "../static/data";
function SingleLink({ item, index, icon }) {
  const [show, setShow] = useState(false);

  return (
    <a
      className={classes.link}
      href="#"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && <DropDown name={item} list={arr[index]} icon={icon}></DropDown>}
      {item}
    </a>
  );
}

export default SingleLink;
