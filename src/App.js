import logo from "./logo.svg";
import { ToastContainer } from "react-toastify";
import "./App.css";
import NavbarBox from "./Navbar";
function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <NavbarBox />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
