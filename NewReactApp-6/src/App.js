import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header text="Kewaunee Brewing Company" />
      </div>
      <Routes>
        
      </Routes>
      
    </Router>
  );
}

export default App;
