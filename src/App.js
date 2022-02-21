import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavbarBox from "./components/Navbar";
import MainPage from "./components/MainPage";
import LoginPage from "./components/login";
import "./App.css";

import { useEffect } from "react";
function App() {
  useEffect(() => {
    console.log("%cApp useEffect", "background:green");
  }, []);
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <NavbarBox />
      <Routes>
        <Route path="/" exec element={<MainPage />} />
        <Route path="/login" exec element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
