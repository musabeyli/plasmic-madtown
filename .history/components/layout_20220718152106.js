import Nav from "./nav";
import MadisonopolyHeaderFinal from "../components/MadisonopolyHeaderFinal"; // plasmic-import: zLYGck-fye5/component

const Layout = ({ children, categories, seo }) => (
  <>
    <MadisonopolyHeaderFinal
      data-plasmic-name={"madisonopolyHeaderFinal"}
      className={classNames("__wab_instance", sty.madisonopolyHeaderFinal)}
    />{" "}
    {children}
  </>
);

export default Layout;
