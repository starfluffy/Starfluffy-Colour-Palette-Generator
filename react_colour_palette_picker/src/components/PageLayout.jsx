import { Link, Outlet } from "react-router-dom";
import logo from "../assets/starfluffy_logo.png";

export default function PageLayout() {
  return (
    <>
      {/* links to the page where users choose random or custom colour palette */}
      <Link to="/colour-palette-generator">
        <div className="header">
          <img src={logo} className="icon-logo" />
          <p className="site-name">Starfluffy Colour Palette Generator</p>
        </div>
      </Link>
      <Outlet />
    </>
  );
}
