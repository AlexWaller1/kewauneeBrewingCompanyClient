import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import RouterLinks from "./components/RouterLinks";

function App() {
  return (
    <Router>
      <div className="App">
      <Header text="Kewaunee Brewing Company" />
      </div>
      <NavLinks />

      <RouterLinks />
      
    </Router>
  );
}

export default App;
