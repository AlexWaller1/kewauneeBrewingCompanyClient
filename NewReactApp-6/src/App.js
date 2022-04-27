import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import RouterLinks from "./components/RouterLinks";

function App() {
  return (
    <div className="App">
      <RouterLinks />
      <Header text="Kewaunee Brewing Company" />
    </div>
  );
}

export default App;
