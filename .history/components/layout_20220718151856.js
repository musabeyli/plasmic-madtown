import Nav from "./nav";

const Layout = ({ children, categories, seo }) => (
  <>
    <MadisonopolyHeaderFinal
      data-plasmic-name={"madisonopolyHeaderFinal"}
      data-plasmic-override={overrides.madisonopolyHeaderFinal}
      className={classNames("__wab_instance", sty.madisonopolyHeaderFinal)}
    />{" "}
    {children}
  </>
);

export default Layout;
