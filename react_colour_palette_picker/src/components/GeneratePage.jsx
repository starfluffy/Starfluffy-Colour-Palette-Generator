import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContextProvider";
import loadingGif from "../assets/loading.gif";

export default function GeneratePage() {
  const url = "http://colormind.io/api/";
  const { data, inputName, setData, setInputName, setDefault } =
    useContext(AppContext);
  const [isGenerated, setIsGenerated] = useState(false);
  const [palette, setPalette] = useState([]);
  const http = new XMLHttpRequest();

  // makes a http request to the api to get the palette
  function generatePalette() {
    setIsGenerated(false);
    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        setPalette(JSON.parse(http.responseText).result);
        setIsGenerated(true);
      }
    };
    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  }

  // copies the rgb text to the clipboard and alerts the user
  function copyText(colour1, colour2, colour3) {
    const rgbString =
      colour1.toString() +
      ", " +
      colour2.toString() +
      ", " +
      colour3.toString();
    navigator.clipboard.writeText(rgbString);
    alert("Copied the text: " + rgbString);
  }

  //   sets the input for the api back to the default
  function generateRandomPalette() {
    setDefault();
    generatePalette();
  }

  useEffect(() => {
    generatePalette();
  }, []);

  return (
    <>
      {/* display the palette if the api call is finished */}
      {isGenerated ? (
        <div className="centre">
          <h1>{inputName} Colour Palette</h1>

          {/* palette has a button for each colour and are all displayed as a flex item */}
          <div className="flex" style={{ marginTop: 15 }}>
            {palette.map((colour) => (
              <button
                key={colour}
                className="palette-colour"
                onClick={() => copyText(colour[0], colour[1], colour[2])}
                style={{
                  backgroundImage: `linear-gradient(rgb(${colour[0]}, ${colour[1]}, ${colour[2]}) 0%, rgb(${colour[0]}, ${colour[1]}, ${colour[2]}) 70%, white 70%)`,
                }}
              >
                {colour[0]}, {colour[1]}, {colour[2]}
              </button>
            ))}
          </div>

          {/* <!-- buttons underneath the palette displayed as a flex item --> */}
          <div className="flex" style={{ marginTop: 18 }}>
            {/* <!-- generates another palette based on the same data input --> */}
            <button
              className="button-style-1"
              onClick={() => generatePalette()}
            >
              Regenerate
            </button>

            {/* <!-- goes to the page where the user selects a style --> */}
            <Link to="/colour-palette-generator/choose-style">
              <button className="button-style-1">Choose a style</button>
            </Link>

            {/* <!-- button to generate a random colour palette that only shows if the current palette isn't random--> */}
            {inputName != "Random" && (
              <button
                className="button-style-1"
                onClick={() => generateRandomPalette()}
              >
                Generate random
              </button>
            )}
          </div>
        </div>
      ) : (
        // loading gif that shows while the api call is being made
        <img className="centre" src={loadingGif} alt="Loading..." />
      )}
    </>
  );
}
