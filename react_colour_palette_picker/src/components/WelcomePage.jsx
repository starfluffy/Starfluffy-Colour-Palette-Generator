import { Link } from "react-router-dom";
import logo from "../assets/starfluffy_logo.png";

export default function WelcomePage() {
  return (
    <div className="centre">
      {/* logo */}
      <img
        alt="Starfluffy logo"
        className="logo"
        src={logo}
        width="125"
        height="125"
      />

      {/* welcome message */}
      <h1>Welcome to the Starfluffy Colour Palette Generator</h1>

      {/* links to the page to where use can use random or custom colour */}
      {/* <Link to="/colour-palette-generator"> */}
        <button className="button-style-1">Let's start!</button>
      {/*</Link> */}
    </div>
  );
}
