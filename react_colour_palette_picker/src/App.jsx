import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import PageLayout from "./components/PageLayout";
import ModesPage from "./components/ModesPage";
import StylesPage from "./components/StylesPage";
import GeneratePage from "./components/GeneratePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={ < WelcomePage /> } />
      <Route path="colour-palette-generator" element={ < PageLayout /> } >
        <Route index element={ < Navigate to="modes" /> } />
        <Route path="modes" element={ < ModesPage /> } />
        <Route path="generate" element={ < GeneratePage /> } />
        <Route path="choose-style" element={ < StylesPage /> } />
      </Route>
    </Routes>
  )
}
