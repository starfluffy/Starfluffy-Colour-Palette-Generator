import React from "react";
import { useState } from "react";

const initialData = { model: "default" };
const initialInputName = "Random";

// Create the context
const AppContext = React.createContext({
  data: initialData,
  inputName: initialInputName,
});

function AppContextProvider({ children }) {
  // Initialise the stateful values
  const [data, setData] = useState(initialData);
  const [inputName, setInputName] = useState(initialInputName);

  /**
   * @description sets the input for the api back to the default
   */
  function setDefault() {
    setData({ model: "default" });
    setInputName("Random");
  }

  // The values that will be passed down
  const context = {
    data,
    inputName,
    setData,
    setInputName,
    setDefault,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
