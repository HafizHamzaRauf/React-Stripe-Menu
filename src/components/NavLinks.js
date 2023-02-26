import { navLinks } from "../static/data";
import SingleLink from "./SingleLink";
import { icons } from "../static/data";
function NavLinks() {
  const navLinkContent = navLinks.map((item, index) => (
    <SingleLink item={item} index={index} icon={icons[index]}></SingleLink>
  ));
  return <>{navLinkContent}</>;
}

export default NavLinks;
