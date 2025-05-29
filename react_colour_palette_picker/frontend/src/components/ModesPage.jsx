import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import { Link } from "react-router-dom";
import chooseImage from "../assets/choose-colours.png";
import randomColoursImage from "../assets/random-colours.png";

export default function ModesPage() {
  const { setDefault } = useContext(AppContext);

  return (
    // centres the contents and displays them as flex items
    <div className="centre flex">
      {/* button that links to page where user can select a style */}
      <Link to="/colour-palette-generator/choose-style">
        <button
          className="choose-button"
          onClick={() => setDefault()}
          style={{ backgroundImage: `url(${chooseImage})` }}
        >
          Let me choose a style for my colour palette!
        </button>
      </Link>

      {/* button that links to the colour palette generated page with a random palete generated */}
      <Link to="/colour-palette-generator/generate">
        <button
          className="choose-button"
          onClick={() => setDefault()}
          style={{ backgroundImage: `url(${randomColoursImage})` }}
        >
          Just give me a random colour palette!
        </button>
      </Link>
    </div>
  );
}
