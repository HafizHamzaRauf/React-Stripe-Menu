import { FaBook, FaBuilding, FaLink } from "react-icons/fa";

export const navLinks = ["Products", "Developers", "Company"];
const productLinks = ["Payment", "Terminal", "Connect"];
const DevelopersLinks = ["Plugins", "Libraries", "Help", "Billing"];

const CompanyLinks = ["About", "customers"];
export const arr = [productLinks, DevelopersLinks, CompanyLinks];
export const icons = [
  <FaBook size={"16"} fill="black"></FaBook>,
  <FaLink size={"16"} fill="black"></FaLink>,
  <FaBuilding size={"16"} fill="black"></FaBuilding>,
];
