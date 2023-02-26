import Button from "./UI/Button";
import phone from "../images/phone.svg";
import classes from "./Hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={`${classes.info} ${classes["left-slider"]}`}>
        <h1 className={classes["hero-heading"]}>
          Payments infrastructure for the internet
        </h1>
        <p className={classes["hero-description"]}>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <Button>Start Now</Button>
      </div>
      <div className={`${classes.img} ${classes.slider}`}>
        <img alt={"mobile-image"} src={phone} />
      </div>
    </section>
  );
}

export default Hero;
