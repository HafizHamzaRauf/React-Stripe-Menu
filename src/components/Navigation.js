import Button from "./UI/Button";
import Logo from "../images/logo.svg";
import classes from "./Navigation.module.css";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";
function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const closeHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <Modal close={closeHandler}></Modal>}
      <nav className={classes.navigation}>
        <img className={classes.img} alt={"Stripe"} src={Logo} />
        <div className={`${classes["link-container"]} ${classes.show}`}>
          {<NavLinks></NavLinks>}
        </div>
        <Button customClasses={`${classes.show}`}>Sign in</Button>
        <Button
          customClasses={classes.hide}
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FaBars fill={"white"} size={"16"}></FaBars>
        </Button>
      </nav>
    </>
  );
}

export default Navigation;
