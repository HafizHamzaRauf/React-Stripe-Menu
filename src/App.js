import Navigation from "./components/Navigation";
import classes from "./App.module.css";
import Hero from "./components/Hero";
function App() {
  return (
    <div className={classes.app}>
      <Navigation></Navigation>
      <Hero></Hero>
    </div>
  );
}

export default App;
